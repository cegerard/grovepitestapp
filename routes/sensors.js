'use strict';

const app = require('express');
const router = app.Router();

// Grove Pi modules
const groveBoard = require('../libs/grove/grovePiBoard');
const airQualitySensorRoutes = require('./airQualitySensors');
// Add other sensor route here...

router.use('/airquality', airQualitySensorRoutes);

router.get('/', (req, res, next) => {
  res.json({ title: 'Sensors list' });
});

module.exports = router;