import Proyek from '#models/proyek'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProyeksController {
    async index({inertia}:HttpContext){
        const proyek = await Proyek.all() 
        return inertia.render('admin/dasboard/proyek/index',{
            proyek:proyek
        })
    }

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/proyek/create')
    }

    async store({ request, response, session }: HttpContext) {
        const pengguna = new Proyek();

        pengguna.nama_proyek = request.input('nama_proyek');
        pengguna.kode_job_order = request.input('kode_job_order');
        pengguna.pemilik = request.input('pemilik');

        await pengguna.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/dasboard/proyek/index');
    }
}