const express = require('express');
const router = express.Router();
const ofertaController = require('../controllers/ofertaController');

// Rutas que ya tenías (Búsqueda y Nuevo ID)
router.get('/', ofertaController.mostrarPagina);

// ¡NUEVA RUTA! Para abrir la ventana de la lista
router.get('/lista', ofertaController.listarOfertas); 

// Ruta invisible para el botón "Nuevo"
router.get('/api/nuevo-id', ofertaController.obtenerNuevoId);
// NUEVAS RUTAS CRUD:
// Usamos POST para guardar, PUT para actualizar y DELETE para eliminar
router.post('/api/ofertas', ofertaController.crearOferta);
router.put('/api/ofertas/:id', ofertaController.actualizarOferta);
router.delete('/api/ofertas/:id', ofertaController.eliminarOferta);

module.exports = router;