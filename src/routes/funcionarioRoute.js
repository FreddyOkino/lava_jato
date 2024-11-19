const express = require("express");
const route = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

/**
 * @swagger
 * /funcionario:
 *   post:
 *     summary: Cria um novo funcionario
 *     tags: 
 *       - funcionário
 *     description: Cria um funcionario com nome, cargo e telefone.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "João da Silva"
 *               cargo:
 *                 type: string
 *                 example: "manobrista"
 *               telefone:
 *                 type: string
 *                 example: "(67) 99999-8888"
 *
 *     responses:
 *       201:
 *         description: Funcionario criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                  type: string
 *                  example: "João da Silva"
 *                 cargo:
 *                  type: string
 *                  example: "manobrista"
 *                 telefone:
 *                  type: string
 *                  example: "(67) 99999-8888"
 */
route.post("/", funcionarioController.createFuncionario);

/**
 * @swagger
 * /funcionario:
 *   get:
 *     summary: Retorna a lista de todos os funcionarios
 *     tags: 
 *       - funcionário
 *     responses:
 *        200:
 *          description: Lista de funcionarios
 */
route.get("/", funcionarioController.buscarTodosFuncionarios);

/**
 * @swagger
 * /funcionario/{id}:
 *   get:
 *     summary: Busca um funcionario pelo ID
 *     tags: 
 *       - funcionário
 *     description: Retorna os detalhes de um funcinario.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id do funcionario a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Funcionario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   cargo: string
 *                 telefone:
 *                   type: string
 *
 *       404:
 *         description: Funcionario não encontrado
 */
route.get("/:id", funcionarioController.buscarFuncionarioPorId);

/**
 * @swagger
 * /funcionario/{id}:
 *   delete:
 *     summary: Deleta um funcionario pelo ID
 *     tags: 
 *       - funcionário
 *     description: Deleta um funcionario do banco de dados e retorna o cliente deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionario a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionario deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 cargo:
 *                   type: string
 *                 telefone:
 *                   type: string
 *       400:
 *         description: Erro ao tentar deletar o cliente
 *       404:
 *         description: Cliente não encontrado
 */
route.delete("/:id", funcionarioController.deletarFuncionario);

/**
 * @swagger
 * /funcionario/{id}:
 *   put:
 *     summary: Atualiza um funcionário pelo ID
 *     tags: 
 *       - funcionário
 *     description: Atualiza os dados de um funcionário. Envie apenas os campos que deseja atualizar no corpo da requisição.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do funcionário a ser atualizado
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
 *               nome:
 *                 type: string
 *                 description: Nome do funcionário
 *               cargo:
 *                 type: string
 *                 description: Cargo do funcionário
 *               telefone:
 *                 type: string
 *                 description: Telefone do funcionário
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
 *                 nome:
 *                   type: string
 *                 cargo:
 *                   type: string
 *                 telefone:
 *                   type: string
 *       400:
 *         description: Erro na atualização do funcionário
 *       404:
 *         description: Funcionário não encontrado
 */
route.put("/:id", funcionarioController.updateFuncionario);

module.exports = route;
