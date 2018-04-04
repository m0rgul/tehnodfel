import React from 'react';

const TimelineItem = ({item, index}) => (<li className={`${index % 2 === 0
    ? 'timeline-inverted'
    : ''}`}>
  <div className='timeline-image'>
    <img className='rounded-circle img-fluid' src={item.image} alt={item.title}/></div>
  <div className='timeline-panel'>
    <div className='timeline-heading'>
      <h4>{item.date}</h4>
      <h4 className='subheading'>{item.title}</h4>
    </div>
    <div className='timeline-body'>
      <p className='text-muted'>{item.message}</p>
    </div>
  </div>
</li>);

const Timeline = ({items}) => {
  if (!items || items.length === 0) 
    return null;
  return items.map((item, index) => {
    return (<div className='row'>
      <div className='col-lg-12'>
        <ul className='timeline'>
          <TimelineItem item={item} index={index} key={index}/>
        </ul>
      </div>
    </div>);
  });
};

const About = ({data}) => {
  if (data.disabled) 
    return null;
  return (<section id='about'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h2 className='section-heading text-uppercase'>{data.title}</h2>
          <h3 className='section-subheading text-muted'>{data.message}</h3>
        </div>
      </div>
      <Timeline items={data.history}/>
    </div>
  </section>);
}
export default About;
