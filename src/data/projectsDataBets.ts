import {TeamIDsType} from "@/data/projectsData";

export const imgPath = "https://raw.githubusercontent.com/mordatiy/euro2024/main/public/";


export type SingleTeamObjectKeys = "id" | "title" | "flag" | "rankingEurope" | "rankingWorld" | "group" | "points";

export type BetsType = {
    id: string
    date: string // YYYY-MM-DD HH:MM
    type: "group" | "play-off"
    team1: TeamIDsType
    team2: TeamIDsType
    goals1: number
    goals2: number
    done: boolean
}

export type BetsArrayType = Array<BetsType>;

export const MatviiBets: BetsArrayType = [

    { team1: "ger", team2: "sco", goals1: 3, goals2: 1,
        date: "2024-06-14 22:00", id: "ger-sco", type: "group", done: true },

    { team1: "hun", team2: "sui", goals1: 0, goals2: 2,
        date: "2024-06-15 16:00", id: "hun-sui", type: "group", done: true },
    { team1: "esp", team2: "cro", goals1: 3, goals2: 1,
        date: "2024-06-15 19:00", id: "esp-cro", type: "group", done: true },
    { team1: "ita", team2: "alb", goals1: 1, goals2: 0,
        date: "2024-06-15 22:00", id: "ita-alb", type: "group", done: true },

    { team1: "pol", team2: "ned", goals1: 1, goals2: 3,
        date: "2024-06-16 16:00", id: "pol-ned", type: "group", done: true },
    { team1: "svn", team2: "den", goals1: 0, goals2: 1,
        date: "2024-06-16 19:00", id: "svn-den", type: "group", done: true },
    { team1: "srb", team2: "eng", goals1: 0, goals2: 2,
        date: "2024-06-16 22:00", id: "srb-eng", type: "group", done: true },

    { team1: "rou", team2: "ukr", goals1: 0, goals2: 1,
        date: "2024-06-17 16:00", id: "rou-ukr", type: "group", done: true },
    { team1: "bel", team2: "svk", goals1: 3, goals2: 1,
        date: "2024-06-17 19:00", id: "bel-svk", type: "group", done: true },
    { team1: "aut", team2: "fra", goals1: 0, goals2: 2,
        date: "2024-06-17 22:00", id: "aut-fra", type: "group", done: true },

    { team1: "tur", team2: "geo", goals1: 2, goals2: 1,
        date: "2024-06-18 16:00", id: "tur-geo", type: "group", done: true },
    { team1: "por", team2: "cze", goals1: 2, goals2: 0,
        date: "2024-06-18 19:00", id: "por-cze", type: "group", done: true },

    // * * *
    // round 2
    // * * *

    { team1: "cro", team2: "alb", goals1: 2, goals2: 1,
        date: "2024-06-19 16:00", id: "cro-alb", type: "group", done: true },
    { team1: "ger", team2: "hun", goals1: 2, goals2: 0,
        date: "2024-06-19 19:00", id: "ger-hun", type: "group", done: true },
    { team1: "sco", team2: "sui", goals1: 1, goals2: 2,
        date: "2024-06-19 22:00", id: "sco-sui", type: "group", done: true },

    { team1: "svn", team2: "srb", goals1: 0, goals2: 0,
        date: "2024-06-20 16:00", id: "svn-srb", type: "group", done: true },
    { team1: "den", team2: "eng", goals1: 1, goals2: 2,
        date: "2024-06-20 19:00", id: "den-eng", type: "group", done: true },
    { team1: "esp", team2: "ita", goals1: 3, goals2: 2,
        date: "2024-06-20 22:00", id: "esp-ita", type: "group", done: true },

    { team1: "svk", team2: "ukr", goals1: 0, goals2: 1,
        date: "2024-06-21 16:00", id: "svk-ukr", type: "group", done: true },
    { team1: "pol", team2: "aut", goals1: 2, goals2: 0,
        date: "2024-06-21 19:00", id: "pol-aut", type: "group", done: true },
    { team1: "ned", team2: "fra", goals1: 1, goals2: 3,
        date: "2024-06-21 22:00", id: "ned-fra", type: "group", done: true },

    { team1: "geo", team2: "cze", goals1: 1, goals2: 1,
        date: "2024-06-22 16:00", id: "geo-cze", type: "group", done: true },
    { team1: "tur", team2: "por", goals1: 1, goals2: 3,
        date: "2024-06-22 19:00", id: "tur-por", type: "group", done: true },
    { team1: "bel", team2: "rou", goals1: 3, goals2: 1,
        date: "2024-06-22 22:00", id: "bel-rou", type: "group", done: true },

    // * * *
    // round 3
    // * * *

    { team1: "sui", team2: "ger", goals1: 1, goals2: 2,
        date: "2024-06-23 22:00", id: "sui-ger", type: "group", done: true },
    { team1: "sco", team2: "hun", goals1: 1, goals2: 1,
        date: "2024-06-23 22:00", id: "sco-hun", type: "group", done: true },

    { team1: "alb", team2: "esp", goals1: 1, goals2: 3,
        date: "2024-06-24 22:00", id: "alb-esp", type: "group", done: true },
    { team1: "cro", team2: "ita", goals1: 0, goals2: 1,
        date: "2024-06-24 22:00", id: "cro-ita", type: "group", done: true },

    { team1: "ned", team2: "aut", goals1: 0, goals2: 0,
        date: "2024-06-25 19:00", id: "ned-aut", type: "group", done: false },
    { team1: "fra", team2: "pol", goals1: 0, goals2: 0,
        date: "2024-06-25 19:00", id: "fra-pol", type: "group", done: false },
    { team1: "eng", team2: "svn", goals1: 0, goals2: 0,
        date: "2024-06-25 22:00", id: "eng-svn", type: "group", done: false },
    { team1: "den", team2: "srb", goals1: 0, goals2: 0,
        date: "2024-06-25 22:00", id: "den-srb", type: "group", done: false },

    { team1: "svk", team2: "rou", goals1: 0, goals2: 0,
        date: "2024-06-26 19:00", id: "svk-rou", type: "group", done: false },
    { team1: "ukr", team2: "bel", goals1: 0, goals2: 0,
        date: "2024-06-26 19:00", id: "ukr-bel", type: "group", done: false },
    { team1: "geo", team2: "por", goals1: 0, goals2: 0,
        date: "2024-06-26 22:00", id: "geo-por", type: "group", done: false },
    { team1: "cze", team2: "tur", goals1: 0, goals2: 0,
        date: "2024-06-26 22:00", id: "cze-tur", type: "group", done: false },

    // * * *
    // round 4
    // * * *


];



