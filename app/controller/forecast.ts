import { Controller } from 'egg'

export default class ForecastController extends Controller {
  public async city() {
    const { ctx } = this
    const { city } = ctx.params

    let data = await ctx.service.weather.getCity(city)

    if (data) {
      const time = Date.now() - data.utime
      // 大于一小时则采集
      if (time > 60000 * 60) {
        data = await ctx.service.weather.getSinaByCity(city)
      }
    } else {
      data = await ctx.service.weather.getSinaByCity(city)
    }

    ctx.body = data
  }
}
