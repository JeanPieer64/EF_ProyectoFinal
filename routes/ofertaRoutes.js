const express = require('express');
const router = express.Router();
const ofertaController, buscarPorConocimientos = require('../controllers/ofertaController');

router.get('/', ofertaController.mostrarPagina);

router.get('/lista', ofertaController.listarOfertas); 

router.get('/api/nuevo-id', ofertaController.obtenerNuevoId);

router.get('/busqueda', buscarPorConocimientos);

router.post('/api/ofertas', ofertaController.crearOferta);
router.put('/api/ofertas/:id', ofertaController.actualizarOferta);
router.delete('/api/ofertas/:id', ofertaController.eliminarOferta);

module.exports = router;