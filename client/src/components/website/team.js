import React from 'react';

const Team = ({data}) => (<div id="team" className="section md-padding bg-grey">
  <div className="container">
    <div className="row">
      <div className="section-header text-center">
        <h2 className="title">Our Team</h2>
      </div>

      <div className="col-sm-4">
        <div className="team">
          <div className="team-img">
            <img className="img-responsive" src="./img/team1.jpg" alt=""/>
            <div className="overlay">
              <div className="team-social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-content">
            <h3>John Doe</h3>
            <span>Web Designer</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="team">
          <div className="team-img">
            <img className="img-responsive" src="./img/team2.jpg" alt=""/>
            <div className="overlay">
              <div className="team-social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-content">
            <h3>John Doe</h3>
            <span>Web Designer</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="team">
          <div className="team-img">
            <img className="img-responsive" src="./img/team3.jpg" alt=""/>
            <div className="overlay">
              <div className="team-social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-content">
            <h3>John Doe</h3>
            <span>Web Designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>);

export default Team;
