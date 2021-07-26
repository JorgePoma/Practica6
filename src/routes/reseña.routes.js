const express = require('express');
const router = express.Router();
const controlador = require('../controllers/reseña.controllers');

router.get('/resenias', controlador.list);
router.post('/add-resenias', controlador.saved);

module.exports = router;