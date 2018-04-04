import React from 'react';

const Intro = ({data}) => {
  if (data.disabled) 
    return null;
  return (<header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">{data.welcomeMessage}</div>
        <div className="intro-heading text-uppercase">{data.greetingMessage}</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Mai mult</a>
      </div>
    </div>
  </header>);
};

export default Intro;
