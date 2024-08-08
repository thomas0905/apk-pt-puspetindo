import Pengguna from "#models/pengguna";
import { HttpContext, Redirect } from "@adonisjs/core/http";

export default class DasboardsController {

    async pengguna({ inertia }: HttpContext) {
        const pengguna = await Pengguna.all()
        console.log(pengguna);

        return inertia.render('admin/dasboard/pengguna/pengguna', {
            data_pengguna: pengguna
        });
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/pengguna/create');
    }

    async store({ request, response, session }: HttpContext) {
        const pengguna = new Pengguna();

        pengguna.nama = request.input('nama');
        pengguna.departemen = request.input('departemen');
        pengguna.jabatan = request.input('jabatan');
        pengguna.status = request.input('status');

        await pengguna.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/dasboard/pengguna/pengguna');
    }

    async delete({ params, response }: HttpContext) {
        const pengguna = await Pengguna.findOrFail(params.id)
        await pengguna.delete()
        return response.redirect('/dasboard/pengguna/pengguna')
    }

    async edit({ inertia, params }: HttpContext) {
        console.log(params.id);
        const pengguna = await Pengguna.find(params.id)
        return inertia.render('admin/dasboard/pengguna/edit', {
            pengguna: pengguna
        });
    }

    async update({ request, params, response }: HttpContext) {
        const pengguna = await Pengguna.findOrFail(params.id)
        pengguna.nama = request.input('nama')
        pengguna.save()
        return response.redirect('/dasboard/pengguna/pengguna')

    }

    async permission({inertia}:HttpContext){
        return inertia.render('admin/dasboard/pengguna/permission')
    }

}
