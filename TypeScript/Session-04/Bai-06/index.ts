class Employee {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
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
}

class Assignment {
    employee: Employee;
    task: Task;

    constructor(employee: Employee, task: Task) {
        this.employee = employee;
        this.task = task;
    }
}

class TaskManager {
    employees: Employee[];
    tasks: Task[];
    assignments: Assignment[];
    private employeeId: number;
    private taskId: number;

    constructor() {
        this.employees = [];
        this.tasks = [];
        this.assignments = [];
        this.employeeId = 1;
        this.taskId = 1;
    }

    addEmployee(name: string) {
        this.employees.push(new Employee(this.employeeId++, name));
        console.log(`Đã thêm nhân viên: ${name}`);
    }

    addTask(title: string, deadline: string) {
        this.tasks.push(new Task(this.taskId++, title, deadline));
        console.log(`Đã thêm Task: ${title} - Deadline: ${deadline}`);
    }

    assignTask(employeeId: number, taskId: number) {
        const employeeIndex = this.employees.findIndex((emp) => emp.id === employeeId);
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

        if (employeeIndex === -1) {
            console.log("Nhân viên không tồn tại!");
            return;
        }
        if (taskIndex === -1) {
            console.log("Task không tồn tại!");
            return;
        }

        this.assignments.push(new Assignment(this.employees[employeeIndex], this.tasks[taskIndex]));
        console.log("Đã phân công Task thành công!");
    }

    completeTask(taskId: number) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) {
            console.log("Task không tồn tại!");
            return;
        }

        this.tasks[taskIndex].isCompleted = true;
        console.log(`Đã hoàn thành Task: ${this.tasks[taskIndex].title}`);
    }

    listTasks() {
        if (this.assignments.length === 0) {
            console.log("Chưa có bất kỳ công việc nào!");
            return;
        }

        console.log("Danh sách công việc:");
        this.assignments.forEach((assignment) => {
            const { employee, task } = assignment;
            console.log(
                `Nhân viên: ${employee.name} - Task: ${task.title} - Deadline: ${task.deadline} - Trạng thái: ${
                    task.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"
                }`
            );
        });
    }
}

class Main {
    private taskManager: TaskManager;

    constructor() {
        this.taskManager = new TaskManager();
    }

    private readInput(promptText: string): string {
        let input = prompt(promptText);
        while (!input) {
            console.log("Vui lòng nhập đầy đủ!");
            input = prompt(promptText);
        }
        return input;
    }

    bootstrap(): void {
        let loop = true;
        while (loop) {
            const choice = prompt(`
                1. Thêm nhân viên mới
                2. Thêm Task mới
                3. Gán Task cho nhân viên
                4. Đánh dấu Task hoàn thành
                5. Hiển thị danh sách Task
                6. Thoát chương trình
            `);

            switch (choice) {
                case "1":
                    const name = this.readInput("Nhập vào tên nhân viên: ");
                    this.taskManager.addEmployee(name);
                    break;

                case "2":
                    const title = this.readInput("Nhập vào tên Task: ");
                    const deadline = this.readInput("Nhập vào deadline (yyyy-mm-dd): ");
                    this.taskManager.addTask(title, deadline);
                    break;

                case "3":
                    const empId = parseInt(this.readInput("Nhập vào Employee ID: "), 10);
                    const taskId = parseInt(this.readInput("Nhập vào Task ID: "), 10);
                    this.taskManager.assignTask(empId, taskId);
                    break;

                case "4":
                    const completeTaskId = parseInt(this.readInput("Nhập vào Task ID cần hoàn thành: "), 10);
                    this.taskManager.completeTask(completeTaskId);
                    break;

                case "5":
                    this.taskManager.listTasks();
                    break;

                case "6":
                    console.log("Cảm ơn bạn đã sử dụng chương trình! Hẹn gặp lại.");
                    loop = false;
                    break;

                default:
                    console.log("Lựa chọn không hợp lệ! Vui lòng thử lại.");
                    break;
            }
        }
    }
}

const app = new Main();
app.bootstrap();
