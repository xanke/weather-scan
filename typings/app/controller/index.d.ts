// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Forecast from '../../../app/controller/forecast';
import History from '../../../app/controller/history';
import Home from '../../../app/controller/home';
import Weather from '../../../app/controller/weather';

declare module 'egg' {
  interface IController {
    forecast: Forecast;
    history: History;
    home: Home;
    weather: Weather;
  }
}
