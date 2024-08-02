import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    async menuProfil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuprofil')
    }
}