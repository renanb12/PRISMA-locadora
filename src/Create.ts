import { PrismaClient, Prisma, Status } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    let carro: Prisma.carroCreateInput;

    // Check if posts should be included in the query
    carro = {
        id_carro: 6,
        placa:        'ITA2H55',
        chassi:       '123456789',
        ano:          new Date('2016'),
        modelo:       'Voyage',
        cor:          'Verde',
        fabricante:   'Volkswagen',
        status:       Status.Alugado,
        valorAluguel: 150.00,
    }
    // Pass 'user' object into query
    const createCliente = await prisma.carro.create({ data: carro })
}

main()