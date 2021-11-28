import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class HomeController {
  public async index(ctx: HttpContextContract) {
    return await ctx.view.render('home')
  }

  public async show (ctx: HttpContextContract) {
    const uid = await ctx.request.param('uid')
    if (!uid) return this.index(ctx)

    const user = await User.findBy('uid', uid)

    return await ctx.view.render('home', {
      user: user?.name,
      session: user?.session

    })
  }
}
