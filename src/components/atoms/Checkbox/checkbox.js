import React from 'react'
import PropTypes from "prop-types"

import { Checkbox as SemCheckbox } from 'semantic-ui-react'

const Checkbox = (props) => (
    <SemCheckbox label={props.label} defaultChecked={props.isChecked} />
)

Checkbox.propTypes = {
    children: PropTypes.string,
}

export default Checkbox