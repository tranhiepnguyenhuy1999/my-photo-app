import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Banner.scss'
import PropTypes from 'prop-types';
Banner.propTypes={
    title: PropTypes.string
};

Banner.defaultProps ={
    title: 'This is the Content of Banner'
}
function Banner({title}) {
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
