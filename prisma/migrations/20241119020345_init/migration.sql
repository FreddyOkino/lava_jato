/*
  Warnings:

  - You are about to drop the `Lavagem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lavagem" DROP CONSTRAINT "Lavagem_carroId_fkey";

-- DropForeignKey
ALTER TABLE "Lavagem" DROP CONSTRAINT "Lavagem_pedidoId_fkey";

-- DropTable
DROP TABLE "Lavagem";

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PedidoServico" ADD CONSTRAINT "PedidoServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE CASCADE ON UPDATE CASCADE;
