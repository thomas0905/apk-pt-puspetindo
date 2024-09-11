import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'

export default class PpwisController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/ppwi/index')
    }

    // const oploud_image = request.input('foto_ppwi',{
    //     types:['image'],
    //     size:'5mb',
    //     extnames:['jpg','png','jpeg']
    // })
    async create({ inertia }: HttpContext) {
        const ppwi = await JudulPpwi.query()
        return inertia.render('admin/dasboard/ppwi/create',{
            data_ppwi:ppwi
        })
    }
    async detail({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/ppwi/detail')
    }


    async store({ request, response, inertia }: HttpContext) {
        const ppwi = await Ppwi.query()
        ppwi.keterangan = request.input('keterangan')

        await ppwi.save()

        return response.redirect('/ppwi')

    }

}