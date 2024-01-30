import React from 'react';
import TeamV1Data from '../../jsonData/TeamV1Data.json'
import SingleTeamV2 from './SingleTeamV2';

const TeamV2 = (props) => {
    const { teamClass } = props

    return (
        <>
            <section className={`team-section-two bgs-cover pt-115 rpt-95 pb-90 rpb-70 ${teamClass}`}>
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Team Members</span>
                        <h2>Our Awesome Team</h2>
                    </div>
                    <div className="row">
                        {TeamV1Data.map(team =>
                            <div className="col-lg-3 col-sm-6" key={team.id}>
                                <SingleTeamV2 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamV2;