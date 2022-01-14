-- CreateTable
CREATE TABLE `pharmacies` (
    `id` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `opening_hours` VARCHAR(191) NOT NULL,
    `responsible` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `others` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
