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

-- Exercise 4
-- Hiển thị thù lao trung bình:
SELECT architect_id, AVG(benefit) FROM design
GROUP BY architect_id;

-- Hiển thị chi phí đầu tư trung bình của các công trình ở mỗi thành phố:
SELECT city, AVG(cost) FROM building
GROUP BY city;

-- Tìm các công trình có chi phí trả cho kiến trúc sư lớn hơn 50
SELECT * FROM design
WHERE benefit > 50;

-- Tìm các thành phố có ít nhất một kiến trúc sư tốt nghiệp
SELECT place FROM architect;

-- EXERCISE 5
-- Hiển thị tên công trình, tên chủ nhân và tên chủ thầu của công trình đó
SELECT DISTINCT building.name AS `Ten Cong Trinh`, host.name AS `Ten Chu Nhan`, contractor.name AS `Ten Nha Thau`
FROM building
JOIN host ON building.host_id = host.id
JOIN contractor ON building.contractor_id = contractor.id;

-- Hiển thị tên công trình (building), tên kiến trúc sư (architect) và thù lao của kiến trúc sư ở mỗi công trình (design)
SELECT DISTINCT building.name AS `Ten Cong Trinh`, architect.name AS `Ten KTS`, design.benefit AS `Thu Lao`
FROM building
JOIN design ON design.building_id = building.id
JOIN architect ON design.architect_id = architect.id;

-- Hãy cho biết tên và địa chỉ công trình (building) do chủ thầu Công ty xây dựng số 6 thi công (contractor)
SELECT building.name AS `Ten cong trinh`, building.address AS `Dia chi cong trinh`
FROM building
JOIN contractor ON building.contractor_id = contractor.id
WHERE contractor.name = 'cty xd so 6';
	
-- Tìm tên và địa chỉ liên lạc của các chủ thầu (contractor) thi công công trình ở Cần Thơ (building)
-- do kiến trúc sư Lê Kim Dung thiết kế (architect, design)
SELECT contractor.name AS `Ten chu thau`, contractor.address AS `Dia chi chu thau`
FROM contractor
JOIN building ON building.contractor_id = contractor.id
JOIN design ON design.building_id = building.id
JOIN architect ON architect.id = design.architect_id
WHERE
	building.city = 'can tho'
AND 
	architect.name = 'le kim dung';
    
-- Hãy cho biết nơi tốt nghiệp của các kiến trúc sư (architect) đã thiết kế (design) 
-- công trình Khách Sạn Quốc Tế ở Cần Thơ (building)
SELECT architect.name AS `Ten KTS`, architect.place AS `Noi tot nghiep` 
FROM architect
JOIN design ON design.architect_id = architect.id
JOIN building ON design.building_id = building.id
WHERE
	building.city = 'can tho'
AND 
	building.name = 'khach san quoc te';
    
-- Cho biết họ tên, năm sinh, năm vào nghề của các công nhân có chuyên môn hàn hoặc điện (worker) đã tham gia các công trình (work)
-- mà chủ thầu Lê Văn Sơn (contractor) đã trúng thầu (building)
SELECT worker.name, worker.birthday, worker.year AS `nam vao nghe`, skill AS `chuyen mon` FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
JOIN contractor ON building.contractor_id = contractor.id
WHERE contractor.name = 'le van son' 
AND worker.skill in ('dien', 'han');

-- Những công nhân nào (worker) đã bắt đầu tham gia công trình Khách sạn Quốc
-- Tế ở Cần Thơ (building) trong giai đoạn từ ngày 15/12/1994 đến 31/12/1994
-- (work) số ngày tương ứng là bao nhiêu
SELECT worker.name AS `Ten cong nhan`, DATEDIFF(work.date, '1994-12-15') AS `So ngay`
FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
WHERE 
	building.city = 'can tho'
AND 
	building.name = 'khach san quoc te'
AND 
	work.date between '1994-12-15' AND '1994-12-31';
    
-- Cho biết họ tên và năm sinh của các kiến trúc sư đã tốt nghiệp ở TP Hồ Chí
-- Minh (architect) và đã thiết kế ít nhất một công trình (design) có kinh phí đầu tư
-- trên 400 triệu đồng (building)
SELECT architect.name AS `Ten KTS`, architect.birthday AS `Nam sinh` FROM architect
JOIN design ON design.architect_id = architect.id
JOIN building ON building.id = design.building_id
WHERE
	architect.place = 'tp hcm'
AND
	building.cost > 400;

-- Cho biết tên công trình có kinh phí cao nhất
SELECT building.name AS `Ten cong trinh` FROM building
WHERE cost = (
	SELECT max(cost) FROM building
 );

-- Cho biết tên các kiến trúc sư (architect) vừa thiết kế các công trình (design) do
-- Phòng dịch vụ sở xây dựng (contractor) thi công vừa thiết kế các công trình do
-- chủ thầu Lê Văn Sơn thi công
SELECT architect.name AS `Ten KTS` FROM architect
JOIN design ON design.architect_id = architect.id
JOIN building ON design.building_id = building.id
JOIN contractor ON contractor.id = building.contractor_id
WHERE 
	contractor.name in ('phong dich vu so xd', 'le van son')
GROUP BY architect.id, architect.name
having count(DISTINCT contractor.name) = 2;

-- Cho biết họ tên các công nhân (worker) có tham gia (work) các công trình ở Cần
-- Thơ (building) nhưng không có tham gia công trình ở Vĩnh Long
SELECT worker.name AS `Ten cong nhan` FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building on work.building_id = building.id
WHERE 
	building.city = 'can tho'
