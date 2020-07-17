import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.scss';

Banner.propTypes={
    title: PropTypes.string
};

Banner.defaultProps ={
    title: 'This is the Content of Banner'
}
function Banner({title, background}) {
    const backgroundImg= background?{ background: 'blue'}:{ backgroundImage: `url("https://picsum.photos/1800/300")`}
    return (
        <Container fluid className='mb-3'>
                <Row  className="banner justify-content-center align-items-center" style={backgroundImg}>
                    <Col>
                        <h3 className='text-center'><span className='banner-title'>{title}</span></h3>
                    </Col>      
                </Row>
        </Container>
    )
    
}

export default Banner
