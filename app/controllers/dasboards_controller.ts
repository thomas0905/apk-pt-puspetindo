// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";

export default class DasboardsController {
    async analist({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/analist')
    }

    async laporan({ inertia }: HttpContext) {
        return inertia.render('admin/dasboard/laporan')
    }
}