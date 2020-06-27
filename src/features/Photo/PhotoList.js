import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PhotoItem from './PhotoItem';
import {useSelector, useDispatch} from 'react-redux';
import {removePhoto} from './photoSlice';
import Select  from 'react-select';
import OptionChoices from'../../data/OptionFilterPhotos';

function PhotoList() {
    const photoStore = useSelector(state => state.photoStore);
    const dispatch = useDispatch();
    const [onFilter, setOnFilter]=useState(false)
    const [filterPhotos, setfilterPhotos]=useState([])
    const onClickRemove=(id)=>{
        const action=removePhoto(id)
        dispatch(action)
    }
    const handelFilter=(values)=>{
        if(values.value===4)
        {
            setOnFilter(false)
            return;
        }
        setOnFilter(true)
        setfilterPhotos(photoStore.filter(photo=>photo.type===values.value))
    }
    return (
        <Container className="mt-3">
            <Row className='justify-content-end'>
                    <Col xs={3} className='mb-3'>
                <Select options={OptionChoices} onChange={handelFilter}></Select>
                    </Col>
            </Row>
            {onFilter?
            <Col>
                {(filterPhotos.length===0)?<h1>There is no photo in this type</h1>:<Row>
                {filterPhotos.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
                </Row>
                }
            </Col>
            :
            <Col>
                {(photoStore.length===0)?<h1>There is no photo in this store</h1>:<Row>
                {photoStore.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
            </Row>
            }
            </Col>}
            
           
        </Container>
    )
}
export default PhotoList 