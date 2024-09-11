import JudulPpwi from '#models/judul_ppwi';
import type { HttpContext } from '@adonisjs/core/http'

export default class JudulPpwisController {
    async create({inertia}:HttpContext){
        return inertia.render('admin/dasboard/ppwi/createJudul')
    }

    async store({ request, response }: HttpContext) {
        // Membuat instance baru dari model Ppwi
        const ppwi = new JudulPpwi();
    
        // Mengisi atribut model dengan data dari request
        ppwi.judul = request.input('judul');
    
        // Menyimpan model ke database
        await JudulPpwi.save();
    
        // Mengarahkan kembali setelah data disimpan
        return response.redirect('/ppwi');
    }
}