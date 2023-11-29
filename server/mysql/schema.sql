-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema merchdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema merchdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `merchdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `merchdb` ;

-- -----------------------------------------------------
-- Table `merchdb`.`merch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `merchdb`.`merch` (
  `id_merch` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(250) NOT NULL,
  `fabric` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `rating` INT NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `modelname` VARCHAR(45) NOT NULL,
  `pictureurl` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_merch`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
