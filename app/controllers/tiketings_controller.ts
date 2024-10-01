import  Karyawan  from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'
import Tiketing from '#models/tiketing';
import { DateTime } from 'luxon';

export default class TiketingsController {
    async index({ inertia }: HttpContext) {
        const tiketing = await Tiketing.all()
        return inertia.render('admin/dasboard/tiketing/index',{
            data_tiketing:tiketing
        })
    }

    async laporan({ inertia, response, auth }: HttpContext) {
        const user = auth.user;
        if (!user) {
            return response.redirect('/login');
        }
        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Softwware') {
            return inertia.render('admin/error/404');
        }
        const tiketing = await Tiketing.query();
        const data_karyawan = karyawan ? [karyawan] : [];
        return inertia.render('admin/dasboard/tiketing/laporan', {
            data_tiketing: tiketing,
            data_karyawan: data_karyawan
        });
    }
    
    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/tiketing/create')
    }

    async store({response,request}:HttpContext){
        const tiketing = new Tiketing();

        tiketing.problem = request.input('problem');
        tiketing.tanggal = request.input('tanggal');
        tiketing.keterangan = request.input('keterangan');

        await tiketing.save();

        return response.redirect('/tiketing')
    }
}