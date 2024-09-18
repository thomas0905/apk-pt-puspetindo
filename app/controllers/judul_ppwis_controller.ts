import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
async index({inertia}:HttpContext){
    const judul = await JudulPpwi.all()
    return inertia.render('admin/users/judulPpwi/index',{
        data_judul:judul
    })
}

    async create({inertia}:HttpContext){
        return inertia.render('admin/users/judulPpwi/index')
    }

    async store({ request, response }: HttpContext) {
        const judulPpwi = new JudulPpwi();
        judulPpwi.judul = request.input('judul');
        await judulPpwi.save();
        return response.redirect('/judul');
    }
}