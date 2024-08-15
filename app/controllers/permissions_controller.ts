import type { HttpContext } from '@adonisjs/core/http'

export default class PermissionsController {
    async index({inertia}:HttpContext){
        return inertia.render('admin/sistem/permission/index')
    }

    async create({inertia}:HttpContext){
        return inertia.render('admin/sistem/permission/create')
    }
}