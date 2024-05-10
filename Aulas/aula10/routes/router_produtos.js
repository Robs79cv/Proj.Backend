const express = require('express');

const controllerProdutos = require('../controllers/controller_produtos');

const router = express.Router();

router.post('/', controllerProdutos.validarDados, controllerProdutos.criar);

router.get('/', controllerProdutos.listarTodos);

router.get("/:id", controllerProdutos.obter);

router.put("/:id", controllerProdutos.atualizar);

module.exports = router;