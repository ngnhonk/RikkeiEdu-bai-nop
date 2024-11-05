CREATE SCHEMA supply;
USE supply;

create table Orders(
	id int auto_increment primary key,
    OrderDate date,
    CustomerID int,
    foreign key (CustomerID)references Customers(CustomerID),
    TotalAmount int check (TotalAmount >= 0)
);
