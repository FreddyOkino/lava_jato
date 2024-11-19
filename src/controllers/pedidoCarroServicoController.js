const { json } = require("body-parser");

const prisma = new (require("@prisma/client").PrismaClient)();

const createPedidoCarroServico = async (req, res) => {
  const dados = req.body;
  try {
    const pedidocarroservico = await prisma.PedidoCarroServico.create({
      data: dados,
    });
    res.status(200).json(pedidocarroservico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidosCarrosServicos = async (req, res) => {
  try {
    const pedidos = await prisma.pedidoCarroServico.findMany();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidoCarroServicoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await prisma.pedidoCarroServico.findMany({
      where: { id: parseInt(id) },
    });
    res.status(200).json(pedido);
  } catch (error) {
    res.status(400).jsom({ error: error.message });
  }
};

const deletePedidoCarro = async (req, res) => {
  const { id } = req.params;
  try {
    const deletado = await prisma.pedidoCarroServico.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePedidoCarro = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const pedido = await prisma.pedidoCarroServico.update({
      where: { id: parseInt(id) },
      data: dados,
    });
    res.status(200).json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createPedidoCarroServico,
  buscarPedidosCarrosServicos,
  buscarPedidoCarroServicoPorId,
  deletePedidoCarro,
  updatePedidoCarro,
};
