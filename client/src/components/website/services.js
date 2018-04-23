import React from 'react';

const Service = ({service}) => (<div className="col-md-4 col-sm-6">
  <div className="service">
    <i className={`fa ${service.icon}`}></i>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
</div>);

const ServicesList = ({services}) => {
  if (!services || services.length === 0) 
    return null;
  
  return services.map((service, index) => {
    return <Service service={service} key={index}/>
  });
};

const Services = ({data}) => (<div id="service" className="section md-padding">
  <div className="container">
    <div className="section-header text-center">
      <h2 className="title">{data.title}</h2>
      <p className="text-center text-muted">{data.message}</p>
    </div>
    <div className="row">
      <ServicesList services={data.services}/>
    </div>
  </div>
</div>);

export default Services;
