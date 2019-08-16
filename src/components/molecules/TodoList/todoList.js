import React from 'react'
import PropTypes from "prop-types"

import { List } from 'semantic-ui-react'
import TodoListItemContainer from '../../../containers/molecules/TodoListItem/todoListItem.container';
import { generateString } from '../../../utils/global';

const TodoList = ({todos}) => {
  const createTodoList = ({description, isChecked, id}) => (
    <TodoListItemContainer
      description={description}
      isChecked={isChecked}
      id={id}
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