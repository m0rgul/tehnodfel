import React, {Component} from 'react';
import axios from 'axios';

import {Alert, Button} from 'react-bootstrap';

import IntroEdit from './intro';
import ServicesEdit from './services';

// import Services from './services';
// import Portfolio from './portfolio';
// import About from './about';
// import Team from './team';
// import Clients from './clients';
// import Contact from './contact';
// import Footer from './footer';

class Cms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalData: {},
      data: {},
      loading: true,
      error: null,
      modified: false
    };

    this.handleDataUpdate = this.handleDataUpdate.bind(this);
    this.updateData = this.updateData.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.revertChanges = this.revertChanges.bind(this);
  }

  handleDataUpdate(props) {
    console.log(props);
    this.setState({
      data: {
        ...this.state.data,
        intro: {
          ...this.state.data.intro,
          [props.name]: props.value
        }
      }
    });
  }

  updateData({section, newData}) {
    let data = this.state.data;
    data[section] = newData;
    this.setState({data: data, modified: true});
    // axios.put('/api/website', data).then(response => {
    //   let {data} = response;
    //   this.setState({data: data});
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  saveChanges() {
    let data = this.state.data;
    console.log(data);
  }

  revertChanges() {
    let originalData = this.state.originalData;
    this.setState({data: originalData, modified: false});
  }

  componentDidMount() {
    axios.get('/api/website').then(response => {
      let {data} = response;
      let originalData = Object.assign({}, data);
      this.setState({originalData: originalData, data: data, loading: false});
    }).catch(err => {
      console.log(err);
      // this.setState({loading: false, error: err})
    });
  }

  render() {
    const {data, loading, modified} = this.state;
    const {intro, services} = data;

    if (loading) 
      return (<div>Loading</div>);
    
    return (<div>
      {
        modified
          ? <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              <p>
                You have changes on your website.
              </p>
              <Button bsStyle="danger" onClick={this.revertChanges}>Cancel</Button>
              <Button bsStyle="success" onClick={this.saveChanges}>Save</Button>
            </Alert>
          : null
      }
      {/* <IntroEdit data={intro} updateData={this.updateData}/> */}
      <ServicesEdit data={services} updateData={this.updateData}/>
    </div>)
  }
};

export default Cms;
