import React from 'react';

const PortfolioItem = ({client}) => (<div className="col-md-4 col-sm-6 portfolio-item">
  <a className="portfolio-link">
    <div className="portfolio-hover">
      <div className="portfolio-hover-content">
        <i className="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img className="img-fluid" src={client.image} alt={client.name}/>
  </a>
  <div className="portfolio-caption">
    <h4>{client.name}</h4>
    <p className="text-muted">{client.description}</p>
  </div>
</div>);

const PortfolioList = ({clients}) => {
  if (!clients || clients.length === 0) 
    return null;
  return clients.map((client, index) => {
    return (<PortfolioItem client={client} index={index}/>)
  });
};

const Portfolio = ({data}) => {
  if (!data || data.disabled) 
    return null;
  return (<section className="bg-light" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading text-muted">{data.message}</h3>
        </div>
      </div>
      <div className="row">
        <PortfolioList clients={data.clients}/>
      </div>
    </div>
  </section>);
};

export default Portfolio;
