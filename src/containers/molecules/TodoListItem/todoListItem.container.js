import React from 'react'
import PropTypes from "prop-types"

import useGlobal from '../../../store/store';

import TodoListItem from '../../../components/molecules/TodoListItem/todoListItem'
import { getTodoById } from '../../../queries/todos.queries';

const TodoListItemContainer = ({ id }) => {
  const [, globalActions] = useGlobal()

  const { loading, error, data } = getTodoById(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    todo: { description, isChecked } = {
      description: '',
      isChecked: false
    }
  } = data

  const tickTodo = () => globalActions.tickTodo(id)
  const removeTodo = () => globalActions.removeTodo(id);

  return (
    <TodoListItem
      description={description}
      isChecked={isChecked}
      tickTodo={tickTodo}
      removeTodo={removeTodo}
    />
  )
}

export default TodoListItemContainer

TodoListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
}