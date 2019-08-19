import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

export const GET_TODOS = gql`
    {
        todos {
            todoId
            description
            isChecked
        }
    }
`;

export const getTodosId = () => useQuery(GET_TODOS);

export const GET_TODO_BY_ID = gql`
    query ($todoId: String!) {
        todo(todoId: $todoId) {
            description
            isChecked
        }
    }
`;

export const getTodoById = (todoId) => {
    const data = useQuery(GET_TODO_BY_ID, { variables: { todoId } });

    return data;
}

export const ADD_TODO = gql`
    mutation ($description: String!, $todoId: String!) {
        addTodo(todoInput: { description: $description, todoId: $todoId }) {
            description
            isChecked
            todoId
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation ($todoId: String!) {
        removeTodo(todoId: $todoId) 
    }
`;

export const TICK_TODO = gql`
    mutation ($todoId: String!, $isChecked: Boolean!) {
        tickTodo(todoId:$todoId, isChecked: $isChecked) {
          isChecked
          todoId
          description
        }
    }
`;