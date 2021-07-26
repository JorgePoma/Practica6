const express = require('express');
const router = express.Router();
const controlador = require('../controllers/transaccion.controllers');

router.get('/transacciones', controlador.list);
router.post('/add-transacciones', controlador.saved);

module.exports = router;