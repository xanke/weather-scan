import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    
    await ctx.model.Forecast.sync({ force: true })
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
