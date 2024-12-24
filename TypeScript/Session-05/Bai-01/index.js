"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}
class Manager extends Employee {
    constructor(id, name, role, department) {
        super(id, name, role);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
}
class Task {
    constructor(id, title, deadline) {
        this.isCompleted = false;
        this.id = id;
        this.title = title;
        this.deadline = deadline;
    }
    complete() {
        this.isCompleted = true;
        console.log(`Đã đánh dấu công việc là hoàn thành!`);
    }
    getDetails() {
        console.log(`ID: ${this.id} - title: ${this.title} - deadline: ${this.deadline} - isCompleted: ${this.isCompleted}`);
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails() {
        console.log(`Employee: ${this.employee}, Task: ${this.task}`);
    }
}
class TaskManager {
    constructor() {
        this.employeeID = 1;
        this.taskID = 1;
        this.managerID = 1;
        this.employees = [];
        this.managers = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name, role) {
        this.employees.push(new Employee(this.taskID++, name, role));
        console.log(`Thêm nhân viên ${name} thành công!`);
    }
    addManager(name, role, department) {
        this.managers.push(new Manager(this.managerID++, name, role, department));
        console.log(`Thêm quản lý ${name} - ${role} - ${department} thành công!`);
    }
    addTask(title, deadline) {
        this.tasks.push(new Task(this.taskID++, title, deadline));
    }
    assignTask(employeeId, taskId) {
        let checkEmployeeID = this.employees.findIndex((element) => element.id === employeeId);
        let checkTaskID = this.tasks.findIndex((element) => element.id === taskId);
        if (checkEmployeeID === -1 || checkTaskID === -1) {
            console.log("Không tìm thấy nhân viên hoặc task!");
        }
        else {
            this.assignments.push(new Assignment(this.employees[checkEmployeeID], this.tasks[checkTaskID]));
            console.log(`Đã phân công Task: ${this.tasks[checkTaskID].getDetails()} cho ${this.employees[checkEmployeeID].getName()} thành công!`);
        }
    }
    completeTask(taskId) {
        let changeToComplete = this.tasks.findIndex((element) => element.id === taskId);
        if (changeToComplete === -1) {
            console.log(`Không tồn tại task!`);
        }
        else {
            this.tasks[changeToComplete].complete();
        }
    }
    listAssignments() {
        if (this.assignments.length === 0) {
            console.log(`Danh sách hiện tại rỗng!`);
        }
        else {
            this.assignments.forEach((element) => {
                console.log(`Nhân viên: ${element.employee.getName()} - Task: ${element.getAssignmentDetails()}`);
            });
        }
    }
}
class Main {
    constructor() {
        this.manager = new TaskManager();
    }
    bootstrap() {
        let active = true;
        while (active) {
        }
    }
}
