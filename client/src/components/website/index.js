import React, {Component} from 'react';

import Loader from '../Loader';

import Header from './header';
import Services from './services';
import About from './about';
import Team from './team';
import Contact from './contact';
import Footer from './footer';

class WebsiteIndex extends Component {
  componentWillMount() {
    this.props.fetchWebsiteData();
  }

  render() {
    const {loading, error, data} = this.props.website;

    if (data) {
      return (<div className='main'>
        <Header data={data.intro}/>
        <Services data={data.services}/>
        <About data={data.about}/>
        <Team data={data.team}/>
        <Contact data={data.socialMedia}/>
        <Footer/>
      </div>);
    } else {
      if (loading) {
        return <Loader/>
      }
      if (error) {
        return (<div>Error</div>)
      }
      return null;
    }

  }
};

export default WebsiteIndex;
