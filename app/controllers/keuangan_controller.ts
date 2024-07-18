import { HttpContext } from "@adonisjs/core/http";

export default class KeuanganController {
    async pembelian({ inertia }: HttpContext) {
        return inertia.render('admin/keuangan/pembelian')
    }

    async penjualan({ inertia }: HttpContext) {
        return inertia.render('admin/keuangan/penjualan')
    }

    async pengeluaran({ inertia }: HttpContext) {
        return inertia.render('admin/keuangan/pengeluaran')
    }

}