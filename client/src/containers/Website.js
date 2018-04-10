import React, {Component} from 'react';
import axios from 'axios';

import Loader from '../components//Loader';

import Header from '../components/website/header';
import Services from '../components/website/services';
import About from '../components/website/about';
import Team from '../components/website/team';
import Contact from '../components/website/contact';
import Footer from '../components/website/footer';

import '../style/website.css';

class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    axios.get('/api/website').then(response => {
      let {data} = response;
      this.setState({data: data, loading: false, error: null});
    }).catch(err => {
      this.setState({data: null, loading: false, error: err});
      console.log(err);
    });
  }

  render() {
    let {data, loading, error} = this.state;

    if (loading) 
      return (<div className='main'><Loader/></div>)

    if (error) 
      return <div className='main'>Error</div>

    const WebComponents = ({data}) => (<div className='main'>
      <Header data={data.intro}/>
      <Services data={data.services}/>
      <About data={data.about}/>
      <Team data={data.team}/>
      <Contact data={data.contact}/>
      <Footer data={data.footer}/>
    </div>);

    return (<WebComponents data={data}/>);
  }
}

export default Website;
