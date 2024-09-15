import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
async index({inertia}:HttpContext){
    return inertia.render('admin/dasboard/judulPpwi/index')
}

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/judulPpwi/index')
    }

    async store({ request, response }: HttpContext) {
        const judulPpwi = new JudulPpwi();
        judulPpwi.judul = request.input('judul');
        await judulPpwi.save();
        return response.redirect('/judul');
    }
}