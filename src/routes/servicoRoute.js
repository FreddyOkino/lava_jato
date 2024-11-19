const express = require("express");
const route = express.Router();
const servicoController = require("../controllers/servicoController");
/**
 * @swagger
 * /servico:
 *   post:
 *     summary: Cria um novo serviço
 *     tags:
 *       - servico
 *     description: Adiciona um novo serviço ao sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Lavagem completa"
 *               descricao:
 *                 type: string
 *                 example: "Lavagem interna e externa do veículo"
 *               preco:
 *                 type: number
 *                 example: 79.90
 *     responses:
 *       201:
 *         description: Serviço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 preco:
 *                   type: number
 *       400:
 *         description: Erro na criação do serviço
 */
route.post("/", servicoController.createServico);
/**
 * @swagger
 * /servico:
 *   get:
 *     summary: Lista todos os serviços
 *     tags:
 *       - servico
 *     description: Retorna uma lista de todos os serviços disponíveis.
 *     responses:
 *       200:
 *         description: Lista de serviços retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do serviço
 *                   nome:
 *                     type: string
 *                     description: Nome do serviço
 *                   descricao:
 *                     type: string
 *                     description: Descrição do serviço
 *                   preco:
 *                     type: number
 *                     description: Preço do serviço
 *       400:
 *         description: Erro ao buscar os serviços
 */
route.get("/", servicoController.buscarServico);
/**
 * @swagger
 * /servico/{id}:
 *   get:
 *     summary: Busca um serviço pelo ID
 *     tags:
 *       - servico
 *     description: Retorna os detalhes de um serviço específico pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do serviço a ser buscado
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Serviço retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 preco:
 *                   type: number
 *       404:
 *         description: Serviço não encontrado
 */
route.get("/:id", servicoController.buscarServicoPorId);
/**
 * @swagger
 * /servico/{id}:
 *   delete:
 *     summary: Deleta um serviço pelo ID
 *     tags:
 *       - servico
 *     description: Remove um serviço específico pelo ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do serviço a ser deletado
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Serviço deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Serviço deletado com sucesso"
 *       404:
 *         description: Serviço não encontrado
 */
route.delete("/:id", servicoController.deletarServico);
/**
 * @swagger
 * /servico/{id}:
 *   put:
 *     summary: Atualiza um serviço pelo ID
 *     tags:
 *       - servico
 *     description: Atualiza os dados de um serviço. Envie apenas os campos que deseja atualizar no corpo da requisição.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do serviço a ser atualizado
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
 *               nome:
 *                 type: string
 *                 example: "Lavagem Premium"
 *               descricao:
 *                 type: string
 *                 example: "Lavagem com cera e polimento"
 *               preco:
 *                 type: number
 *                 example: 129.90
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 descricao:
 *                   type: string
 *                 preco:
 *                   type: number
 *       400:
 *         description: Erro na atualização do serviço
 *       404:
 *         description: Serviço não encontrado
 */

route.put("/:id", servicoController.updateServico);
module.exports = route;
