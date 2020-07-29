import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = {}


    @action
    addTodo(title){
        let tempNewTask = new TodoModel(this, title)
        this.todos[tempNewTask.id] = tempNewTask
    }

    @action
    removeTodo(id) {
        this.todos.delete(id)
    }
}


const todoStore = new TodoStore()
export default todoStore
