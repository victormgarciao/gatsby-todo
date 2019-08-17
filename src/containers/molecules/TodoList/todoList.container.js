import React from 'react'

import TodoList from '../../../components/molecules/TodoList/todoList';
import { getTodosData } from '../../../queries/todos.queries';

const TodoListContainer = () => {
    const { loading, error, data } = getTodosData();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const todos = data.allMongodbGatsbytododbTodos.nodes;

    return  <TodoList todos={todos} />
}

export default TodoListContainer