import React from 'react';

const Client = ({client}) => (<div className="col-md-3 col-sm-6">
  <a href={client.url}>
    <img className="img-fluid d-block mx-auto" src={client.image} alt={client.name}/>
  </a>
</div>);

const ClientsList = ({clients}) => {
  if (!clients || clients.length === 0) 
    return null;
  return clients.map((client, index) => {
    return <Client client={client} index={index}/>
  })
};

const Clients = ({data}) => {
  if (data.disabled) 
    return null;
  return (<section className="py-5">
    <div className="container">
      <div className="row">
        <ClientsList clients={data.clients}/>
      </div>
    </div>
  </section>);
};

export default Clients;
