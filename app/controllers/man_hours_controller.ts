import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import Proyek from '#models/proyek';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia }: HttpContext) {
        const manHours = await ManHour.all()
        return inertia.render('admin/users/manHours/index',{
            data_manHours:manHours
        })
    }

    async menuProfil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuProfil')
    }

    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.all()
        const proyek = await Proyek.all()
        return inertia.render('admin/users/manHours/create', {
            data_karyawan: karyawan,
            data_proyek: proyek
        })
    }
}