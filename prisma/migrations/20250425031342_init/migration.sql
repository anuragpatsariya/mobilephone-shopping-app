-- CreateTable
CREATE TABLE "MobilePhone" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "ram" INTEGER NOT NULL,
    "storage" INTEGER NOT NULL,
    "processor" TEXT NOT NULL,
    "screen_size" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MobilePhone_pkey" PRIMARY KEY ("id")
);
