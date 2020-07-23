import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PhotoItem.scss';

function PhotoItem(props) {
    const category = useSelector(state => state.category)
    const {type, name, photo, id}= props.photo;
    const removePhoto = props.removePhoto;
    const history = useHistory();
    const typeLabel= category.find(opt=>opt.value===type)
    const remove=()=>{ 
        removePhoto(id)
    }
    const editPhoto=()=>{

        history.push(`/photo/${id}`)
    }
    const detailPhoto=()=>{
        history.push(`/photo/detail/${id}`)
    }
    return (
                <Col md={3} className="mb-3 ">
                <div className="PhotoImg">
                    <img className="PhotoImg-img" src={photo} alt="The img can't load"></img>
                    <Col className="PhotoImg-warp">
                        <h3 className="mb-2"> Name :{name}</h3>
                        <div className="mb-2">Type :{typeLabel.label}</div>
                        <div>
                            <Button className='mr-4 btn-danger' onClick={remove}>Remove</Button>
                            <Button className="btn-warning" onClick={editPhoto}>Edit</Button> 
                        </div>
                                            
                    </Col>
                    <Col className="bg-light PhotoImg-btnDetail"  onClick={detailPhoto}> Detail</Col>
                </div>
                </Col>
    )
}   

export default PhotoItem
