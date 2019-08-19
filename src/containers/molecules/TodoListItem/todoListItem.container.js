import React from 'react'
import PropTypes from "prop-types"

import useGlobal from '../../../store/store';

import TodoListItem from '../../../components/molecules/TodoListItem/todoListItem'
import { getTodoById, REMOVE_TODO, GET_TODOS } from '../../../queries/todos.queries';
import { useMutation } from '@apollo/react-hooks';

const TodoListItemContainer = ({ todoId }) => {
  const [, globalActions] = useGlobal()

  const { loading, error, data } = getTodoById(todoId);

  const [removeTodo] = useMutation(REMOVE_TODO, 
    {
      update(cache, { data: { removeTodo } }) {
          const { todos } = cache.readQuery({ query: GET_TODOS });

          const removeTodoById = (id) => todos.filter(todo => todo.todoId !== id)

          cache.writeQuery({
              query: GET_TODOS,
              data: { todos: removeTodoById(removeTodo) },
          });
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    todo: { description, isChecked } = {
      description: '',
      isChecked: false
    }
  } = data

  

  const tickTodo = () => globalActions.tickTodo(todoId)
  const removeTodoHandler = () => {
    removeTodo({ variables: { todoId } });
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
  todoId: PropTypes.string.isRequired,
}