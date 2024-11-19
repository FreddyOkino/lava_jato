const prisma = new (require("@prisma/client").PrismaClient)();

const createEndereco = async (req, res) => {
  const {
    tipo,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    clienteId,
  } = req.body;
  try {
    const endereco = await prisma.endereco.create({
      data: {
        tipo: tipo,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        clienteId: clienteId,
      },
    });
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarEnderecos = async (res, req) => {
  try {
    const enderecos = await prisma.endereco.findMany();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarEnderecoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const endereco = await prisma.endereco.findMany({
      where: { id: parseInt(id) },
    });
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEndereco = async (req, res) => {
  const { id } = req.params;
  const atualizado = req.body;
  try {
    const endereco = await prisma.endereco.update({
      where: { id: parseInt(id) },
      data: atualizado,
    });
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCarro = async (req, res) => {
  const { id } = erq.params;
  try {
    const endereco = await prisma.endereco.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEndereco,
  buscarEnderecos,
  buscarEnderecoPorId,
  updateEndereco,
  deleteCarro,
};
