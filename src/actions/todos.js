export const addToTodos = (store, todo) => {
    const todos = [...store.state.todos, todo];
    store.setState({ todos });
    console.log(':::: todos ::::', store.state.todos)
}

export const removeTodo = (store, id) => {
    const todos = store.state.todos.filter((todo) => todo.id !== id);
    store.setState({ todos });
    console.log(':::: todos ::::', store.state.todos)
}

export const tickTodo = (store, id) => {
    const todos = store.state.todos.filter((todo) => {
        if (todo.id !== id)
            todo.isChecked = !todo.isChecked
        
        return todo
    });
    store.setState({ todos });
    console.log(':::: todos ::::', store.state.todos)
}