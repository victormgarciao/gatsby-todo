import React, { useState } from 'react'
import InputWithButton from '../../../components/molecules/InputWithButton/inputWithButton';
import { ADD_TODO, GET_TODOS } from '../../../queries/todos.queries';
import { useMutation } from '@apollo/react-hooks';
import { apolloClient } from '../../../utils/apollo';
import { generateString } from '../../../utils/global';

const AddTodoInputContainer = () => {

    const [input, updateInput] = useState('')

    const onInputChange = (event) => {
        event.preventDefault();
        updateInput(event.target.value);
    };

    const [addTodo, /* { data } */] = useMutation(
        ADD_TODO,
        {
            update(cache, { data: { addTodo } }) {
                const { todos } = cache.readQuery({ query: GET_TODOS });
                cache.writeQuery({
                    query: GET_TODOS,
                    data: { todos: todos.concat([addTodo]) },
                });
            }
        }
    );

    const handleClick = (event) => {
        event.preventDefault();
        const description = input
        const id = generateString()
        addTodo({ variables: { description, id }})
        updateInput('')
        // apolloClient.cache.writeData({ data: {}})
        console.log(':::: addTodo ::::::', apolloClient.cache)
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