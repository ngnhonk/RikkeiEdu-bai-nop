class Student {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Course {
    id: number;
    title: string;
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

class Enrollment {
    student: Student;
    course: Course;
    scheduleTime: string;
    constructor(student: Student, course: Course, scheduleTime: string) {
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }
}

class StudyManager {
    students: Student[];
    courses: Course[];
    enrollments: Enrollment[];
    studentID: number = 1;
    courseID: number = 1;
    constructor() {
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }

    addStudent(name: string) {
        this.students.push(new Student(this.studentID++, name));
        console.log(`Đã thêm sinh viên ${name} thành công!`);
    }

    addCourse(title: string) {
        this.courses.push(new Course(this.courseID++, title));
        console.log(`Đã thêm khoá học ${title} thành công!`);
    }

    enrollStudent(studentId: number, courseId: number, scheduleTime: string) {
        let checkStudent = this.students.findIndex((element) => element.id === studentId);
        let checkCourse = this.courses.findIndex((element) => element.id === courseId);
        if (checkCourse === -1 || checkStudent === -1) {
            console.log("Không tìm thấy student hoặc course!");
        } else {
            this.enrollments.push(new Enrollment(this.students[checkStudent], this.courses[checkCourse], scheduleTime));
        }
    }

    listEnrollment() {
        if (this.enrollments.length === 0) {
            console.log("Danh sách hiện tại đang rỗng!");
        } else {
            console.log(`Thời khoá biểu: `);
            this.enrollments.forEach((element) => {
                console.log(`Snh viên: ${element.student.name} - Khoá học: ${element.course.title} - Thời gian học: ${element.scheduleTime}`);
            });
        }
    }
}

class Main {
    studyManager: StudyManager;
    constructor() {
        this.studyManager = new StudyManager();
    }

    bootstrap(): void {
        let loop: boolean = true;
        while (loop) {
            let choice = prompt(`
                1. Thêm sinh viên mới
                2. Thêm khoá học
                3. Đăng ký khoá học cho sinh viên
                4. Hiển thị thời khoá biểu học tập
                5. Dừng chương trình`);

            switch (choice) {
                case "1":
                    let inName = prompt("Nhập vào tên sinh viên: ");
                    if (!inName) {
                        console.log("Vui lòng nhập đầy đủ!");
                    } else {
                        this.studyManager.addStudent(inName);
                        break;
                    }

                case "2":
                    let inCourse = prompt("Nhập vào tên khoá học: ");
                    if (!inCourse) {
                        console.log("Vui lòng nhập đầy đủ!");
                    } else {
                        this.studyManager.addCourse(inCourse);
                        break;

                    }
                case "3":
                    let inStudentID = prompt("Nhập vào mã sinh viên: ");
                    let inCourseID = prompt("Nhập vào mã khoá học: ");
                    let inScheduleTime = prompt("Nhập vào thời gian: ");
                    if (!inStudentID || !inCourseID || !inScheduleTime) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                        continue;
                    }
                    let valStudentID = parseInt(inStudentID, 10);
                    let valCourseID = parseInt(inCourseID, 10);
                    this.studyManager.enrollStudent(valStudentID, valCourseID, inScheduleTime);
                    break;

                case "4":
                    this.studyManager.listEnrollment();
                    break;
                case "5":
                    loop = false;
                    console.log(`Hẹn gặp lại!`);
                    break;

                default:
                    console.log("Lựa chọn không hợp lệ !!!");
                    break;
            }
        }
    }
}

const app = new Main();
app.bootstrap();