import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import { Application } from '@adonisjs/core/app'
import type { HttpContext } from '@adonisjs/core/http'
import { log } from 'console'
export default class PpwisController {
    async index({ inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        const ppwi = await Ppwi.query()
        return inertia.render('admin/dasboard/ppwi/index',{
            data_judul:judul,
            data_ppwi:ppwi
        })
    }

    async create({inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        return inertia.render('admin/dasboard/ppwi/create',{
            data_judul:judul
        })
    }
    async detail({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/ppwi/detail')
    }

    public async store({ request, response }: HttpContext) {
    const ppwi = new Ppwi();

        ppwi.judulPpwi = request.input('judulPpwi');
        ppwi.keterangan = request.input('keterangan');
        
        await ppwi.save();

        return response.redirect('/ppwi');
    }

    async delete({ params, response }: HttpContext) {
        const ppwi = await Ppwi.findOrFail(params.id)
        await ppwi.delete()
        return response.redirect('/ppwi')
    }

}