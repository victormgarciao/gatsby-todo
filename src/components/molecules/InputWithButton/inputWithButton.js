import React, { createRef } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { getStyles } from './styles';

const InputWithButton = (props) => {
    const inputRef = createRef()
    const defaultHandleClick = () => inputRef.current.focus()
    
    const {
        buttonContent = 'focus',
        placeholder = 'Search...',
        handleClick = defaultHandleClick,
        onInputChange = null,
        inputValue = '',
    } = props
    
    const computedStyles = getStyles()

    return (
        <div style={computedStyles.root}>
            <Input
                ref={inputRef}
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange}
                style={computedStyles.input}
            />
            <Button 
                content={buttonContent}
                onClick={handleClick}
                primary
                style={computedStyles.button}
            />
        </div>
    )
}

export default InputWithButton