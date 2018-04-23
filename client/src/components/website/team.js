import React from 'react';

const TeamMember = ({member}) => (<div className="col-sm-4">
  <div className="team">
    <div className="team-img">
      <img className="img-responsive" src={member.image} alt={member.name}/>
      <div className="overlay">
        <div className="team-social">
          {
            member.facebook
              ? <a href={member.facebook} target='_blank'>
                  <i className="fab fa-facebook"></i>
                </a>
              : null
          }
          {

            member.twitter
              ? <a href={member.twitter} target='_blank'>
                  <i className="fab fa-google-plus"></i>
                </a>
              : null
          }
          {
            member.linkedin
              ? <a href={member.linkedin} target='_blank'>
                  <i className="fab fa-twitter"></i>
                </a>
              : null
          }
        </div>
      </div>
    </div>
    <div className="team-content">
      <h3>{member.name}</h3>
      <span>{member.title}</span>
    </div>
  </div>
</div>);

const TeamMembers = ({members}) => {
  if (!members) 
    return null;
  return (<div className="row">
    {
      members.map(member => {
        return <TeamMember member={member}/>
      })
    }
  </div>)
};
const Team = ({data}) => (<div id="team" className="section md-padding bg-grey">
  <div className="container">
    <div className="section-header text-center">
      <h2 className="title">{data.title}</h2>
      <p className="text-muted">{data.message}</p>
    </div>

    <TeamMembers members={data.team}/>
  </div>
</div>);

export default Team;
