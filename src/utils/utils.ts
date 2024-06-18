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

export type sortTypeType = "ask" | "desk";
// Sorted teams Array by field key
export function sortedTeamsArray(startArray: Array<SingleTeamType>, type: sortTypeType, sortKey: SingleTeamObjectKeys ) {
    return startArray.sort((team1: SingleTeamType, team2: SingleTeamType) => {
        let result = 1;
        if (type === "ask") {
            result = (team1[sortKey] > team2[sortKey]) ? 1 : -1;
        } else {
            result = (team1[sortKey] <= team2[sortKey]) ? 1 : -1;
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
    //return TeamsArray.filter((team) => team.id === id);
    return structuredClone(TeamsArray.filter((team) => team.id === id));
}
// end update Teams Stats
// * * *

// * * *
// get Game by Teams IDs
export function getGameByTeamsIDs(team1Id: TeamIDsType, team2Id: TeamIDsType): Array<SingleGame> {
    const gamesArray = GroupGames.filter((team) => ((team.team1 === team1Id && team.team2 === team2Id) || (team.team1 === team2Id && team.team2 === team1Id)))
    // return gamesArray[0];
    return structuredClone(gamesArray);
}
// end get Game by Teams IDs
// * * *


// * * *
// update Teams Stats Group
export function updateTeamsArrayGroupStats(): TeamsArrayType {
    // console.log("need structuredClone()")
    // let teams: TeamsArrayType = [
    //     ...TeamsArray
    // ];
    let teams: TeamsArrayType = structuredClone(TeamsArray);

    // let teams: TeamsArrayType = TeamsArray;
    console.log("update Teams Array Group Stats")
    let games: Array<SingleGame> = GroupGames;
    const nowDate = new Date();

    games.forEach((game: SingleGame) => {
        // console.log(game.team1, game.team2, game.type);
        const gameDate = new Date(game.date);
        // console.log(gameDate)
        // console.log(gameDate)
        if (game.done) {
            // let team1: Array<SingleTeamType> = getTeamByID(game.team1);
            // let team2: Array<SingleTeamType> = getTeamByID(game.team2);
            let team1: Array<SingleTeamType> = teams.filter((team) => team.id === game.team1);
            let team2: Array<SingleTeamType> = teams.filter((team) => team.id === game.team2);

            // goals:
            team1[0].goalsFor += game.goals1;
            team1[0].goalsAgainst += game.goals2;
            team1[0].goalsDiff = team1[0].goalsDiff + game.goals1 - game.goals2;
            team2[0].goalsFor += game.goals2;
            team2[0].goalsAgainst += game.goals1;
            team2[0].goalsDiff = team2[0].goalsDiff + game.goals2 - game.goals1;

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
        } else {}
    });

    return [...teams];
}
// end update Teams Stats
// * * *



