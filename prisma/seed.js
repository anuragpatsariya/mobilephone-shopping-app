const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const phones = [
    {
        brand: 'Apple',
        model: 'iPhone 15 Pro',
        price: 999.99,
        ram: 8,
        storage: 256,
        processor: 'A17 Pro',
        screen_size: 6.1
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S24 Ultra',
        price: 1299.99,
        ram: 12,
        storage: 512,
        processor: 'Snapdragon 8 Gen 3',
        screen_size: 6.8
    },
    {
        brand: 'Google',
        model: 'Pixel 8 Pro',
        price: 899.99,
        ram: 12,
        storage: 256,
        processor: 'Google Tensor G3',
        screen_size: 6.7
    },
    {
        brand: 'OnePlus',
        model: '12',
        price: 799.99,
        ram: 16,
        storage: 256,
        processor: 'Snapdragon 8 Gen 3',
        screen_size: 6.82
    },
    {
        brand: 'Xiaomi',
        model: '14 Ultra',
        price: 999.99,
        ram: 16,
        storage: 512,
        processor: 'Snapdragon 8 Gen 3',
        screen_size: 6.73
    },
    {
        brand: 'Apple',
        model: 'iPhone 15',
        price: 799.99,
        ram: 6,
        storage: 128,
        processor: 'A16 Bionic',
        screen_size: 6.1
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S24+',
        price: 999.99,
        ram: 12,
        storage: 256,
        processor: 'Snapdragon 8 Gen 3',
        screen_size: 6.7
    },
    {
        brand: 'Google',
        model: 'Pixel 8',
        price: 699.99,
        ram: 8,
        storage: 128,
        processor: 'Google Tensor G3',
        screen_size: 6.2
    },
    {
        brand: 'OnePlus',
        model: '12R',
        price: 499.99,
        ram: 12,
        storage: 256,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.78
    },
    {
        brand: 'Xiaomi',
        model: '14 Pro',
        price: 899.99,
        ram: 12,
        storage: 256,
        processor: 'Snapdragon 8 Gen 3',
        screen_size: 6.73
    },
    {
        brand: 'Apple',
        model: 'iPhone 14 Pro',
        price: 899.99,
        ram: 6,
        storage: 128,
        processor: 'A16 Bionic',
        screen_size: 6.1
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S23 Ultra',
        price: 1199.99,
        ram: 12,
        storage: 512,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.8
    },
    {
        brand: 'Google',
        model: 'Pixel 7 Pro',
        price: 799.99,
        ram: 12,
        storage: 256,
        processor: 'Google Tensor G2',
        screen_size: 6.7
    },
    {
        brand: 'OnePlus',
        model: '11',
        price: 699.99,
        ram: 16,
        storage: 256,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.7
    },
    {
        brand: 'Xiaomi',
        model: '13 Ultra',
        price: 899.99,
        ram: 12,
        storage: 512,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.73
    },
    {
        brand: 'Apple',
        model: 'iPhone 14',
        price: 699.99,
        ram: 6,
        storage: 128,
        processor: 'A15 Bionic',
        screen_size: 6.1
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S23+',
        price: 899.99,
        ram: 8,
        storage: 256,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.6
    },
    {
        brand: 'Google',
        model: 'Pixel 7',
        price: 599.99,
        ram: 8,
        storage: 128,
        processor: 'Google Tensor G2',
        screen_size: 6.3
    },
    {
        brand: 'OnePlus',
        model: '11R',
        price: 449.99,
        ram: 8,
        storage: 128,
        processor: 'Snapdragon 8+ Gen 1',
        screen_size: 6.74
    },
    {
        brand: 'Xiaomi',
        model: '13 Pro',
        price: 799.99,
        ram: 12,
        storage: 256,
        processor: 'Snapdragon 8 Gen 2',
        screen_size: 6.73
    }
];

async function main() {
    for (const phone of phones) {
        await prisma.mobilePhone.create({
            data: phone
        });
    }
    console.log('Successfully added 20 mobile phones to the database');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 