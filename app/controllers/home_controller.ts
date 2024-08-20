import Karyawan from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    async index({ inertia, auth }: HttpContext) {
        const user = auth.user;
        console.log(user);
        return inertia.render('home', {
            data_user: user
        })
    }
}