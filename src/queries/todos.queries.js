import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

export const getTodosData = () => useQuery(gql`
    {
        allMongodbGatsbytododbTodos {
            nodes {
                id
            }
        }
    }
`)

export const getTodoContent = (id) => {
    const QUERY = gql`
        query MyQuery($id: String!) {
            mongodbGatsbytododbTodos(id: {eq: $id}) {
                isChecked
                description
            }
        }
    `

    const data = useQuery(QUERY, { variables: { id } })

    return data;
}