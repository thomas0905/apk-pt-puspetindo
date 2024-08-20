import Karyawan from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    async index({ inertia, auth }: HttpContext) {
        const user = auth.user;
        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        console.log(user);
        return inertia.render('home', {
            data_user: user,
            data_karyawan:karyawan
        })
    }
}