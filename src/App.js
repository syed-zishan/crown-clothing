import React from 'react';

import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, useLocation } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';

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
        <Route exact={true} path='/shop' component = {ShopPage}/>
        <Route  path='*' component = {NotFoundPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
