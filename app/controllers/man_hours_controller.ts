import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async manHours({ inertia }: HttpContext) {
        return inertia.render('admin/users/manHours')
    }
}