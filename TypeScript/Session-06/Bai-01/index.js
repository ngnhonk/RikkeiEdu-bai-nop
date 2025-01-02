"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
    get getRole() {
        return this.role;
    }
}
class Manager extends Employee {
    constructor(id, name, role, department) {
        super(id, name, role);
        this.department = department;
    }
    get getDepartment() {
        return this.department;
    }
}
class Task {
    constructor(id, title, deadline) {
        this.isComplete = false;
        this.id = id;
        this.title = title;
        this.deadline = deadline;
    }
    complete() {
        this.isComplete = true;
    }
    getDetails() {
        console.log(`ID: ${this.id} - Title: ${this.title} - Deadline: ${this.deadline} - Status: ${(this.isComplete) ? "Completed" : "Not Completed"}`);
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails() {
        console.log(`Employee name: ${this.employee.name} - Task: ${this.task.title} - Status: ${(this.task.isComplete) ? "Completed" : "Not Completed"}`);
    }
}
class TaskManager {
    constructor() {
        this.employeeID = 1;
        this.managerID = 1;
        this.taskID = 1;
        this.assignmentID = 1;
        this.employees = [];
        this.managers = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name, role) {
        this.employees.push(new Employee(this.employeeID++, name, role));
        console.log(`Đã thêm nhân viên: ${this.employeeID - 1} - ${name} thành công!`);
    }
    addManager(name, role, department) {
        this.managers.push(new Manager(this.managerID++, name, role, department));
        console.log(`Đã thêm quản lý: ${this.managerID - 1} - ${name} - ${department} thành công!`);
    }
    addTask(title, deadline) {
        this.tasks.push(new Task(this.taskID++, title, deadline));
        console.log(`Đã thêm task: ${this.taskID - 1} - ${title} thành công!`);
    }
    assignTask(employeeId, taskId) {
        let checkEmployee = this.employees.findIndex((e) => e.id === employeeId);
        let checkTask = this.tasks.findIndex((e) => e.id === taskId);
        if (checkEmployee === -1 || checkTask === -1) {
            console.log(`Không tìm thấy Task hoặc Employee phù hợp!`);
        }
        else {
            this.assignments.push(new Assignment(this.employees[checkEmployee], this.tasks[checkTask]));
        }
    }
    completeTask(taskId) {
        let checkCompleteTask = this.tasks.findIndex((e) => e.id === taskId);
        if (checkCompleteTask === -1) {
            console.log(`Không tồn tại task!`);
        }
        else {
            this.tasks[checkCompleteTask].complete();
            console.log(`Đã đánh dấu task ${checkCompleteTask + 1} là hoàn thành!`);
        }
    }
    listAssignments() {
        this.assignments.forEach((element) => {
            console.log(`Task: ${element.task.title} - Person: ${element.employee.name} - Status: ${element.task.isComplete ? "Completed" : "Not Completed"}`);
        });
    }
}
class Main {
    constructor() {
        this.manager = new TaskManager;
    }
    bootstrap() {
        let active = true;
        while (active) {
            let input = prompt(`
                1. Thêm nhân viên.
                2. Thêm quản lý.
                3. Thêm công việc.
                4. Phân công công việc cho nhân viên.
                5. Đánh dấu công việc hoàn thành.
                6.Hiển thị danh sách công việc đã phân công.
                7. Dừng chương trình.`);
            if (!input) {
                console.log(`Vui lòng nhập vào một lệnh phù hợp!`);
                continue;
            }
            let command = parseInt(input, 10);
            switch (command) {
                case 1:
                    let addEmployeeName = prompt(`Nhập vào tên nhân viên:`);
                    let addEmployeeRole = prompt(`Nhập vào vai trò nhân viên:`);
                    if (!addEmployeeName || !addEmployeeRole) {
                        console.log(`Vui lòng nhập vào đầy đủ thông tin!`);
                        continue;
                    }
                    this.manager.addEmployee(addEmployeeName, addEmployeeRole);
                    break;
                case 2:
                    let addManagerName = prompt(`Nhập vào tên của quản lý:`);
                    let addManagerRole = prompt(`Nhập vào vai trò của quản lý:`);
                    let addManagerDepartment = prompt(`Nhập vào phòng ban của quản lý:`);
                    if (!addManagerDepartment || !addManagerName || !addManagerRole) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    this.manager.addManager(addManagerName, addManagerRole, addManagerDepartment);
                    break;
                case 3:
                    let addTaskTitle = prompt(`Nhập vào tên công việc:`);
                    let addTaskDeadline = prompt(`Nhập vào thời hạn hoàn thành:`);
                    if (!addTaskDeadline || !addTaskTitle) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    this.manager.addTask(addTaskTitle, addTaskDeadline);
                    break;
                case 4:
                    let inEmployeeID = prompt(`Nhập vào ID nhân viên: `);
                    let inTaskID = prompt(`Nhập vào ID công việc: `);
                    if (!inEmployeeID || !inTaskID) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    let valEmployeeID = parseInt(inEmployeeID, 10);
                    let valTaskID = parseInt(inTaskID, 10);
                    this.manager.assignTask(valEmployeeID, valTaskID);
                    break;
                case 5:
                    let inDoneTask = prompt(`Nhập vào ID công việc đã hoàn thành: `);
                    if (!inDoneTask) {
                        console.log(`Vui lòng nhập vào thông tin hợp lệ!`);
                        continue;
                    }
                    let valDoneTask = parseInt(inDoneTask, 10);
                    this.manager.completeTask(valDoneTask);
                    break;
                case 6:
                    console.log(`Danh sách công việc đã phân công:`);
                    this.manager.listAssignments();
                    break;
                case 7:
                    console.log(`Hẹn gặp lại!!!`);
                    active = false;
                    break;
                default:
                    console.log(`Đã xảy ra lỗi!`);
                    break;
            }
        }
    }
}
let app = new Main();
app.bootstrap();
