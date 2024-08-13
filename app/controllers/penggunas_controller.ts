import Karyawan from '#models/karyawan'
import type { HttpContext } from '@adonisjs/core/http'

export default class PenggunasController {
    async index({inertia}:HttpContext){
        const karyawan = await Karyawan.all()
        return inertia.render('admin/sistem/pengguna/index',{
            data_karyawan:karyawan
        })
    }

    async permission({inertia}:HttpContext){
        return inertia.render('admin/sistem/pengguna/permission')
    }
}