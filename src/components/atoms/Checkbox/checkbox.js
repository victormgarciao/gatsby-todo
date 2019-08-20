import React from 'react'
import PropTypes from "prop-types"

import { Checkbox as SemUICheckbox } from 'semantic-ui-react'

const Checkbox = (props) => (
    <SemUICheckbox
        label={props.label}
        checked={props.isChecked}
    />
)

Checkbox.propTypes = {
    children: PropTypes.string,
}

export default Checkbox