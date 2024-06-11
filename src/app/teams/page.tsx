"use client";
import React, { useState } from 'react'
import {SingleTeamType, Teams, TeamsListType } from "@/data/projectsData";
import Link from "next/link";
import {TeamsTable} from "@/app/teams/TeamsTable";


export default function TeamsPage() {
    let teams: TeamsListType = Teams;

    let [teamLists, setTeamLists] = useState<TeamsListType>(teams);
    let [keySort, setKeySort] = useState(["rankingEurope", "ask"]);

    const sortTeamsTable = (keyString: string): void => {
        console.log("sortTeamsTable " + keyString);
        //const key = "title";
        // if (key === keySort[0]) {
        //     alert("+++")
        // }
        let keyType = keySort[1];
        if (keyString === keySort[0]) {
            // keySort[1] = ( keySort[1] === "ask") ? "desc" : "asc";
            if ( keySort[1] === "ask" ) {
                keyType = "desk"
            } else {
                keyType = "ask"
            }
        } else {
            keyType = "ask"
        }

        const sortedTeamLists = teamLists.sort((team1: SingleTeamType, team2: SingleTeamType) => {
            // team1[key] > team2[key] ? 1 : -1);
            let result = 1;


            if (keySort[1] === "ask") {
                result = (team1[keyString] > team2[keyString]) ? 1 : -1;
            } else {
                result = (team1[keyString] < team2[keyString]) ? 1 : -1;
            }
            return result;
        });

        setTeamLists([...sortedTeamLists]);
        setKeySort([keyString, keyType]);
        console.log(keySort)
        //setKeySort(key);
    }


    return (
        <>
            Teams Group stage:
            <p>
                Viva {teams[11].title} !!
            </p>
            <TeamsTable
                teamList={teamLists}
                sortTeamsTable={sortTeamsTable}
                keySortString={keySort[0]}
            />
        </>
    )
}