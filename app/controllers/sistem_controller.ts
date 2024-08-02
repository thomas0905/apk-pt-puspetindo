import { HttpContext } from "@adonisjs/core/http";
import Pengguna from '#models/pengguna';

export default class SistemsController {
    async pengaturan({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengaturan');
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengguna/edit')
    }
}