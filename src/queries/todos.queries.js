import { useStaticQuery, graphql } from "gatsby";

const fetchTodosData = () => useStaticQuery(graphql`
    query TodosQuery {
        allMongodbGatsbytododbTodos {
            nodes {
            description
            id
            isChecked
            }
        }
    }
`)

export const fetchTodos = () => {
    const data = fetchTodosData()
    const todos = data.allMongodbGatsbytododbTodos.nodes

    return todos;
}