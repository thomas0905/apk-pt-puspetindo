import Proyek from '#models/proyek'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectManagementsController {
    async index({inertia}:HttpContext){
        const proyek =await Proyek.query()
        return inertia.render('admin/users/projectManagement/index',{
            data_proyek:proyek
        })
    }
}