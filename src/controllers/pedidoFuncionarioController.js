const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPedidoFuncionario = async (req, res) => {
  const dados = req.body;
  try {
    const novoRegistro = await prisma.pedidoFuncionario.create({
      data: dados,
    });
    res.status(201).json(novoRegistro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidosFuncionarios = async (req, res) => {
  try {
    const registros = await prisma.pedidoFuncionario.findMany();
    res.status(200).json(registros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidoFuncionarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const registro = await prisma.pedidoFuncionario.findUnique({
      where: { id: parseInt(id) },
    });
    if (!registro) {
      return res.status(404).json({ error: "Registro não encontrado." });
    }
    res.status(200).json(registro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePedidoFuncionario = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const registroAtualizado = await prisma.pedidoFuncionario.update({
      where: { id: parseInt(id) },
      data: dados,
    });
    res.status(200).json(registroAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePedidoFuncionario = async (req, res) => {
  const { id } = req.params;
  try {
    const registroExcluido = await prisma.pedidoFuncionario.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(registroExcluido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPedidoFuncionario,
  buscarPedidosFuncionarios,
  buscarPedidoFuncionarioPorId,
  updatePedidoFuncionario,
  deletePedidoFuncionario,
};
