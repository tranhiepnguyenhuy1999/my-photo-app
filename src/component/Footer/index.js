import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import './Footer.scss'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(){
    return(
        <Container className="mt-5 footer p-relative" fluid>
            <div className="warp"></div>
            <Container className="mt-4">
                <Row>
                <Col xs={12} md={6}>
                    <h3>Thông tin liên lạc</h3>
                        <Row xs={4} className="mb-2">
                            <Col xs={3} className='text-center'>
                                <Row className="justify-content-start">
                                 <MailOutlineIcon></MailOutlineIcon>
                                 Email   
                                </Row>
                                
                            </Col>
                            <Col className='text-left'>
                                <a href="https://www.tranhiepnguyenhuy1999@gmail.com">tranhiepnguyenhuy1999@gmail.com</a>
                            </Col>
                            </Row>
                        <Row xs={4} className="mb-2">
                            <Col xs={3}>
                                <Row className="justify-content-start">
                                <FacebookIcon></FacebookIcon>
                                Facebook
                                </Row>
                           
                            </Col>
                            <Col className='text-left'>
                                <a href="https://www.facebook.com/vanvienhuy99">Văn Viễn Huy</a>
                            </Col>
                        </Row>
                        <Row xs={4} className="mb-2">
                            <Col xs={3}>
                                <Row className="justify-content-start">
                                 <InstagramIcon></InstagramIcon>
                                Instagram
                                </Row>
                             
                            </Col>
                            <Col  className='text-left'>
                                <a href="https://www.instagram.com/vanvienhuy.1999/">vanvienhuy.1999</a>
                            </Col>
                        </Row>
                    

                </Col>
                <Col sx={12} md={6}>
                    <h3>Cảm ơn các bạn đã dành thời gian cho Huy</h3>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Footer;