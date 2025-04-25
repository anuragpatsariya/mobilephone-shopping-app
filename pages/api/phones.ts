import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.method == 'GET') {
        const phones = await prisma.mobilePhone.findMany();
        res.status(200).json(phones);
    }
}