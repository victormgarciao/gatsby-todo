import React from 'react'
import PropTypes from "prop-types"

import useGlobal from '../../../store/store';

import TodoListItem from '../../../components/molecules/TodoListItem/todoListItem'
import { getTodoById, REMOVE_TODO } from '../../../queries/todos.queries';
import { useMutation } from '@apollo/react-hooks';

const TodoListItemContainer = ({ id }) => {
  const [, globalActions] = useGlobal()

  const { loading, error, data } = getTodoById(id);

  const [removeTodo] = useMutation(REMOVE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    todo: { description, isChecked } = {
      description: '',
      isChecked: false
    }
  } = data

  

  const tickTodo = () => globalActions.tickTodo(id)
  const removeTodoHandler = () => {
    removeTodo({ variables: { id } });
  };

  return (
    <TodoListItem
      description={description}
      isChecked={isChecked}
      tickTodo={tickTodo}
      removeTodo={removeTodoHandler}
    />
  )
}

export default TodoListItemContainer

TodoListItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
}