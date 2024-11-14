create schema QuanLyDuAnDB;
use QuanLyDuAnDB;

create table Projects (
	ProjectID int primary key auto_increment,
    ProjectName varchar(100) not null,
    StartDate date not null,
    EndDate date not null,
    Budget decimal(10,2) not null
);

create table Employees (
	EmployeeID int primary key auto_increment,
    EmployeeName varchar(100) not null,
    Position varchar(50) not null,
    HireDate date not null,
    Salary decimal(10,2) not null
);

create table Tasks (
	TaskID int primary key auto_increment,
    ProjectID int,
    foreign key (ProjectID) references Projects(ProjectID) on delete cascade,
    TaskName varchar(100) not null,
    AssignedTo int,
    foreign key (AssignedTo) references Employees(EmployeeID) on delete cascade,
    StartDate date not null,
    EndDate date not null,
    `Status` varchar(50) not null,
    HoursWorked decimal(10,2) not null
);

INSERT INTO `quanlyduandb`.`projects` (`ProjectName`, `StartDate`, `EndDate`, `Budget`) 
VALUES
	('duong sat bac nam', '1990-10-10', '2020-12-12', '10000'),
	('cao toc ha noi bac giang', '1990-12-12', '2000-10-10', '5000'),
	('vanh dai 3', '2000-09-09', '2015-11-11', '7000');

INSERT INTO `quanlyduandb`.`employees` (`EmployeeName`, `Position`, `HireDate`, `Salary`)
VALUES 
    ('tran van nam', 'chu du an', '1989-05-15', '100'),
    ('nguyen van a', 'cong nhan', '1990-06-17', '30'),
    ('pham van c', 'cong nhan', '1990-06-17', '30'),
    ('tang the d', 'cong nhan', '1990-07-17', '29'),
    ('tran van m', 'cong nhan', '1990-07-17', '29');


INSERT INTO `quanlyduandb`.`tasks` (`ProjectID`, `TaskName`, `AssignedTo`, `StartDate`, `EndDate`, `Status`, `HoursWorked`) 
VALUES
	('1', 'van chuyen vat lieu', '2', '1990-10-11', '1991-02-11', 'hoan thanh', '120'),
    ('1', 'van chuyen vat lieu', '3', '1990-10-11', '1991-02-11', 'hoan thanh', '120'),
    ('1', 'san lap mat bang', '4', '1990-10-11', '1991-02-11', 'hoan thanh', '120'),
    ('1', 'san lap mat bang', '5', '1990-10-11', '1991-02-11', 'hoan thanh', '120'),
    ('2', 'khao sat dia hinh', '1', '1991-01-11', '1991-03-11', 'hoan thanh', '60'),
    ('2', 'giai toa dan cu', '1', '1991-01-11', '1991-03-11', 'hoan thanh', '70'),
    ('2', 'danh dau vi tri', '2', '1991-01-11', '1991-03-11', 'hoan thanh', '60'),
    ('2', 'danh dau vi tri', '3', '1991-01-11', '1991-03-11', 'hoan thanh', '60');

-- Update dữ liệu
update projects
set budget = 50000.00
where projectid = 2;

update tasks
set hoursworked = 25.50
where taskid = 4;


-- Delete dữ liệu
delete from employees
where EmployeeID = 3;

delete from tasks
where TaskID = 5;

select * from tasks;

-- Tổng chi phí cho từng dự án:	
select projectid, SUM(hoursworked) * 50 as TotalCost
from tasks
group by projectid;

-- Viết truy vấn để lấy danh sách các dự án cùng với 
-- tổng số công việc hoàn thành và số công việc đang thực hiện
select projectID, status, COUNT(*) as task_count
from  tasks
group by  projectID, status;


-- Viết truy vấn để lấy thông tin các nhân viên cùng
-- với số lượng công việc họ đã thực hiện và tổng số giờ làm việc của họ.
select 
    e.EmployeeID,
    e.EmployeeName,
    COUNT(t.TaskID) as TotalTasks,
    coalesce(SUM(t.HoursWorked), 0) as TotalHoursWorked
from 
    Employees e
left join 
    Tasks t on e.EmployeeID = t.AssignedTo
group by 
    e.EmployeeID, e.EmployeeName;
    
-- Viết truy vấn để tính lương trung bình của các
-- nhân viên theo vị trí (position). Sử dụng hàm AVG và GROUP BY.
select
    Position, avg(Salary) as LuongTB
from 
    Employees
group by 
    Position;
