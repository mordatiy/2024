import {imgPath, TeamsArrayType} from "@/data/projectsData";
import React from "react";

type PropsType = {
    teamList: TeamsArrayType,
    sortTeamsTable(key: string): void
    keySortString: string
}

export function TeamsTable(props: PropsType) {
    // console.log(props.keySortString)
    const sortByID = () => {
        props.sortTeamsTable("rankingEurope");
    }
    const sortByCountry = () => {
        props.sortTeamsTable("title");
    }
    const sortByGroup = () => {
        props.sortTeamsTable("group");
    }
    const sortByGamesWon = () => {
        props.sortTeamsTable("gamesWon");
    }
    const sortByGamesDrawn = () => {
        props.sortTeamsTable("gamesDrawn");
    }
    const sortByGamesLost = () => {
        props.sortTeamsTable("gamesLost");
    }
    const sortByGoalsFor = () => {
        props.sortTeamsTable("goalsFor");
    }
    const sortByGoalsAgainst = () => {
        props.sortTeamsTable("goalsAgainst");
    }
    const sortByGoalsDiff = () => {
        props.sortTeamsTable("goalsDiff");
    }
    const sortByPoints = () => {
        // console.log("points")
        props.sortTeamsTable("points");
    }



    return (
        <div className={"table"}>
            <div className={"table-row team-row"}>
                <div className={"team-id"}>
                    <div className={(props.keySortString === "rankingEurope") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByID}>Europe ID
                    </div>
                </div>
                <div className={"team-flag"}>

                </div>
                <div className={"team-title"}>
                    <div className={(props.keySortString === "title") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByCountry}>Country
                    </div>
                </div>
                <div className={"team-ranking"}>
                    <div className={(props.keySortString === "rankingEurope") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByID}>Fifa Ranking
                    </div>
                </div>
                <div className={"team-group"}>
                    <div className={(props.keySortString === "group") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGroup}>Group
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "gamesWon") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGamesWon}>Won
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "gamesDrawn") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGamesDrawn}>Drawn
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "gamesLost") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGamesLost}>Lost
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "goalsFor") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGoalsFor}>For
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "goalsAgainst") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGoalsAgainst}>Against
                    </div>
                </div>
                <div className={"team-played"}>
                    <div className={(props.keySortString === "goalsDiff") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByGoalsDiff}>Goal Difference
                    </div>
                </div>
                <div className={"team-points"}>
                    <div className={(props.keySortString === "points") ? "sort-flag active" : "sort-flag"}
                         onClick={sortByPoints}>Points
                    </div>
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
                    <div className={"team-played"}>
                        <div>{item.gamesWon}</div>
                    </div>
                    <div className={"team-played"}>
                        <div>{item.gamesDrawn}</div>
                    </div>
                    <div className={"team-played"}>
                        <div>{item.gamesLost}</div>
                    </div>
                    <div className={"team-played"}>
                        <div>{item.goalsFor}</div>
                    </div>
                    <div className={"team-played"}>
                        <div>{item.goalsAgainst}</div>
                    </div>
                    <div className={"team-played"}>
                        <div>{item.goalsDiff}</div>
                    </div>
                    <div className={"team-points"}>
                        <span>{item.points}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}