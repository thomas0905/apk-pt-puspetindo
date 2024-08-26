import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import type { HttpContext } from '@adonisjs/core/http'

export default class LaporansController {
    async laporan({ inertia, auth, request, response }: HttpContext) {
        const user = auth.user;

        if (!user) {
            return response.redirect('/login');
        }

        let man_hours;
        if (request.input('start_date') != null) {
            man_hours = await ManHour.query().whereBetween('tanggal', [request.input('start_date'), request.input('end_date')])
            console.log(man_hours);
            
        }else{
            man_hours = await ManHour.query()
            .preload('karyawan')
            .preload('proyek')
            .where('karyawan_id', karyawan.id)
        }


        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }

        
        // const manhours = await ManHour.query().preload('karyawan').preload('proyek')

        return inertia.render('admin/management/laporan', {
            data_manhours: man_hours
        });
    }
}
