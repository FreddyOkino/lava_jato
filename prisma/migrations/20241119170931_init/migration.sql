/*
  Warnings:

  - You are about to drop the `PedidoServico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoServico" DROP CONSTRAINT "PedidoServico_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoServico" DROP CONSTRAINT "PedidoServico_servicoId_fkey";

-- DropTable
DROP TABLE "PedidoServico";
