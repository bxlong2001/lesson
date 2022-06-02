const express = require('express');
const router = express.Router();

const wordController = require('../app/controllers/WordController');

// siteController.index
router.get('/create', wordController.create);
router.post('/store', wordController.store);
router.get('/:id/edit', wordController.edit);
router.put('/:id', wordController.update);
router.patch('/:id/restore', wordController.restore);
router.delete('/:id', wordController.delete);
router.delete('/:id/permanent', wordController.deletePermanent);
router.get('/:slug', wordController.show);

module.exports = router;
