const prisma = new (require("@prisma/client").PrismaClient)();

const createFuncionario = async (req, res) => {
  const { nome, cargo, telefone } = req.body;
  try {
    const funcionario = await prisma.funcionario.create({
      data: {
        nome: nome,
        cargo: cargo,
        telefone: telefone,
      },
    });
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const buscarTodosFuncionarios = async (req, res) => {
  try {
    const funcionarios = await prisma.funcionario.findMany();
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const buscarFuncionarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const funcionario = await prisma.funcionario.findMany({
      where: { id: parseInt(id) },
    });
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletarFuncionario = async (req, res) => {
  const { id } = req.params;
  try {
    const funcionario = await prisma.Funcionario.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateFuncionario = async (req, res) => {
  const { id } = req.params; 
  const dadosParaAtualizar = req.body; 

  try {
    const funcionarioAtualizado = await prisma.funcionario.update({
      where: { id: parseInt(id) },
      data: dadosParaAtualizar,
    });
    res.status(200).json(funcionarioAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFuncionario,
  buscarTodosFuncionarios,
  buscarFuncionarioPorId,
  deletarFuncionario,
  updateFuncionario,
};
