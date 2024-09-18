import type { HttpContext } from '@adonisjs/core/http'

export default class TiketingsController {
    public async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/tiketing/index')
    }
}