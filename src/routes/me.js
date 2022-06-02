const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// siteController.index
router.get('/stored/words', meController.storedWords);
router.get('/bin/words', meController.binWords);

module.exports = router;
