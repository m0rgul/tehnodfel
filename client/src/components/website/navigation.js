import React from 'react';

const Nav = (props) => (<nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${props.scroll
    ? 'navbar-shrink'
    : ''}`} id="mainNav">
  <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">Tehnodfel Medical</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#services">Servicii</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#portfolio">Portfoliu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">Despre Noi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>);

export default Nav;
