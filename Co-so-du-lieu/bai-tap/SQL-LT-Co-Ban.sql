use btvn_db;

-- EXERCISE 2
alter table design
add foreign key (building_id) references building(id),
add foreign key (architect_id) references architect(id);

alter table building
add foreign key (host_id) references host(id),
add foreign key (contractor_id) references contractor(id);

alter table work
add foreign key (building_id) references building(id),
add foreign key (worker_id) references worker(id);


-- EXERCISE 3
-- Hien thi toan bo noi dung cua bang Architect
select * from architect;

-- Hien thi danh sach ho ten va gioi tinh cua bang Architect
select name, sex from architect;

-- Hien thi danh sach nam sinh co the co cua Architect
select distinct birthday from architect;

-- Hien thi danh sach ho ten cua kien truc su theo nam sinh tang dan
select name, birthday from architect
order by birthday asc;

-- Hien thi danh sach ho ten cua kien truc su theo nam sinh giam dan
select name, birthday from architect
order by birthday desc;

-- Hien thi danh sach cac cong trinh co chi phi tu thap den cao
-- Neu bang chi phi thi sap xep theo bang chu cai building
select id, name, cost from building
order by cost, name asc;


-- EXERCISE 4
-- Hien thi toan bo thong tin cua kien truc su 'le thanh tung'
select * from architect
where
	name = 'le thanh tung';

-- Hien thi ten, nam sinh cua cac cong nhan co chuyen mon han hoac dien
select `name`, birthday, skill
from worker
where
	skill = 'han' or skill = 'dien';

-- Hien thi ten, nam sinh cua cac cong nhan co chuyen mon han hoac dien
-- Va co nam sinh > 1948
select `name`, birthday, skill
from worker
where 
	skill = 'han' or skill = 'dien'
    and birthday > 1948;
    
-- Hien thi toan bo cong nhan bat dau vao nghe khi duoi 20 tuoi
select * from worker
where 
	birthday + 20 > year;
    
-- Hien thi toan bo cong nhan co nam sinh 1940, 1945, 1948
-- Cach 1
select * from worker 
where
	birthday = 1940 or birthday = 1945 or birthday = 1948;
    
-- Cach 2
select * from worker
where 
	birthday in(1940, 1945, 1948);
    
-- Tim kiem nhung cong trinh co chi phi dau tu 200 den 500m
-- Cach 1
select * from building
where
	cost >= 200 and cost <= 500;

-- Cach 2
select * from building 
where 
	cost between 200 and 500;
    
-- Tim kiem nhung kien truc su co ho la 'nguyen'
select * from architect
where 
	name like 'nguyen%';
    
-- Tim kiem nhung kien truc su co ten dem la 'anh'
select * from architect
where 
	name like '% anh %';
    
-- Tim kiem nhung kien truc su co ten bat dau bang 'th' va co 3 ki tu
select * from architect
where
	name like 'th___';

-- Tim chu thau khong co phone
select * from contractor
where 
	phone = null;
