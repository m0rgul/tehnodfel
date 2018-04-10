import React from 'react';
import {Carousel} from 'react-bootstrap';

const HistoryItem = ({item}) => (<div className="feature">
  <i className="fa fa-check"></i>
  <div className="info">
    <p className="date">{item.date}</p>
    <p className="story">{item.description}</p>
  </div>

</div>);

const HistoryItems = ({items}) => {
  if (!items || items.length === 0) 
    return null;
  return items.map((item, index) => {
    return <HistoryItem item={item} key={index}/>
  });
};

const HistoryCarousel = ({items}) => {
  if (!items || items.length === 0) 
    return null;
  return (<Carousel>
    {
      items.map((item, index) => {
        return (<Carousel.Item>
          <img width={900} height={500} alt="900x500" src={item.image}/>
        </Carousel.Item>)
      })
    }
  </Carousel>);
};

const About = ({data}) => {
  const style = {
    backgroundImage: 'url(./img/background2.jpg)'
  };

  return [
    <div id="about" className="section md-padding bg-grey" key={'about'}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="title">{data.title}</h2>
            </div>
            <p>{data.message}</p>
            <HistoryItems items={data.history}/>
          </div>

          <div className="col-md-6">
            <HistoryCarousel items={data.history}/>
          </div>
        </div>
      </div>

      <div className="bg-img" style={style}>
        <div className="overlay"></div>
      </div>
    </div>,

    <div className="section sm-padding" key={'numbers'}>
      <div className="bg-img" style={style}>
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-users"></i>
              <h3 className="white-text">
                <span className="counter">451</span>
              </h3>
              <span className="white-text">Happy clients</span>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-trophy"></i>
              <h3 className="white-text">
                <span className="counter">12</span>
              </h3>
              <span className="white-text">Awards won</span>
            </div>
          </div>

          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-coffee"></i>
              <h3 className="white-text">
                <span className="counter">154</span>K</h3>
              <span className="white-text">Cups of Coffee</span>
            </div>
          </div>

          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-file"></i>
              <h3 className="white-text">
                <span className="counter">45</span>
              </h3>
              <span className="white-text">Projects completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ]
};

export default About;
