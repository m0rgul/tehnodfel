import React, {Component} from 'react';
import Intro from '../website/intro';
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

class IntroEdit extends Component {
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
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSave() {
    this.props.updateData({section: 'intro', newData: this.state.data});
    this.setState({show: false});
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    let {welcomeMessage, greetingMessage} = this.state.data;

    return (<div>
      <EditButton onClick={this.handleShow}/>

      <Intro data={this.state.data}/>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Welcome message</ControlLabel>
              <FormControl type="text" value={welcomeMessage} name="welcomeMessage" placeholder="Enter text" onChange={this.handleChange}/>
              <FormControl.Feedback/>
              <HelpBlock>A warm welcome message.</HelpBlock>
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Greeting</ControlLabel>
              <FormControl type="text" value={greetingMessage} name="greetingMessage" placeholder="Enter text" onChange={this.handleChange}/>
              <FormControl.Feedback/>
              <HelpBlock>A greeting for your visitors.</HelpBlock>
            </FormGroup>
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

export default IntroEdit;
