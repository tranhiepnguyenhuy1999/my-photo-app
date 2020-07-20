import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import InputCustom from '../../CustomField/InputCustom';
import SelectCustom from '../../CustomField/SelectCustom';
import {addCat} from './catSlice'
import PhotoCustomMid from '../../CustomField/PhotoCustom/PhotoCustomMid';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {addNewPhoto, editPhoto} from './photoSlice';
import {useParams, useHistory} from 'react-router-dom'

function AddPhoto() {
        const dispatch = useDispatch();
        const photo= useSelector(state => state.photoStore);
        const category=useSelector(state=>state.category);
        const history=useHistory();
        const {idphoto}=useParams();
        const editItem =photo.find(item=>item.id === +idphoto)
        const initialValues=idphoto?{
            name:editItem.name,
            type: editItem.type,
            photo:editItem.photo,
        }:{
            name:'',
            type: null,
            photo:'https://picsum.photos/350/350'
        }
   
    let Schema= Yup.object().shape(
        {
            name: Yup.string().required('This field must be a string'),
            type: Yup.number().required('This field must be a number').nullable(),
            photo: Yup.string().required('This field is required')
        }
    )

// Random ID to create a fake ID for photo
    const randomId =()=>{
        const id= Math.trunc(Math.random()*10000);
        return id;
    }
    const onAddCat=()=>{
        const action=addCat({value:4, label:'Travel' }) 
        dispatch(action)
       
        history.push('/photo/add')
    }
    return (          
        <Formik initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={(values, {resetForm})=> {
            if(idphoto)
            {
                const valueUpdate= {...values, id: +idphoto};
                const edit= editPhoto(valueUpdate);
                dispatch(edit);      
            }
            else{
                const idPhoto = randomId();
                const add=addNewPhoto({...values, id : idPhoto});
                dispatch(add);
                history.push('/photo/add');
                
            }
            resetForm({values:''});
        }
    }>
            {formikProps => {
                return <Container>
                            <Row className='justify-content-center'>
                            <Col sx={12} md={5}>
                            <h1>Add Your Photo</h1>
                            <Form>
                                <Col>
                                <FastField
                                    //Props formik
                                    name="name"
                                    component={InputCustom}
                                    //Props into component
                                    placeholder="Please enter your photo title"
                                    label="Title"
                                    >
                                    </FastField>
                                </Col>
                                <Col>
                                <Row>
                                <Col xs={10}>
                                    <FastField
                                    name="type"
                                    component={SelectCustom}

                                    label="Type for Photo"
                                    options={category}
                                    >
                                    
                                    </FastField>
                                </Col>
                                <Col>
                                    
                                    <Button onClick={onAddCat}>+</Button>
                                </Col>
                                </Row>
                                </Col>       
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
 
    )
}

export default AddPhoto
