import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({inertia}:HttpContext){
        return inertia.render('admin/auth/login')
    }
    // async attemptLogin({ request, auth, response }: HttpContext) {
    //     const { email, password } = request.all()
    //     try {
    //         await auth.attempt(email, password)
    //         return response.redirect('/dashboard')
    //     } catch {
    //         return response.redirect('/auth/login')
    //     }
    // }
}