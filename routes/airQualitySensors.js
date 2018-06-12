'use strict';

const app = require('express');
const router = app.Router();

const GrovePi = require('../vendors/GrovePi/Software/NodeJS/libs').GrovePi;
const AirQualityAnalogSensor = GrovePi.sensors.AirQualityAnalog;

const airQualitySensor = new AirQualityAnalogSensor(1);

router.get('/read', (req, res, next) => {
  const res = airQualitySensor.read();
  res.json({ quality: res });
});

module.exports = router;