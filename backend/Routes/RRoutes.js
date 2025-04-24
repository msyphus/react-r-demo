const express = require('express');
const router = express.Router();
const RController = require('../Controllers/RController');

router.get('/histogram', RController.getHistogram);
router.get('/max', RController.getMax);

module.exports = router;