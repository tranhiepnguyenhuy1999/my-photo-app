import React from 'react'
import { Form, } from 'react-bootstrap'

function InputCustom(props) {
    const {label, placeholder, field, form}=props
    const {errors, touched}= form
    const {name} = field
    const showError= errors[name] && touched[name]
    return (
        <Form.Group controlId="formBasicEmail">
            {label && <Form.Label for={name}>{label}</Form.Label>}
            <input type="text"
            placeholder={placeholder}
            id={name}
            name={name}
            {...field}
            className="form-control"
            />
            {showError && <p>{errors[name]}</p>}
        </Form.Group>
    )
}

export default InputCustom
