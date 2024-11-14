USE thuchanh_db;

ALTER TABLE design
ADD FOREIGN KEY (building_id) REFERENCES building(id),
ADD FOREIGN KEY (architect_id) REFERENCES architect(id);

alter table building
ADD FOREIGN KEY (host_id) REFERENCES host(id),
ADD FOREIGN KEY (contractor_id) REFERENCES contractor(id);

alter table work
ADD FOREIGN KEY (building_id) REFERENCES building(id),
ADD FOREIGN KEY (worker_id) REFERENCES worker(id);

-- EXERCISE 3
-- Hiển thị thông tin công trình có chi phí cao nhất
SELECT * FROM building 
WHERE cost = (
	SELECT max(cost) FROM building
);

-- Hiển thị thông tin công trình có chi phí lớn hơn tất cả các công trình được xây dựng ở Cần Thơ
SELECT * FROM building
WHERE cost > ALL(
	SELECT cost FROM building
	WHERE city = 'can tho'
);

-- Hiển thị thông tin công trình có chi phí lớn hơn một trong các công trình được xây dựng ở Cần Thơ
SELECT * FROM building
WHERE cost > ANY(
	SELECT cost FROM building
	WHERE city = 'can tho'
);

-- Hiển thị thông tin công trình chưa có kiến trúc sư thiết kế
SELECT * FROM design
WHERE architect_id = NULL;

-- Hiển thị thông tin các kiến trúc sư cùng năm sinh và cùng nơi tốt nghiệp
SELECT a1.*
FROM architect a1
JOIN architect a2 ON a1.birthday = a2.birthday 
                 AND a1.place = a2.place
                 AND a1.id <> a2.id;
