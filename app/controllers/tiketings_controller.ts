import { inertia } from '@adonisjs/inertia/client';
import  Karyawan  from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'
import Tiketing from '#models/tiketing';

export default class TiketingsController {
    async index({ inertia, auth }: HttpContext) {
        // const user = auth.user;
        // const karyawan = await Karyawan.query().where('user_id', user.id).firstOrFail();
        return inertia.render('admin/dasboard/tiketing/index')
    }

    async laporan({inertia}:HttpContext){
        const tiketing = await Tiketing.query();
        return inertia.render('admin/dasboard/tiketing/laporan',{
            data_tiketing:tiketing
        })
    }

    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/tiketing/create')
    }
    async store({inertia,request}:HttpContext){
        const tiketing = new Tiketing();

        tiketing.problem = request.input('problem');
        tiketing.tanggal = request.input('tanggal');
        tiketing.keterangan = request.input('keterangan');

        await tiketing.save();

        return inertia.render('/create')
    }
}