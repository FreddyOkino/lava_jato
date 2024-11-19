/*
  Warnings:

  - You are about to drop the `Servico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoServico" DROP CONSTRAINT "PedidoServico_servicoId_fkey";

-- DropTable
DROP TABLE "Servico";

-- CreateTable
CREATE TABLE "Lavagem" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "carroId" INTEGER NOT NULL,
    "pedidoId" INTEGER NOT NULL,

    CONSTRAINT "Lavagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lavagem" ADD CONSTRAINT "Lavagem_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Carro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lavagem" ADD CONSTRAINT "Lavagem_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
