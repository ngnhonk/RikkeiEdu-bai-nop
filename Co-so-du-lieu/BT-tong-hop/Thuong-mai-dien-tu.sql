CREATE SCHEMA EcommerceDB;
USE ecommercedb;

create table Users (
	UserID int primary key auto_increment,
    Username varchar(50) unique not null,
    PasswordHash varchar(255) not null,
    Email varchar(100) not null,
    CreatedAt datetime default current_timestamp
);

create table Products (
	ProductID int primary key auto_increment,
    ProductName varchar(100) not null,
    `Description` text,
    Price decimal(10,2) not null,
    stock int not null
);

create table Orders (
	OrderID int primary key auto_increment,
    UserID int,
	foreign key (UserID) references Users(UserID),
    OrderDate datetime default current_timestamp,
    TotalAmount decimal(10,2) not null
);

create table OrderDetails (
	OrderDetailID int primary key auto_increment,
    OrderID int,
    foreign key (OrderID) references Orders(OrderID) ON DELETE CASCADE,
    ProductID int,
    foreign key (ProductID) references Products(ProductID) ON DELETE CASCADE,
    Quantity int not null,
    PriceAtOrder decimal(10,2) not null
);

create table Reviews (
	ReviewID int primary key auto_increment,
    ProductID int,
    foreign key (ProductID) references Products(ProductID) ON DELETE CASCADE,
    UserID int,
    foreign key (UserID) references Users(UserID),
    Rating int check(Rating between 1 and 5),
    ReviewText text,
    CreatedAt datetime default current_timestamp
);

-- Các lệnh insert
INSERT INTO `ecommercedb`.`users` (`Username`, `PasswordHash`, `Email`)
VALUES
	('Nguyen Van A', '123456', 'nguyena@gmail.com'),
    ('Tran Van B', '123456', 'tranvb@gmail.com'),
    ('Giap Thi C', '123456', 'giaptc@gmail.com');
    

insert into `ecommercedb`.`Products` (`ProductName`, `description`, `price`, `stock`)
values 
	('Banh mi', 'an ngon ngon', 15000, 10),
    ('Bim Bim', 'this is snack', 5000, 20),
    ('Keo', 'this is candy', 3000, 13),
    ('CocaCola', 'Coke', 9000, 20),
    ('Nuoc loc', 'Healthy', 5000, 50);
    

insert into `orders` (`userid`, `totalamount`)
values
	('1', '20'),
    ('2', '10');
    
insert into `orderdetails` ( `orderid`,`productid`,`quantity`,`priceatorder`)
values 
	('1','3','10','3000'),
    ('1','1','3','15000'),
    ('2','2','5','5000'),
    ('2','4','5','9000'),
	('2','5','5','5000');
    
    
INSERT INTO `ecommercedb`.`reviews` (`ProductID`, `UserID`, `Rating`, `ReviewText`)
VALUES 
	('1', '3', '4', 'pretty good'),
	('4', '2', '5', 'good'),
	('3', '1', '2', 'really bad');

-- Các lệnh update
update products
set price = 4000
where productid = 1;

update products
set stock = 100
where productname = 'Nuoc loc';

update users
set email = 'nothing@gmail.com'
where username = 'Nguyen Van A';

-- Các lệnh delete
DELETE FROM `ecommercedb`.`products` WHERE (`ProductID` = '5');

DELETE FROM `ecommercedb`.`orderdetails` WHERE (`ProductID` = '1');