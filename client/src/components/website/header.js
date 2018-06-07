import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy';
import {HashLink as Link} from 'react-router-hash-link';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      backToTop: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scroll = window.scrollY;
    if (scroll < 1 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    } else if (scroll > 1 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
    if (scroll > 700 && this.state.backToTop !== true) {
      this.setState({backToTop: true});
    } else if (scroll < 700 && this.state.backToTop === true) {
      this.setState({backToTop: false});
    }
  }

  backToTop() {
    const scrollToTop = (scrollDuration) => {
      var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else 
            clearInterval(scrollInterval);
          }
        , 15);
    };

    scrollToTop(300);
  }

  render() {
    const {welcomeMessage, greetingMessage, img} = this.props.data;
    const {scrolling, backToTop} = this.state;

    const style = {
      backgroundImage: `url(${img})`
    };

    return (<header id="home">
      <div className="bg-img" style={style}>
        <div className="overlay"></div>
      </div>
      <nav id="nav" className={`navbar nav-transparent navbar-expand-md ${scrolling
          ? 'fixed-top'
          : ''}`}>
        <div className="container">
          <Link to="#home" smooth={true} className="navbar-brand">
            <img className="logo" src="img/logo.png" alt="logo"/>
            <img className="logo-alt" src="img/logo-alt.png" alt="logo"/>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <div className="navbar-nav">
              <Scrollspy items={['home', 'service', 'about', 'team', 'contact']} currentClassName="active" className="main-nav nav navbar-nav">
                <li>
                  <Link to="#home" smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#service" smooth={true}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#about" smooth={true}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#team" smooth={true}>Team</Link>
                </li>
                <li>
                  <Link to="#contact" smooth={true}>Contact</Link>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </nav>
      <div className="home-wrapper">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="home-content">
                <h1 className="white-text">
                  {welcomeMessage}
                </h1>
                <p className="white-text">
                  {greetingMessage}
                </p>
                <Link to="/#contact" smooth={true} className="white-btn">
                  Get Started !
                </Link>
                <Link to="/#service " smooth={true} className="main-btn">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-to-top" className={`${backToTop
          ? 'show'
          : 'hide'}`} onClick={this.backToTop}></div>
    </header>);
  }
}

export default Header;
