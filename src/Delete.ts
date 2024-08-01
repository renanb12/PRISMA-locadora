import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let motorista: Prisma.clienteDeleteArgs
  
    const deleteMotorista = await prisma.cliente.delete({ where: {id_cliente: 3}});
}

main()