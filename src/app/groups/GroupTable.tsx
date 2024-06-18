"use client";
import React, {useState, useEffect} from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";
import {imgPath, SingleTeamType, TeamsArrayType} from "@/data/projectsData";
import {getTeamByID, sortedTeamsArray} from "@/utils/utils";
import GroupTableGameResult from "@/app/groups/GroupTableGameResult";

export type PropsTypeGroups = {
    type: "collapsed" | "details"
    groupsId: string
    teamsArray: TeamsArrayType
}

export default function GroupTable(props: PropsTypeGroups) {
    console.log("GroupTable Component")  ;
    //console.log(typeof props.teamsArray);

    // problem with render
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    // end problem with render

    let [showMode, setShowMode] = useState(props.type);
    const wrapGroupClass: string = (showMode === "collapsed") ? "wrapGroup50" : "wrapGroup100";
    const showMoreTxt: string = (showMode === "collapsed") ? "show more" : "show less";
    const onClickChangeShowMode = (event: React.MouseEvent<HTMLElement>) => {
        // debugger;
        if (showMode === "collapsed") {
            setShowMode("details");
        } else {
            setShowMode("collapsed");
        }
    }



    // get all teams from group
    // structuredClone
    let groupTeams: TeamsArrayType = [];
    let teamsArray = structuredClone(props.teamsArray);
    // console.log(teamsArray)
    teamsArray.map((team: SingleTeamType, ) => {
        if (team.group === props.groupsId) {
            groupTeams = [
                ...groupTeams,
                team
            ];
        }
    });
    // end get all teams from group

    // console.log(groupTeams)
    const sortedTeamsByGoals: TeamsArrayType = sortedTeamsArray(groupTeams, "desk", "goalsDiff");
    const sortedTeamsByPoints: TeamsArrayType = sortedTeamsArray(sortedTeamsByGoals, "desk", "points");
    // const sortedTeamsByPoints = groupTeams;
    //const sortedTeamsByPoints = groupTeams;
    // console.log(sortedTeamsByPoints)


    // console.log(sortedTeamsByPoints);
    //let startNum = 1;

    // return (
    //     <></>
    // );


    console.log(props.teamsArray[8].id, props.teamsArray[8].gamesWon);
    return (
        <>{isClient &&
            <div className={wrapGroupClass} key={"group_" + props.groupsId}>
                <div className={"table-group-title"}>
                    <h2>Group {props.groupsId}</h2>
                    <a className={"show-group-link"} onClick={onClickChangeShowMode}>{showMoreTxt}</a>
                </div>
                <div className={"table table-group"}>
                    <div className={"table-row team-row"}>
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

                    {sortedTeamsByPoints.map((currentTeam: SingleTeamType, pos: number) => {
                        //const currentTeam: SingleTeamType  = getTeamByID(itemTeam.id)[0];
                        // return (<div key={`group_${props.groupsId}_item_${currentTeam.title}`}
                        //              className={"table-row team-row"}>
                        //     {currentTeam.points}
                        // </div>)
                        return (
                            <div key={`group_${props.groupsId}_item_${currentTeam.title}`} className={"table-row team-row"}>
                                <div className={`team-position pos_${pos}`}>
                                    <div>{pos + 1}</div>
                                </div>
                                <div className={"team-flag"}>
                                    <img src={`${imgPath}${currentTeam.flag}`} alt="" className={"flag-small"}/>
                                </div>
                                <div className={"team-title"}>
                                    <span>{currentTeam.title}</span>
                                </div>
                                <div className={`team-flag game1}`}>
                                    <GroupTableGameResult team1={currentTeam.id} team2={sortedTeamsByPoints[0].id}/>
                                </div>
                                <div className={`team-flag game2}`}>
                                    <GroupTableGameResult team1={currentTeam.id} team2={sortedTeamsByPoints[1].id}/>
                                </div>
                                <div className={`team-flag game3}`}>
                                    <GroupTableGameResult team1={currentTeam.id} team2={sortedTeamsByPoints[2].id}/>
                                </div>
                                <div className={`team-flag game4}`}>
                                    <GroupTableGameResult team1={currentTeam.id} team2={sortedTeamsByPoints[3].id}/>
                                </div>
                                <div className={"team-played"}>
                                    <span>{currentTeam.gamesWon + currentTeam.gamesDrawn + currentTeam.gamesLost}</span>
                                </div>
                                {/*Won Drawn Lost*/}
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.gamesWon}</span>
                                </div>
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.gamesDrawn}</span>
                                </div>
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.gamesLost}</span>
                                </div>
                                {/* For Against Difference */}
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.goalsFor}</span>
                                </div>
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.goalsAgainst}</span>
                                </div>
                                <div className={"team-played details-info"}>
                                    <span>{currentTeam.goalsDiff}</span>
                                </div>


                                <div className={"team-points"}>
                                    <h5>{currentTeam.points}</h5>
                                </div>


                            </div>
                        )
                    })}

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
        }</>
    )
}