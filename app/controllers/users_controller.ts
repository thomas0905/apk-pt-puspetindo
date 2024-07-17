import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('users/index')
  }

  async about({ inertia }: HttpContext) {
    return inertia.render('users/about')
  }
}
