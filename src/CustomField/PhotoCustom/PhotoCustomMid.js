import React from 'react'
import PhotoCustom from '.'

function PhotoCustomMid(props) {
    const {field, form, label}=props;
    const {value,name,onBlur}=field;
    const changeImgUrl=(urlImg)=>{
        form.setFieldValue(name, urlImg)
    }

    return (
        <PhotoCustom
        imgUrl={value}
        label={label}
        changeImgUrl={changeImgUrl}
        onBlur={onBlur}
        name={name}
        >
        </PhotoCustom>      
        
    )
}

export default PhotoCustomMid
