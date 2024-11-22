
delimiter //
create procedure newTotalAmount(IN orderid int, newTotalAmount int)
begin 
	update Orders
    set TotalAmount = newTotalAmount
    where orders.orderid = orderid;
end //
delimiter ;