"use client";
import React, { useState } from 'react';
import Groups from "@/app/groups/Groups";
import {SingleTeamType, TeamsArray, TeamsArrayType, TeamsList, TeamsListType} from "@/data/projectsData";
import {sortSimplyArray} from "@/utils/utils";
import {GroupGames, SingleGame} from "@/data/projectsDataGames";


export default function HomePage() {

    // get Teams and Points:
    let teamsList: TeamsListType = {
        ...TeamsList
    };
    let games: Array<SingleGame> = GroupGames;

    games.forEach((game: SingleGame) => {
        // build points
        let points1=0;
        let points2 = 0;
        if (game.goals1 === game.goals2) {
            points1 = 1
            points2 = 1
        } else if (game.goals1 > game.goals2) {
            points1 = 3
            points2 = 0
        } else {
            points1 = 0
            points2 = 3
        }
        // teamsList[game.team1] += points1;
        // console.log(typeof teamsList[game.team1]["points"]);
        teamsList[game.team1]["points"] = teamsList[game.team1]["points"] + points1;
        teamsList[game.team1]["goals"] = teamsList[game.team1]["goals"] + game.goals1;
        teamsList[game.team2]["points"] = teamsList[game.team2]["points"] + points2;
        teamsList[game.team2]["goals"] = teamsList[game.team2]["goals"] + game.goals2;
    });

    console.log(teamsList)
    // end get Teams and Points:


    // get groupsList
    let groupsList: Array<string> = [];

    Object.keys(teamsList).forEach((item) => {
        if (!groupsList.includes(teamsList[item].group)) {
            groupsList = [...groupsList, teamsList[item].group];
        }
    });
    // teamsList.forEach((item) => {
    //     if (!groupsList.includes(item.group)) {
    //         groupsList = [...groupsList, item.group];
    //     }
    // });
    const sortedGroupsArray= sortSimplyArray(groupsList, "ask", "")
    console.log(groupsList);
    // end get groupsList



    // let [teamLists, setTeamLists] = useState<TeamsArrayType>(teams);

    return (
        <>
            <h1 className={"center"}>Euro 2024 Group stage Tables</h1>
            <Groups type={"collapsed"} groupsArray={sortedGroupsArray}/>
        </>
    )
}

