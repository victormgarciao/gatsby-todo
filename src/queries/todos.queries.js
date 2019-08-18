import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

export const getTodosId = () => useQuery(gql`
    {
        todos {
            _id
        }
    }
`);

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
