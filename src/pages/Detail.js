import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {removePhoto} from '../features/Photo/photoSlice'
import Banner from '../component/Banner/Banner'
import './Detail.scss'
function Detail() {
    const photoStore = useSelector(state => state.photoStore);
    const dispatch=useDispatch();
    const history=useHistory();
    const {id}=useParams();
    const photo=photoStore.find(photo=> photo.id===+id);
    const editPhoto=()=>{
        history.push(`/photo/${id}`)
    }
    const onClickRemove=()=>{
        const action=removePhoto(+id)
        dispatch(action)
        history.push('/photo')
    }
    return (
        <Container fluid className='detail'>
            <Banner title='This is the Banner for Detail'></Banner>
            <Container className='mt-3'>
            <Row>
                <Col xs={12} md={5}>
                    <div>
                        <img src={photo.photo} alt='cant load'></img>
                    </div>
                </Col>
                <Col>
                    <h2 className="mb-2">Name: {photo.name}</h2>
                    <h3 className="mb-2"> Type : {photo.type}</h3>
                    <div  className="mb-2">
                        This is the description of this photo
                    </div>
                    <div>
                        <Button className='mr-3 btn-warning' onClick={editPhoto}>Edit</Button>
                        <Button className='btn-danger' onClick={onClickRemove}>Remove</Button>
                    </div>
                </Col>
            </Row>
            </Container>
     
        </Container>
        
     
    )
}

export default Detail
