import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Website from './containers/Website';
import Admin from './containers/Admin';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route path='/' exact={true} component={Website} />
        <PrivateRoute path='/admin/:filter?' component={Admin} />
        <Route exact={true} path='/login' component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>);
  }
}

export default App;
