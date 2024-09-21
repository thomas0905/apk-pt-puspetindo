import JudulPpwi from '#models/judul_ppwi'
import Ppwi from '#models/ppwi'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class PpwisController {


    async index({ inertia }: HttpContext) {
        const judul = await JudulPpwi.all()
        const ppwi = await Ppwi.query().preload('judulPpwi')
        const uniquePpwi = Object.values(
            ppwi.reduce((acc, current) => {
                const judulId = current.judulPpwi?.id;
                if (judulId && !acc[judulId]) {
                    acc[judulId] = current;
                }
                return acc;
            }, {})
        );
        return inertia.render('admin/users/ppwi/index', {
            data_judul: judul,
            data_ppwi: uniquePpwi,
        })
    }


    async detail({ params, inertia }: HttpContext) {
        try {
  
            const ppwi = await Ppwi.query()
                .where('id', params.id)
                .preload('judulPpwi')
                .first();
            if (!ppwi) {
                return inertia.render('errors/not_found', { message: 'Data not found' });
            }
            const relatedPpwi = await Ppwi.query()
                .where('judulId', ppwi.judulId)  
                .preload('judulPpwi');          
   
            return inertia.render('admin/users/ppwi/detail', {
                data_ppwi: relatedPpwi,  
            });
    
        } catch (error) {

            return inertia.render('errors/not_found', { message: 'Data not found' });
        }
    }
    
    
    
    public async store({ request, response }: HttpContext) {
        const ppwi = new Ppwi()
        ppwi.judulId = request.input('judulId')
        ppwi.keterangan = request.input('keterangan')
        ppwi.namaFile = request.input('namaFile')
        const dokumen = request.file('dokumen', {
            size: '2mb',
            extnames: ['pdf', 'doc', 'docx'],
        });
        await dokumen.move(app.makePath('storage/uploads'));
        const pathFile = `/uploads/${request.input('namaFile')}`
        ppwi.link = pathFile
        await ppwi.save()
        return response.redirect('/ppwi')
    }


    async delete({ params, response }: HttpContext) {
        const ppwi = await Ppwi.findOrFail(params.id)
        await ppwi.delete()
        return response.redirect('/ppwi')
    }
}
