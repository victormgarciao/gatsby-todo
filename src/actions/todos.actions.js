import { fetchTodos } from "../queries/todos.queries";

export const addToTodos = (store, todo) => {
    const newtodoListState = [...store.state.todos.todoList, todo];
    const newTodosState = {...store.state.todos, todoList: newtodoListState}
    const newState = {...store.state, todos: newTodosState}

    store.setState(newState );
    console.log(':::: addTodos todos ::::', store.state.todos)
}

export const removeTodo = (store, id) => {
    const newState = store.state.todos.todoList.filter((todo) => todo.id !== id);
    store.setState({ newState });
    console.log(':::: removeTodo todos ::::', store.state.todos)
}

export const tickTodo = (store, id) => {
    const newState = store.state.todos.todoList.map((todo) => {
        if (todo.id === id)
            todo.isChecked = !todo.isChecked
        
        return todo
    });
    store.setState({ newState });
    console.log(':::: tickTodo todos ::::', store.state.todos)
}

export const initTodos = (store) => {
    const todos = fetchTodos()
    const todoState = {
        isFetched: true,
        todoList: todos,
    }
    const newState = {...store.state, todos: todoState}

    store.setState(newState);
    console.log(':::: initTodos todos ::::', store.state.todos)
} 