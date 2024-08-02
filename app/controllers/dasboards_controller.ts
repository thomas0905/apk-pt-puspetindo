import Pengguna from "#models/pengguna";
import { HttpContext } from "@adonisjs/core/http";

export default class DasboardsController {

    async pengguna({ inertia }: HttpContext) {
        const pengguna = await Pengguna.all()
        console.log(pengguna);

        return inertia.render('admin/dasboard/pengguna/pengguna', {
            data_pengguna: pengguna
        });
    }

    async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/proyek/index')
    }

    async store({ request, response, session }: HttpContext) {
        console.log(request.all());

        const pengguna = new Pengguna();

        pengguna.nama = request.input('nama');
        pengguna.departemen = request.input('departemen');
        pengguna.jabatan = request.input('jabatan');
        pengguna.status = request.input('status');

        await pengguna.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('//pengguna/pengguna');
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/pengguna/create');
    }
}