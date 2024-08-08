import type { HttpContext } from '@adonisjs/core/http'
import inertia from '@adonisjs/inertia/client'

export default class AuthController {
    async auth({inertia}:HttpContext){
        return inertia.render('/auth/login')
    }

    async login({request,auth,session,response}){
        const{email,password} =request.all()
        await auth.attempt(email,password)
        return response.router('/')
    }
}