module.exports = app => {
  const mongoose = app.mongoose

  const Schema = mongoose.Schema

  const ForecastSchma = new Schema(
    {
      // date: { type: String },
      city: { type: String },
      utime: { type: Number },
      // wea: { type: String },
      // wd: { type: String },
      // ws: { type: String },
      // max: { type: Number },
      // min: { type: Number },
      // aqi: { type: Number },
      list: { type: Array }
    },
    { versionKey: false }
  )
  ForecastSchma.index({ date: -1, city: 1 })

  return mongoose.model('Forecast', ForecastSchma, 'forecasts')
}

// module.exports = app => {
//   const { STRING, DATE, INTEGER } = app.Sequelize

//   const Forecast = app.model.define(
//     'forecast',
//     {
//       date: DATE,
//       city: {
//         type: STRING,
//         allowNull: false
//       },
//       wea: {
//         type: STRING,
//         allowNull: false
//       },
//       wd: {
//         type: STRING,
//         allowNull: false
//       },
//       ws: {
//         type: STRING,
//         allowNull: false
//       },
//       max: INTEGER,
//       min: INTEGER,
//       aqi: INTEGER
//     }
//   )

//   return Forecast
// }
