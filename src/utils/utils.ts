import {SingleTeamObjectKeys, SingleTeamType, TeamIDsType, TeamsArray, TeamsArrayType} from "@/data/projectsData";
import {GroupGames, SingleGame} from "@/data/projectsDataGames";
import {id} from "postcss-selector-parser";

export function sortSimplyArray(array: Array<any>, type: "ask" | "desk", key: string = "") {

    const sortedArray = array.sort((a, b) => {
        let result = 1;
        if (type === "ask") {
            result = (a > b) ? 1 : -1;
        } else {
            result = (a < b) ? 1 : -1;
        }
        return result;
    });

    return sortedArray;
}

// Sorted teams Array by field key
export function sortedTeamsArray(startArray: Array<SingleTeamType>, type: "ask" | "desk", sortKey: SingleTeamObjectKeys ) {
    return startArray.sort((team1: SingleTeamType, team2: SingleTeamType) => {
        let result = 1;
        if (type === "ask") {
            result = (team1[sortKey] > team2[sortKey]) ? 1 : -1;
        } else {
            result = (team1[sortKey] < team2[sortKey]) ? 1 : -1;
        }
        return result;
    });
}
// end Sorted teams Array by field key


// * * *
// get Team by ID
export function getTeamByID(id: TeamIDsType): Array<SingleTeamType> {
    // let teams: TeamsArrayType = TeamsArray;
    //const teamByID: Array<SingleTeamType> = teams.filter((team) => team.id === id);
    // return teamByID;
    return TeamsArray.filter((team) => team.id === id)
}
// end update Teams Stats
// * * *


// * * *
// update Teams Stats Group
export function updateTeamsArrayGroupStats(): TeamsArrayType {
    let teams: TeamsArrayType = [
        ...TeamsArray
    ];
    // let teams: TeamsArrayType = TeamsArray;
    console.log("updateTeamsArrayGroupStats")
    let games: Array<SingleGame> = GroupGames;

    games.forEach((game: SingleGame) => {
        // console.log(game.team1, game.team2, game.type);
        let team1: Array<SingleTeamType> = getTeamByID(game.team1);
        let team2: Array<SingleTeamType> = getTeamByID(game.team2);

        // goals:
        team1[0].goalsFor += game.goals1 + 5;
        team1[0].goalsAgainst += game.goals2;
        team2[0].goalsFor += game.goals2;
        team2[0].goalsAgainst += game.goals1;

        // gamesDrawn gamesWon gamesLost
        if (game.goals1 === game.goals2) {
            team1[0].gamesDrawn += 1;
            team2[0].gamesDrawn += 1
        } else if (game.goals1 > game.goals2) {
            team1[0].gamesWon += 1;
            team2[0].gamesLost += 1;

        } else {
            team1[0].gamesLost += 1;
            team2[0].gamesWon += 1;
        }
        //points:
        team1[0].points = team1[0].gamesDrawn + team1[0].gamesWon * 3;
        team2[0].points = team2[0].gamesDrawn + team2[0].gamesWon * 3;
    });

    return teams;
}
// end update Teams Stats
// * * *



