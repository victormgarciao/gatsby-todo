import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/molecules/Layout/layout"
import SEO from "../components/atoms/Seo/seo"
import TodoList from "../components/molecules/TodoList/todoList";
import AddTodoInputContainer from "../containers/molecules/AddTodoInput/addTodoInput.container";
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
        <AddTodoInputContainer />
        <TodoList todos={globalState.todos} />
      </Segment>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
