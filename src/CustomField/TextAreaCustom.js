import React from 'react';
import { Form  } from 'react-bootstrap';

function CustomerTextArea({field, form ,placeholder, title}) {
    const {errors, touched}= form;
    const {name}= field;
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label for={name} >{title}</Form.Label>
                <Form.Control {...field} as="textarea" rows="3" placeholder={placeholder}/>
            </Form.Group>
            {(errors&&touched) && <p>{errors[name]}</p>}
        </Form>
    )
}

export default CustomerTextArea
