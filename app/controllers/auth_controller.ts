import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({inertia}:HttpContext){
        return inertia.render('admin/auth/login')
    }

    // async login({request,auth,session,response}){
    //     const{email,password} =request.all()
    //     await auth.attempt(email,password)
    //     return response.router('/')
    // }
}