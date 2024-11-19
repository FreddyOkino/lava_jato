/*
  Warnings:

  - You are about to drop the column `funcionarioId` on the `Pedido` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_funcionarioId_fkey";

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "funcionarioId";

-- CreateTable
CREATE TABLE "PedidoFuncionario" (
    "pedidoId" INTEGER NOT NULL,
    "funcionarioId" INTEGER NOT NULL,

    CONSTRAINT "PedidoFuncionario_pkey" PRIMARY KEY ("pedidoId","funcionarioId")
);

-- AddForeignKey
ALTER TABLE "PedidoFuncionario" ADD CONSTRAINT "PedidoFuncionario_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoFuncionario" ADD CONSTRAINT "PedidoFuncionario_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
