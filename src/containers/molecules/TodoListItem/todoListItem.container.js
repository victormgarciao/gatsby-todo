import React from 'react'
import PropTypes from "prop-types"

import useGlobal from '../../../store/store';

import TodoListItem from '../../../components/molecules/TodoListItem/todoListItem'

const TodoListItemContainer = (props) => {
  const {
    description,
    isChecked,
    id,
  } = props

  const [, globalActions] = useGlobal()

  const tickTodo = () => globalActions.tickTodo(id)

  const removeTodo = () => globalActions.removeTodo(id);

  return (
    <TodoListItem 
        description={description}
        isChecked={isChecked}
        id={id}
        tickTodo={tickTodo}
        removeTodo={removeTodo}
    />
  )
}

export default TodoListItemContainer

TodoListItemContainer.propTypes = {
  description: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
}