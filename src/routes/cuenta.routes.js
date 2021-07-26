const express = require('express');
const router = express.Router();
const controlador = require('../controllers/cuenta.controllers');

router.get('/', controlador.list);
router.post('/add', controlador.save);
router.get('/delete/:id', controlador.delete);

module.exports = router;