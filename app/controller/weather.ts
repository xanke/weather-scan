import { Controller } from 'egg'

export default class WeatherController extends Controller {
  public async city() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
