import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ({data}) => (<footer id="footer" className="sm-padding bg-dark">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="footer-logo">
          <Link to="/">
            <img src="img/logo-alt.png" alt="logo"/>
          </Link>
        </div>

        <ul className="footer-follow">
          {
            data.facebook
              ? <li>
                  <a href={data.facebook} target='_blank'>
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
              : null
          }
          {
            data.twitter
              ? <li>
                  <a href={data.twitter} target='_blank'>
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
              : null
          }
          {
            data.googlePlus
              ? <li>
                  <a href={data.googlePlus} target='_blank'>
                    <i className="fab fa-google-plus fa-lg"></i>
                  </a>
                </li>
              : null
          }
          {
            data.instagram
              ? <li>
                  <a href={data.instagram} target='_blank'>
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              : null
          }
          {
            data.linkedin
              ? <li>
                  <a href={data.linkedin} target='_blank'>
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
              : null
          }
          {
            data.youtube
              ? <li>
                  <a href={data.youtube} target='_blank'>
                    <i className="fab fa-youtube fa-lg"></i>
                  </a>
                </li>
              : null
          }
        </ul>

        <div className="footer-copyright">
          <p>Copyright © 2017. All Rights Reserved. Designed by&nbsp;
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>

        </div>
        <div className="footer-admin-link">
          <Link to="/admin">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>);

export default Footer;
