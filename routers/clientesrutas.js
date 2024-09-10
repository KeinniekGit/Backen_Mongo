const express = require('express');
const router = express.Router();
const clienteController= require('../controllers/clienteController');
router.post('/',clienteController.agregarClientes);
router.get('/',clienteController.buscarClientes);
router.get('/:id',clienteController.BuscarCliente);
router.put('/:id',clienteController.modificarClientes);
router.patch('/:id',clienteController.editarClientes);


module.exports = router
