import { HttpContext } from "@adonisjs/core/http";
import Pengguna from '#models/pengguna';

export default class SistemsController {
    async pengaturan({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengaturan');
    }

    async pengguna({ inertia }: HttpContext) {
        const pengguna = await Pengguna.all()
        console.log(pengguna);
        
        return inertia.render('admin/sistem/pengguna/pengguna', {
            data_pengguna: pengguna
        });
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
        return response.redirect('/sistem/pengguna/pengguna');
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengguna/create');
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengguna/edit')
    }
}