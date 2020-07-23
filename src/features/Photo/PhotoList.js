import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import Pagination from '../../component/PaginationPage';
import PhotoItem from './PhotoItem';
import { removeAll, removePhoto } from './photoSlice';

function PhotoList() {
    // Redux
    const photoStore = useSelector(state => state.photoStore);
    const category=useSelector(state=>state.category)
    const dispatch = useDispatch(); 

    const [data, setData]=useState([]);
    useEffect(() => {
        setData(photoStore)
    }, [photoStore]);

    const [pageNum, setPageNum]=useState(1);


    // Remove photo from Redux
    const onClickRemove=(id)=>{
        const action=removePhoto(id);
        dispatch(action);
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
    // Remove all photo from redux 
    const onRemoveAll=()=>{
        const action= removeAll();
        dispatch(action);
    }

    const handleChange=(values)=>{
        console.log(values)
        if(values===null)
        {
            setData(photoStore);
            return;
        }
        setData(photoStore.filter(photo=>photo.type===values.value));
    } 
    return (
        <Container className="mt-3 bg-light mt-3">
            <Row className='justify-content-end'>
                    <Col xs={2} className='mb-3 mt-3'><Button className='btn-danger' onClick={onRemoveAll}>Remove All</Button></Col>
                    <Col xs={3} className='mb-3 mt-3'>
                    <CreatableSelect
                        isClearable
                        onChange={handleChange}
                        placeholder='Select...'
                        options={category}
                    />
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