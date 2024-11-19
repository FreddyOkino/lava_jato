# **Sistema de Pedidos e Serviços para Lava-Jato**

Este projeto foi desenvolvido para gerenciar os pedidos e serviços de um lava-jato, permitindo que os clientes solicitem serviços de lavagem para seus carros, os funcionários realizem esses serviços e o sistema controle o andamento dos pedidos. A aplicação foi desenvolvida utilizando Node.js com Prisma e PostgreSQL.

## **Estrutura do Banco de Dados**

O banco de dados foi modelado com o Prisma e contém as seguintes entidades principais:

### **Modelos**

#### 1. **Cliente**
Representa os clientes do lava-jato.

- `id`: Identificador único do cliente.
- `nome`: Nome do cliente.
- `telefone`: Número de telefone do cliente.
- `cpf`: CPF do cliente.
- `email`: Email do cliente.
- `enderecos`: Relacionamento com os endereços do cliente.
- `pedidos`: Relacionamento com os pedidos feitos pelo cliente.
- `carros`: Relacionamento com os carros do cliente.

#### 2. **Endereco**
Representa os endereços associados aos clientes.

- `id`: Identificador único do endereço.
- `tipo`: Tipo de endereço (casa, trabalho, etc.).
- `logradouro`: Rua do endereço.
- `numero`: Número do endereço.
- `complemento`: Complemento do endereço.
- `bairro`: Bairro do endereço.
- `cidade`: Cidade do endereço.
- `estado`: Estado do endereço.
- `cep`: Código postal.
- `clienteId`: Chave estrangeira referenciando o cliente.

#### 3. **Pedido**
Representa um pedido feito por um cliente.

- `id`: Identificador único do pedido.
- `data`: Data e hora da criação do pedido.
- `status`: Status do pedido (exemplo: EM_ANDAMENTO, FINALIZADO).
- `clienteId`: Chave estrangeira referenciando o cliente.
- `funcionarioId`: Chave estrangeira referenciando o funcionário que está atendendo o pedido.
- `lavagens`: Relacionamento com as lavagens dos carros associados ao pedido.
- `servicos`: Relacionamento com os serviços contratados para o pedido.
- `notaFiscal`: Relacionamento com a nota fiscal gerada para o pedido.

#### 4. **Servico**
Representa os serviços oferecidos pelo lava-jato.

- `id`: Identificador único do serviço.
- `nome`: Nome do serviço (exemplo: Lavagem Completa).
- `descricao`: Descrição detalhada do serviço.
- `preco`: Preço do serviço.
- `pedidos`: Relacionamento com os serviços associados aos pedidos.

#### 5. **PedidoServico**
Tabela de relacionamento entre pedidos e serviços.

- `pedidoId`: Chave estrangeira referenciando o pedido.
- `servicoId`: Chave estrangeira referenciando o serviço.
- `pedido`: Relacionamento com o pedido.
- `servico`: Relacionamento com o serviço.

#### 6. **Funcionario**
Representa os funcionários que atendem aos pedidos.

- `id`: Identificador único do funcionário.
- `nome`: Nome do funcionário.
- `cargo`: Cargo do funcionário.
- `telefone`: Telefone do funcionário.
- `pedidos`: Relacionamento com os pedidos atendidos pelo funcionário.

#### 7. **NotaFiscal**
Representa a nota fiscal associada a um pedido.

- `id`: Identificador único da nota fiscal.
- `valorTotal`: Valor total da nota fiscal.
- `pedidoId`: Chave estrangeira referenciando o pedido.

#### 8. **Carro**
Representa os carros dos clientes.

- `id`: Identificador único do carro.
- `modelo`: Modelo do carro.
- `placa`: Placa do carro.
- `cor`: Cor do carro.
- `clienteId`: Chave estrangeira referenciando o cliente proprietário do carro.

### **Modelo de Dados**

