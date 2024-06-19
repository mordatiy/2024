"use client";
import React from "react";
// import dynamic from 'next/dynamic'
import {GroupIDsType, SingleTeamType, TeamsArrayType} from "@/data/projectsData";
import GroupTable from "@/app/groups/GroupTable";
import {getTeamByID, sortSimplyArray, updateTeamsArrayGroupStats} from "@/utils/utils";

export type PropsTypeGroupsView = {
    type: "collapsed" | "details"
    pageType: "home" | "groups"
}

export default function Groups(props: PropsTypeGroupsView) {
    const classWrapTable = (props.type === "collapsed") ? "wrapGroupTables" : "wrapGroupTables";
    console.log("Groups Component");

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
            <div className={classWrapTable}>
                {sortedGroupsArray.map((group) => (
                    <GroupTable key={"groupTable_" + group}
                                type={props.type}
                                pageType={props.pageType}
                                groupsId={group}
                                teamsArray={teamsArrayWithStats}
                    />
                ))}
            </div>
        </>
    )
}