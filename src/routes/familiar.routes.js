const express = require('express');
const router = express.Router();
const controlador = require('../controllers/familiar.controllers');

router.get('/familiar', controlador.list);
router.post('/add-familiar', controlador.save);
router.get('/delete-familiar/:id', controlador.delete);

module.exports = router;