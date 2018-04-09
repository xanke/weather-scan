module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize

  const Forecast = app.model.define(
    'forecast',
    {
      date: DATE,
      city: {
        type: STRING,
        allowNull: false
      },
      wea: {
        type: STRING,
        allowNull: false
      },
      wd: {
        type: STRING,
        allowNull: false
      },
      ws: {
        type: STRING,
        allowNull: false
      },
      max: INTEGER,
      min: INTEGER,
      aqi: INTEGER
    },
    {
      getterMethods: {
        // createAt() {
        //   return moment(this.created_at).format('M月D日 H:mm:ss')
        // }
      }
    }
  )

  return Forecast
}
