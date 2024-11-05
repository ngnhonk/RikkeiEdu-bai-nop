use companydb;

INSERT INTO Employees (FirstName, LastName, HireDate, Department, Salary)
VALUES 
    ('Nguyen', 'Van A', '2020-12-12', 1, 1200.5),
    ('Tran', 'Van B', '2021-06-12', 2, 1100.6),
    ('Nguyen', 'Thi A', '2022-06-06', 1, 1000.2);

-- Truy van tat ca nhan vien tai phong 1
SELECT * FROM employees
WHERE department = 1;

-- Cap nhan luong cua mot nhan vien cu the
UPDATE Employees
SET Salary = 1300
WHERE EmployeeID = 1;

-- Xoa toan bo nhan vien co luong nho hon 1100
DELETE FROM Employees WHERE Salary < 1100;

