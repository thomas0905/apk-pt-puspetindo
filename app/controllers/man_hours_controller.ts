import Karyawan from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia }: HttpContext) {
        return inertia.render('admin/users/manHours/index')
    }

    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.all()
        console.log(karyawan);
        return inertia.render('admin/users/manHours/create',{
            data_karyawan: karyawan
        })
    }
}