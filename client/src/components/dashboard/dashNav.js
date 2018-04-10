import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from 'react-bootstrap';

import {IndexLinkContainer} from 'react-router-bootstrap';

const DashNav = (props) => {
  return (<div id="sidebar-menu" className="sideBarMenuContainer">
    <div className="user-panel">
      <div className="pull-left image">
        <img src="/img/author.jpg" alt="test image"/>
      </div>
      <div className="pull-left info">
        <p>User name</p>
        <p className="status">
          <i className="fa fa-circle text-success"></i>
          <span>Status</span>
        </p>
      </div>
    </div>
    <Nav bsStyle="pills" stacked={true}>
      <IndexLinkContainer to='/admin/dashboard'>
        <NavItem>Home</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to='/admin/cms'>
        <NavItem>CMS</NavItem>
      </IndexLinkContainer>
    </Nav>
  </div>);
};

export default DashNav;
