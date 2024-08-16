import Karyawan from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'

export default class LaporansController {
    async laporan({ inertia, auth, response }: HttpContext) {
        const user = auth.user;
        const karyawan = await Karyawan.query().where('user_id', user?.id).first()
        if(karyawan?.jabatan !== 'IT Software'){
            // response.abort('Kamu tidak memiliki kewenangan untuk melihat halaman ini', 403)
            return inertia.render('admin/error/404')
        }
        return inertia.render('admin/management/laporan')
    }
}