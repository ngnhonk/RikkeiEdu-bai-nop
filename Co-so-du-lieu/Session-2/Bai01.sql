CREATE DATABASE companydb;
USE companydb;

CREATE TABLE Empoyee(
	EmpoyeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    HireDate DATE,
    Salary INT
);

ALTER TABLE Empoyee
ADD COLUMN Department INT,
MODIFY COLUMN Salary DECIMAL(10,2);

