import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/users/manHours/index')
    }
}