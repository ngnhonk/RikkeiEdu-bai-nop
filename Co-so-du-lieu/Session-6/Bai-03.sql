delimiter //
create procedure GetCustomerTotalRevenue (IN inCustomerID int, inStartDate date, inEndDate date)
begin
	select o.totalAmount as `Tong Doanh Thu` from orders as o
    join customers as c on o.customerid = c.customerid
    where o.orderdate >= inStartDate
		and o.orderdate <= inEndDate;
end //
delimiter ;

