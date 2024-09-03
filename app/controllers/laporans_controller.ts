import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import type { HttpContext } from '@adonisjs/core/http'

export default class LaporansController {
    async laporan({ inertia, auth, request, response }: HttpContext) {
        const user = auth.user;

        if (!user) {
            return response.redirect('/login');
        }


        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }

        let man_hours = [];

        if (request.input('start_date') != null) {           
            man_hours = await ManHour.query().whereBetween('tanggal', [request.input('start_date'), request.input('end_date')]).preload('karyawan').preload('proyek').groupBy('karyawan_id')
            const all_man_hours = await ManHour.query()
                .whereBetween('tanggal', [request.input('start_date'), request.input('end_date')])
                .preload('karyawan', (Karyawan) => {
                    Karyawan.preload('departemen');
                })
                .preload('proyek')



            let reports = [];


            man_hours.forEach(karyawan => {
                let laporan = all_man_hours.filter(item => item.karyawan_id === karyawan.karyawan.id).map(item => {
                    return {
                        proyek: item.proyek.namaProyek,
                        tanggal: item.tanggal,
                        kodeJobOrder: item.proyek.kodeJobOrder,
                        jam_kerja: item.jam_kerja,
                        karyawan: item.karyawan,
                        total_persentase: item.jam_kerja * 173 / 100
                    };
                });

                let total_jam = laporan.reduce((acc, item) => {
                    return acc + item.jam_kerja
                }, 0);


                reports.push({
                    id: karyawan.id,
                    nama_karyawan: karyawan.karyawan.nama,
                    tanggal: karyawan.tanggal,
                    departemen: karyawan.karyawan.departemen?.namaDepartemen,
                    data_laporan: laporan,
                    total_jam: total_jam,
                    total_persentase: (total_jam * 173) / 100
                });
            });

            man_hours = reports;

        } else {

            man_hours = await ManHour.query()
                .preload('karyawan', (Karyawan) => {
                    Karyawan.preload('departemen');
                })
                .preload('proyek')
                .where('karyawan_id', karyawan.id)
                .groupBy('karyawan_id');

            const all_man_hours = await ManHour.query()
                .preload('karyawan', (Karyawan) => {
                    Karyawan.preload('departemen');
                })
                .preload('proyek');

            let reports = [];

            man_hours.forEach(karyawan => {
                let laporan = all_man_hours.filter(item => item.karyawan_id === karyawan.karyawan_id).map(item => {
                    return {
                        proyek: item.proyek.namaProyek,
                        tanggal: item.tanggal,
                        kodeJobOrder: item.proyek.kodeJobOrder,
                        jam_kerja: item.jam_kerja,
                        karyawan: item.karyawan,
                        total_persentase: item.jam_kerja * 173 / 100
                    };
                });

                let total_jam = laporan.reduce((acc, item) => {
                    return acc + item.jam_kerja;
                }, 0);


                reports.push({
                    id: karyawan.id,
                    nama_karyawan: karyawan.karyawan.nama,
                    departemen: karyawan.karyawan.departemen.namaDepartemen,
                    data_laporan: laporan,
                    total_jam: total_jam,
                    total_persentase: (total_jam * 173) / 100
                });
            });

            man_hours = reports

        }


        return inertia.render('admin/management/laporan', {
            data_manhours: man_hours,
        });
    }
}
