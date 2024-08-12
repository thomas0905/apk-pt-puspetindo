import type { HttpContext } from '@adonisjs/core/http'
import Departemen from '#models/departemen'
export default class DepartemenController {
    async index({ inertia }: HttpContext) {
        const departemen = await Departemen.all() 
        return inertia.render('admin/dasboard/departemen/index',{
            data_departemen:departemen       })
    }


    async create({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/create')
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