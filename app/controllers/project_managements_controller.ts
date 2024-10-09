import Karyawan from '#models/karyawan'
import ManHour from '#models/man_hour';
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectManagementsController {

    async index({ inertia, auth, request, response }: HttpContext) {
        const user = auth.user;
        if (!user) {
            return response.redirect('/login');
        }
        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }

        // let man_hours = [];
        // if (request.input('start_date') != null ) {
        //     man_hours = await ManHour.query()
        //         .whereBetween('tanggal',
        //             [request.input('start_date'),
        //             request.input('end_date')])
        //         .preload('proyek', (Karyawan) => {
        //             Karyawan.preload('manHour');
        //         })
        //         .preload('proyek')
        //         .if(request.input('proyek') !== null, (query) => {
        //             query.whereHas('karyawan', (karyawanQuery) => {
        //                 karyawanQuery.where('kode_job_order', request.input('proyek') || '');
        //             });
        //         })
        //         .groupBy('kode_job_order')


        //     const all_man_hours = await ManHour.query()
        //         .whereBetween('tanggal', [request.input('start_date'), request.input('end_date')])
        //         .preload('karyawan', (Karyawan) => {
        //             Karyawan.preload('manHour');
        //         })
        //         .preload('proyek')

        //     let reports = [];

        //     man_hours.forEach(karyawan => {
        //         let laporan = all_man_hours.filter(item => item.karyawan_id === karyawan.karyawan_id).map(item => {
        //             return {
        //                 proyek: item.proyek.namaProyek,
        //                 tanggal: item.tanggal,
        //                 jam_kerja: item.jam_kerja,
        //                 kodeJobOrder: item.proyek.kodeJobOrder,
        //                 karyawan: item.karyawan,
        //             };
        //         });

        //         reports.push({
        //             id: karyawan.id,
        //             nama_karyawan: karyawan.karyawan.nama,
        //             jamKerja: karyawan.jam_kerja,
        //             departemen: karyawan.karyawan.departemen.namaDepartemen,
        //             tanggal: karyawan.tanggal,
        //             data_laporan: laporan,
        //         });
        //     });

        //     man_hours = reports;


        // } 


        const all_man_hours = await ManHour.query().preload('karyawan').preload('proyek')
        return inertia.render('admin/users/projectManagement/index', {
            data_all_manhours: all_man_hours,
        });
    }

    public async verify({ params, request, response }: HttpContext) {
        try {
            const manhour = await ManHour.query().where('id', params.id).firstOrFail();
            const verifikasi = request.input('verifikasi');
            if (typeof verifikasi !== 'boolean') {
                return response.badRequest({ message: 'Verifikasi harus berupa nilai boolean (true atau false).' });
            }
    
            // 4. Set nilai verifikasi dan simpan
            manhour.verifikasi = verifikasi;
            await manhour.save();
    
            // 5. Redirect setelah sukses
            return response.redirect('/project');
        } catch (error) {
            // Jika ada error, tangani dengan feedback yang sesuai
            return response.internalServerError({ message: 'Terjadi kesalahan saat memverifikasi data.' });
        }
    }
}    