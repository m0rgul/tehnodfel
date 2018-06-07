import React from 'react';

const DashNav = (props) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <button className="navbar-toggler navbar-toggler-right" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav navbar-sidenav">
        <li className="nav-item" title="Dashboard">
          <a className="nav-link" href="index.html">
            <i className="fas fa-tachometer-alt"></i>
            <span className="nav-link-text">Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>);
};

export default DashNav;
