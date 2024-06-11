export const imgPath = "https://raw.githubusercontent.com/mordatiy/euro2024/main/public/";


export type SingleTeamObjectKeys = "id" | "title" | "flag" | "rankingEurope" | "rankingWorld" | "group" | "points";

export type SingleTeamType = {
    id: string
    //id_string: string
    title: string
    flag: string
    rankingEurope: number
    rankingWorld: number
    group: string,
    points: number
}

// export type TeamsType = Array<SingleTeamType>;
//
// export const Teams: TeamsType = [
//     1: {id: 1, title: "France", flag: "/flags/FRA.png", ranking: 1},
//     2: {id: 2, title: "Belgium", flag: "/flags/BEL.png", ranking: 2},
//     3: {id: 3, title: "England", flag: "/flags/ENG.png", ranking: 3},
// ];Italy


// export const teamsList: Array<SingleTeamType> = [
//     "fra": => {id: 1, title: "France", flag: "/flags/FRA.png", ranking: 2, group: "France"}
// ]
export type TeamsListType = Array<SingleTeamType>;

export const Teams: TeamsListType = [
    {id: "fra", title: "France", flag: "/flags/FRA.png", rankingEurope: 1, rankingWorld: 2, group: "D", points: 0},
    {id: "bel", title: "Belgium", flag: "/flags/BEL.png", rankingEurope: 2, rankingWorld: 3, group: "E", points: 0},
    {id: "eng", title: "England", flag: "/flags/ENG.png", rankingEurope: 3, rankingWorld: 4, group: "C", points: 21},
    {id: "por", title: "Portugal", flag: "/flags/POR.png", rankingEurope: 4, rankingWorld: 6, group: "F", points: 5},
    {id: "ned", title: "Netherlands", flag: "/flags/NED.png", rankingEurope: 5, rankingWorld: 7, group: "D", points: 0},
    {id: "esp", title: "Spain", flag: "/flags/ESP.png", rankingEurope: 6, rankingWorld: 8, group: "B", points: 0},
    {id: "ita", title: "Italy", flag: "/flags/ITA.png", rankingEurope: 7, rankingWorld: 9, group: "B", points: 0},
    {id: "cro", title: "Croatia", flag: "/flags/CRO.png", rankingEurope: 8, rankingWorld: 10, group: "B", points: 0},
    {id: "ger", title: "Germany", flag: "/flags/GER.png", rankingEurope: 9, rankingWorld: 16, group: "A", points: 0},
    {id: "sui", title: "Switzerland", flag: "/flags/SUI.png", rankingEurope: 10, rankingWorld: 19, group: "A", points: 0},
    {id: "den", title: "Denmark", flag: "/flags/DEN.png", rankingEurope: 10, rankingWorld: 21, group: "C", points: 0},
    {id: "ukr", title: "Ukraine", flag: "/flags/UKR.png", rankingEurope: 12, rankingWorld: 22, group: "E", points: 0},
    {id: "aut", title: "Austria", flag: "/flags/AUT.png", rankingEurope: 13, rankingWorld: 25, group: "D", points: 0},
    {id: "hun", title: "Hungary", flag: "/flags/HUN.png", rankingEurope: 14, rankingWorld: 26, group: "A", points: 0},
    {id: "pol", title: "Poland", flag: "/flags/POL.png", rankingEurope: 15, rankingWorld: 28, group: "D", points: 0},
    {id: "srb", title: "Serbia", flag: "/flags/SRB.png", rankingEurope: 16, rankingWorld: 33, group: "C", points: 0},
    {id: "cze", title: "Czechia", flag: "/flags/CZE.png", rankingEurope: 17, rankingWorld: 36, group: "F", points: 0},
    {id: "sco", title: "Scotland", flag: "/flags/SCO.png", rankingEurope: 18, rankingWorld: 39, group: "A", points: 0},
    {id: "tur", title: "Türki̇ye", flag: "/flags/TUR.png", rankingEurope: 19, rankingWorld: 40, group: "F", points: 0},
    {id: "rou", title: "Romania", flag: "/flags/ROU.png", rankingEurope: 20, rankingWorld: 46, group: "E", points: 0},
    {id: "svk", title: "Slovakia", flag: "/flags/SVK.png", rankingEurope: 21, rankingWorld: 48, group: "C", points: 0},
    {id: "svn", title: "Slovenia", flag: "/flags/SVN.png", rankingEurope: 22, rankingWorld: 57, group: "C", points: 0},
    {id: "alb", title: "Albania", flag: "/flags/ALB.png", rankingEurope: 23, rankingWorld: 66, group: "B", points: 0},
    {id: "geo", title: "Georgia", flag: "/flags/GEO.png", rankingEurope: 24, rankingWorld: 75, group: "F", points: 0},
];
