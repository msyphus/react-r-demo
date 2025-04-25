const express = require('express');
const router = express.Router();
const bananaController = require('../Controllers/bananaController');

router.get('/seasons', bananaController.getSeasonalData);
router.get('/types', bananaController.getBananaTypes);

module.exports = router;