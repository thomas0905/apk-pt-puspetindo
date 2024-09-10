import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'

export default class PpwisController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/ppwi/index')
    }

    async store({ request, response,inertia }: HttpContext) {
        const ppwi = new Ppwi()
        const oploud_image = request.input('foto_ppwi',{
            types:['image'],
            size:'5mb',
            extnames:['jpg','png','jpeg']
        })
        ppwi.keterangan = request.input('keterangan')

        await ppwi.save()

        return response.redirect('/ppwi')

    }

}