AND not exists (
    SELECT 1
    FROM work w2
    JOIN building b2 ON w2.building_id = b2.id
    WHERE w2.worker_id = worker.id
    AND b2.city = 'Vinh Long'
);

-- Cho biết tên của các chủ thầu đã thi công các công trình có kinh phí lớn hơn tất
-- cả các công trình do chủ thầu phòng Dịch vụ Sở xây dựng thi công
SELECT DISTINCT contractor.name AS `Ten chu thau`
FROM contractor
JOIN building ON building.contractor_id = contractor.id
JOIN design ON design.building_id = building.id
WHERE building.cost > (
	SELECT max(cost) FROM building
	JOIN contractor ON building.contractor_id = contractor.id
	WHERE contractor.name = 'phong dich vu so xd'
);

-- Cho biết họ tên các kiến trúc sư có thù lao thiết kế một công trình nào đó dưới
-- giá trị trung bình thù lao thiết kế cho một công trình
SELECT * FROM design;
SELECT architect.name AS `Ten KTS` FROM architect
JOIN design ON design.architect_id = architect.id
WHERE design.benefit < (
	SELECT AVG(design.benefit)
    FROM design
);

-- Tìm tên và địa chỉ những chủ thầu đã trúng thầu công trình có kinh phí thấp nhất
SELECT contractor.name AS `Ten chu thau`, contractor.address AS `Dia chi chu thau`
FROM contractor
JOIN building ON building.contractor_id = contractor.id
WHERE building.cost IN (
	SELECT min(cost) FROM building
);

-- Tìm họ tên và chuyên môn của các công nhân (worker) tham gia (work) các công
-- trình do kiến trúc sư Le Thanh Tung thiet ke (architect) (design)
SELECT worker.name AS `Ten cong nhan`, worker.skill AS `Chuyen mon`
FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
JOIN design ON design.building_id = building.id
JOIN architect ON design.architect_id = architect.id
WHERE 
	architect.name = 'le thanh tung';

-- Tìm các cặp tên của chủ thầu có trúng thầu các công trình tại cùng một thành phố
SELECT DISTINCT contractor.name AS `Ten chu thau`, building.city AS `Thanh pho` FROM contractor
JOIN building ON building.contractor_id = contractor.id
WHERE building.city IN (
    SELECT city
    FROM building
    GROUP BY city
    having COUNT(DISTINCT contractor_id) > 1
);

-- Tìm tổng kinh phí của tất cả các công trình theo từng chủ thầu
SELECT * FROM building;
SELECT DISTINCT contractor.name AS `Ten chu thau`, SUM(building.cost) AS `Tong kinh phi` FROM contractor
JOIN building ON building.contractor_id = contractor.id
GROUP BY building.contractor_id;

-- Cho biết họ tên các kiến trúc sư có tổng thù lao thiết kế các công trình lớn hơn 25 triệu
SELECT architect.name AS `Ten KTS`, SUM(design.benefit) AS `Tong thu lao`
FROM architect
JOIN design ON design.architect_id = architect.id
GROUP BY design.architect_id
having SUM(design.benefit) > 25;

-- Cho biết số lượng các kiến trúc sư có tổng thù lao thiết kế các công trình nhỏ hơn 25 triệu
SELECT count(*) AS `So luong KTS`
FROM (
	SELECT architect.id
	FROM architect
	JOIN design ON design.architect_id = architect.id
	GROUP BY design.architect_id
	having SUM(design.benefit) > 25
) AS dem_kts;

-- Tìm tổng số công nhân đã tham gia ở mỗi công trình
SELECT building.name AS `Ten cong trinh`, count(worker.id) AS `So luong cong nhan`
FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
GROUP BY building.name;

-- Tìm tên và địa chỉ công trình có tổng số công nhân tham gia nhiều nhất
SELECT building.name AS `Ten cong trinh`, building.address AS `Dia chi cong trinh`, count(worker.id) AS `So luong cong nhan`
FROM building
JOIN work ON work.building_id = building.id
JOIN worker ON work.worker_id = worker.id
GROUP BY building.name
order by count(worker.id) desc
limit 1;

-- Cho biêt tên các thành phố và kinh phí trung bình cho mỗi công trình của từng
-- thành phố tương ứng
SELECT building.city AS `Ten TP`, AVG(building.cost) AS `Kinh phi TB`
FROM building
GROUP BY building.city;

-- Cho biết họ tên các công nhân có tổng số ngày tham gia vào các công trình lớn
-- hơn tổng số ngày tham gia của công nhân Nguyễn Hồng Vân
SELECT worker.name AS `Ten cong nhan` 
FROM worker
JOIN work ON work.worker_id = worker.id
WHERE work.total > ALL (
	SELECT AVG(total) FROM work
);

-- Tìm tổng số công nhân đã tham gia ở mỗi công trình
SELECT building.name AS `Ten cong trinh`, count(worker.id) AS `So luong cong nhan`
FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
GROUP BY building.name;

-- Cho biết tổng số công trình mà mỗi chủ thầu đã thi công tại mỗi thành phố
SELECT building.city AS `Thanh pho`, count(building.id) AS `Tong cong trinh`
FROM building
JOIN contractor ON building.contractor_id = contractor.id
GROUP BY building.city;

--  Cho biết họ tên công nhân có tham gia ở tất cả các công trình
SELECT worker.name AS `Ten cong nhan`, building.name AS `Ten cong trinh`
FROM worker
JOIN work ON work.worker_id = worker.id
JOIN building ON work.building_id = building.id
GROUP BY worker.id
having count(DISTINCT building.id) = (
	SELECT count(*) FROM building
);

-- EXERCISE 6




