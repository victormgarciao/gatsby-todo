import React from 'react'

import TodoList from '../../../components/molecules/TodoList/todoList';
import { getTodosData } from './queries';

const TodoListContainer = () => {
    const data = getTodosData();
    const todos = data.allMongodbGatsbytododbTodos.nodes;

    return  <TodoList todos={todos} />
}

export default TodoListContainer