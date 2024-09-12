import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/ppwi/createJudul')
    }

    async store({ request, response }: HttpContext) {
        const judulPpwi = new JudulPpwi();
        judulPpwi.judul = request.input('judul');
        await judulPpwi.save();
        return response.redirect('/ppwi');
    }
}