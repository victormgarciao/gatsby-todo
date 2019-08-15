import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import TodoList from "../components/molecules/TodoList/todoList";
import AddTodoInput from "../components/molecules/AddTodoInput/addTodoInput";
import { Segment } from "semantic-ui-react";
import useGlobal from "../store/store";

const IndexPage = () => {
  const [globalState] = useGlobal()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>ToDos</h1>
      <p>Add and remove some ToDos.</p>
      <Segment>
        <AddTodoInput />
        <TodoList todos={globalState.todos} />
      </Segment>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
