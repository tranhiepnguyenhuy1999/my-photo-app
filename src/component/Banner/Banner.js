import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Banner.scss'
import PropTypes from 'prop-types';

function Banner({title}) {
    Banner.propTypes={
        title: PropTypes.string
    };

    Banner.defaultProps ={
        title: 'This is the fuck'
    }
    return (
        <Container fluid className='mb-3'>
                <Row  className="banner justify-content-center align-items-center">
                    <Col>
                        <h3 className="banner-title">{title}</h3>
                    </Col>      
                </Row>
        </Container>
    )
    
}

export default Banner
