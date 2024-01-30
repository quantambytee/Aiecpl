import React from 'react';
import SocialShare from '../others/SocialShare';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleTeamV3 = ({ team }) => {
    const { thumb, name, designation, delay } = team

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="team-member-three">
                    <div className="image">
                        <img src={`/images/team/${thumb}`} alt="Team Member" />
                    </div>
                    <div className="member-designation">
                        <h3><Link to="/team-profile#">{name}</Link></h3>
                        <span>{designation}</span>
                        <div className="social-style-one">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleTeamV3;