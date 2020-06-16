import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
const  Photo = React.lazy(()=> import('./features/Photo/index')) 


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Pls ... waitting</div>}>    
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/photo' component={Photo}/>
        </Switch>
      </Router>
      <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
