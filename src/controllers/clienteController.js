const prisma = new (require("@prisma/client").PrismaClient)();

const createCliente = async (req, res) => {
  try {
    const { nome, telefone, cpf, email } = req.body;
    const cliente = await prisma.Cliente.create({
      data: { nome, telefone, cpf, email },
    });
    res.status(201).json(cliente);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar cliente", details: error.message });
  }
};

const buscarTodosCliente = async (req, res) => {
  try {
    const clientes = await prisma.Cliente.findMany();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarClientePorId = async (req, res) => {
  try {
    const { cpf } = req.params;
    const resposta = await prisma.Cliente.findMany({
      where: { cpf: cpf },
    });
    res.status(200).json(resposta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await prisma.Cliente.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const clienteAtualizado = req.body;
  try {
    const atualizado = await prisma.Cliente.update({
      where: { id: parseInt(id) },
      data: clienteAtualizado,
    });
    res.status(200).json(atualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCliente,
  buscarTodosCliente,
  buscarClientePorId,
  deleteCliente,
  updateCliente,
};
