import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

export const GET_TODOS = gql`
    {
        todos {
            id
        }
    }
`;

export const getTodosId = () => useQuery(GET_TODOS);

export const getTodoById = (id) => {
    const QUERY = gql`
        query ($id: String!) {
            todo(id: $id) {
                description
                isChecked
            }
        }
    `;

    const data = useQuery(QUERY, { variables: { id } });

    return data;
}

export const ADD_TODO = gql`
    mutation ($description: String!) {
        addTodo(todoInput: { description: $description }) {
            description
            isChecked
        }
    }
`;

export const REMOVE_TODO = gql`
    mutation ($id: String!) {
        removeTodo(id: $id) 
    }
`;

// export const TODO_ADDED_SUBSCRIPTION = gql `
//     subscription {
//         todoAdded {
//             id
//             description
//         }
//     }
// `;