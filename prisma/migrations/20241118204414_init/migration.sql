-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Carro" ADD CONSTRAINT "Carro_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;
