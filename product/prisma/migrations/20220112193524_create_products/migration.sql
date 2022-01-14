-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `availability` INTEGER NOT NULL,
    `volume` INTEGER NOT NULL,
    `ingredients` VARCHAR(191) NOT NULL,
    `others` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
