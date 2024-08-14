import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import Proyek from '#models/proyek';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia }: HttpContext) {
        const manHours = await ManHour.query().preload('karyawan')
        return inertia.render('admin/users/manhours/index',{
            data_manHours:manHours
        })
    }

    async menuProfil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuProfil')
    }

    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.all()
        const proyek = await Proyek.all()
        return inertia.render('admin/users/manhours/create', {
            data_karyawan: karyawan,
            data_proyek: proyek
        })
    }

    async store({request ,response,session}:HttpContext){
        const manHours = new ManHour()
        manHours.karyawan_id = request.input('karyawan_id')
        manHours.proyek_id = request.input('proyek_id')
        manHours.tanggal = request.input('tanggal')
        manHours.jam_kerja = request.input('jam_Kerja')

        await manHours.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/users/manhours/index')
    }


    async delete({ params, response }: HttpContext) {
        const manHours = await ManHour.findOrFail(params.id)
        await manHours.delete()
        return response.redirect('/users/manhours/index')
    }
}