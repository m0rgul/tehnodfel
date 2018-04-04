import React, {Component} from 'react';
import Services from '../website/services';
import {
  Button,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox
} from 'react-bootstrap';

import EditButton from './editButton';

const ServiceInputGroup = ({service, index, updateService}) => {

  return (<div className="form-inline">
    <FormGroup controlId="title">
      <FormControl type="text" value={service.title} placeholder="Service title" onChange={updateService(index)}/>
      <FormControl.Feedback/>
      <HelpBlock>Title for the service.</HelpBlock>
    </FormGroup>
    <FormGroup controlId="description">
      <FormControl type="text" value={service.description} placeholder="Service description" onChange={updateService}/>
      <FormControl.Feedback/>
      <HelpBlock>Title for the section.</HelpBlock>
    </FormGroup>
    <FormGroup controlId="icon">
      <FormControl type="text" value={service.icon} placeholder="Service Icon" onChange={updateService}/>
      <FormControl.Feedback/>
      <HelpBlock>Title for the section.</HelpBlock>
    </FormGroup>
  </div>)
};

class ServicesEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.addService = this.addService.bind(this);
    this.updateService = this.updateService.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name || target.id;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  addService() {
    let data = this.state.data;
    let services = data.services || [];
    let service = {
      title: "",
      description: "",
      icon: ""
    };
    services.push(service);
    this.setState({data: data});
  }

  updateService(event, index) {
    debugger;
    let data = this.state.data;
    let services = data.services || [];
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name || target.id;
    services[index] = Object.assign({}, {[name]: value});
    this.setState({data: data});
  }

  handleSave() {
    this.props.updateData({section: 'services', newData: this.state.data});
    this.setState({show: false});
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    let {title, message, services} = this.state.data;

    return (<div>
      <EditButton onClick={this.handleShow}/>

      <Services data={this.state.data}/>

      <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
        <Modal.Header closeButton={true}>
          <Modal.Title>Edit Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="title">
              <ControlLabel>Section title</ControlLabel>
              <FormControl type="text" value={title} placeholder="Enter text" onChange={this.handleChange}/>
              <FormControl.Feedback/>
              <HelpBlock>Title for the section.</HelpBlock>
            </FormGroup>
            <FormGroup controlId="message">
              <ControlLabel>Section description</ControlLabel>
              <FormControl type="text" value={message} placeholder="Enter text" onChange={this.handleChange}/>
              <FormControl.Feedback/>
              <HelpBlock>A short section description.</HelpBlock>
            </FormGroup>
            <div className="row">
              <Button className="pull-right" onClick={this.addService}>
                <i className="fa fa-plus"></i>
              </Button>
            </div>
            {
              services
                ? services.map((service, index) => {
                  return <ServiceInputGroup service={service} index={index} updateService={this.updateService} key={index}/>
                })
                : null
            }

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
          <Button onClick={this.handleSave} className="btn-primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>)
  }
}

export default ServicesEdit;
