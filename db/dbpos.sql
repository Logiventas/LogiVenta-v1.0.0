CREATE SCHEMA IF NOT EXISTS `dbpos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbpos` ;

-- -----------------------------------------------------
-- Table `dbpos`.`payrolls`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`payrolls` (
  `idPayroll` INT NOT NULL AUTO_INCREMENT,
  `salaryBase` DECIMAL(12,2) NULL DEFAULT NULL,
  PRIMARY KEY (`idPayroll`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`fixedcharges`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`fixedcharges` (
  `idPayroll` INT NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `amount` DECIMAL(10,2) NULL DEFAULT NULL,
  `affect` VARCHAR(10) NULL DEFAULT NULL,
  INDEX `idPayroll` (`idPayroll` ASC) VISIBLE,
  CONSTRAINT `fixedcharges_ibfk_1`
    FOREIGN KEY (`idPayroll`)
    REFERENCES `dbpos`.`payrolls` (`idPayroll`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`profiles` (
  `idProfile` INT NOT NULL AUTO_INCREMENT,
  `nameProfile` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `idPayrolls` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idProfile`),
  INDEX `idPayrolls` (`idPayrolls` ASC) VISIBLE,
  CONSTRAINT `profiles_ibfk_2`
    FOREIGN KEY (`idPayrolls`)
    REFERENCES `dbpos`.`payrolls` (`idPayroll`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`permissions` (
  `IdPermission` INT NOT NULL AUTO_INCREMENT,
  `moduleName` VARCHAR(255) NOT NULL,
  `Permission` TINYINT NOT NULL DEFAULT 1,
  `profiles_idProfile` INT NOT NULL,
  PRIMARY KEY (`IdPermission`),
  INDEX `fk_permissions_profiles1_idx` (`profiles_idProfile` ASC) VISIBLE,
  CONSTRAINT `fk_permissions_profiles1`
    FOREIGN KEY (`profiles_idProfile`)
    REFERENCES `dbpos`.`profiles` (`idProfile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`module`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`module` (
  `IdPermission` INT NULL DEFAULT NULL,
  `permissionName` VARCHAR(255) NOT NULL,
  `Permission` TINYINT NULL DEFAULT 1,
  INDEX `IdPermission` (`IdPermission` ASC) VISIBLE,
  CONSTRAINT `module_ibfk_1`
    FOREIGN KEY (`IdPermission`)
    REFERENCES `dbpos`.`permissions` (`IdPermission`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `identification` VARCHAR(255) NULL DEFAULT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `secondName` VARCHAR(255) NULL DEFAULT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `secondSurname` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `userName` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone1` VARCHAR(255) NULL DEFAULT NULL,
  `phone2` VARCHAR(255) NULL DEFAULT NULL,
  `homeCountry` VARCHAR(255) NULL DEFAULT NULL,
  `homeCity` VARCHAR(255) NULL DEFAULT NULL,
  `homeAddress` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactFirstName` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactSecondName` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactSurname` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactSecondSurname` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactEmail` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactPhone1` VARCHAR(255) NULL DEFAULT NULL,
  `emergencyContactPhone2` VARCHAR(255) NULL DEFAULT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT '1',
  `idProfile` INT NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `userName` (`userName` ASC) VISIBLE,
  UNIQUE INDEX `identification` (`identification` ASC) VISIBLE,
  INDEX `idProfile` (`idProfile` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`idProfile`)
    REFERENCES `dbpos`.`profiles` (`idProfile`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbpos`.`variablecharges`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbpos`.`variablecharges` (
  `idPayroll` INT NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `amount` DECIMAL(12,2) NULL DEFAULT NULL,
  `affect` VARCHAR(10) NULL DEFAULT NULL,
  INDEX `idPayroll` (`idPayroll` ASC) VISIBLE,
  CONSTRAINT `variablecharges_ibfk_1`
    FOREIGN KEY (`idPayroll`)
    REFERENCES `dbpos`.`payrolls` (`idPayroll`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
