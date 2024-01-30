import React from 'react';
import TeamV1Data from '../../jsonData/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';

const TeamV1 = () => {
    return (
        <>
            <section className="team-section pt-115 rpt-95 pb-60 rpb-40">
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Team Members</span>
                        <h2>Our Awesome Team</h2>
                    </div>
                    <div className="row">
                        {TeamV1Data.map(team =>
                            <div className="col-lg-3 col-sm-6" key={team.id}>
                                <SingleTeamV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamV1;