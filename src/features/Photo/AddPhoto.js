import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import InputCustom from '../../CustomField/InputCustom';
import SelectCustom from '../../CustomField/SelectCustom';
import OptionChoices from '../../data/Option';
import PhotoCustomMid from '../../CustomField/PhotoCustom/PhotoCustomMid';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {addNewPhoto} from './photoSlice'

function AddPhoto() {
    const initialValues={
        name:'',
        type: null,
        photo:'https://picsum.photos/200/300'
    }
    let Schema= Yup.object().shape(
        {
            name: Yup.string().required('This field must be a string'),
            type: Yup.number().required('This field must be a number').nullable(),
            photo: Yup.string().required('This field is required')
        }
    )
    const dispatch = useDispatch();
    const photo= useSelector(state => state.photoStore);
    return (

        <Formik initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={(values)=> {
            const add=addNewPhoto(values)
            dispatch(add)}
    }
        >
            {formikProps => {
                // const {values, errors, touched}= formikProps
                // console.log(values, errors, touched)
                return <Container>
                            <Row className='justify-content-center'>
                            <Col sx={12} md={5}>
                            <h1>Add Your Photo</h1>
                            <Form>
                                <FastField
                                //Props formik
                                name="name"
                                component={InputCustom}
                                //Props into component
                                placeholder="Please enter your photo title"
                                label="Title"
                                >
                                </FastField>
                                <FastField
                                name="type"
                                component={SelectCustom}

                                label="Type for Photo"
                                options={OptionChoices}
                                >
                                </FastField>
                                <FastField
                                name="photo"
                                component={PhotoCustomMid}

                                label='Chose your photo'
                                >
                                </FastField>

                                <Button type="submit">Submit your Photo</Button>
                            </Form>
                            </Col>
                            </Row>
                        </Container>
            }}
        </Formik>
            // <Container>
            //     <Row className=''>
            //         <Col sx={12} md={6}>
            //         <h1>Add Your Photo</h1>
            //     <Form>
            //         <Form.Group controlId="formBasicEmail">
            //             <Form.Label>Email address</Form.Label>
            //             <Form.Control type="email" placeholder="Enter email" />
            //             <Form.Text className="text-muted">
            //             We'll never share your email with anyone else.
            //             </Form.Text>
            //         </Form.Group>

            //         <Form.Group controlId="formBasicPassword">
            //             <Form.Label>Password</Form.Label>
            //             <Form.Control type="password" placeholder="Password" />
            //         </Form.Group>
            //         <Form.Group controlId="formBasicCheckbox">
            //             <Form.Check type="checkbox" label="Check me out" />
            //         </Form.Group>
            //         <Button variant="primary" type="submit">
            //             Submit
            //         </Button>
            //     </Form>   
            //         </Col>
            //     </Row>
            // </Container>
    )
}

export default AddPhoto
