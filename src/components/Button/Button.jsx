import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to="/contact" className={props.className}>{props.title}</Link>
    )
}

export default Button