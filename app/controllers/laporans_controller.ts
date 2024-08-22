import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import type { HttpContext } from '@adonisjs/core/http'
import { request } from 'http';

export default class LaporansController {
    async laporan({ inertia, auth, response }: HttpContext) {
        const user = auth.user;

        if (!user) {
            return response.redirect('/login');
        }


        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }

        const manhours = await ManHour.query()
            .preload('karyawan')
            .preload('proyek')
            .where('karyawan_id', karyawan.id)
        // const manhours = await ManHour.query().preload('karyawan').preload('proyek')
        console.log(manhours);

        return inertia.render('admin/management/laporan', {
            data_manhours: manhours
        });
    }
}
