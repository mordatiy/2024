import {TeamsListType} from "@/data/projectsData";
import React from "react";

type PropsType = {
    teamList: TeamsListType,
    sortTableByID: () => void
    sortTableByCountry: () => void
}

export function TeamsTable(props: PropsType) {

    return (
        <div className={"table"}>
            <div className={"table-row team-row"}>
                <div className={"team-id"}>
                    <div className={"sort-flag active"} onClick={props.sortTableByID}>Europe ID</div>
                </div>
                <div className={"team-flag"}></div>
                <div className={"team-title"}>
                    <div className={"sort-flag"} onClick={props.sortTableByCountry}>Country</div>
                </div>
                <div className={"team-ranking"}>
                    <div className={"sort-flag"}>Fifa Ranking</div>
                </div>
            </div>
            {props.teamList.map((item) => (
                <div key={`item_${item.title}`} className={"table-row team-row"}>
                    <div className={"team-id"}>
                        {item.id}
                    </div>
                    <div className={"team-flag"}>
                        <img src={item.flag} alt="" className={"flag-small"}/>
                    </div>
                    <div className={"team-title"}>
                        <span>{item.title}</span>
                    </div>
                    <div className={"team-ranking"}>
                        <span>{item.ranking}</span>
                    </div>

                </div>
            ))}
        </div>
    )
}