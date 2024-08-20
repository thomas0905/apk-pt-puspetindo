import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    async index({inertia,auth}:HttpContext){
        const user = auth.user;
        return inertia.render('home')
    }
}