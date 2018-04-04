import React, {Component} from 'react';
import axios from 'axios';

//website separated into smaller bits
import NavBar from './navigation';
import Intro from './intro';
import Services from './services';
import Portfolio from './portfolio';
import About from './about';
import Team from './team';
import Clients from './clients';
import Contact from './contact';
import Footer from './footer';

class Website extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrolling: false,
      data: {},
      loading: true
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    axios.get('/api/website').then(response => {
      let {data} = response;
      this.setState({data: data, loading: false});
    }).catch(err => {
      console.log(err);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    // debugger;
    if (window.scrollY < 100 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    } else if (window.scrollY > 100 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  }
  render() {
    let {data, loading} = this.state;
    if (loading) 
      return <div>Loading</div>

    return (<div className='main'>
      <NavBar scroll={this.state.scrolling}/>
      <Intro data={data.intro}/>
      <Services data={data.services}/>
      <Portfolio data={data.portfolio}/>
      <About data={data.about}/>
      <Team data={data.team}/>
      <Clients data={data.clients}/>
      <Contact/>
      <Footer/>
    </div>);
  }
}

export default Website;
