import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import InputCustom from '../../CustomField/InputCustom';
import PhotoCustomMid from '../../CustomField/PhotoCustom/PhotoCustomMid';
import SelectCustom from '../../CustomField/SelectCustom';
import CustomerTextArea from '../../CustomField/TextAreaCustom';
import { addNewPhoto, editPhoto } from './photoSlice';

function AddPhoto() {
        const dispatch = useDispatch();
        const category=useSelector(state=>state.category);
        const photo= useSelector(state => state.photoStore);
        // React router
        const history=useHistory();
        const {idphoto}=useParams();

        //State
        // const [newCat, setNewCat]= useState('')
        const editItem =photo.find(item=>item.id === +idphoto)
        const initialValues=idphoto?{
            name:editItem.name,
            type: editItem.type,
            des: editItem.des,
            photo:editItem.photo,
        }:{
            name:'',
            type: null,
            des: '',
            photo:'https://picsum.photos/350/350'
        }
   
    let Schema= Yup.object().shape(
        {
            name: Yup.string().required('This field must be a string'),
            type: Yup.number().required('This field must be a number').nullable(),
            des: Yup.string().required('This field must be a string'),
            photo: Yup.string().required('This field is required'),
        }
    )

// Random ID to create a fake ID for photo
    const randomId =()=>{
        const id= Math.trunc(Math.random()*10000);
        return id;
    }
    // const onAddCat=()=>{
    //     if(newCat!=='')
    //     {
    //     const value=randomId();
    //     const action=addCat({label: newCat, value});
    //     setNewCat('')
    //     dispatch(action);
    //     }
    // }
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
                console.log(formikProps.values)
                return <Container>
                            <Row className='justify-content-center'>
                            <Col sx={12} md={5}>
                            <h1>Add Your Photo</h1>
                            <Col style={{textAlign:`left`}} className='mt-4'>
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
                                </Row>
                                </Col>
                                <Col>
                                    <FastField
                                    name='des'
                                    component={CustomerTextArea}

                                    placeholder='Pls type description for this picture'
                                    title='Descriptions'
                                    >
                                    </FastField>    
                                </Col>   
                                <FastField
                                name="photo"
                                component={PhotoCustomMid}

                                label='Chose your photo'
                                >
                                </FastField>
                                <Col className='text-center'>
                                <Button type="submit">Submit your Photo</Button>
                                </Col>
                                
                            </Form>
                            </Col>
                           
                            </Col>
                           
                            </Row>
                          
                       

                {/* Modal for add new category */}
                {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Add new category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type='text' placeholder='Type your new category' className='form-control ' value={newCat}
                        onChange={(event)=>{setNewCat(event.target.value)}}
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={onAddCat}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div> */}
                        </Container>
            }}
        </Formik>
    
    )
}

export default AddPhoto