export const DimaBets: BetsArrayType = [

    { team1: "ger", team2: "sco", goals1: 2, goals2: 0,
        date: "2024-06-14 22:00", id: "ger-sco", type: "group", done: true },

    { team1: "hun", team2: "sui", goals1: 1, goals2: 1,
        date: "2024-06-15 16:00", id: "hun-sui", type: "group", done: true },
    { team1: "esp", team2: "cro", goals1: 1, goals2: 1,
        date: "2024-06-15 19:00", id: "esp-cro", type: "group", done: true },
    { team1: "ita", team2: "alb", goals1: 3, goals2: 0,
        date: "2024-06-15 22:00", id: "ita-alb", type: "group", done: true },

    { team1: "pol", team2: "ned", goals1: 0, goals2: 3,
        date: "2024-06-16 16:00", id: "pol-ned", type: "group", done: true },
    { team1: "svn", team2: "den", goals1: 0, goals2: 2,
        date: "2024-06-16 19:00", id: "svn-den", type: "group", done: true },
    { team1: "srb", team2: "eng", goals1: 0, goals2: 5,
        date: "2024-06-16 22:00", id: "srb-eng", type: "group", done: true },

    { team1: "rou", team2: "ukr", goals1: 1, goals2: 2,
        date: "2024-06-17 16:00", id: "rou-ukr", type: "group", done: true },
    { team1: "bel", team2: "svk", goals1: 3, goals2: 0,
        date: "2024-06-17 19:00", id: "bel-svk", type: "group", done: true },
    { team1: "aut", team2: "fra", goals1: 0, goals2: 4,
        date: "2024-06-17 22:00", id: "aut-fra", type: "group", done: true },

    { team1: "tur", team2: "geo", goals1: 1, goals2: 1,
        date: "2024-06-18 16:00", id: "tur-geo", type: "group", done: true },
    { team1: "por", team2: "cze", goals1: 2, goals2: 1,
        date: "2024-06-18 19:00", id: "por-cze", type: "group", done: true },

    // * * *
    // round 2
    // * * *

    { team1: "cro", team2: "alb", goals1: 2, goals2: 0,
        date: "2024-06-19 16:00", id: "cro-alb", type: "group", done: true },
    { team1: "ger", team2: "hun", goals1: 2, goals2: 0,
        date: "2024-06-19 19:00", id: "ger-hun", type: "group", done: true },
    { team1: "sco", team2: "sui", goals1: 2, goals2: 2,
        date: "2024-06-19 22:00", id: "sco-sui", type: "group", done: true },

    { team1: "svn", team2: "srb", goals1: 1, goals2: 1,
        date: "2024-06-20 16:00", id: "svn-srb", type: "group", done: true },
    { team1: "den", team2: "eng", goals1: 0, goals2: 0,
        date: "2024-06-20 19:00", id: "den-eng", type: "group", done: true },
    { team1: "esp", team2: "ita", goals1: 3, goals2: 1,
        date: "2024-06-20 22:00", id: "esp-ita", type: "group", done: true },

    { team1: "svk", team2: "ukr", goals1: 1, goals2: 2,
        date: "2024-06-21 16:00", id: "svk-ukr", type: "group", done: true },
    { team1: "pol", team2: "aut", goals1: 2, goals2: 1,
        date: "2024-06-21 19:00", id: "pol-aut", type: "group", done: true },
    { team1: "ned", team2: "fra", goals1: 1, goals2: 3,
        date: "2024-06-21 22:00", id: "ned-fra", type: "group", done: true },

    { team1: "geo", team2: "cze", goals1: 1, goals2: 2,
        date: "2024-06-22 16:00", id: "geo-cze", type: "group", done: true },
    { team1: "tur", team2: "por", goals1: 0, goals2: 2,
        date: "2024-06-22 19:00", id: "tur-por", type: "group", done: true },
    { team1: "bel", team2: "rou", goals1: 4, goals2: 0,
        date: "2024-06-22 22:00", id: "bel-rou", type: "group", done: true },

    // * * *
    // round 3
    // * * *

    { team1: "sui", team2: "ger", goals1: 0, goals2: 1,
        date: "2024-06-23 22:00", id: "sui-ger", type: "group", done: true },
    { team1: "sco", team2: "hun", goals1: 1, goals2: 1,
        date: "2024-06-23 22:00", id: "sco-hun", type: "group", done: true },

    { team1: "alb", team2: "esp", goals1: 1, goals2: 3,
        date: "2024-06-24 22:00", id: "alb-esp", type: "group", done: true },
    { team1: "cro", team2: "ita", goals1: 1, goals2: 2,
        date: "2024-06-24 22:00", id: "cro-ita", type: "group", done: true },

    { team1: "ned", team2: "aut", goals1: 17, goals2: 17,
        date: "2024-06-25 19:00", id: "ned-aut", type: "group", done: true },
    { team1: "fra", team2: "pol", goals1: 0, goals2: 0,
        date: "2024-06-25 19:00", id: "fra-pol", type: "group", done: false },
    { team1: "eng", team2: "svn", goals1: 0, goals2: 0,
        date: "2024-06-25 22:00", id: "eng-svn", type: "group", done: false },
    { team1: "den", team2: "srb", goals1: 0, goals2: 0,
        date: "2024-06-25 22:00", id: "den-srb", type: "group", done: false },

    { team1: "svk", team2: "rou", goals1: 0, goals2: 0,
        date: "2024-06-26 19:00", id: "svk-rou", type: "group", done: false },
    { team1: "ukr", team2: "bel", goals1: 0, goals2: 0,
        date: "2024-06-26 19:00", id: "ukr-bel", type: "group", done: false },
    { team1: "geo", team2: "por", goals1: 0, goals2: 0,
        date: "2024-06-26 22:00", id: "geo-por", type: "group", done: false },
    { team1: "cze", team2: "tur", goals1: 0, goals2: 0,
        date: "2024-06-26 22:00", id: "cze-tur", type: "group", done: false },

    // * * *
    // round 4
    // * * *


];
