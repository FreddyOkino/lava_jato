const prisma = new (require("@prisma/client").PrismaClient)();

const createCarro = async (req, res) => {
  const { modelo, placa, cor, clienteId } = req.body;
  try {
    const carro = await prisma.Carro.create({
      data: { modelo: modelo, placa: placa, cor: cor, clienteId: clienteId },
    });
    res.status(201).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarTodosCarros = async (req, res) => {
  try {
    const carros = await prisma.Carro.findMany();
    res.status(200).json(carros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarCarroPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const carro = await prisma.Carro.findMany({
      where: { id: parseInt(id) },
    });
    res.status(200).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCarro = async (req, res) => {
  const { id } = req.params;
  try {
    const carro = await prisma.Carro.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCarro = async (req, res) => {
  const { id } = req.params;
  const dadosnovos = req.body;
  try {
    const carroAtualizado = await prisma.Carro.update({
      where: { id: parseInt(id) },
      data: dadosnovos,
    });
    res.status(200).json(carroAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCarro,
  buscarTodosCarros,
  buscarCarroPorId,
  deleteCarro,
  updateCarro,
};
