import { HttpContext } from "@adonisjs/core/http";

export default class ProductsController {
    async index({ inertia }: HttpContext) {
        return inertia.render('product/index')
    }

    async create({ inertia }: HttpContext) {
        return inertia.render('product/create')
    }

    async edit({ inertia }: HttpContext) {
        return inertia.render('product/edit')
    }


}