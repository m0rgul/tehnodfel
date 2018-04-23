import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      readOnly: false,
      error: null,
      success: null,
      sendingData: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;

    this.setState({
      contact: {
        ...this.state.contact,
        [target.name]: target.value
      }
    });
  }

  isValidData(contact) {
    let {name, email, subject, message} = contact;

    if (!name || !email || !subject || !message) {
      return false;
    }

    return true;
  }

  submitForm(e) {
    e.preventDefault();
    if (this.isValidData(this.state.contact)) {
      this.setState({sendingData: true});
      axios.post('/api/website/contact', this.state.contact).then(response => {
        this.setState({readOnly: true, success: response, sendingData: false});
      }).catch(err => {
        this.setState({error: err.message, readOnly: false, sendingData: false});
      });
    } else 
      return false;
    }
  
  render() {
    let {title, message, phoneNo, email, address} = this.props.data;

    let {readOnly, sendingData, error, success} = this.state;

    let buttonMessage;

    if (sendingData) {
      buttonMessage = 'Sending message...';
    }
    if (!sendingData && !success) {
      buttonMessage = 'Send message'
    }

    if (!sendingData && success) {
      buttonMessage = 'Message sent'
    }

    return (<div id="contact" className="section md-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p className="text-muted">{message}</p>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-phone"></i>
              <h3>Phone</h3>
              <p className="text-muted">{phoneNo}</p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-envelope"></i>
              <h3>Email</h3>
              <p className="text-muted">{email}</p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-map-marker"></i>
              <h3>Address</h3>
              <p className="text-muted">{address}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <form className="contact-form w-100" onSubmit={this.submitForm}>
            <div className="row">
              <div className="col">
                <input type="text" className="input" placeholder="Name" onChange={this.handleInputChange} name="name" required="required" readOnly={readOnly}/>
              </div>
              <div className="col">
                <input type="email" className="input" placeholder="Email" onChange={this.handleInputChange} name="email" required="required" readOnly={readOnly}/>
              </div>
            </div>
            <input type="text" className="input" placeholder="Subject" onChange={this.handleInputChange} name="subject" required="required" readOnly={readOnly}/>
            <textarea className="input" rows={5} placeholder="Message" onChange={this.handleInputChange} name="message" required="required" readOnly={readOnly}></textarea>

            {
              error
                ? <small class="form-text text-danger">
                    {error}
                  </small>
                : null
            }
            <button className="btn main-btn" type="submit" disabled={sendingData || success}>
              {
                (sendingData && !success)
                  ? <i className="fa fa-spin fa-cog fa-lg"></i>
                  : null
              }
              <span>{buttonMessage}</span>
            </button>
          </form>
          {
            success
              ? <div className="contact-success">
                  <h4 className="text-success">
                    {`Thank you for your message, ${this.state.contact.name}`}
                  </h4>

                  <a className="text-small" onClick={() => {
                      this.setState({readOnly: false, success: false})
                    }}>Send another message.</a>
                </div>
              : null
          }
        </div>
      </div>

    </div>)
  }
};

export default Contact;
