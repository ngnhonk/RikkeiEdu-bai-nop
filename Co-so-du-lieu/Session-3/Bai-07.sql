create schema temp_db;
use temp_db;
create table customers(
	id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(100) not null,
    joindate date
);

create table orders(
	id int primary key auto_increment,
    customerid int,
    foreign key (customerid) references customers(id),
    orderdate datetime default current_timestamp,
    totalAmount decimal(10,2) not null
);

insert into customers(name, email, joindate)
values
	('Nguyen Van A', 'nguyena@gmail.com', '2024-08-08'),
    ('Tran Van B', 'tranb@gmail.com', '2024-08-08'),
    ('Nguyen Thi C ', 'nguyenc@gmail.com', '2024-08-08'),
    ('Tran Thi D', 'trand@gmail.com', '2024-08-08');
    
insert into orders(customerid, totalamount)
values
	(1, 4),
    (2, 3),
    (3, 6),
    (4, 10),
    (2, 7);

-- Các câu lệnh update
update orders
set totalamount = 350.00
where id = 3;

update customers
set email = 'updated@gmail.com'
where id = 2;

-- Các câu lênh delete
delete from customers
where id = 4;

delete from orders
where id = 1;

-- Các câu lệnh truy vấn
select
	orders.id as `Ma don hang`,
	orders.orderdate as `Ngay dat hang`,
    orders.totalamount as `Tong`,
    customers.name as `Ten KH`
from orders
join customers on orders.customerid = customers.id;

select customers.name as `Ten KH`,
	sum(orders.totalamount) as `Tong tien`
from customers
join orders on orders.customerid = customers.id
group by customers.name;