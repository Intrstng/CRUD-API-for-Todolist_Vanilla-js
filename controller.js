let data = require('./data');


class Controller {
    async getTodos() {
        return new Promise((resolve, _) => resolve(data));
    }
    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(el => el.id === parseInt(id));
            if (todo) {
                resolve(todo)
            } else {
                reject(`Todo with ${id} not found`);
            }
        });
    }
    async createTodo(todo) {
        return new Promise((resolve, _) => {
            let newTodo = {
                id: Math.floor(4 + Math.random() * 10),
                ...todo
            }
            data = [...data, newTodo];
            resolve(newTodo);
        });
    }
    // Change status 'completed': true/false
    async updateTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(el => el.id === parseInt(id));
            if (!todo) {
                reject(`No todo with id ${id} found`);
            }
            todo['completed'] = true;
            resolve(todo);
        });
    }

    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(el => el.id === parseInt(id));
            if (!todo) {
                reject(`No todo with id ${id} found`);
            }
            data = data.filter(el => el.id !== parseInt(id));
            resolve('Todo deleted successfully');
        });
    }
}

module.exports = Controller;