import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class PpwisController {

    async index({ inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        const ppwi = await Ppwi.query()
        return inertia.render('admin/users/ppwi/index', {
            data_judul: judul,
            data_ppwi: ppwi,
        })
    }

    async create({ inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        return inertia.render('admin/users/ppwi/create', {
            data_judul: judul,
        })
    }


    async detail({ inertia }: HttpContext) {
        return inertia.render('admin/users/ppwi/detail')
    }

    public async store({ request, response }: HttpContext) {
        const ppwi = new Ppwi()
        ppwi.judul_id = request.input('judul_id')
        ppwi.keterangan = request.input('keterangan')
        ppwi.namaFile = request.input('namaFile')
        const dokumen = request.file('dokumen', {
            size: '2mb',
            extnames: ['pdf', 'doc', 'docx'],
        });
        await dokumen.move(app.makePath('storage/uploads'));
        const pathFile = `/uploads/${request.input('namaFile')}`
        ppwi.link = pathFile
        await ppwi.save()
        return response.redirect('/ppwi')
    }


    async delete({ params, response }: HttpContext) {
        const ppwi = await Ppwi.findOrFail(params.id)
        await ppwi.delete()
        return response.redirect('/ppwi')
    }
}
