import React from 'react';

const Service = ({service}) => (<div className="col-md-4">
  <span className="fa-stack fa-4x">
    <i className="fa fa-circle fa-stack-2x text-primary"></i>
    <i className={`fa fa-stack-1x fa-inverse ${service.icon}`}></i>
  </span>
  <h4 className="service-heading">{service.title}</h4>
  <p className="text-muted">{service.description}</p>
</div>);

const ServiceList = ({services}) => {
  if (!services || services.length === 0) 
    return null;
  return services.map((service, index) => {
    return <Service service={service} index={index}/>
  });
};

const Services = ({data}) => {
  if (data.disabled) 
    return null;
  return (<section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading text-muted">{data.message}</h3>
        </div>
      </div>
      <div className="row text-center">
        <ServiceList services={data.services}/>
      </div>
    </div>
  </section>);
}
export default Services;
