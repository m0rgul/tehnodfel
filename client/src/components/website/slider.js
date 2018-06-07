import React, {Component} from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({activeIndex: index});
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({activeIndex: index});
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({activeIndex: index});
  }

  render() {
    let {slides} = this.props;
    return (<div className="carousel slide carousel-fade">
      <ol className="carousel-indicators">
        {
          slides.map((item, index) => {
            return (<li className={`${index === this.state.activeIndex
                ? 'active'
                : ''}`} onClick={() => this.goToSlide(index)} key={item.date}></li>)
          })
        }
      </ol>
      <div className="carousel-inner">
        {
          slides.map((item, index) => {
            return (<div className={`carousel-item ${index === this.state.activeIndex
                ? 'active'
                : ''}`} key={item.date}>
              <img className="d-block w-100" src={item.image} alt="First slide"/>
            </div>)
          })
        }
      </div>
      <a className="carousel-control-prev" href="#" role="button" onClick={e => this.goToPrevSlide(e)}>
        <i className="fas fa-caret-square-left fa-3x"></i>
      </a>
      <a className="carousel-control-next" href="#" role="button" onClick={e => this.goToNextSlide(e)}>
        <i className="fas fa-caret-square-right fa-3x"></i>
      </a>
    </div>);
  }
}

export default Slider;
