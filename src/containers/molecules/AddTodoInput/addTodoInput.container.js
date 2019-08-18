import React, { useState } from 'react'
import InputWithButton from '../../../components/molecules/InputWithButton/inputWithButton';
import { ADD_TODO } from '../../../queries/todos.queries';
import { useMutation } from '@apollo/react-hooks';

const AddTodoInputContainer = () => {

    const [input, updateInput] = useState('')

    const onInputChange = (event) => {
        event.preventDefault();
        updateInput(event.target.value);
    };

    const [addTodo, /* { data } */] = useMutation(ADD_TODO);

    const handleClick = (event) => {
        event.preventDefault();
        const description = input
        addTodo({ variables: { description }})
        updateInput('')
    }

    return (
        <InputWithButton 
            buttonContent="Add Todo"
            placeholder="Do the bed ..."
            handleClick={handleClick}
            onInputChange={onInputChange}
            inputValue={input}
        />
    )
}

export default AddTodoInputContainer