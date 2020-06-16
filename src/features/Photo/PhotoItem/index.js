import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './PhotoItem.scss'
function PhotoItem() {
    return (
                <Col md={4} className="mb-3 ">
                <div className="PhotoImg">
                    <img className="PhotoImg-img" src="../../../../assests/img/P1.jpg" alt="The img can't load"></img>
                    <Row className="PhotoImg-warp align-items-center justify-content-center">
                        <Button className='mr-4'>Remove</Button>
                        <Button>Edit</Button>
                    </Row>
                </div>
                </Col>
    )
}

export default PhotoItem
