import Karyawan from "#models/karyawan";
import User from "#models/user";
import Departeman from "#models/departemen";
import { HttpContext, Redirect } from "@adonisjs/core/http";
export default class KaryawansKontroller {

    async index({ inertia, auth }: HttpContext) {
        const user = auth.user;
        if (!user) {
            return inertia.render('admin/error/404');
        }
        const karyawanUser = await Karyawan.query().where('user_id', user.id).first();
        if (karyawanUser?.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404');
        }
        const semuaKaryawan = await Karyawan.query().preload('departemen');
        const semuaUser = await User.all();
        return inertia.render('admin/dasboard/karyawan/index', {
            data_karyawan: semuaKaryawan,
            data_user: semuaUser
        });
    }

    async create({ inertia }: HttpContext) {
        const departemen = await Departeman.all()
        return inertia.render('admin/dasboard/karyawan/create', {
            data_departemen: departemen
        });
    }


    async store({ request, response, session }: HttpContext) {
        const users = new User()
        users.fullName = request.input('fullName');
        users.email = request.input('email');
        users.password = request.input('password');
        await users.save();

        const karyawan = new Karyawan();
        console.log(request.all());

        karyawan.user_id = users.id;
        karyawan.nama = request.input('nama');
        karyawan.departemen_Id = request.input('departemen_Id');
        karyawan.jabatan = request.input('jabatan');
        karyawan.tempat_lahir = request.input('tempat_lahir');
        karyawan.tanggal_lahir = request.input('tanggal_lahir');
        karyawan.usia = request.input('usia');
        karyawan.jenis_kelamin = request.input('jenis_kelamin');
        karyawan.pendidikan = request.input('pendidikan');
        karyawan.jurusan = request.input('jurusan');
        karyawan.bpjs_kk = request.input('bpjs_kk');
        karyawan.bpjs_kesehatan = request.input('bpjs_kesehatan');
        karyawan.no_rekening = request.input('no_rekening');
        karyawan.nama_bank = request.input('nama_bank');
        karyawan.status = request.input('status');

        await karyawan.save();

        session.flash({ notification: 'Data Berhasil Disimpan!' });
        return response.redirect('/karyawan');
    }

    async delete({ params, response }: HttpContext) {
        const karyawan = await Karyawan.findOrFail(params.id)
        await karyawan.delete()
        return response.redirect('/karyawan')
    }

    async edit({ inertia, params }: HttpContext) {
        const karyawan = await Karyawan.query()
            .preload('user')
            .preload('departemen')
            .where('id', params.id)
            .first();
        return inertia.render('admin/dasboard/karyawan/edit', {
            data_karyawan: karyawan
        });
    }

    async update({ request, params, response }: HttpContext) {
        const karyawan = await Karyawan.findOrFail(params.id)
        karyawan.nama = request.input('nama')
        karyawan.departemen_Id = request.input('departemen_Id')
        karyawan.jabatan = request.input('jabatan')
        karyawan.tempat_lahir = request.input('tempat_lahir');
        karyawan.tanggal_lahir = request.input('tanggal_lahir');
        karyawan.usia = request.input('usia');
        karyawan.jenis_kelamin = request.input('jenis_kelamin');
        karyawan.pendidikan = request.input('pendidikan');
        karyawan.jurusan = request.input('jurusan');
        karyawan.bpjs_kk = request.input('bpjs_kk');
        karyawan.bpjs_kesehatan = request.input('bpjs_kesehatan');
        karyawan.no_rekening = request.input('no_rekening');
        karyawan.nama_bank = request.input('nama_bank');
        karyawan.status = request.input('status')
        karyawan.save()
        return response.redirect('/karyawan')
    }

}
