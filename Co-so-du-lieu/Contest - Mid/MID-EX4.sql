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
