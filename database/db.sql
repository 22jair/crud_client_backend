-- CREATE DATABASE client_db;
-- CREATE DATABSE IF NOT EXISTS `client_db`;

-- DELETE TABLE
-- DROP TABLE IF EXISTS `client`; 

-- CREATE TABLE client_db.client 
CREATE TABLE IF NOT EXISTS `client_db`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `birthdate` DATE NOT NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(20) NULL,
  `status` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);