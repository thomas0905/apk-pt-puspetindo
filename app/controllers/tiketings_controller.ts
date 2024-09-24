import  Karyawan  from '#models/karyawan';
import type { HttpContext } from '@adonisjs/core/http'
import Tiketing from '#models/tiketing';

export default class TiketingsController {
    async index({ inertia }: HttpContext) {
        const tiketing = await Tiketing.all()
        return inertia.render('admin/dasboard/tiketing/index',{
            data_tiketing:tiketing
        })
    }

    async laporan({inertia,response,auth}:HttpContext){
        const user = auth.user;

        if (!user) {
            return response.redirect('/login');
        }


        const karyawan = await Karyawan.query().where('user_id', user.id).first();
        if (!karyawan || karyawan.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }
        const tiketing = await Tiketing.query()
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
        tiketing.tanggal = request.input('tanggal').toISOString();;
        tiketing.keterangan = request.input('keterangan');

        await tiketing.save();

        return inertia.render('/create')
    }
}