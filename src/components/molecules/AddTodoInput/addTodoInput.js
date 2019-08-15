import React, { Component } from 'react'
import InputWithButton from '../InputWithButton/inputWithButton';

class AddTodoInput extends Component {
    handleClick = () => console.log('TODO created')

    render() {
        return (
            <InputWithButton 
                buttonContent="Add Todo"
                placeholder="Do the bed ..."
                handleClick={this.handleClick}
            />
        )
    }
}

export default AddTodoInput