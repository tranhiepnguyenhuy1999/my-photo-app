import React from 'react'
import { Button } from 'react-bootstrap';
import './PhotoCustom.scss'

function PhotoCustom(props) {
    const {imgUrl, label, changeImgUrl, name, onBlur}= props
    const randomUrl=()=>{
        let id=Math.trunc(Math.random()*2000);
        return `https://picsum.photos/id/${id}/200/300`
    }
    const changePhoto=()=>{
        const url=randomUrl();
        changeImgUrl(url)

    }
    return (
        <div className="">
            <label>{label}</label>
            <Button onClick={changePhoto} id ={name} onBlur={onBlur}>Change your photo</Button>
            <div className="row">
                <div className="PhotoCustom">
                <img src={imgUrl} className="PhotoCustom-img" alt="Sorry, we can't load"></img>
                </div>
            </div>
           
        </div>
    )
}

export default PhotoCustom
