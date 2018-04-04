import React from 'react';

const TeamMember = ({member}) => (<div className="col-sm-4">
  <div className="team-member">
    <img className="mx-auto rounded-circle" src={member.image} alt={member.name}/>
    <h4>{member.name}</h4>
    <p className="text-muted">{member.title}</p>
    <ul className="list-inline social-buttons">
      {
        member.twitter
          ? <li className="list-inline-item">
              <a href={member.twitter}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          : null
      }

      {
        member.facebook
          ? <li className="list-inline-item">
              <a href={member.facebook}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          : null
      }

      {
        member.linkedin
          ? <li className="list-inline-item">
              <a href={member.linkedin}>
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          : null
      }
    </ul>
  </div>
</div>);

const TeamList = ({team}) => {
  if (!team || team.length === 0) 
    return null;
  return team.map((member, index) => {
    return <TeamMember member={member} index={index}/>
  });
};

const Team = ({data}) => {
  if (data.disabled) 
    return null;
  return (<section className="bg-light" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading text-muted">{data.message}</h3>
        </div>
      </div>

      <div className="row">
        <TeamList team={data.team}/>
      </div>
      {
        data.quote
          ? <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">{data.quote}</p>
              </div>
            </div>
          : null
      }
    </div>
  </section>);
};
export default Team;
