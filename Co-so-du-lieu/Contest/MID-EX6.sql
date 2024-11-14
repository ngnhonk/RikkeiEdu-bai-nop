CREATE SCHEMA company_db;
USE company_db;

CREATE TABLE employee(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    birth INT,
    salary DECIMAL(10,2)
);

CREATE TABLE department(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
 );

CREATE TABLE assignment(
	employee_id INT,
    department_id INT
);
INSERT INTO employee (name, birth, salary) 
VALUES
('Nguyen Van A', 1990, 45000),
('Tran Thi B', 1991, 50000),
('Le Minh C', 1992, 60000),
('Pham Lan D', 1991, 75000),
('Nguyen Thi E', 1993, 90000);

INSERT INTO department (name)
VALUES
	('IT'),
    ('HR'),
    ('Ke toan'),
    ('Sale');
    
INSERT INTO assignment(employee_id, department_id)
VALUES
	(1, 2),
    (2, 4),
    (3, 1),
    (4, 3),
    (2, 1),
    (1, 4);
    
-- a, liệt kê tất cả các nhân viên trong bộ phận có tên là "Kế toán". Kết
-- quả cần hiển thị mã nhân viên và tên nhân viên.
SELECT employee.id, employee.name FROM employee
JOIN assignment ON assignment.employee_id = employee.id
JOIN department ON assignment.department_id = department.id
WHERE department.name = 'Ke toan';

-- b,  tìm các nhân viên có mức lương lớn hơn 50,000. Kết quả trả về
-- cần bao gồm mã nhân viên, tên nhân viên và mức lương.
SELECT * FROM employee
WHERE salary > 50000;

-- c, hiển thị tất cả các bộ phận và số lượng nhân viên trong từng bộ
-- phận. Kết quả trả về cần bao gồm tên bộ phận và số lượng nhân viên
SELECT department.name as `Ten bo phan`, count(assignment.employee_id) as `So luong nhan vien`
FROM department
JOIN assignment ON assignment.department_id = department.id
JOIN employee ON assignment.employee_id = employee.id
group by department.name;

-- d, tìm ra các thành viên có mức lương cao nhất theo từng bộ phận.

SELECT department.name AS `Bo phan`, employee.name as `Thanh vien`, employee.salary as `Luong`
FROM department
JOIN assignment ON assignment.department_id = department.id
JOIN employee ON assignment.employee_id = employee.id
WHERE employee.salary = (
    SELECT MAX(employee.salary)
    FROM employee
    JOIN assignment ON assignment.employee_id = employee.id
    WHERE assignment.department_id = department.id
)
ORDER BY employee.salary DESC;

-- e, Viết câu lệnh SQL để tìm các bộ phận có tổng mức lương của nhân viên vượt quá 100,000
SELECT department.name as `Ten bo phan`, sum(employee.salary) as `Tong luong`
FROM department
JOIN assignment ON assignment.department_id = department.id
JOIN employee ON assignment.employee_id = employee.id
GROUP BY department.name
HAVING sum(employee.salary) > 100000;

-- f, để liệt kê tất cả các nhân viên làm việc trong hơn 2 bộ phận khác nhau. 
SELECT employee.id AS `Ma NV`, employee.name AS `Ten NV`, count(assignment.department_id) AS `SL tham gia`
FROM employee
JOIN assignment ON assignment.employee_id = employee.id
JOIN department on assignment.department_id = department.id
GROUP BY department.name;