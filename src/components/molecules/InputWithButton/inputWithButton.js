import React, { Component, createRef } from 'react'
import { Input, Button } from 'semantic-ui-react'

class InputWithButton extends Component {
    inputRef = createRef()
    handleClick = () => this.inputRef.current.focus()

    render() {
        const {
            buttonContent = 'focus',
            placeholder = 'Search...',
            handleClick = this.handleClick,
        } = this.props
        
        return (
            <div
                style={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                    margin: `0 0 2rem 0.5rem`,
                }}
            >
                <Input
                    ref={this.inputRef}
                    placeholder={placeholder}
                    style={{ width: `100%` }}
                />
                <Button 
                    content={buttonContent}
                    onClick={handleClick}
                    primary
                    style={{
                        marginLeft: `0.25rem`,
                        width: `20%`,
                    }}
                />
            </div>
        )
    }
}

export default InputWithButton