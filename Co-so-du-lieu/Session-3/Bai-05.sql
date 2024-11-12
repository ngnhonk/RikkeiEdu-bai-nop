CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT,
    Major VARCHAR(50)
);

CREATE TABLE courses (
    courseID int primary key,
    courseName VARCHAR(100) NOT NULL,
    instructor VARCHAR(50) NOT NULL
);

INSERT INTO Students (StudentID, Name, Age, Major) 
VALUES 
    (1, 'Alice', 20, 'Computer Science'),
    (2, 'Bob', 22, 'Mathematics'),
    (3, 'Charlie', 21, 'Physics'),
    (4, 'David', 20, 'Physics');

INSERT INTO courses (courseID, courseName, instructor) 
VALUES 
    (1, 'OOP', 'Nguyen A'),
    (2, 'JS', 'Tran B'),
    (3, 'Web Advanced', 'Dang C');

UPDATE Students
SET Major = 'Engineering'
WHERE StudentID = 3;

UPDATE Courses
SET courseName = 'Advanced Mathematics'
WHERE courseID = 2;

DELETE FROM Students
WHERE StudentID = 1;

DELETE FROM Courses
WHERE courseID = 3;

SELECT * FROM Students;
SELECT * FROM Courses;
