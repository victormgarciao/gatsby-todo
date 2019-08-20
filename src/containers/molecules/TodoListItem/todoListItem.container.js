import React from 'react'
import PropTypes from "prop-types"

import TodoListItem from '../../../components/molecules/TodoListItem/todoListItem'
import { getTodoById, REMOVE_TODO, GET_TODOS, TICK_TODO, GET_TODO_BY_ID } from '../../../queries/todos.queries';
import { useMutation } from '@apollo/react-hooks';

const TodoListItemContainer = ({ todoId }) => {

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

  const [tickTodo] = useMutation(TICK_TODO,
    {
      update(cache, { data: { tickTodo }}) {
        const { todo } = cache.readQuery({
          query: GET_TODO_BY_ID,
          variables: { todoId: tickTodo.todoId }
        })

        cache.writeQuery({
          query: GET_TODO_BY_ID,
          variables: { todoId: tickTodo.todoId },
          data: {
            todo: {...todo, isChecked: tickTodo.isChecked}
          }
        })
      }
    }
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const description = data.todo.description
  const isChecked = data.todo.isChecked

  const tickTodoHanlder = (event) => {
    event.preventDefault()
    tickTodo({ variables: { todoId, isChecked: !isChecked } })
    event.stopPropagation()
  }
  const removeTodoHandler = (event) => {
    event.preventDefault()
    removeTodo({ variables: { todoId } });
    event.stopPropagation()
  };

  return (
    <TodoListItem
      description={description}
      isChecked={isChecked}
      tickTodo={tickTodoHanlder}
      removeTodo={removeTodoHandler}
    />
  )
}

export default TodoListItemContainer

TodoListItemContainer.propTypes = {
  todoId: PropTypes.string.isRequired,
}