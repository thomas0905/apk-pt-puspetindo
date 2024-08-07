import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
    async login ({inertia}:HttpContext){
        return inertia.render('/auth/login')
    }
}