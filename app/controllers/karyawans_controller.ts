import Karyawan from "#models/karyawan";
import User from "#models/user";
import Departeman from "#models/departemen";
import { HttpContext, Redirect } from "@adonisjs/core/http";

export default class KaryawansKontroller {

    async index({ inertia }: HttpContext) {
        const karyawan = await Karyawan.query().preload('departemen')
        return inertia.render('admin/dasboard/karyawan/index', {
            data_karyawan: karyawan,
        });
    }

    async create({ inertia }: HttpContext) {
        const departemen = await Departeman.all()
        
        return inertia.render('admin/dasboard/karyawan/create', {
            data_departemen: departemen
        });
    }


    async store({ request, response, session }: HttpContext) {
        const users = new User()
        users.fullName = request.input('fullName');
        users.email = request.input('email');
        users.password = request.input('password');
        await users.save();

        const karyawan = new Karyawan();
        console.log(request.all());
        
        karyawan.user_id = users.id;
        karyawan.nama = request.input('nama');
        karyawan.departemen_id = request.input('departemen_id');
        karyawan.jabatan = request.input('jabatan');
        karyawan.status = request.input('status');

        await karyawan.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/dasboard/karyawan/index');
    }

    async delete({ params, response }: HttpContext) {
        const karyawan = await Karyawan.findOrFail(params.id)
        await karyawan.delete()
        return response.redirect('/dasboard/karyawan/index')
    }

    async edit({ inertia, params }: HttpContext) {
        console.log(params.id);
        const karyawan = await Karyawan.find(params.id)
        return inertia.render('admin/dasboard/karyawan/edit', {
            karyawan: karyawan
        });
    }

    async update({ request, params, response }: HttpContext) {
        const karyawan = await Karyawan.findOrFail(params.id)
        karyawan.nama = request.input('nama')
        // karyawan.departemen = request.input('departemen')
        karyawan.jabatan = request.input('jabatan')
        karyawan.status = request.input('status')
        karyawan.save()
        return response.redirect('/dasboard/karyawan/index')

    }

}
