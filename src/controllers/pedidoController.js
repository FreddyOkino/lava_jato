const prisma = new (require("@prisma/client").PrismaClient)();

const createPedido = async (req, res) => {
  const { clienteId, funcionarioId, status, carros, servicos } = req.body;

  try {
    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        funcionarioId,
        status,
        servicos: {
          create: servicos.map((servico) => ({
            servico: {
              connect: { id: servico.servicoId }, 
            },
          })),
        },
        lavagens: {
          create: carros.map((carro) => ({
            tipo: carro.tipo,
            preco: carro.preco,
            status: carro.status,
            carro: {
              connect: { id: carro.carroId },
            },
          })),
        },
      },
    });

    res.status(201).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const getPedidosByCliente = async (req, res) => {
  const { clienteId } = req.params;

  try {
    const pedidos = await prisma.pedido.findMany({
      where: {
        clienteId: parseInt(clienteId),
      },
      include: {
        lavagens: {
          include: {
            carro: true, 
          },
        },
        servicos: {
          include: {
            servico: true, 
          },
        },
        cliente: true,
      },
    });

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const updatePedidoStatus = async (req, res) => {
  const { id } = req.params;
  const atualizado = req.body;

  try {
    const pedido = await prisma.pedido.update({
      where: { id: parseInt(id) },
      data: atualizado,
    });

    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const buscarPedidos = async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        lavagens: {
          include: {
            carro: true, 
          },
        },
        servicos: {
          include: {
            servico: true, 
          },
        },
      },
    });

    res.status(200).json(pedidos);
  } catch (error) {
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
