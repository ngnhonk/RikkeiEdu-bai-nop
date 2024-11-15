use temp_db;

create table employeesalaries(
	employeeID int primary key auto_increment,
    departmentid int not null,
    salary decimal(10,2) not null
)

select departmentid as `ID Phong ban`, sum(salary) as `Tong luong`
from employeesalaries
group by departmentid;