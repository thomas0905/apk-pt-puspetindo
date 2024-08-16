import Karyawan from '#models/karyawan'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PenggunasController {
    async index({ inertia, auth }: HttpContext) {
        // Mengambil data pengguna yang sedang login
        const user = auth.user;

        // Mengecek jika user ada dan karyawan terkait
        const karyawan = await Karyawan.query().where('user_id', user?.id).preload('user').first()

        // Jika jabatan bukan IT Software, arahkan ke halaman error 404
        if (karyawan?.jabatan !== 'IT Software') {
            return inertia.render('admin/error/404')
        }

        // Mendapatkan semua data karyawan dan pengguna untuk ditampilkan
        const semuaKaryawan = await Karyawan.query().preload('user')
        const semuaUser = await User.all()

        // Render halaman dan kirim data ke front-end
        return inertia.render('admin/sistem/pengguna/index', {
            data_karyawan: semuaKaryawan,
            data_user: semuaUser
        })
    }

    // async store({request,response,session}:HttpContext){
    //     const penggunas =new Pengguna() 
    // }
}
