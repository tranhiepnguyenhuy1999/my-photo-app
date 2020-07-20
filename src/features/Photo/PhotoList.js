import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PhotoItem from './PhotoItem';
import {useSelector, useDispatch} from 'react-redux';
import {removePhoto, removeAll} from './photoSlice';
import Select  from 'react-select';
import OptionChoices from'../../data/OptionFilterPhotos';
import Pagination from '../../component/PaginationPage'

function PhotoList() {
    const photoStore = useSelector(state => state.photoStore);
    const dispatch = useDispatch();
    const [onFilter, setOnFilter]=useState(false)
    const [pageNum, setPageNum]=useState(1)
    const [pageNumFil, setPageNumFil]=useState(1)
    const [filter, setfilter] =useState([])
    const [reAll, setreAll]=useState([1])
    // Remove photo from Redux
    const onClickRemove=(id)=>{
        const action=removePhoto(id)
        dispatch(action)
        setfilter(photoStore.filter(photo=>photo.id !== id))
    }
    // Filter photos by type
    const handelFilter=(values)=>{
        if(values.value===4)
        {
            setOnFilter(false)
            return;
        }
        setOnFilter(true)
        setfilter(photoStore.filter(photo=>photo.type===values.value))
    }
    // Pagination for All type
    const indexEnd= pageNum*8;
    const indexStart=indexEnd-8;
    const pagePhoto= photoStore.slice(indexStart,indexEnd)
    // Pagination Number for All type
    const pagesNumber=Math.ceil(photoStore.length/8)
    // Pagination for Filter type
      const indexEndFilter= pageNumFil*8;
      const indexStartFilter=indexEndFilter-8;
      const pageFilterPhoto= filter.slice(indexStartFilter,indexEndFilter)
    // Pagination Number for Filter type
      const pagesFilterNumber=Math.ceil(filter.length/8)
    // ChangePage for all
    const onClickPaggination=(num)=>{
        setPageNum(num)
    }
    // Change page for filter
    const onClickPagginationFilter=(num)=>{
        setPageNumFil(num)
    }
    const onRemoveAll=()=>{
        const action= removeAll();
        dispatch(action)
    }
    return (
        <Container className="mt-3 bg-light mt-3">
            <Row className='justify-content-end'>
                    <Col xs={2} className='mb-3 mt-3'><Button className='btn-danger' onClick={onRemoveAll}>Remove All</Button></Col>
                    <Col xs={3} className='mb-3 mt-3'>
                <Select options={OptionChoices} onChange={handelFilter} placeholder='All'></Select>
                    </Col>
            </Row>
            {onFilter?
            <Col className='mb-3'>
                {(filter.length===0)?<h1 >There is no photo in this type</h1>:<Row>
                {pageFilterPhoto.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
                </Row>
                }
            {filter.length>0 &&<Pagination pages={pagesFilterNumber} changePage={onClickPagginationFilter} pageCur={pageNumFil}></Pagination>}
            </Col>
            :
            <Col className='mb-3'>
                {(photoStore.length===0)?<h1>There is no photo in this store</h1>:<Row>
                {pagePhoto.map(photo => <PhotoItem
                photo={photo}
                removePhoto={onClickRemove}
                />)}
            </Row>
            }
            {photoStore.length>0 &&<Pagination pages={pagesNumber} changePage={onClickPaggination} pageCur={pageNum}></Pagination>}
            </Col>}
        
           
        </Container>
    )
}
export default PhotoList 