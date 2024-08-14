import Karyawan from '#models/karyawan'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PenggunasController {
    async index({inertia}:HttpContext){
        const karyawan = await Karyawan.all()
        const user = await User.all()
        return inertia.render('admin/sistem/pengguna/index',{
            data_karyawan:karyawan,
            data_user:user
        })
    }

    // async store({request,response,session}:HttpContext){
    //     const penggunas =new Pengguna() 
    // }

    async permission({inertia}:HttpContext){
        return inertia.render('admin/sistem/pengguna/permission')
    }
}