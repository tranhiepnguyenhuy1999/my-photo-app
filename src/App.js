import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './component/Footer/index'
import Header from './component/Header'; 
const  Photo = React.lazy(()=> import('./features/Photo/index')) 

function App(){
  return (
    <div className="App">
      <Suspense fallback={<div>Pls ... waitting</div>}>    
      <Router>
        <Header></Header>
        <Switch>
          {/* <Redirect from='/' to='/photo'></Redirect> */}
          <Route path='/photo' component={Photo}/>
        </Switch>
      </Router>
      <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
