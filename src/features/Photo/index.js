import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddPhoto from './AddPhoto';
import MainPage from '../../pages/MainPage';
import Detail from '../../pages/Detail';
function Photo() {
    const match = useRouteMatch();
    return (
        <div>  
            <Switch>
                <Route exact path='/photo' component={MainPage}></Route>
                <Route   exact path={`${match.url}/add`} component={AddPhoto}/>
                <Route  exact path={`${match.url}/:idphoto`} component={AddPhoto}/>
                <Route exact path={`${match.url}/detail/:id`} component={Detail}></Route>
                <Route/>
            </Switch>
        </div>
    )
}
export default Photo
