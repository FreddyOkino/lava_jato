const prisma = new (require("@prisma/client").PrismaClient)();

const createServico = async (req, res) => {
  const dados = req.body;
  try {
    const servico = await prisma.servico.create({
      data: dados,
    });
    res.status(200).json(servico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarServico = async (req, res) => {
  try {
    const servicos = await prisma.servico.findMany();
    res.status(200).json(servicos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarServicoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const servico = await prisma.servico.findMany({
      where: { id: parseInt(id) },
    });
    res.status(200).json(servico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletarServico = async (req, res) => {
  const { id } = req.params;
  try {
    const servico = await prisma.servico.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateServico = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const servico = await prisma.servico.update({
      where: { id: parseInt(id) },
      data: dados,
    });
    res.status(200).json(servico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createServico,
  buscarServico,
  buscarServicoPorId,
  deletarServico,
  updateServico,
};