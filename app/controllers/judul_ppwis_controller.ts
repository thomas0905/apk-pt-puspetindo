import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
    async index({ inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        return inertia.render('admin/users/judul/index', {
            data_judul: judul
        })
    }


    async store({ request, response }: HttpContext) {
        const judulPpwi = new JudulPpwi();
        judulPpwi.judul = request.input('judul');
        await judulPpwi.save();
        return response.redirect('/judul');
    }

    async delete({ params, response }: HttpContext) {
        const judul = await JudulPpwi.findOrFail(params.id)
        await judul.delete()
        return response.redirect('/judul')
    }
}