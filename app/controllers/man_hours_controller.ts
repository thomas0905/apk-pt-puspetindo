import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import Proyek from '#models/proyek';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia, auth, request }: HttpContext) {
        const user = auth.user
        if (!user) {
            return inertia.render('admin/error/404')
        }

        if (request.input('start_date') != null) {
            man_hours = await ManHour.query()
                .whereBetween('tanggal',
                    [request.input('start_date'),
                    request.input('end_date')])
                .preload('karyawan', (Karyawan) => {
                    Karyawan.preload('departemen');
                })
                .preload('proyek').where('kodeJobOrder', request.input('proyek') || '')
                .if(request.input('departemen') !== null, (query) => {
                    query.whereHas('karyawan', (karyawanQuery) => {
                        karyawanQuery.where('departemen_id', request.input('departemen') || '');
                    });
                })
                .groupBy('karyawan_id')


            const all_man_hours = await ManHour.query()
                .whereBetween('tanggal', [request.input('start_date'), request.input('end_date')])
                .preload('karyawan', (Karyawan) => {
                    Karyawan.preload('departemen');
                })
                .preload('proyek')
                .where('kodeJobOrder', request.input('proyek') || '')
            let reports = [];

            man_hours.forEach(karyawan => {
                let laporan = all_man_hours.filter(item => item.karyawan_id === karyawan.karyawan_id).map(item => {
                    return {
                        proyek: item.proyek.namaProyek,
                        tanggal: item.tanggal,
                        departemen: item.karyawan.departemen.namaDepartemen,
                        kodeJobOrder: item.proyek.kodeJobOrder,
                        jam_kerja: item.jam_kerja,
                        jam_lembur: item.jam_lembur,
                        karyawan: item.karyawan,
                        total_persentase: (item.jam_kerja / 173) * 100
                    };
                });

                let total_jam = laporan.reduce((acc, item) => {
                    return acc + item.jam_kerja
                }, 0);


                reports.push({
                    id: karyawan.id,
                    nama_karyawan: karyawan.karyawan.nama,
                    departemen: karyawan.karyawan.departemen.namaDepartemen,
                    tanggal: karyawan.tanggal,
                    data_laporan: laporan,
                    total_jam: total_jam,
                    total_persentase: (total_jam / 173) * 100
                });
            });

            man_hours = reports;


        }



        const karyawan = await Karyawan.query().preload('departemen').preload('user').where('user_id', user.id).first();
        if (!karyawan) {
            return inertia.render('admin/users/manhours/index', {
                data_karyawan: null,
                message: 'Karyawan tidak ditemukan',
            });
        }
        
        // Jika jabatan karyawan bukan 'IT Software', tampilkan data yang sesuai dengan login
        if (karyawan.jabatan !== 'IT Software') {
            const manHours = await ManHour.query()
                .preload('karyawan')
                .preload('proyek')
                .where('karyawan_id', karyawan.id);
        
            return inertia.render('admin/users/manhours/index', {
                data_karyawan: karyawan,
                data_manHours: manHours,
            });
        } else {
            const allManHours = await ManHour.query().preload('karyawan').preload('proyek');
        
            return inertia.render('admin/users/manhours/index', {
                data_karyawan: karyawan,
                data_manHours: allManHours,
            });
        }
        
    }


    async menuProfil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuProfil')
    }
    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.query()
        const proyek = await Proyek.query()
        return inertia.render('admin/users/manhours/create', {
            data_karyawan: karyawan,
            data_proyek: proyek
        })
    }
    async store({ request, response, session }: HttpContext) {
        const manhours = new ManHour()
        manhours.karyawan_id = request.input('karyawan_id')
        manhours.proyek_id = request.input('proyek_id')
        manhours.tanggal = request.input('tanggal')
        manhours.jam_kerja = request.input('jam_kerja')
        manhours.jam_lembur = request.input('jam_lembur')
        manhours.verifikasi = request.input('verifikasi')

        await manhours.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/manhours')
    }
    async delete({ params, response }: HttpContext) {
        const manhours = await ManHour.findOrFail(params.id)
        await manhours.delete()
        return response.redirect('/manhours')
    }

}