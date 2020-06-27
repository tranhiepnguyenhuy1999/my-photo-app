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
            <Container className="mt-3">
               
                <Row>
                <Col sx={12} md={6}>
                    <h3>Thông tin liên lạc</h3>
                        <Row sx={4} className="mb-2">
                            <Col sx={6}>
                                <MailOutlineIcon></MailOutlineIcon>
                                Email
                            </Col>
                            <Col>
                                <a href="">tranhiepnguyenhuy1999@gmail.com</a>
                            </Col>
                            </Row>
                        <Row sx={4} className="mb-2">
                            <Col sx={6}>
                            <FacebookIcon></FacebookIcon>
                                Facebook
                            </Col>
                            <Col>
                                <a href="https://www.facebook.com/tranhiepnguyenhuy99">Văn Viễn Huy</a>
                            </Col>
                </Row>
                        <Row sx={4} className="mb-2">
                            <Col sx={6}>
                                <InstagramIcon></InstagramIcon>
                                Instagram
                            </Col>
                            <Col>
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