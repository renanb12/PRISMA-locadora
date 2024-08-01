import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let motorista: Prisma.clienteDeleteArgs
  
    const deleteMotorista = await prisma.cliente.deleteMany({where: {id_cliente: {lt: 5}}})
}

main()