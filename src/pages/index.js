import React from "react"
import { Link } from "gatsby"
import { Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/molecules/Layout/layout"
import SEO from "../components/atoms/Seo/seo"
import AddTodoInputContainer from "../containers/molecules/AddTodoInput/addTodoInput.container";
import TodoListContainer from "../containers/molecules/TodoList/todoList.container";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>ToDos</h1>
      <p>Add and remove some ToDos.</p>
      <Segment>
        <AddTodoInputContainer />
        <TodoListContainer />
      </Segment>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
