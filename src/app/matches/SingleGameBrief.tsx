"use client"
import {GroupIDsType, imgPath, SingleTeamType, TeamIDsType, TeamsArrayType} from "@/data/projectsData";
import {getGroupGameByTeamsIDs, getTeamByID} from "@/utils/utils";
import {AllGamesArray, SingleGame} from "@/data/projectsDataGames";
import React from "react";
import {mS} from "@/app/groups/GroupTableGameResult";

type SingleGameBriefPropsType = {
    team1Id: TeamIDsType
    team2Id: TeamIDsType
    type: "group" | "play-off"
}

export default function SingleGameBrief(props: SingleGameBriefPropsType) {
    const currentGame: SingleGame = getGroupGameByTeamsIDs(props.team1Id, props.team2Id)[0];
    // console.log(currentGame);

    const team1:SingleTeamType = getTeamByID(props.team1Id)[0];
    const team2:SingleTeamType = getTeamByID(props.team2Id)[0];

    const gameInfo = {
        date1: "",
        date2: "",
        result1: "",
        result2: ""
    }
    if (currentGame.done) {
        gameInfo.date1 = "Full Time";
        gameInfo.result1 = currentGame.goals1.toString() + " : " + currentGame.goals2.toString()
    }  else {
        const gameDate = new Date(currentGame.date);
        gameInfo.date1 = gameDate.getHours() + ":00";
        gameInfo.date2 = gameDate.getDate().toString() + " " + mS[gameDate.getMonth()]
    }


    return (
        <div className="game-brief-container">
            <div className={"team"}>
                <div className={"flag"}>
                    <img src={`${imgPath}${team1.flag}`} alt=""
                         title={team1.title} className={"flag-medium"}/>
                </div>
                <div className={"teamId"}>
                    <h5 className={"uppercase"}>{team1.id}</h5>
                </div>
            </div>
            <div className={"center"}>
                <div className={"small"}>{gameInfo.date1}</div>
                <div className={"small"}>{gameInfo.date2}</div>
                <h1>{gameInfo.result1}</h1>
            </div>
            <div className={"team"}>
            <div className={"flag"}>
                    <img src={`${imgPath}${team2.flag}`} alt=""
                         title={team2.title} className={"flag-medium"}/>
                </div>
                <div className={"teamId"}>
                    <h5 className={"uppercase"}>{team2.id}</h5>
                </div>
            </div>
        </div>
    )
}