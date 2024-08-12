import type { HttpContext } from '@adonisjs/core/http'
import Departemen from '#models/departemen'
export default class DepartemenController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/index')
    }


    async create({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/create')
    }

    async store({request,response,session}:HttpContext){
        const departemen = new Departemen()
        departemen.namaDepartemen = request.input('namaDepartemen')
        departemen.namaPegawai = request.input('namaPegawai')
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/departemen/edit')
    }

}