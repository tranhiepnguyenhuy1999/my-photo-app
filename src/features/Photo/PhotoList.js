import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PhotoItem from './PhotoItem';
import {useSelector, useDispatch} from 'react-redux';
import {removePhoto, removeAll} from './photoSlice';
import Select  from 'react-select';
import OptionChoices from'../../data/OptionFilterPhotos';
import Pagination from '../../component/PaginationPage'

function PhotoList() {
    const photoStore = useSelector(state => state.photoStore);
    const [data, setData]=useState([]);
    useEffect(() => {
        setData(photoStore)
    }, [photoStore]);
    const dispatch = useDispatch();
    const [pageNum, setPageNum]=useState(1);


    // Remove photo from Redux
    const onClickRemove=(id)=>{
        const action=removePhoto(id);
        dispatch(action);
    }
    // Filter photos by type
    const handelFilter=(values)=>{
        if(values.value===4)
        {
            setData(photoStore);
            return;
        }
        setData(photoStore.filter(photo=>photo.type===values.value));
    }
    // Pagination 
    const indexEnd= pageNum*8;
    const indexStart=indexEnd-8;
    const pagePhoto= data.slice(indexStart,indexEnd);
    // Pagination 
    const pagesNumber=Math.ceil(photoStore.length/8);
    // ChangePage for all
    const onClickPaggination=(num)=>{
        setPageNum(num);
    }
    const onRemoveAll=()=>{
        const action= removeAll();
        dispatch(action);
    }
    return (
        <Container className="mt-3 bg-light mt-3">
            <Row className='justify-content-end'>
                    <Col xs={2} className='mb-3 mt-3'><Button className='btn-danger' onClick={onRemoveAll}>Remove All</Button></Col>
                    <Col xs={3} className='mb-3 mt-3'>
                <Select options={OptionChoices} onChange={handelFilter} placeholder='All'></Select>
                    </Col>
            </Row>
            <Col className='mb-3'>
                {(data.length===0)?<h1>There is no photo in this store</h1>:<Row>
                {pagePhoto.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
            </Row>
            }
            {data.length>0 &&<Pagination pages={pagesNumber} changePage={onClickPaggination} pageCur={pageNum}></Pagination>}
            </Col>
        
           
        </Container>
    )
}
export default PhotoList 