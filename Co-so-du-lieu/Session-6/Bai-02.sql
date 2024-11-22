delimiter //
create procedure AddNewCustomer(IN inFirstName varchar(50), inLastName varchar(50), inEmail varchar(50))
begin 
	insert into Customers(CustomerID, FirstName, LastName, Email)
    values
		(inFirstName, inLastName, inEmail);
end //
delimiter //