import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Home, Books, Electronics,Login } from './page';
function Router(){
    
    return (
        <div className="container">
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/login"  component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      </div>
    );
    
}
export default Router;