import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        const phones = await prisma.mobilePhone.findMany();
        res.status(200).json(phones);
    } else if(req.method === 'POST') {
        try {
            const { brand, model, price, ram, storage, processor, screen_size, image } = req.body;
            
            const newPhone = await prisma.mobilePhone.create({
                data: {
                    brand,
                    model,
                    price: parseFloat(price),
                    ram: parseInt(ram),
                    storage: parseInt(storage),
                    processor,
                    screen_size: parseFloat(screen_size),
                    image
                }
            });
            
            res.status(201).json(newPhone);
        } catch (error) {
            console.error('Error creating phone:', error);
            res.status(500).json({ error: 'Failed to create phone' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}