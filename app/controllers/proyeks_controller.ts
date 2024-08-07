import Proyek from '#models/proyek'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProyeksController {
    async index({inertia}:HttpContext){
        const proyek = await Proyek.all() 
        console.log(proyek);
        
        return inertia.render('admin/dasboard/proyek/index',{
            data_proyek:proyek
        })
    }

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/proyek/create')
    }

    async store({ request, response, session }: HttpContext) {
        const pengguna = new Proyek();

        pengguna.namaProyek = request.input('namaProyek');
        pengguna.kodeJobOrder = request.input('kodeJobOrder');
        pengguna.pemilik = request.input('pemilik');

        await pengguna.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/dasboard/proyek/index');
    }

    async delete({ params, response }: HttpContext) {
        const proyek = await Proyek.findOrFail(params.id)
        await proyek.delete()
        return response.redirect('/dasboard/proyek/index')
    } 

    async edit({ inertia, params }: HttpContext) {
        console.log(params.id);
        const proyek = await Proyek.find(params.id)
        return inertia.render('admin/dasboard/proyek/edit', {
            proyek: proyek
        });
    }

    async update({ request, params, response }: HttpContext) {
        const proyek = await Proyek.findOrFail(params.id)
        proyek.namaProyek = request.input('namaProyek')
        proyek.save()
        return response.redirect('/dasboard/proyek/index')

    }
}