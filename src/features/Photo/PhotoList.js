import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PhotoItem from './PhotoItem';
import {useSelector, useDispatch} from 'react-redux';
import {removePhoto} from './photoSlice'

function PhotoList() {
    const photoStore = useSelector(state => state.photoStore);
    const dispatch = useDispatch();

    const onClickRemove=(id)=>{
        const action=removePhoto(id)
        dispatch(action)
    }
    return (
        <Container className="mt-3">
            {(photoStore.length===0)?<h1>There is no photo in this store</h1>:<Row>
                {photoStore.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
            </Row>
            }
        </Container>
    )
}
export default PhotoList 