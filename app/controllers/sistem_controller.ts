// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";

export default class SistemsController {
    async pengaturan({inertia} : HttpContext){
        return inertia.render('admin/sistem/pengaturan')
    }


    async pengguna({inertia} : HttpContext){
        return inertia.render('admin/sistem/pengguna')
    }



}