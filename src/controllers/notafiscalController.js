const prisma = new (require("@prisma/client").PrismaClient)();

const createNotaFiscal = async (req, res) => {
  const { valorTotal, pedidoId } = req.body;

  try {
    const notaFiscal = await prisma.notaFiscal.create({
      data: {
        valorTotal,
        pedidoId,
      },
    });
    res.status(201).json(notaFiscal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarNotasFiscais = async (req, res) => {
  try {
    const notas = await prisma.notaFiscal.findMany();
    res.status(200).json(notas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarNotaFiscalPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const nota = await prisma.notaFiscal.findUnique({
      where: { id: parseInt(id) },
    });

    if (!nota) {
      return res.status(404).json({ error: "Nota fiscal não encontrada." });
    }

    res.status(200).json(nota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNotaFiscal = async (req, res) => {
  const { id } = req.params;
  const { valorTotal } = req.body;

  try {
    const nota = await prisma.notaFiscal.update({
      where: { id: parseInt(id) },
      data: { valorTotal },
    });
    res.status(200).json(nota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNotaFiscal = async (req, res) => {
  const { id } = req.params;

  try {
    const nota = await prisma.notaFiscal.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(nota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNotaFiscal,
  buscarNotasFiscais,
  buscarNotaFiscalPorId,
  updateNotaFiscal,
  deleteNotaFiscal,
};
