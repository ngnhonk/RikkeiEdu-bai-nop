"use strict";
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Task {
    constructor(id, title, deadline) {
        this.isCompleted = false;
        this.id = id;
        this.title = title;
        this.deadline = deadline;
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
}
class TaskManager {
    constructor() {
        this.employees = [];
        this.tasks = [];
        this.assignments = [];
        this.id = 0;
    }
    addEmployee(name) {
        let indexEmp = this.id;
        this.employees.push(new Employee(indexEmp++, name));
        console.log("Đã thêm nhân viên thành công!");
    }
    addTask(title, deadline) {
        let indexTask = this.id;
        this.tasks.push(new Task(indexTask++, title, deadline));
        console.log("Đã thêm Task thành công!");
    }
    assignTask(employeeId, taskId) {
        let checkEmployeeID = this.employees.findIndex((element) => element.id === employeeId);
        let checkTaskID = this.tasks.findIndex((element) => element.id === taskId);
        if (!checkEmployeeID) {
            console.log("Nhân viên không tồn tại!");
            return;
        }
        if (!checkTaskID) {
            console.log("Task không tồn tại!");
            return;
        }
        this.assignments.push(new Assignment(this.employees[checkEmployeeID], this.tasks[checkTaskID]));
        console.log("Đã thêm phân công thành công!");
    }
    completeTask(taskId) {
        let checkUpdateTaskID = this.tasks.findIndex(element => element.id === taskId);
        if (!checkUpdateTaskID) {
            console.log("Task không tồn tại");
            return;
        }
        this.tasks[checkUpdateTaskID].isCompleted = true;
        console.log(`Đã sửa trạng thái của task ${taskId} thành công!`);
    }
    listTasks() {
        if (this.assignments.length === 0) {
            console.log("Chưa có bất kỳ công việc nào cả !!!");
        }
        else {
            for (let i of this.tasks) {
                // console.log(`Employee: ${i.employee.name} - Task: ${i.task.title} - Deadline: ${i.task.deadline} - Complete: ${i.task.isCompleted}`);
                console.log(i.title + " - " + i.deadline + " - " + i.isCompleted);
            }
        }
    }
    getListLength() {
        return this.assignments.length;
    }
}
class Main {
    constructor() {
        this._taskManager = new TaskManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            // console.log("Menu chức năng:");
            // console.log("1. Thêm nhân viên mới.");
            // console.log("2. Thêm task mới.");
            // console.log("3. Gán task cho nhân viên.");
            // console.log("4. Đánh dấu task hoàn thành.");
            // console.log("5. Hiển thị danh sách task");
            // console.log("6. Dừng chương trình.");
            let choice = prompt(`
                1. Thêm nhân viên mới
                2. Thêm task mới
                3. Gán task cho nhân viên
                4. Đánh dấu task hoàn thành
                5. Hiển thị danh sách task
                6. Dừng chương trình`);
            switch (choice) {
                case "1":
                    let inName = prompt("Nhập vào tên nhân viên: ");
                    if (!inName) {
                        console.log("Vui lòng nhập đầy đủ!");
                    }
                    else {
                        this._taskManager.addEmployee(inName);
                        break;
                    }
                case "2":
                    let inTask = prompt("Nhập vào tên task: ");
                    let inDeadLine = prompt("Nhập vào deadline: ");
                    if (!inTask || !inDeadLine) {
                        console.log("Vui lòng nhập đầy đủ!");
                    }
                    else {
                        this._taskManager.addTask(inTask, inDeadLine);
                        break;
                    }
                case "3":
                    // assignTask(employeeId: number, taskId: number)
                    let inEmployeeID = prompt("Nhập vào Employee ID: ");
                    let inTaskID = prompt("Nhập vào Task ID: ");
                    if (!inEmployeeID || !inTaskID) {
                        console.log("Vui lòng nhập đầy đủ thông tin!");
                    }
                    else {
                        let valEmployeeID = parseInt(inEmployeeID, 10);
                        let valTaskID = parseInt(inTaskID, 10);
                        this._taskManager.assignTask(valEmployeeID, valTaskID);
                        break;
                    }
                case "4":
                    let inUpdateID = prompt("Nhập vào Task ID: ");
                    if (!inUpdateID) {
                        console.log("Vui lòng nhập đầy đủ!");
                    }
                    else {
                        let valUpdateID = parseInt(inUpdateID);
                        this._taskManager.completeTask(valUpdateID);
                        break;
                    }
                case "5":
                    this._taskManager.listTasks();
                    break;
                case "6":
                    console.log("Cảm ơn, hẹn gặp lại !!!!");
                    loop = false;
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
