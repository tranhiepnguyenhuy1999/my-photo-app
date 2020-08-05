import React from 'react';
import { Button } from 'react-bootstrap';
import './PhotoCustom.scss';

function PhotoCustom(props) {
    const {imgUrl, changeImgUrl, name, onBlur}= props
    const randomUrl=()=>{
        let id=Math.trunc(Math.random()*2000);
        return `https://picsum.photos/id/${id}/350/350`
    }
    const changePhoto=()=>{
        const url=randomUrl();  
        changeImgUrl(url)

    }
    return (
        <div className="mb-2 text-center">
            <Button onClick={changePhoto} id ={name} onBlur={onBlur} className="mb-2">Change your photo</Button>
            <div className="row justify-content-center">
                <div className="PhotoCustom">
                <img src={imgUrl} className="PhotoCustom-img" alt="Sorry, we can't load"
                    onError={changePhoto}
                ></img>
                </div>
            </div>
           
        </div>
    )
}

export default PhotoCustom
