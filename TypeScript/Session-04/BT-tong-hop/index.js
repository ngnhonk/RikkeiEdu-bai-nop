"use strict";
class Todo {
    constructor(id, content) {
        this.status = false;
        this.id = id;
        this.content = content;
    }
}
class TodoListManager {
    constructor() {
        this.todos = [];
        this.todoID = 1;
    }
    addTodo(content) {
        const newTodo = new Todo(this.todoID++, content);
        this.todos.push(newTodo);
        console.log(`Đã thêm thành công!`);
    }
    removeTodo(index) {
        this.todos.splice(index, 1);
        console.log(`Đã xoá tại vị trí ${index} thành công!`);
    }
    updateTodo(index, content) {
        this.todos[index].content = content;
        console.log(`Đã cập nhật tại id: ${index} thành công!`);
    }
    sortTodo() {
        this.todos.sort((a, b) => {
            if (a.status === b.status) {
                return a.content.localeCompare(b.content);
            }
            return a.status ? 1 : -1;
        });
        console.log("Đã sắp xếp thành công!");
    }
    findTodo(content) {
        const found = this.todos.find(i => i.content === content);
        if (found) {
            console.log("Đã tìm thấy tại ID = " + found.id);
        }
        else {
            console.log("Không tìm thấy!");
        }
    }
    listTodos() {
        for (let i of this.todos) {
            console.log(`ID: ${i.id}, Content: ${i.content}, Status: ${i.status ? "Completed" : "Not Completed"}`);
        }
    }
}
class Main {
    static run() {
        let manager = new TodoListManager();
        while (true) {
            let input = prompt("1.Add \n2.Remove \n3.Update \n4.Sort \n5.Find \n6.List \n7.Exit \nHãy nhập lựa chọn của bạn: ");
            if (!input) {
                console.log("Vui lòng nhập 1 lệnh!");
                continue;
            }
            let command = parseInt(input);
            if (isNaN(command)) {
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
                continue;
            }
            switch (command) {
                case 1:
                    let contentAdd = prompt("Nhập vào nội dung công việc: ");
                    if (!contentAdd) {
                        console.log("Vui lòng nhập vào nội dung công việc!");
                        break;
                    }
                    manager.addTodo(contentAdd);
                    console.log("Công việc đã được thêm!");
                    break;
                case 2:
                    let posRemove = prompt("Nhập vào vị trí cần xoá: ");
                    if (posRemove === null || isNaN(Number(posRemove))) {
                        console.log("Vị trí cần xoá không hợp lệ!");
                        break;
                    }
                    let indexRemove = parseInt(posRemove, 10);
                    manager.removeTodo(indexRemove - 1);
                    break;
                case 3:
                    let posUpdate = prompt("Nhập vào vị trí cần cập nhật:");
                    if (posUpdate === null || isNaN(Number(posUpdate))) {
                        console.log("Vị trí cần cập nhật không hợp lệ!");
                        break;
                    }
                    let indexUpdate = parseInt(posUpdate, 10);
                    let contentUpdate = prompt("Nhập vào nội dung cập nhật:");
                    if (!contentUpdate) {
                        console.log("Vui lòng nhập một nội dung hợp lệ!");
                        break;
                    }
                    manager.updateTodo(indexUpdate - 1, contentUpdate);
                    break;
                case 4:
                    manager.sortTodo();
                    break;
                case 5:
                    let findContent = prompt("Nhập vào nội dung cần tìm kiếm: ");
                    if (!findContent) {
                        console.log("Nội dung tìm kiếm không hợp lệ!");
                        continue;
                    }
                    manager.findTodo(findContent);
                    break;
                case 6:
                    manager.listTodos();
                    break;
                case 7:
                    console.log("See u again!");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
                    break;
            }
            if (command === 7) {
                break;
            }
        }
    }
}
Main.run();
