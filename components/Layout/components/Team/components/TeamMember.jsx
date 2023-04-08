import React from 'react'


export default function TeamMember({team}) {
    return (
        <React.Fragment>
            {team.map((itemTeam)=>{
                return(
                    <div className="col-lg-6 col-md-12 mb-5 wow fadeInLeft" data-wow-delay=".3s" key={itemTeam.id}>
                <div className="col-md-6 float-left"><img className="img-fluid2 rounded z-depth-1 mb-3" src={itemTeam.image} alt="team member" /></div>
                <div className="col-md-6 float-right">
                    <div className="h4">{itemTeam.name}</div>
                <h6 className="h6 blue-grey-text mb-3">{itemTeam.skill}</h6>
                <p className="grey-text">{itemTeam.desc}</p>
                <a className="indigo-text" href={"https://www.linkedin.com/in/"+itemTeam.social} target="_blank"><i className="fa fa-linkedin"></i><span className="ml-1">{itemTeam.social}</span></a>
                </div>
            </div>
                );
            }
            )}
            
        </React.Fragment>
    )
}