```prisma
model Cliente {
  id        Int        @id @default(autoincrement())
  nome      String
  telefone  String
  cpf       String
  email     String
  enderecos Endereco[]
  pedidos   Pedido[]
  carros    Carro[]
}

model Endereco {
  id          Int     @id @default(autoincrement())
  tipo        String
  logradouro  String
  numero      String
  complemento String?
  bairro      String
  cidade      String
  estado      String
  cep         String
  clienteId   Int
  cliente     Cliente @relation(fields: [clienteId], references: [id], onDelete: Cascade)
}

model Pedido {
  id            Int             @id @default(autoincrement())
  data          DateTime        @default(now())
  status        String
  clienteId     Int
  cliente       Cliente         @relation(fields: [clienteId], references: [id], onDelete: Cascade)
  lavagens      PedidoLavagem[]
  servicos      PedidoServico[]
  funcionarioId Int?
  funcionario   Funcionario?    @relation(fields: [funcionarioId], references: [id], onDelete: SetNull)
  notaFiscal    NotaFiscal?
}

model Servico {
  id        Int             @id @default(autoincrement())
  nome      String
  descricao String
  preco     Float
  pedidos   PedidoServico[]
}

model PedidoServico {
  pedidoId  Int
  servicoId Int
  pedido    Pedido  @relation(fields: [pedidoId], references: [id], onDelete: Cascade)
  servico   Servico @relation(fields: [servicoId], references: [id], onDelete: Cascade)

  @@id([pedidoId, servicoId])
}

model Funcionario {
  id       Int      @id @default(autoincrement())
  nome     String
  cargo    String
  telefone String
  pedidos  Pedido[]
}

model NotaFiscal {
  id         Int    @id @default(autoincrement())
  valorTotal Float
  pedidoId   Int    @unique
  pedido     Pedido @relation(fields: [pedidoId], references: [id], onDelete: Cascade)
}

model Carro {
  id        Int     @id @default(autoincrement())
  modelo    String
  placa     String
  cor       String
  clienteId Int?
  cliente   Cliente? @relation(fields: [clienteId], references: [id], onDelete: Cascade)
}
```
# Rotas Implementadas
## POST /pedido
Cria um novo pedido, associando lavagens e serviços aos carros do cliente.

## Request Body:

```
{
  "clienteId": 1,
  "funcionarioId": 2,
  "status": "EM_ANDAMENTO",
  "lavagens": [
    {
      "carroId": 1,
      "tipo": "Simples",
      "preco": 30.0,
      "status": "EM_ANDAMENTO"
    }
  ],
  "servicos": [
    {
      "servicoId": 1,
      "servicoNome": "Lavagem Completa"
    }
  ]
}
```
Resposta:

```
{
  "id": 1,
  "clienteId": 1,
  "funcionarioId": 2,
  "status": "EM_ANDAMENTO",
  "lavagens": [
    {
      "tipo": "Simples",
      "preco": 30.0,
      "status": "EM_ANDAMENTO",
      "carroId": 1
    }
  ],
  "servicos": [
    {
      "servicoId": 1,
      "servicoNome": "Lavagem Completa"
    }
  ]
}
```
## GET /pedido/{clienteId}
Obtém todos os pedidos de um cliente, incluindo lavagens e serviços associados.

## PUT /pedido/{id}
Atualiza um pedido, permitindo alterações no status e em serviços ou lavagens associadas.

## GET /pedido
Obtém todos os pedidos registrados no sistema.

## DELETE /pedido/{id}
Deleta um pedido do sistema, incluindo todos os dados relacionados.

# Como Rodar o Projeto
1. Clonar o repositório:
git clone https://github.com/FreddyOkino/lava_jato
cd lava_jato

2. Instalar as dependências:
npm install

4. Configurar o banco de dados:
Crie um arquivo .env na raiz do projeto e adicione a URL do seu banco de dados PostgreSQL:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/lava_jato"

4. Rodar as migrações do Prisma:
npx prisma migrate dev --name init
5. Rodar o servidor:
npm run dev
O servidor estará disponível em http://localhost:3000.

# Considerações Finais
Este projeto é uma base para gerenciar pedidos de serviços em um lava-jato. Ele foi desenvolvido com o objetivo de ser modular e flexível, permitindo a adição de novos serviços, clientes e funcionalidades conforme necessário.

