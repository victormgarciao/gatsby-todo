import React, { Component } from 'react'
import PropTypes from "prop-types"

import { List, Segment, Button } from 'semantic-ui-react'
import Checkbox from '../../atoms/Checkbox/checkbox';

class TodoListItem extends Component {
  handleClick = () => console.log('Delete Todo');

  render() {
    const {
      description,
      isChecked,
    } = this.props

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
            onClick={this.handleClick}
            color="red"
          />
        </List.Item>
      </Segment>
    )
  }
}

export default TodoListItem

TodoListItem.propTypes = {
    description: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
}