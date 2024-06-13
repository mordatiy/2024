import {TeamIDsType} from "@/data/projectsData";

export const imgPath = "https://raw.githubusercontent.com/mordatiy/euro2024/main/public/";


export type SingleTeamObjectKeys = "id" | "title" | "flag" | "rankingEurope" | "rankingWorld" | "group" | "points";

export type SingleGame = {
    id: string
    date: string // YYYY-MM-DD HH:MM
    type: string // group | play-off
    team1: TeamIDsType
    team2: TeamIDsType
    goals1: number
    goals2: number
}

export type GamesListType = Array<SingleGame>;

export const GroupGames: GamesListType = [
    { team1: "ger", team2: "sco", goals1: 3, goals2: 1,
        date: "2024-06-14 22:00", id: "ger-sco", type: "group"},

    // { team1: "hun", team2: "sui", goals1: 1, goals2: 4,
    //     date: "2024-06-15 16:00", id: "hun-sui", type: "group"},
    // { team1: "esp", team2: "cro", goals1: 0, goals2: 0,
    //     date: "2024-06-15 19:00", id: "esp-cro", type: "group"},
    // { team1: "ita", team2: "alb", goals1: 1, goals2: 2,
    //     date: "2024-06-15 22:00", id: "ita-alb", type: "group"},

    // { team1: "ger", team2: "sui", goals1: 3, goals2: 0,
    //     date: "2024-06-16 22:00", id: "ger-sui", type: "group"},

    { team1: "ger", team2: "sui", goals1: 3, goals2: 1,
        date: "2024-06-14 22:00", id: "ger-sui", type: "group"},

    { team1: "hun", team2: "sui", goals1: 3, goals2: 1,
        date: "2024-06-14 22:00", id: "hun-sui", type: "group"},

    { team1: "ger", team2: "sui", goals1: 0, goals2: 10,
        date: "2024-06-14 22:00", id: "hun-sui2", type: "group"},
    // { team1: "sui", team2: "ger", goals1: 2, goals2: 1,
    //     date: "2024-06-14 22:00", id: "sui-ger", type: "group"},



];
