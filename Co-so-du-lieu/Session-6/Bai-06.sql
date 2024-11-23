delimiter //
create procedure UpdateOrderTotalAndApplyPromotion (IN inOrderID int, inNewTotalAmount Decimal(10,2), inRevenueThreshold Decimal(10,2))
begin
	update orders
    set TotalAmount = inNewTotalAmount
    where orderid = inOrderid;

end //
delimiter //