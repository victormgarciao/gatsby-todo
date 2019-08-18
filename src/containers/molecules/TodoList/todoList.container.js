import React from 'react'

import TodoList from '../../../components/molecules/TodoList/todoList';
import { getTodosId } from '../../../queries/todos.queries';

const TodoListContainer = () => {
    const { loading, error, data } = getTodosId();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const todos = data.todos;

    return  <TodoList todos={todos} />
}

export default TodoListContainer