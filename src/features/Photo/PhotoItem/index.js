import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './PhotoItem.scss';
import {useHistory} from 'react-router-dom'
import OptionChoices from '../../../data/Option'


function PhotoItem(props) {
    const {type, name, photo, id}= props.photo;
    const removePhoto = props.removePhoto;
    const history = useHistory();
    const typeLabel= OptionChoices.find(opt=>opt.value===type)
    const remove=(id)=>{ 
        removePhoto(id)
    }
    const editPhoto=(id)=>{

        history.push(`/photo/${id}`)
    }
    return (
                <Col md={3} className="mb-3 ">
                <div className="PhotoImg">
                    <img className="PhotoImg-img" src={photo} alt="The img can't load"></img>
                    <Col className="PhotoImg-warp">
                        <h3 className="mb-2"> Name :{name}</h3>
                        <div className="mb-2">Type :{typeLabel.label}</div>
                        <div>
                           <Button className='mr-4 btn-danger' onClick={()=>remove(id)}>Remove</Button>
                            <Button className="btn-warning" onClick={()=>editPhoto(id)}>Edit</Button> 
                        </div>                       
                    </Col>
                </div>
                </Col>
    )
}   

export default PhotoItem
