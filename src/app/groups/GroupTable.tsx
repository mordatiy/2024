import React from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";
import {imgPath, SingleTeamType, TeamsArrayType, TeamsListType} from "@/data/projectsData";
import {sortedTeamsArray} from "@/utils/utils";

export type PropsTypeGroups = {
    type: "collapsed" | "details"
    groupsId: string
    //teamsList: TeamsListType
    teamsArray: TeamsArrayType
}

export default function GroupTable(props: PropsTypeGroups) {
    //console.log(typeof props.teamsArray);

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
    console.log(sortedTeamsByPoints);
    //let startNum = 1;

    return (
        <>
            <div className={"wrapGroup"} key={"group_" + props.groupsId}>
                <h2>Group {props.groupsId}</h2>
                <div className={"table table-group"}>
                    <div key={"head"} className={"table-row team-row"}>
                        <div className={"team-position"}> № </div>
                        <div className={"team-flag"}></div>
                        <div className={"team-title"}></div>

                        <div className={`team-flag game1}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[0].flag}`} alt="" title={sortedTeamsByPoints[0].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game2}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[1].flag}`} alt="" title={sortedTeamsByPoints[1].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game3}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[2].flag}`} alt="" title={sortedTeamsByPoints[2].title} className={"flag-small"}/>
                        </div>
                        <div className={`team-flag game1}`}>
                            <img src={`${imgPath}${sortedTeamsByPoints[3].flag}`} alt="" title={sortedTeamsByPoints[3].title} className={"flag-small"}/>
                        </div>

                        <div className={"sort-flag team-played"}>
                            <div className={"sort-flag"}>Played</div>
                        </div>
                        <div className={"sort-flag team-points"}>
                            <div className={"sort-flag"}>Points</div>
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
                            <div className={"team-points"}>
                                <h5>{team.points}</h5>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}