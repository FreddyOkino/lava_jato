const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const prisma = require("@prisma/client").PrismaClient;

const app = express();
const port = 3000;

app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lava Jato API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"], // Caminho para as rotas
};

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//rotas
const clienteRoute = require("./routes/clienteRoute");
const funcionarioRoute = require("./routes/funcionarioRoute");
const carroRoute = require("./routes/carroRoute");
const enderecoRoute = require("./routes/enderecoRoute");
const pedidoRoute = require("./routes/pedidoRoute")

app.use("/funcionario", funcionarioRoute);
app.use("/cliente", clienteRoute);
app.use("/carro", carroRoute);
app.use("/endereco", enderecoRoute);
app.use("/pedido",pedidoRoute)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
