import React from 'react';
import TeamV4Data from '../../jsonData/TeamV4Data.json'
import SingleTeamV4 from './SingleTeamV4';

const TeamV4 = ({ partial = true, teamClass }) => {
    return (
        <>
            <section className={`team-section bg-lighter text-center pt-115 rpt-95 pb-90 rpb-70 ${teamClass}`}>
                <div className="container">
                    <div className="section-title mb-55">
                        <span className="sub-title">Export Team</span>
                        <h2>Meet our colleague</h2>
                    </div>
                    <div className="row">
                        {partial &&
                            <>
                                {TeamV4Data.slice(0, 4).map(team =>
                                    <div className="col-lg-3 col-sm-6" key={team.id}>
                                        <SingleTeamV4 team={team} />
                                    </div>
                                )}
                            </> ||
                            <>
                                {TeamV4Data.map(team =>
                                    <div className="col-lg-3 col-sm-6" key={team.id}>
                                        <SingleTeamV4 team={team} />
                                    </div>
                                )}
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamV4;