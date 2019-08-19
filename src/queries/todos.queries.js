import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

export const GET_TODOS = gql`
    {
        todos {
            todoId
        }
    }
`;

export const getTodosId = () => useQuery(GET_TODOS);

export const getTodoById = (todoId) => {
    const QUERY = gql`
        query ($todoId: String!) {
            todo(todoId: $todoId) {
                description
                isChecked
            }
        }
    `;

    const data = useQuery(QUERY, { variables: { todoId } });

    return data;
}

export const ADD_TODO = gql`
    mutation ($description: String!, $todoId: String!) {
        addTodo(todoInput: { description: $description, todoId: $todoId }) {
            description
            isChecked
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation ($todoId: String!) {
        removeTodo(todoId: $todoId) 
    }
`;

// export const TODO_ADDED_SUBSCRIPTION = gql `
//     subscription {
//         todoAdded {
//             todoId
//             description
//         }
//     }
// `;