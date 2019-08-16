import { useStaticQuery, graphql } from "gatsby";

export const getTodosData = () => useStaticQuery(graphql`
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