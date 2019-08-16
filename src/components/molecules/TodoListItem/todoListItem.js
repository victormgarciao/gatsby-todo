import React from 'react'
import PropTypes from "prop-types"

import { List, Segment, Button } from 'semantic-ui-react'
import Checkbox from '../../atoms/Checkbox/checkbox';
import { getStyles } from './styles';

const TodoListItem = (props) => {
  const {
    description,
    isChecked,
    tickTodo,
    removeTodo,
  } = props

  const computedStyles = getStyles()

  return (
    <Segment
      style={computedStyles.segment}
      onClick={tickTodo}
    >
      <List.Item
        style={computedStyles.listItem}
      >
        <Checkbox
          label={description}
          isChecked={isChecked}
        />
        <Button
          content="delete"
          onClick={removeTodo}
          color="red"
        />
      </List.Item>
    </Segment>
  )
}

export default TodoListItem

TodoListItem.propTypes = {
  description: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
}