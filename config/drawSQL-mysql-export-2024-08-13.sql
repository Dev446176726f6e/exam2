show databases;

create database exam2

use exam2

CREATE TABLE `Customers`(
    `CustomerID` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `FirstName` VARCHAR(50) NULL,
    `LastName` VARCHAR(50) NULL,
    `PassportID` TINYTEXT NOT NULL,
    `Email` VARCHAR(100) NULL,
    `PhoneNumber` VARCHAR(20) NULL,
    `Adress` VARCHAR(255) NULL
);
CREATE TABLE `CreditPayments`(
    `PaymentID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ContractID` INT NULL,
    `PaymentDate` DATE NULL,
    `AmountPaid` DECIMAL(10, 2) NULL,
    `BalanceRemaining` DECIMAL(10, 2) NULL,
    `PaymentMethod` VARCHAR(20) NULL,
    `MonthLeft` BIGINT NOT NULL
);

drop table contracts

CREATE TABLE `Contracts`(
    `ContractID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `CustomerID` INT NULL,
    `ProductID` BIGINT NOT NULL,
    `AdvancePercentage` DECIMAL(5, 2) NOT NULL,
    `InterestRate` DECIMAL(5, 2) NULL,
    `TotalAmount` DECIMAL(10, 2) NULL,
    `MonthlyPayment` DECIMAL(10, 2) NULL,
    `CurStatus` VARCHAR(20) NULL,
    `ContractDate` DATE NOT NULL,
    `Quantity` BIGINT NOT NULL
);

CREATE TABLE `Products`(
    `ProductID` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ProductName` VARCHAR(50) NULL,
    `Processor` VARCHAR(80) NOT NULL,
    `GraphicsCard` VARCHAR(100) NOT NULL,
    `Motherboard` VARCHAR(100) NOT NULL,
    `RAM` BIGINT NOT NULL,
    `ROM` BIGINT NOT NULL,
    `PowerSupply` BIGINT NOT NULL,
    `CaseBox` VARCHAR(100) NOT NULL,
    `Cooling` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NULL,
    `StockQuantity` INT NULL,
    `Info` TEXT NULL
);

SELECT * FROM products p
JOIN contracts c ON c.contractid = p.prodid
WHERE c.contractdate BETWEEN "2020-01-01" and "2024-12-12"

drop table customers

show tables

-- INSERT INTO products( ProductName, Processor, GraphicsCard, Motherboard, RAM, ROM, PowerSupply, CaseBox, Cooling, Price, StockQuantity, Info ) VALUES 
-- ("Intel Maxitron", "Intel i9-13900H", "MSI Nvidia 4080 super 16Gb", "Gigabyte Z709 wifi", 64, 512, 1000, "DeepCool W1235", "DeepCool iz563", 3790.40, 1, "Powerful gaming machine capable of 4k gaming.")

INSERT INTO customers(FirstName, LastName, PassportID, Email, PhoneNumber, adress) VALUES
("Nodir", "Xakimov", "AD 1547890", "xakimovnodir@gmai.com", "+998973456654", "Toshkent vil, Nazarbek, 123d")

INSERT INTO contracts( CustomerID, ProductID, AdvancePercentage, `Month`, InterestRate, TotalAmount, MonthlyPayment, CurStatus, ContractDate, Quantity) VALUES 
()
