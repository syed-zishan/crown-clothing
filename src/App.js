import React from 'react';

import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';


const HatsPage = ()=>(
  <div> Hats Page </div>
);

const NotFoundPage = ()=>{
  var location = useLocation();
  return(
    <div> 404 Page You Are Looking For "{location.pathname}" Is Not Found!! </div>
  );
}
  


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component = {HomePage}/>
        <Route exact={true} path='/shop/hats' component = {HatsPage}/>
        <Route  path='*' component = {NotFoundPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
