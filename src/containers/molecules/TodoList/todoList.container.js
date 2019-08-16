import React from 'react'

import TodoList from '../../../components/molecules/TodoList/todoList';
import useGlobal from '../../../store/store';

const TodoListContainer = () => {
    const [globalState] = useGlobal()

    return  <TodoList todos={globalState.todos.todoList} />
}

export default TodoListContainer