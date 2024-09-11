import Karyawan from '#models/karyawan';
import ManHour from '#models/man_hour';
import Proyek from '#models/proyek';
import type { HttpContext } from '@adonisjs/core/http'

export default class ManHoursController {
    async index({ inertia, auth }: HttpContext) {
        const manhours = await ManHour.query().preload('karyawan').preload('proyek')
        return inertia.render('admin/users/manhours/index', {
            data_manHours: manhours,
        })
    }

    async menuProfil({ inertia }: HttpContext) {
        return inertia.render('admin/users/menuProfil')
    }

    async create({ inertia }: HttpContext) {
        const karyawan = await Karyawan.query()
        const proyek = await Proyek.query()
        return inertia.render('admin/users/manhours/create', {
          data_karyawan:karyawan,
          data_proyek:proyek
        })
    }

    async store({ request, response, session }: HttpContext) {
        console.log(request.all());
        const manhours = new ManHour()
        manhours.karyawan_id = request.input('karyawan_id')
        manhours.proyek_id = request.input('proyek_id')
        manhours.tanggal = request.input('tanggal')
        manhours.jam_kerja = request.input('jam_kerja')

        await manhours.save()

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/manhours')
    }


    async delete({ params, response }: HttpContext) {
        const manhours = await ManHour.findOrFail(params.id)
        await manhours.delete()
        return response.redirect('/manhours')
    }

    async edit({ inertia, params }: HttpContext) {
        console.log(params.id);
        const manhours = await ManHour.query().preload('karyawan').find(params.id)
        return inertia.render('admin/users/manhours/edit', {
            manhours: manhours
        });
    }

    async update({ request, params, response }: HttpContext) {
        const manhours = await ManHour.findByOrFail(params.id)
        manhours.karyawan_id = request.input('karyawan_id')
        manhours.proyek_id = request.input('proyek_id')
        manhours.jam_kerja = request.input('jam_kerja')
        manhours.save()
        return response.redirect('/manhours')
    }

}