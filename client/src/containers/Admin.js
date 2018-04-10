import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import DashNav from '../components/dashboard/dashNav';
import DashMain from '../components/dashboard/dashMain';
import Cms from '../components/cms/cms';

import '../style/dashboard.css';

class Dashboard extends Component {
  render() {
    return (<div className="dashboard">
      <DashNav/>
      <div className="dashMain">
        <Router>
          <Switch>
            <Route path='/admin/dashboard' component={DashMain}/>
            <Route path='/admin/cms' component={Cms}/>

            <Redirect exact={true} from='/admin/' to='/admin/dashboard'/>
          </Switch>
        </Router>
      </div>
    </div>);
  }
}

export default Dashboard;
