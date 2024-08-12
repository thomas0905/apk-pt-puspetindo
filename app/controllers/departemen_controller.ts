import type { HttpContext } from '@adonisjs/core/http'

export default class DepartemenController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/index')
    }


    async create({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/create')
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/edit')
    }

}