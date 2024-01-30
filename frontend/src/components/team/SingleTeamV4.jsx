import React from 'react';
import { Fade } from 'react-reveal';
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';

const SingleTeamV4 = ({ team }) => {
    const { thumb, name, designation } = team

    return (
        <>
            <Fade className="fadeInUp">
                <div className="team-member-four">
                    <div className="image">
                        <img src={`/images/team/${thumb}`} alt="Team Member" />
                        <div className="social-style-two">
                            <SocialShare />
                        </div>
                    </div>
                    <div className="member-designation">
                        <h5><Link to="/team-profile#">{name}</Link></h5>
                        <span>{designation}</span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleTeamV4;