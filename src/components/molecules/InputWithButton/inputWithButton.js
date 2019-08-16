import React, { Component, createRef } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { getStyles } from './styles';

class InputWithButton extends Component {
    inputRef = createRef()
    handleClick = () => this.inputRef.current.focus()
    
    render() {
        const {
            buttonContent = 'focus',
            placeholder = 'Search...',
            handleClick = this.handleClick,
            onInputChange = null,
            inputValue = '',
        } = this.props
        
        const computedStyles = getStyles()

        return (
            <div style={computedStyles.root}>
                <Input
                    ref={this.inputRef}
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
}

export default InputWithButton