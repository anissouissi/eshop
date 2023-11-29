import { PrismaClient } from './generated/client';

import { products } from './data.json';

function seed() {
  const prisma = new PrismaClient();
  products.map(async (product) => {
    try {
      await prisma.product.create({
        data: {
          ...product,
          id: undefined,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
}

seed();
