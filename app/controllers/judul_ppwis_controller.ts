import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
    // async index({inertia}:HttpContext){
    //     return inertia.render()
    // }

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/ppwi/createJudul')
    }

    async store({request,response,}:HttpContext){
        const ppwi = new JudulPpwi();
        ppwi.judul = request.input('judul')
        await ppwi.save()
        return response.redirect('/ppwi');
    }
}