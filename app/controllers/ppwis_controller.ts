import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'
export default class PpwisController {
    async index({ inertia }: HttpContext) {
        // const ppwis = await Ppwi.query().preload('judulPpwi')
        return inertia.render('admin/dasboard/ppwi/index')
    }

    async create({inertia }: HttpContext) {
        const ppwi = await JudulPpwi.query()
        return inertia.render('admin/dasboard/ppwi/create',{
            judul_ppwi:ppwi
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