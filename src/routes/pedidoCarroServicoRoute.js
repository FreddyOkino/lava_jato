const express = require("express");
const route = express.Router();
const pedidoCarroServico = require("../controllers/pedidoCarroServicoController");

/**
 * @swagger
 * /pedidocarroservico:
 *   post:
 *     summary: Cria um novo relacionamento entre pedido, carro e serviço
 *     tags:
 *       - pedidocarroservico
 *     description: Cria um relacionamento entre um pedido, um carro e um serviço, associando-os ao pedido específico.
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
 *               carroId:
 *                 type: integer
 *                 example: 1
 *               servicoId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Relacionamento criado com sucesso
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
 *                 carroId:
 *                   type: integer
 *                   example: 1
 *                 servicoId:
 *                   type: integer
 *                   example: 2
 */
route.post("/", pedidoCarroServico.createPedidoCarroServico);

/**
 *  @swagger
 * /pedidocarroservico:
 *      get:
 *          summary: busca todos os pedidos relacionados com carros e serviços
 *          tags:
 *          - pedidocarroservico
 *          responses:
 *              200:
 *                  description: Lista de todos os pedidos relacionados com carros e serviços
 *
 */
route.get("/", pedidoCarroServico.buscarPedidosCarrosServicos);

/**
 * @swagger
 * /pedidocarroservico/{id}:
 *   get:
 *     summary: Busca os pedidos relacionados com carros e serviços pelo ID
 *     tags:
 *       - pedidocarroservico
 *     description: Retorna os detalhes de um o pedidosrelacionados com carros e serviços.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id do pedido a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido relacionado com carros e serviços encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 pedidoId:
 *                   type: integer
 *                   example: 1
 *                 carroId:
 *                   type: integer
 *                   example: 1
 *                 servicoId:
 *                   type: integer
 *                   example: 2
 *
 *       404:
 *         description: Pedido não encontrado
 */
route.get("/:id", pedidoCarroServico.buscarPedidoCarroServicoPorId);

/**
 * @swagger
 * /pedidocarroservico/{id}:
 *   delete:
 *     summary: Deleta os pedidos relacionados com carros e serviços pelo ID
 *     tags:
 *       - pedidocarroservico
 *     description: Deleta os pedidos relacionados com carros e serviços pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido relacionado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido relacionado deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 pedidoId:
 *                   type: integer
 *                   example: 1
 *                 carroId:
 *                   type: integer
 *                   example: 1
 *                 servicoId:
 *                   type: integer
 *                   example: 2
 *
 *       400:
 *         description: Erro ao tentar deletar o pedido relacionado
 *       404:
 *         description: Pedido relacionado não encontrado
 */
route.delete("/:id", pedidoCarroServico.deletePedidoCarro);

/**
 * @swagger
 * /pedidocarroservico/{id}:
 *   put:
 *     summary: Atualiza os pedidos relacionados com carros e serviços pelo ID
 *     tags:
 *       - pedidocarroservico
 *     description: Atualiza os pedidos relacionados com carros e serviços pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido relacionado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido relacionado Atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 pedidoId:
 *                   type: integer
 *                   example: 1
 *                 carroId:
 *                   type: integer
 *                   example: 1
 *                 servicoId:
 *                   type: integer
 *                   example: 2
 *
 *       400:
 *         description: Erro ao tentar atualizar o pedido relacionado
 *       404:
 *         description: Pedido relacionado não encontrado
 */
route.put("/:id", pedidoCarroServico.updatePedidoCarro);
module.exports = route;
