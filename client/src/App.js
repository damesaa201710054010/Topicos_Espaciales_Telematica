import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import login from './components/login';
import data from './components/data';
import logout from './components/logout';


class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path ="/" component ={login} />
        <Route exact path ="/admin" component ={data} />
        <Route exact path ="/logout" component ={logout} />
      </Switch>
    );
  }
}

export default App;
