import {imgPath, TeamsListType} from "@/data/projectsData";
import React from "react";

type PropsType = {
    teamList: TeamsListType,
    sortTeamsTable(key: string): void
    keySortString: string
}

export function TeamsTable(props: PropsType) {
    console.log(props.keySortString)
    const sortByID = () => {
        props.sortTeamsTable("rankingEurope");
    }
    const sortByCountry = () => {
        props.sortTeamsTable("title");
    }
    const sortByGroup = () => {
        props.sortTeamsTable("group");
    }
    const sortByPoints = () => {
        console.log("points")
        props.sortTeamsTable("points");
    }


    return (
        <div className={"table"}>
            <div className={"table-row team-row"}>
                <div className={"team-id"}>
                    <div className={(props.keySortString === "rankingEurope" ) ? "sort-flag active" : "sort-flag"}
                         onClick={sortByID}>Europe ID</div>
                </div>
                <div className={"team-flag"}>

                </div>
                <div className={"team-title"}>
                    <div className={(props.keySortString === "title" ) ? "sort-flag active" : "sort-flag"}
                         onClick={sortByCountry}>Country</div>
                </div>
                <div className={"team-ranking"}>
                    <div className={(props.keySortString === "rankingEurope" ) ? "sort-flag active" : "sort-flag"}
                         onClick={sortByID}>Fifa Ranking</div>
                </div>
                <div className={"team-group"}>
                    <div className={(props.keySortString === "group" ) ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGroup}>Group</div>
                </div>
                <div className={"team-points"}>
                    <div className={"sort-flag"} onClick={sortByPoints}>Points</div>
                </div>
            </div>
            {props.teamList.map((item) => (
                <div key={`item_${item.title}`} className={"table-row team-row"}>
                    <div className={"team-id"}>
                        {item.rankingEurope}
                    </div>
                    <div className={"team-flag"}>
                        <img src={`${imgPath}${item.flag}`} alt="" className={"flag-small"}/>
                    </div>
                    <div className={"team-title"}>
                        <span>{item.title}</span>
                    </div>
                    <div className={"team-ranking"}>
                        <span>{item.rankingWorld}</span>
                    </div>
                    <div className={"team-group"}>
                        <span>{item.group}</span>
                    </div>
                    <div className={"team-points"}>
                        <span>{item.points}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}