create schema temp_db;
use temp_db;

create table customers(
	customerid int primary key auto_increment,
    firstname varchar(50),
    lastname varchar(50),
    email varchar(100)
);

create table products(
	productid  int primary key auto_increment,
    productname varchar(100),
    price decimal(10,2)
);

create table promotions(
	promotionid  int primary key auto_increment,
    promotionName varchar(100),
    discountPercentage decimal(5,2)
);

create table orders(
	orderid  int primary key auto_increment,
    customerid int,
    foreign key (customerid) references customers(customerid),
    orderdate date,
    totalamount decimal(10,2)
);

create table sales(
	saleid  int primary key auto_increment,
    orderid int,
    foreign key (orderid) references orders(orderid),
    saledate date,
    saleamount decimal(10,2)
);

delimiter //
create procedure CalculateMonthlyRevenueAndApplyPromotion (IN monthYear varchar(255), revenueThreshold decimal)
begin
	declare need2pay int;
    
	select * from orders
    where
		 date_format(orders.orderdate, '%y-%m')  = monthYear
    and 
		orders.totalamount = revenueThreshold;
	
end //
delimiter ;

