"use client";
import React, { useState } from 'react'
import {SingleTeamType, Teams, TeamsListType } from "@/data/projectsData";
import Link from "next/link";
import {TeamsTable} from "@/app/teams/TeamsTable";

export default function TeamsPage() {
    let teams: TeamsListType = Teams;

    let [teamLists, setTeamLists] = useState<TeamsListType>(teams);


    const sortTableByID = (): void => {
        alert("Europe ID");
        let filteredTeamsList = teamLists.filter((item: SingleTeamType) => item.id >= 20);
        setTeamLists([...filteredTeamsList]);
        console.log(teamLists)
    }
    const sortTableByCountry = (): void => {
        alert("Country");
    }

    return (
        <>
            Teams Group stage:
            <p>
                Viva {teams[11].title} !!
            </p>
            <TeamsTable
                teamList={teamLists}
                sortTableByID={sortTableByID}
                sortTableByCountry={sortTableByCountry}
            />

                {/*<div className={"table"}>*/}
            {/*    <div className={"table-row team-row"}>*/}
            {/*        <div className={"team-id"}>*/}
            {/*            <div className={"sort-flag active"} onClick={sortTableByID}>Europe ID</div>*/}
            {/*        </div>*/}
            {/*        <div className={"team-flag"}></div>*/}
            {/*        <div className={"team-title"}>*/}
            {/*            <div className={"sort-flag"} onClick={sortTableByCountry}>Country</div>*/}
            {/*        </div>*/}
            {/*        <div className={"team-ranking"}>*/}
            {/*            <div className={"sort-flag"}>Fifa Ranking</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    {teams.map((item) => (*/}
            {/*        <div key={`item_${item.title}`} className={"table-row team-row"}>*/}
            {/*            <div className={"team-id"}>*/}
            {/*                {item.id}*/}
            {/*            </div>*/}
            {/*            <div className={"team-flag"}>*/}
            {/*                <img src={item.flag} alt="" className={"flag-small"}/>*/}
            {/*            </div>*/}
            {/*            <div className={"team-title"}>*/}
            {/*                <span>{item.title}</span>*/}
            {/*            </div>*/}
            {/*            <div className={"team-ranking"}>*/}
            {/*                <span>{item.ranking}</span>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    )
}