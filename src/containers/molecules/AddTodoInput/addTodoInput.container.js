import React, { useState } from 'react'
import InputWithButton from '../../../components/molecules/InputWithButton/inputWithButton';
import useGlobal from '../../../store/store';
import { generateString } from '../../../utils/global';

const AddTodoInputContainer = () => {
    const [, globalActions] = useGlobal()

    const [input, updateInput] = useState('')

    const onInputChange = (event) => {
        event.preventDefault();
        updateInput(event.target.value);
    };


    const handleClick = (event) => {
        event.preventDefault();
        const newTodo = {
            description: input,
            isChecked: false,
            id: generateString(),
        }
        globalActions.addToTodos(newTodo)
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