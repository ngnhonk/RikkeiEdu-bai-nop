delimiter //
create procedure DeleteOrderAndSales(IN inOrderID int)
begin 
	delete from Sales
    where orderid = inOrderID;
    
    delete from orders
    where orderid = inorderid;
end //
delimiter //