import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({ inertia }: HttpContext) {
        return inertia.render('admin/auth/login')
    }

    async loginAuth({ request, auth, session, response }:HttpContext) {
        console.log(request.all());
        const { email, password } = request.all()
        const user = await User.verifyCredentials(email, password)
        await auth.use('web').login(user)
        return response.redirect('/')
    }
}