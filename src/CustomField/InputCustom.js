import React from 'react'
import { Form } from 'react-bootstrap'

function InputCustom(props) {
    const {label, placeholder, field}=props
    const {name} = field
    return (
        <Form.Group controlId="formBasicEmail">
            {label && <Form.Label for={name}>{label}</Form.Label>}
            <Form.Control type="text"
            placeholder={placeholder}
            id={name}
            name={name}
            {...field}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
    )
}

export default InputCustom
