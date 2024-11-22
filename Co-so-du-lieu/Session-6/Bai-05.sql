delimiter //
create procedure getMonthlyRevenueByCustomer(in inCustomerID int, inMonthYear varchar(7))
begin
    declare startDate date;
    declare endDate date;
    set startDate = STR_TO_DATE(CONCAT(inMonthYear, '-01'), '%Y-%m-%d');
    set endDate = LAST_DAY(startDate);
    select 
        SUM(o.totalamount) as `Total`
    from 
        orders as o
    where 
        o.customerid = inCustomerID
        and o.orderdate between startDate and endDate;
end //
delimiter ;
