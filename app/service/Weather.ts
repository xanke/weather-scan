import { Service } from 'egg'
const superAgent = require('superagent')
const cheerio = require('cheerio')
const moment = require('moment')
/**
 * Test Service
 */
export default class Weather extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getCity(city: string) {

    const data = await superAgent.get(`http://weather.sina.com.cn/${city}`)
    const $ = cheerio.load(data.text)

    const list: any[] = []
    const today = moment().format('YYYY-MM-DD')

    $('.blk_fc_c0_i').each((index, item) => {
      let $item = $(item)
      console.log(index)

      let date = $item.find('.wt_fc_c0_i_date').text()
      date = moment().format('YYYY') + '-' + date

      let teaTeam = $item.find('.wt_fc_c0_i_temp').text()
      teaTeam = teaTeam.replace(/°C/g, '')
      teaTeam = teaTeam.split('/').map(_ => parseInt(_))

      const wdText = $item.find('.wt_fc_c0_i_tip').text().replace(/级/g, '').replace('～', '-').split(' ')
      const weaLight = $item.find('.icons0_wt').eq(0).attr('title') || ''
      const weaNignt = $item.find('.icons0_wt').eq(1).attr('title') || ''
      const aqi = parseInt($item.find('.wt_fc_c0_i_level .l').text())
      
      let wea
      if (weaLight === weaNignt || weaNignt === '') {
        wea = weaLight
      } else {
        wea = `${weaLight}-${weaNignt}`
      }

      let [wd, ws] = wdText
      const [min, max] = teaTeam

      if (date !== today) {

        const create = {
          city,
          date,
          min,
          max,
          wd,
          ws,
          wea,
          aqi
        }
        list.push(create)

      }
    })
    

    return list
  }
}
