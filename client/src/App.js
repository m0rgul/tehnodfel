import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Website from './components/website/website';
import Cms from './components/cms/cms';

class App extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route path='/' exact="exact" component={Website}/>
        <Route path='/cms' exact="exact" component={Cms}/>
      </Switch>
    </Router>);
  }
}

export default App;
