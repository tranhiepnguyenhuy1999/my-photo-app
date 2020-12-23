import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import * as yup from "yup";

function Thumb ({data}){
    const [loading, setloading] = useState(false)
    const [thumb, setthumb] = useState(null)
    useEffect(() => {
        if(!data) return;
        setloading(true)
        let reader = new FileReader();
        
        reader.onloadend = () => {
            setloading(false)
            setthumb(reader.result)
        };
        reader.readAsDataURL(data);
        return;
    }, [data])
    
    if (!data) { return null; }

    if (loading) { return <p>Loading...</p>; }
    return(
        <img src={thumb}
            alt={data.name}
            className="img-thumbnail mt-2"
            height={200}
            width={200} />
    )
}
function FileUpload() {
    const [onchange, setonchange] = useState(false)
    
    return (
        <div className="container">
        <Formik 
          initialValues={{ file: null }}
          onSubmit={(values) => {
              console.log('yeah')
          }} 
          validationSchema={yup.object().shape({
            file: yup.mixed().required(),
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="file">File upload</label>
                  <input id="file" name="file" type="file" onChange={(event) => {
                      setonchange(!onchange);
                    setFieldValue("file", event.currentTarget.files[0]);
                  }} className="form-control" />
                  <Thumb data={values.file} />
                </div>
                <button type="submit" className="btn btn-primary">submit</button>

                <button onClick={()=>{
                    fetch('http://localhost:9000/check/check', 
                    {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'same-origin', // include, *same-origin, omit
                        headers: {
                          'Content-Type': 'application/json'
                          // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify({}) // body data type must match "Content-Type" header
                      }).then((res)=>{ 
                        console.log('hey')  
                        console.log(res)}).then(
                        res=> console.log('yeah')
                    )
                    .catch(err=> {
                        console.log('here')
                        console.log(err)})
                }}>check</button>
              </form>
            );
          }} />
      </div>
    )
}

export default FileUpload
