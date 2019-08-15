import React from 'react'
import { Input as SemUIInput } from 'semantic-ui-react'

const Input = (props) => <SemUIInput placeholder={props.placeholder || 'Search...'} />

export default Input