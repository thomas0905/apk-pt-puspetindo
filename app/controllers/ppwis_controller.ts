import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'
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

    async store({ request, response }: HttpContext) {
        const ppwi = new Ppwi()
        if (request.file('dokumen')) {
            ppwi.dokumen = request.file('dokumen', {
                size: '2mb',
                extnames: ['pdf', 'doc', 'docx']
            })
        }
        ppwi.keterangan = request.input('keterangan')
        await ppwi.save()
        return response.redirect('/ppwi')
    }

}