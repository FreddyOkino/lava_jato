const express = require("express");
const route = express.Router();
const PedidoFuncionarioController = require("../controllers/pedidoFuncionarioController");

/**
 * @swagger
 * /pedidofuncionario:
 *   post:
 *     summary: Cria um novo registro de PedidoFuncionario
 *     tags: 
 *       - pedido-funcionario
 *     description: Cria uma associação entre um pedido e um funcionário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pedidoId:
 *                 type: integer
 *                 example: 1
 *               funcionarioId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Associação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 pedidoId:
 *                   type: integer
 *                   example: 1
 *                 funcionarioId:
 *                   type: integer
 *                   example: 2
 */
route.post("/", PedidoFuncionarioController.createPedidoFuncionario);

/**
 * @swagger
 * /pedidofuncionario:
 *   get:
 *     summary: Retorna a lista de todas as associações PedidoFuncionario
 *     tags: 
 *       - pedido-funcionario
 *     responses:
 *       200:
 *         description: Lista de associações PedidoFuncionario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   pedidoId:
 *                     type: integer
 *                   funcionarioId:
 *                     type: integer
 */
route.get("/", PedidoFuncionarioController.buscarPedidosFuncionarios);

/**
 * @swagger
 * /pedidofuncionario/{id}:
 *   get:
 *     summary: Busca uma associação PedidoFuncionario por ID
 *     tags: 
 *       - pedido-funcionario
 *     description: Retorna os detalhes de uma associação PedidoFuncionario.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da associação PedidoFuncionario
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Associação encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 pedidoId:
 *                   type: integer
 *                 funcionarioId:
 *                   type: integer
 *       404:
 *         description: Associação não encontrada
 */
route.get("/:id", PedidoFuncionarioController.buscarPedidoFuncionarioPorId);

/**
 * @swagger
 * /pedidofuncionario/{id}:
 *   put:
 *     summary: Atualiza uma associação PedidoFuncionario por ID
 *     tags: 
 *       - pedido-funcionario
 *     description: Atualiza os dados de uma associação PedidoFuncionario.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da associação PedidoFuncionario
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pedidoId:
 *                 type: integer
 *                 example: 1
 *               funcionarioId:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Associação atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 pedidoId:
 *                   type: integer
 *                 funcionarioId:
 *                   type: integer
 *       400:
 *         description: Erro na atualização
 *       404:
 *         description: Associação não encontrada
 */
route.put("/:id", PedidoFuncionarioController.updatePedidoFuncionario);

/**
 * @swagger
 * /pedidofuncionario/{id}:
 *   delete:
 *     summary: Exclui uma associação PedidoFuncionario por ID
 *     tags: 
 *       - pedido-funcionario
 *     description: Exclui uma associação PedidoFuncionario do banco de dados.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da associação PedidoFuncionario
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Associação excluída com sucesso
 *       404:
 *         description: Associação não encontrada
 */
route.delete("/:id", PedidoFuncionarioController.deletePedidoFuncionario);

module.exports = route;
