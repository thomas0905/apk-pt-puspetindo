import type { HttpContext } from '@adonisjs/core/http'

export default class ProyeksController {
    async index({inertia}:HttpContext){
        return inertia.render('admin/dasboard/proyek/index')
    }

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/proyek/create')
    }
}