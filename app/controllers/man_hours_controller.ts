import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import Proyek from '#models/proyek';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia }: HttpContext) {
        const manhours = await ManHour.query().preload('karyawan')
        return inertia.render('admin/users/manhours/index',{
            data_manHours:manhours
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
        const manhours = new ManHour()
        manhours.karyawan_id = request.input('karyawan_id')
        manhours.proyek_id = request.input('proyek_id')
        manhours.tanggal = request.input('tanggal')
        manhours.jamKerja = request.input('jam_Kerja')

        await manhours.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/users/manhours/index')
    }


    async delete({ params, response }: HttpContext) {
        const manhours = await ManHour.findOrFail(params.id)
        await manhours.delete()
        return response.redirect('/users/manhours/index')
    }

    async edit({ inertia, params }: HttpContext) {
        console.log(params.id);
        const manhours = await ManHour.find(params.id)
        return inertia.render('admin/users/manhours/edit', {
            manhours:manhours
        });
    }

}