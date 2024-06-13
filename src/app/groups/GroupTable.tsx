import React, {useState} from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";
import {imgPath, SingleTeamType, TeamsArrayType, TeamsListType} from "@/data/projectsData";
import {sortedTeamsArray} from "@/utils/utils";

export type PropsTypeGroups = {
    type: "collapsed" | "details"
    groupsId: string
    teamsArray: TeamsArrayType
}

export default function GroupTable(props: PropsTypeGroups) {
    //console.log(typeof props.teamsArray);
    let [showMode, setShowMode] = useState(props.type);
    const wrapGroupClass: string = (showMode === "collapsed") ? "wrapGroup50" : "wrapGroup100";
    const showMoreTxt: string = (showMode === "collapsed") ? "show more" : "show less";
    const onClickChangeShowMode = (event: React.MouseEvent<HTMLElement>) => {
        // // console.log(event.currentTarget);
        // // console.log(event.target);
        // let div = event.target as HTMLInputElement;
        // div.focus();
        // debugger;
        if (showMode === "collapsed") {
            setShowMode("details");
        } else {
            setShowMode("collapsed");
        }
    }



    // get all teams from group
    let groupTeams: TeamsArrayType = [];
    props.teamsArray.map((team: SingleTeamType, ) => {
        if (team.group === props.groupsId) {
            groupTeams = [
                ...groupTeams,
                team
            ];
        }
    });
    // end get all teams from group

    // console.log(groupTeams)
    const sortedTeamsByGoals: TeamsArrayType = sortedTeamsArray(groupTeams, "desk", "goalsFor");
    const sortedTeamsByPoints: TeamsArrayType = sortedTeamsArray(sortedTeamsByGoals, "desk", "points");


    // console.log(sortedTeamsByPoints);
    //let startNum = 1;


    return (
        <>
            <div className={wrapGroupClass} key={"group_" + props.groupsId} >
                <div className={"table-group-title"}>
                    <h2>Group {props.groupsId}</h2>
                    <a className={"show-group-link"} onClick={onClickChangeShowMode}>{showMoreTxt}</a>
                </div>
                <div className={"table table-group"}>
                    <div key={"head"} className={"table-row team-row"}>
                        <div className={"team-position"}> №</div>
                        <div className={"team-flag"}></div>
                        <div className={"team-title"}></div>

                        <div className={`team-flag game1}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[0].flag}`} alt=""
                                 title={sortedTeamsByPoints[0].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game2}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[1].flag}`} alt=""
                                 title={sortedTeamsByPoints[1].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game3}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[2].flag}`} alt=""
                                 title={sortedTeamsByPoints[2].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game1}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[3].flag}`} alt=""
                                 title={sortedTeamsByPoints[3].title} className={"flag-small"}/>
                        </div>

                        <div className={"team-played"}>
                            <div className={"smallest"}>Played</div>
                        </div>
                        {/*Won Drawn Lost*/}
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>Won</div>
                        </div>
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>Drawn</div>
                        </div>
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>Lost</div>
                        </div>
                        {/* For Against Difference */}
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>For</div>
                        </div>
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>Against</div>
                        </div>
                        <div className={"team-played details-info"}>
                            <div className={"smallest"}>Goal Difference</div>
                        </div>



                        <div className={"team-points"}>
                            <div className={"smallest"}>Points</div>
                        </div>


                    </div>


                    {sortedTeamsByPoints.map((team: SingleTeamType, pos: number) => (
                        // {const realPos = pos + 1}
                        <div key={`item_${team.title}`} className={"table-row team-row"}>
                            <div className={`team-position pos_${pos}`}>
                                <div>{pos + 1}</div>
                            </div>
                            <div className={"team-flag"}>
                                <img src={`${imgPath}${team.flag}`} alt="" className={"flag-small"}/>
                            </div>
                            <div className={"team-title"}>
                                <span>{team.title}</span>
                            </div>
                            <div className={`team-flag game1}`}>

                            </div>
                            <div className={`team-flag game2}`}></div>
                            <div className={`team-flag game3}`}></div>
                            <div className={`team-flag game4}`}></div>
                            <div className={"team-played"}>
                                <span>{team.gamesWon + team.gamesDrawn + team.gamesLost}</span>
                            </div>
                            {/*Won Drawn Lost*/}
                            <div className={"team-played details-info"}>
                                <span>{team.gamesWon}</span>
                            </div>
                            <div className={"team-played details-info"}>
                                <span>{team.gamesDrawn}</span>
                            </div>
                            <div className={"team-played details-info"}>
                                <span>{team.gamesLost}</span>
                            </div>
                            {/* For Against Difference */}
                            <div className={"team-played details-info"}>
                                <span>{team.goalsFor}</span>
                            </div>
                            <div className={"team-played details-info"}>
                                <span>{team.goalsAgainst}</span>
                            </div>
                            <div className={"team-played details-info"}>
                                <span>{team.goalsFor - team.goalsAgainst}</span>
                            </div>


                            <div className={"team-points"}>
                                <h5>{team.points}</h5>
                            </div>


                        </div>
                    ))}
                </div>
                <div className={"table-group-games"}>
                    <div className={"group-games"}> Team1 <h5>3 - 0</h5> Team2</div>
                    <div className={"group-games"}> Team3 <h5>2 - 5</h5> Team4</div>
                    <div className={"group-games"}> Team1 <h5>3 - 0</h5> Team3</div>
                    <div className={"group-games"}> Team2 <h5>1 - 1</h5> Team4</div>
                    <div className={"group-games"}> Team1 <div className={"small"}>22 June 16:00</div>  Team4</div>
                    <div className={"group-games"}> Team2 <div className={"small"}>22 June 22:00</div> Team3</div>
                </div>
            </div>
        </>
    )
}