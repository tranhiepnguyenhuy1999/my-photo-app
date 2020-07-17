import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Banner from '../../component/Banner/Banner';
import {Link, useRouteMatch} from 'react-router-dom';
import PhotoList from '../../features/Photo/PhotoList'
import './MainPage.scss';
function MainPage() {
    const match = useRouteMatch();
    return (
        
        <Container fluid className="mainPage">
            <Banner title="This is the Banner for MainPage"></Banner>  
            <Container >
              <Link to={`${match.url}/add`}><Button> Add</Button> </Link>
             <PhotoList/>
            </Container>
        </Container>
    )
}

export default MainPage
