import { Controller } from 'egg'
const moment = require('moment')

export default class ForecastController extends Controller {
  public async city() {
    const { ctx } = this
    const { city } = ctx.params

    const today = moment().format('YYYY-MM-DD')

    let data = await ctx.model.Forecast.findAll({
      where: {
        city,
        date: {
          $gt: today
        }
      }
    })

    if (data.length > 0) {
      const updateX = moment(data[0]['updated_at']).format('x')
      const time = Date.now() - updateX
      // 大于一小时则重新获取
      if (time > 60000 * 60) {
        data = await ctx.service.weather.getCity(city)
      }
    } else {
      data = await ctx.service.weather.getCity(city)
    }

    ctx.body = data
  }
}
