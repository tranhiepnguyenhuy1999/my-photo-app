import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Banner from '../../component/Banner/Banner';
import AddPhoto from './AddPhoto';
function Photo() {
    const match = useRouteMatch();
    return (
        <div>
            <Banner title="This is the Banner for Adding Photo"></Banner>
            <Link to={`${match.url}/add`} ><Button>Add</Button> </Link>
            {/* <PhotoList></PhotoList> */}
            <Switch>
                <Route  exact path={`${match.url}/add`} component={AddPhoto}/>
                <Route exact path={`${match.url}/Id`} component={<div>hay</div>}/>
                <Route/>
            </Switch>
        </div>
    )
}

export default Photo
