class Person {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Employee extends Person {
    role: string;
    constructor(id: number, name: string, role: string) {
        super(id, name);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    department: string;
    constructor(id: number, name: string, role: string, department: string) {
        super(id, name, role);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
}

class Task {
    id: number;
    title: string;
    deadline: string;
    isCompleted: boolean = false;
    constructor(id: number, title: string, deadline: string) {
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
    employee: Employee;
    task: Task;

    constructor(employee: Employee, task: Task) {
        this.employee = employee;
        this.task = task;
    }

    getAssignmentDetails() {
        console.log(`Employee: ${this.employee}, Task: ${this.task}`);
    }
}

class TaskManager {
    employees: Employee[];
    managers: Manager[];
    tasks: Task[];
    assignments: Assignment[];
    employeeID = 1;
    taskID = 1;
    managerID = 1;
    constructor() {
        this.employees = [];
        this.managers = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name: string, role: string) {
        this.employees.push(new Employee(this.taskID++, name, role));
        console.log(`Thêm nhân viên ${name} thành công!`);
    }

    addManager(name: string, role: string, department: string) {
        this.managers.push(new Manager(this.managerID++, name, role, department));
        console.log(`Thêm quản lý ${name} - ${role} - ${department} thành công!`);
    }

    addTask(title: string, deadline: string) {
        this.tasks.push(new Task(this.taskID++, title, deadline));
    }

    assignTask(employeeId: number, taskId: number) {
        let checkEmployeeID = this.employees.findIndex((element) => element.id === employeeId);
        let checkTaskID = this.tasks.findIndex((element) => element.id === taskId);
        if (checkEmployeeID === -1 || checkTaskID === -1) {
            console.log("Không tìm thấy nhân viên hoặc task!");
        } else {
            this.assignments.push(new Assignment(this.employees[checkEmployeeID], this.tasks[checkTaskID]));
            console.log(`Đã phân công Task: ${this.tasks[checkTaskID].getDetails()} cho ${this.employees[checkEmployeeID].getName()} thành công!`);
        }
    }

    completeTask(taskId: number) {
        let changeToComplete = this.tasks.findIndex((element) => element.id === taskId);
        if (changeToComplete === -1) {
            console.log(`Không tồn tại task!`);
        } else {
            this.tasks[changeToComplete].complete();
        }
    }

    listAssignments() {
        if (this.assignments.length === 0) {
            console.log(`Danh sách hiện tại rỗng!`);
        } else {
            this.assignments.forEach((element) => {
                console.log(`Nhân viên: ${element.employee.getName()} - Task: ${element.getAssignmentDetails()}`);
            })
        }
    }
}

class Main {
    manager: TaskManager;
    constructor() {
        this.manager = new TaskManager();
    }
    bootstrap() {
        let active = true;
        while (active) {
            
        }
    }
}