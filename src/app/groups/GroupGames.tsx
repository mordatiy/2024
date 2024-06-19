// "use client";
import React from "react";
import {GroupIDsType, TeamIDsType, TeamsArrayType} from "@/data/projectsData";
import {getGroupGameByTeamsIDs} from "@/utils/utils";
import {AllGamesArray, GamesListType, SingleGame} from "@/data/projectsDataGames";
import SingleGameBrief from "@/app/matches/SingleGameBrief";

type GroupGamesPropsType = {
    groupsId: GroupIDsType
    groupTeams: TeamsArrayType
}

export default function GroupGames(props: GroupGamesPropsType) {
    //let groupTeamsIdsArray: <Array<TeamIDsType>> = [];
    let groupTeamsIdsArray: Array<TeamIDsType> = [];
    //const allGames =
    props.groupTeams.map(team => {
        groupTeamsIdsArray = [
            ...groupTeamsIdsArray,
            team.id
        ]
    });

    let groupGamesArray: Array<SingleGame> = [];
    const allGames:GamesListType = structuredClone(AllGamesArray);
    allGames.map((game) => {
        if ((groupTeamsIdsArray.includes(game.team1) || groupTeamsIdsArray.includes(game.team2)) && (game.type === "group")) {
            groupGamesArray = [
                ...groupGamesArray,
                game
            ]
        } else {}
    })
    // groupGamesArray[0].goals1 = 500;
    // console.log(groupGamesArray);
    // console.log(AllGamesArray);

    // const groupGames = getGameByTeamsIDs

    return (
        <div className={"table-group-games"}>
            {
                groupGamesArray.map(game => {
                    return (
                        <div key={`game_Group_${props.groupsId}_${game.id}`} className={"group-games"}>
                            <SingleGameBrief type={"group"} team1Id={game.team1} team2Id={game.team2} />
                        </div>
                    )
                })
            }

            {/*<SingleGameBrief type={"group"} team2Id={""} team1Id={} />*/}
            {/*<div className={"group-games"}> Team1 <h5>3 - 0</h5> Team2</div>*/}
            {/*<div className={"group-games"}> Team3 <h5>2 - 5</h5> Team4</div>*/}
            {/*<div className={"group-games"}> Team1 <h5>3 - 0</h5> Team3</div>*/}
            {/*<div className={"group-games"}> Team2 <h5>1 - 1</h5> Team4</div>*/}
            {/*<div className={"group-games"}> Team1 <div className={"small"}>22 June 16:00</div> Team4</div>*/}
            {/*<div className={"group-games"}> Team2 <div className={"small"}>22 June 22:00</div> Team3</div>*/}
        </div>
    )
}