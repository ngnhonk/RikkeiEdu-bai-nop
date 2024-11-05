CREATE DATABASE companydb;
USE companydb;

CREATE TABLE Employees(
	EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    HireDate DATE,
    Salary INT
);

ALTER TABLE Employees
ADD COLUMN Department INT,
MODIFY COLUMN Salary DECIMAL(10,2);
