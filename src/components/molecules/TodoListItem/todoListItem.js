import React from 'react'
import PropTypes from "prop-types"

import { List, Segment, Button } from 'semantic-ui-react'
import Checkbox from '../../atoms/Checkbox/checkbox';
import useGlobal from '../../../store/store';

const TodoListItem = (props) => {
  const {
    description,
    isChecked,
    id,
  } = props

  const [, globalActions] = useGlobal()

  const handleClick = () => globalActions.removeTodo(id);


  return (
    <Segment style={{ margin: `0.5rem` }}>
      <List.Item
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Checkbox
          label={description}
          isChecked={isChecked}
        />
        <Button
          content="delete"
          onClick={handleClick}
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