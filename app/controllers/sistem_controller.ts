import { HttpContext } from "@adonisjs/core/http";
import Pengguna from '#models/pengguna';

export default class SistemsController {       
    async pengaturan({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengaturan');  
    }  

    async pengguna({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengguna/pengguna');
    }

    async store({ request, response, session }: HttpContext) {
        const pengguna = new Pengguna();

        pengguna.name = request.input('name');
        pengguna.departemen = request.input('departemen');
        pengguna.jabatan = request.input('jabatan');
        pengguna.status = request.input('status');
                                                                     
        await pengguna.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/admin/sistem/pengguna/pengguna'); 
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('admin/sistem/pengguna/create');
    }
}