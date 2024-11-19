const express = require("express");
const route = express.Router();
const carroController = require("../controllers/carroController");

/**
 * @swagger
 * /carro:
 *   post:
 *     summary: Cria um novo carro
 *     tags: 
 *       - carro
 *     description: Cria um carro com modelo, placa e cor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *                 example: "Fusca"
 *               placa:
 *                 type: string
 *                 example: "HTH-6788"
 *               cor:
 *                 type: string
 *                 example: "Azul"
 *               clienteId:
 *                 type: interger
 *                 example: 1
 *
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 modelo:
 *                  type: string
 *                  example: "Fusca"
 *                 placa:
 *                  type: string
 *                  example: "HTH-6788"
 *                 cor:
 *                  type: string
 *                  example: "Azul"
 *                 clienteId:
 *                  type: integer
 *                  example: 1
 */
route.post("/", carroController.createCarro);
/**
 * @swagger
 * /carro:
 *   get:
 *     summary: Retorna a lista de todos os carros
 *     tags: 
 *       - carro
 *     responses:
 *        200:
 *          description: Lista de carros
 */
route.get("/", carroController.buscarTodosCarros);

/**
 * @swagger
 * /carro/{id}:
 *   get:
 *     summary: Busca um carro pelo ID
 *     tags: 
 *       - carro
 *     description: Retorna os detalhes de um carro.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id do carro a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                  type: string
 *                 placa:
 *                  type: string
 *                 cor:
 *                  type: string
 *                 clienteId:
 *                  type: integer
 *       404:
 *         description: Carro não encontrado
 */
route.get('/:id', carroController.buscarCarroPorId)

/**
 * @swagger
 * /carro/{id}:
 *   delete:
 *     summary: Deleta um carro com ID
 *     tags: 
 *       - carro
 *     description: Deleta um carro do banco de dados e retorna o carro deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do carro a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carro deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                   type: string
 *                 placa:
 *                   type: string
 *                 cor:
 *                   type: string
 *                 clienteId:
 *                   type: integer
 *       400:
 *         description: Erro ao tentar deletar o cliente
 *       404:
 *         description: Cliente não encontrado
 */
route.delete('/:id', carroController.deleteCarro)

/**
 * @swagger
 * /carro/{id}:
 *   put:
 *     summary: Atualiza um carro pelo ID
 *     tags: 
 *       - carro
 *     description: Atualiza os dados de um carro. Envie apenas os campos que deseja atualizar no corpo da requisição.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do carro a ser atualizado
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelo:
 *                 type: string
 *                 example: "Fusca"
 *               placa:
 *                 type: string
 *                 example: "HTH-6788"
 *               cor:
 *                 type: string
 *                 example: "Azul"
 *               clienteId:
 *                 type: interger
 *                 example: 1
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 modelo:
 *                   type: string
 *                 placa:
 *                   type: string
 *                 cor:
 *                   type: string
 *                 clienteId:
 *                   type: integer
 *       400:
 *         description: Erro na atualização do funcionário
 *       404:
 *         description: Funcionário não encontrado
 */
route.put('/:id', carroController.updateCarro)


module.exports = route;
