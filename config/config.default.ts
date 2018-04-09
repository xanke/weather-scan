'use strict'

import { EggAppConfig, PowerPartial } from 'egg'

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>

// app special config scheme
export interface BizConfig {
  sourceUrl: string
  middleware: string[]
  sequelize: {
    dialect: string
    database: string
    host: string
    port: number
    username: string
    password: string
    timezone: string
  }
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig

  config.sequelize = {
    dialect: 'mysql',
    database: 'weather',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    timezone: '+08:00'
  }

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523272516585_8244'

  // add your config here
  config.middleware = []

  return config
}
