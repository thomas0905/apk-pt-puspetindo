import type { HttpContext } from '@adonisjs/core/http'
import Departemen from '#models/departemen'
import Karyawan from '#models/karyawan'
export default class DepartemenController {
    async index({ inertia }: HttpContext) {
        const departemen = await Departemen.all()
        return inertia.render('admin/dasboard/departemen/index', {
            data_departemen: departemen
        })
    }


    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.all()
        return inertia.render('admin/dasboard/departemen/create', {
            data_karyawan: karyawan,


        })
    }

    async store({ request, response, session }: HttpContext) {

        const departemen = new Departemen()
        departemen.namaDepartemen = request.input('namaDepartemen')

        await departemen.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/dasboard/departemen/create');
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/edit')
    }

}