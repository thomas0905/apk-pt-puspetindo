import Karyawan from '#models/karyawan'
import type { HttpContext } from '@adonisjs/core/http'

export default class MenuProfilsController {
    async menuProfil({ inertia, auth }: HttpContext) {
        const user = auth.user;
        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        console.log(user);
        return inertia.render('admin/users/menuProfil', {
            data_user: user,
            data_karyawan:karyawan
        })
    }
}