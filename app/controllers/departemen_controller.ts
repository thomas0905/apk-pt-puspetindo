import type { HttpContext } from '@adonisjs/core/http'

export default class DepartemenController {
    async index({inertia}:HttpContext){
        return inertia.render('admin/dasboard/departemen/index')
    }
}