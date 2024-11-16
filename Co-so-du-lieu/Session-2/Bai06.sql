drop schema temp_db;
create schema temp_db;
use temp_db;

create table customers(
	customerid int auto_increment primary key,
    customername varchar(100),
    email varchar(100),
    phone varchar(15)
);

create table orders(
	orderid int auto_increment primary key,
    orderdate date,
    customerid int,
    foreign key (customerid) references customers(customerid)
);

create table orderdetails(
	orderdetailid int auto_increment primary key,
    orderid int,
    foreign key (orderid) references orders(orderid),
    productid int,
    quantity int,
    unitprice decimal(10,2)
);

-- Thêm dữ liệu
insert into customers(customername, email, phone)
values 
	('Nguyen Van Nam', 'nam@gmail.com', '0912345678'),
    ('Tran Van Thai', 'thai@gmail.com', '0912654381'),
    ('Dang Phuong Thao', 'thao@gmail.com', '0913455678');
    
insert into orders(orderdate, customerid)
values
	('2024-11-11', 2),
    ('2024-12-08', 1),
    ('2024-12-10', 2),
    ('2024-12-10', 3);
    
insert into orderdetails(orderid, productid, quantity, unitprice)
values
	(1, 1, 3, 15.5),
    (2, 2, 1, 20.5),
    (3, 1, 3, 16.5),
    (2, 4, 4, 20),
    (1, 5, 5, 9),
    (4, 5, 5, 9);

-- Cập nhật sđt của một khách hàng cụ thể
update customers
set phone = '0123456789'
where customername = 'Tran Van Thai';

-- Xoá những khách hàng không còn hoạt động
delete from orders
where customerid not in (select customerid from customers);

-- Truy vấn danh sách tất cả khách hàng cùng với tổng đơn mà họ đặt
select
	customers.customername as `Ten KH`,
    count(orderdetails.orderid) as `Tong so don` from customers
join orders on orders.customerid = customers.customerid
join orderdetails on orderdetails.orderid = orders.orderid
group by customers.customername;

-- Truy vấn thông tin tất cả đơn hàng chi tiết
select * from orderdetails
order by orderid;
