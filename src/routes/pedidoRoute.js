const express = require("express");
const route = express.Router();
const pedidoController = require("../controllers/pedidoController");

/**
 * @swagger
 * /pedido:
 *   post:
 *     summary: Cria um novo pedido com lavagens e serviços associados
 *     tags:
 *       - pedido
 *     description: Cria um pedido para o cliente, associa lavagens aos carros e serviços ao pedido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: "EM_ANDAMENTO"
 *               
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 clienteId:
 *                   type: integer
 *                   example: 1
 *                 status:
 *                   type: string
 *                   example: "EM_ANDAMENTO"
 *                
 *                       
 */
route.post("/", pedidoController.createPedido);

/**
 * @swagger
 * /pedido/{clienteId}:
 *   get:
 *     summary: Obtém todos os pedidos de um cliente, incluindo lavagens e serviços
 *     tags:
 *       - pedido
 *     description: Retorna todos os pedidos de um cliente, com as lavagens e serviços associados.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         description: ID do cliente para buscar os pedidos.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista de pedidos com lavagens e serviços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 clienteId:
 *                   type: integer
 *                   example: 1
 *                 status:
 *                   type: string
 *                   example: "EM_ANDAMENTO"
 *                   
 *                   
 */
route.get("/:clienteId", pedidoController.getPedidosByCliente);

/**
 * @swagger
 * /pedido:
 *   get:
 *     summary: Retorna a lista de todos os pedidos, incluindo lavagens e serviços
 *     tags:
 *       - pedido
 *     responses:
 *        200:
 *          description: Lista de pedidos com lavagens e serviços
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      example: 1
 *                    status:
 *                      type: string
 *                      example: "EM_ANDAMENTO"
 *                    clienteId:
 *                      type: integer
 *                      example: 1
 *                    
 */
route.get("/", pedidoController.buscarPedidos);

/**
 * @swagger
 * /pedido/{id}:
 *   delete:
 *     summary: Deleta um pedido com ID
 *     tags:
 *       - pedido
 *     description: Deleta um pedido do banco de dados e retorna o pedido deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 clienteId:
 *                   type: integer
 *                 dataPedido:
 *                   type: string
 *                   format: date-time
 *                 status:
 *                   type: string
 *       400:
 *         description: Erro ao tentar deletar o pedido
 *       404:
 *         description: Pedido não encontrado
 */
route.delete("/:id", pedidoController.deletePedido);

/**
 * @swagger
 * /pedido/{id}:
 *   put:
 *     summary: Atualiza um pedido e seus serviços associados
 *     tags:
 *       - pedido
 *     description: Atualiza qualquer campo de um pedido e permite adicionar ou remover serviços associados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido a ser atualizado
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: "FINALIZADO"
 *               
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 clienteId:
 *                   type: integer
 *                   example: 1
 *                 status:
 *                   type: string
 *                   example: "FINALIZADO"
 *                 
 *       400:
 *         description: Erro ao tentar atualizar o pedido
 *       404:
 *         description: Pedido não encontrado
 */
route.put("/:id", pedidoController.updatePedidoStatus);

module.exports = route;
