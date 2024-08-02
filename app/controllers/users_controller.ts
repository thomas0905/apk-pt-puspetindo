import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    async menuprofil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuprofil')
    }

    async minhours({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuprofil')
    }
}