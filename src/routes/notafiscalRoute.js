const express = require("express");
const route = express.Router();
const NotaFiscalController = require("../controllers/notafiscalController");

/**
 * @swagger
 * /notafiscal:
 *   post:
 *     summary: Cria uma nova Nota Fiscal
 *     tags:
 *       - nota-fiscal
 *     description: Cria uma nova nota fiscal vinculada a um pedido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valorTotal:
 *                 type: number
 *                 example: 200.50
 *               pedidoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Nota Fiscal criada com sucesso
 */
route.post("/", NotaFiscalController.createNotaFiscal);

/**
 * @swagger
 * /notafiscal:
 *   get:
 *     summary: Retorna todas as Notas Fiscais
 *     tags:
 *       - nota-fiscal
 *     responses:
 *       200:
 *         description: Lista de Notas Fiscais
 */
route.get("/", NotaFiscalController.buscarNotasFiscais);

/**
 * @swagger
 * /notafiscal/{id}:
 *   get:
 *     summary: Busca uma Nota Fiscal por ID
 *     tags:
 *       - nota-fiscal
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da Nota Fiscal
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Nota Fiscal encontrada
 *       404:
 *         description: Nota Fiscal não encontrada
 */
route.get("/:id", NotaFiscalController.buscarNotaFiscalPorId);

/**
 * @swagger
 * /notafiscal/{id}:
 *   put:
 *     summary: Atualiza uma Nota Fiscal
 *     tags:
 *       - nota-fiscal
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da Nota Fiscal
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valorTotal:
 *                 type: number
 *                 example: 300.75
 *     responses:
 *       200:
 *         description: Nota Fiscal atualizada com sucesso
 */
route.put("/:id", NotaFiscalController.updateNotaFiscal);

/**
 * @swagger
 * /notafiscal/{id}:
 *   delete:
 *     summary: Exclui uma Nota Fiscal
 *     tags:
 *       - nota-fiscal
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da Nota Fiscal
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Nota Fiscal excluída com sucesso
 *       404:
 *         description: Nota Fiscal não encontrada
 */
route.delete("/:id", NotaFiscalController.deleteNotaFiscal);

module.exports = route;
