"use client";
import React from 'react';
import Groups from "@/app/groups/Groups";
import {SingleTeamType, TeamsArrayType} from "@/data/projectsData";
import {sortSimplyArray, updateTeamsArrayGroupStats} from "@/utils/utils";


export default function HomePage() {

    // * * *
    // get Teams and Points:
    // const teamsArray: TeamsArrayType = updateTeamsArrayGroupStats();
    console.log("HomePage");
    // const teamsArrayWithStats: TeamsArrayType = [
    //     ...updateTeamsArrayGroupStats()
    // ];
    const teamsArrayWithStats: TeamsArrayType = structuredClone(updateTeamsArrayGroupStats());
    // const teamsArray = structuredClone(updateTeamsArrayGroupStats());
    console.log(teamsArrayWithStats[8].id, teamsArrayWithStats[8].gamesWon);
    // end get Teams and Points:
    // * * *

    // * * *
    // get groupsList
    let groupsList: Array<string> = [];
    teamsArrayWithStats.map((team: SingleTeamType, ) => {
        if (!groupsList.includes(team.group)) {
            groupsList = [...groupsList, team.group];
        }
    })
    const sortedGroupsArray= sortSimplyArray(groupsList, "ask", "")
    // console.log(sortedGroupsArray);
    // end get groupsList
    // * * *


    return (
        <>
            <h1 className={"center"}>Euro 2024 Group stage Tables</h1>
            <Groups type={"collapsed"} groupsArray={sortedGroupsArray} teamsArray={teamsArrayWithStats}/>
        </>
    )
}

