import type { HttpContext } from '@adonisjs/core/http'

export default class PpwisController {
    async index({inertia}:HttpContext){
        return inertia.render('admin/dasboard/ppwi/index')
    }
}