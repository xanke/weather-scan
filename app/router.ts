import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  router.get('/forecast/:city', controller.forecast.city)
  // router.get('/day/:city', controller.home.index)
  // router.get('/history/', controller.home.index)
}
