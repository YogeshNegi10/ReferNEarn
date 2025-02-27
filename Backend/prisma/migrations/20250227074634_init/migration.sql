-- CreateTable
CREATE TABLE `Referal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_Name` VARCHAR(191) NOT NULL,
    `referrer_Name` VARCHAR(191) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referee_email` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Referal_referrer_email_key`(`referrer_email`),
    UNIQUE INDEX `Referal_referee_email_key`(`referee_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
