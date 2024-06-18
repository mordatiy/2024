"use client";
import React, { useState } from 'react'
import {SingleTeamObjectKeys, SingleTeamType, TeamsArray, TeamsArrayType} from "@/data/projectsData";
import Link from "next/link";
import {TeamsTable} from "@/app/teams/TeamsTable";
import {sortedTeamsArray, sortTypeType, updateTeamsArrayGroupStats} from "@/utils/utils";


export default function TeamsPage() {
    //let teams: TeamsArrayType = TeamsArray;

    // const teamsArrayWithStats: TeamsArrayType = [
    //     ...updateTeamsArrayGroupStats()
    // ];
    const teamsArrayWithStats: TeamsArrayType = structuredClone(updateTeamsArrayGroupStats());

    let [teamLists, setTeamLists] = useState<TeamsArrayType>(teamsArrayWithStats);

    let [sortKey, setSortKey] = useState<SingleTeamObjectKeys>("rankingEurope");
    let [sortType, setSortType] = useState<sortTypeType>("ask")

    // console.log(teamLists[8].id, teamLists[8].gamesWon);

    const sortTeamsTable = (keyString: SingleTeamObjectKeys): void => {
        console.log("sortTeamsTable " + keyString);
        //const key = "title";
        // if (key === keySort[0]) {
        //     alert("+++")
        // }
        //let keyType: sortTypeType = keySort[1];
        if (keyString === sortKey) {
            if ( sortType === "ask" ) {
                setSortType("desk");
            } else {
                setSortType("ask");
            }
        } else {
            setSortType("ask");
        }
        const sortedTeamsBySortKey: TeamsArrayType = sortedTeamsArray(teamLists, sortType, sortKey);

        setTeamLists([...sortedTeamsBySortKey]);
        setSortKey(keyString)
        console.log(sortKey)
        //setKeySort(key);
    }


    //sortTeamsTable("rankingEurope");
    return (
        <>
            Teams Group stage:
            <p>
                {/*Viva {teams[11].title} !!*/}
            </p>
            <TeamsTable
                teamList={teamLists}
                sortTeamsTable={sortTeamsTable}
                keySortString={sortKey}
            />
        </>
    )
}