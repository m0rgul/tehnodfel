import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import DashNav from '../components/dashboard/dashNav';
import DashMain from '../components/dashboard/dashMain';
import CmsContainer from '../components/cms/CmsContainer';

import '../style/dashboard.css';

class Dashboard extends Component {
  render() {
    return (<div className="dashboard">
      <DashNav/>
      <div className="dashMain">
        <Router>
          <Switch>
            <Route path='/admin/dashboard' component={DashMain}/>
            <Route path='/admin/cms' component={CmsContainer}/>

            <Redirect exact={true} from='/admin/' to='/admin/dashboard'/>
          </Switch>
        </Router>
      </div>
    </div>);
  }
};

export default Dashboard;
