import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const phones = await prisma.mobilePhone.findMany();
    console.log('Mobile phones in database:', phones);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 