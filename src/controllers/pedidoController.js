const prisma = new (require("@prisma/client").PrismaClient)();

const createPedido = async (req, res) => {
  const { clienteId, status } = req.body;

  try {
    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        status,
      },
    });

    res.status(201).json(pedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(400).json({ error: error.message });
  }
};

const getPedidosByCliente = async (req, res) => {
  const { clienteId } = req.params;

  try {
    const pedidos = await prisma.pedido.findMany({
      where: { clienteId: parseInt(clienteId) },
    });

    res.status(200).json(pedidos);
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    res.status(400).json({ error: error.message });
  }
};

const updatePedidoStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const pedido = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    res.status(200).json(pedido);
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidos = async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({});

    res.status(200).json(pedidos);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    res.status(400).json({ error: error.message });
  }
};

const deletePedido = async (req, res) => {
  const { id } = req.params;

  try {
    const pedido = await prisma.pedido.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json(pedido);
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPedido,
  getPedidosByCliente,
  updatePedidoStatus,
  buscarPedidos,
  deletePedido,
};
