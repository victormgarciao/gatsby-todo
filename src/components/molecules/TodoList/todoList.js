import React from 'react'
import PropTypes from "prop-types"

import { List } from 'semantic-ui-react'
import TodoListItemContainer from '../../../containers/molecules/TodoListItem/todoListItem.container';
import { generateString } from '../../../utils/global';

const TodoList = ({todos}) => {
  const createTodoListItem = ({ _id }) => (
    <TodoListItemContainer id={_id} key={generateString()} />
  )

  return (
    <List>
      {todos.map((todo) => createTodoListItem(todo))}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
}

export default TodoList