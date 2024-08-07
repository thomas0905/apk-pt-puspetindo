import type { HttpContext } from '@adonisjs/core/http'

export default class MenuProfilsController {
    async menuProfil({inertia}:HttpContext){
        return inertia.render('admin/users/menuProfil')
    }
}