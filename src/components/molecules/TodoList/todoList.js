import React from 'react'
import PropTypes from "prop-types"

import { List } from 'semantic-ui-react'
import TodoListItem from '../TodoListItem/todoListItem';
import { generateString } from '../../../utils/global';

const TodoList = ({todos}) => {
  const createTodoList = ({description, isChecked}) => (
    <TodoListItem 
      description={description}
      isChecked={isChecked}
      key={generateString()}
    />
  )
  
  return (
    <List>
      {todos.map((todo) => createTodoList(todo))}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList