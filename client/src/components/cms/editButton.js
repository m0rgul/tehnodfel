import React from 'react';
import {Button} from 'react-bootstrap';

const editButton = (props) => (<span className="fa-stack fa-2x btn sectionEdit" onClick={props.onClick}>
  <i className="fa fa-circle fa-stack-2x text-primary"></i>
  <i className='fa fa-stack-1x fa-inverse fa-pencil'></i>
</span>);

export default editButton;
