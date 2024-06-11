import {GamesListType} from "@/data/projectsDataGames";

export const imgPath = "https://raw.githubusercontent.com/mordatiy/euro2024/main/public/";

export type TeamIDsType = "fra" | "bel" | "eng" | "por" | "ned" | "esp" | "ita" | "cro" | "ger" | "sui" | "den" | "ukr" | "aut" | "hun" | "pol" | "srb" | "cze" | "sco" | "tur" | "rou" | "svk" | "svn" | "alb" | "geo";
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
    goals: number
}

export type TeamsArrayType = Array<SingleTeamType>;

export const TeamsArray: TeamsArrayType = [
    {id: "fra", goals: 0, title: "France", flag: "/flags/FRA.png", rankingEurope: 1, rankingWorld: 2, group: "D", points: 0},
    {id: "bel", goals: 0, title: "Belgium", flag: "/flags/BEL.png", rankingEurope: 2, rankingWorld: 3, group: "E", points: 0},
    {id: "eng", goals: 0, title: "England", flag: "/flags/ENG.png", rankingEurope: 3, rankingWorld: 4, group: "C", points: 21},
    {id: "por", goals: 0, title: "Portugal", flag: "/flags/POR.png", rankingEurope: 4, rankingWorld: 6, group: "F", points: 5},
    {id: "ned", goals: 0, title: "Netherlands", flag: "/flags/NED.png", rankingEurope: 5, rankingWorld: 7, group: "D", points: 0},
    {id: "esp", goals: 0, title: "Spain", flag: "/flags/ESP.png", rankingEurope: 6, rankingWorld: 8, group: "B", points: 0},
    {id: "ita", goals: 0, title: "Italy", flag: "/flags/ITA.png", rankingEurope: 7, rankingWorld: 9, group: "B", points: 0},
    {id: "cro", goals: 0, title: "Croatia", flag: "/flags/CRO.png", rankingEurope: 8, rankingWorld: 10, group: "B", points: 0},
    {id: "ger", goals: 0, title: "Germany", flag: "/flags/GER.png", rankingEurope: 9, rankingWorld: 16, group: "A", points: 0},
    {id: "sui", goals: 0, title: "Switzerland", flag: "/flags/SUI.png", rankingEurope: 10, rankingWorld: 19, group: "A", points: 0},
    {id: "den", goals: 0, title: "Denmark", flag: "/flags/DEN.png", rankingEurope: 10, rankingWorld: 21, group: "C", points: 0},
    {id: "ukr", goals: 0, title: "Ukraine", flag: "/flags/UKR.png", rankingEurope: 12, rankingWorld: 22, group: "E", points: 0},
    {id: "aut", goals: 0, title: "Austria", flag: "/flags/AUT.png", rankingEurope: 13, rankingWorld: 25, group: "D", points: 0},
    {id: "hun", goals: 0, title: "Hungary", flag: "/flags/HUN.png", rankingEurope: 14, rankingWorld: 26, group: "A", points: 0},
    {id: "pol", goals: 0, title: "Poland", flag: "/flags/POL.png", rankingEurope: 15, rankingWorld: 28, group: "D", points: 0},
    {id: "srb", goals: 0, title: "Serbia", flag: "/flags/SRB.png", rankingEurope: 16, rankingWorld: 33, group: "C", points: 0},
    {id: "cze", goals: 0, title: "Czechia", flag: "/flags/CZE.png", rankingEurope: 17, rankingWorld: 36, group: "F", points: 0},
    {id: "sco", goals: 0, title: "Scotland", flag: "/flags/SCO.png", rankingEurope: 18, rankingWorld: 39, group: "A", points: 0},
    {id: "tur", goals: 0, title: "Türki̇ye", flag: "/flags/TUR.png", rankingEurope: 19, rankingWorld: 40, group: "F", points: 0},
    {id: "rou", goals: 0, title: "Romania", flag: "/flags/ROU.png", rankingEurope: 20, rankingWorld: 46, group: "E", points: 0},
    {id: "svk", goals: 0, title: "Slovakia", flag: "/flags/SVK.png", rankingEurope: 21, rankingWorld: 48, group: "C", points: 0},
    {id: "svn", goals: 0, title: "Slovenia", flag: "/flags/SVN.png", rankingEurope: 22, rankingWorld: 57, group: "C", points: 0},
    {id: "alb", goals: 0, title: "Albania", flag: "/flags/ALB.png", rankingEurope: 23, rankingWorld: 66, group: "B", points: 0},
    {id: "geo", goals: 0, title: "Georgia", flag: "/flags/GEO.png", rankingEurope: 24, rankingWorld: 75, group: "F", points: 0},
];

export type TeamsListType = {
    [key: string]: SingleTeamType;
};

export const TeamsList: TeamsListType = {
    "fra": {id: "fra", goals: 0, title: "France", flag: "/flags/FRA.png", rankingEurope: 1, rankingWorld: 2, group: "D", points: 0},
    "bel": {id: "bel", goals: 0, title: "Belgium", flag: "/flags/BEL.png", rankingEurope: 2, rankingWorld: 3, group: "E", points: 0},
    "eng": {id: "eng", goals: 0, title: "England", flag: "/flags/ENG.png", rankingEurope: 3, rankingWorld: 4, group: "C", points: 0},
    "por": {id: "por", goals: 0, title: "Portugal", flag: "/flags/POR.png", rankingEurope: 4, rankingWorld: 6, group: "F", points: 0},
    "ned": {id: "ned", goals: 0, title: "Netherlands", flag: "/flags/NED.png", rankingEurope: 5, rankingWorld: 7, group: "D", points: 0},
    "esp": {id: "esp", goals: 0, title: "Spain", flag: "/flags/ESP.png", rankingEurope: 6, rankingWorld: 8, group: "B", points: 0},
    "ita": {id: "ita", goals: 0, title: "Italy", flag: "/flags/ITA.png", rankingEurope: 7, rankingWorld: 9, group: "B", points: 0},
    "cro": {id: "cro", goals: 0, title: "Croatia", flag: "/flags/CRO.png", rankingEurope: 8, rankingWorld: 10, group: "B", points: 0},
    "ger": {id: "ger", goals: 0, title: "Germany", flag: "/flags/GER.png", rankingEurope: 9, rankingWorld: 16, group: "A", points: 0},
    "sui": {id: "sui", goals: 0, title: "Switzerland", flag: "/flags/SUI.png", rankingEurope: 10, rankingWorld: 19, group: "A", points: 0},
    "den": {id: "den", goals: 0, title: "Denmark", flag: "/flags/DEN.png", rankingEurope: 10, rankingWorld: 21, group: "C", points: 0},
    "ukr": {id: "ukr", goals: 0, title: "Ukraine", flag: "/flags/UKR.png", rankingEurope: 12, rankingWorld: 22, group: "E", points: 0},
    "aut": {id: "aut", goals: 0, title: "Austria", flag: "/flags/AUT.png", rankingEurope: 13, rankingWorld: 25, group: "D", points: 0},
    "hun": {id: "hun", goals: 0, title: "Hungary", flag: "/flags/HUN.png", rankingEurope: 14, rankingWorld: 26, group: "A", points: 0},
    "pol": {id: "pol", goals: 0, title: "Poland", flag: "/flags/POL.png", rankingEurope: 15, rankingWorld: 28, group: "D", points: 0},
    "srb": {id: "srb", goals: 0, title: "Serbia", flag: "/flags/SRB.png", rankingEurope: 16, rankingWorld: 33, group: "C", points: 0},
    "cze": {id: "cze", goals: 0, title: "Czechia", flag: "/flags/CZE.png", rankingEurope: 17, rankingWorld: 36, group: "F", points: 0},
    "sco": {id: "sco", goals: 0, title: "Scotland", flag: "/flags/SCO.png", rankingEurope: 18, rankingWorld: 39, group: "A", points: 0},
    "tur": {id: "tur", goals: 0, title: "Türki̇ye", flag: "/flags/TUR.png", rankingEurope: 19, rankingWorld: 40, group: "F", points: 0},
    "rou": {id: "rou", goals: 0, title: "Romania", flag: "/flags/ROU.png", rankingEurope: 20, rankingWorld: 46, group: "E", points: 0},
    "svk": {id: "svk", goals: 0, title: "Slovakia", flag: "/flags/SVK.png", rankingEurope: 21, rankingWorld: 48, group: "C", points: 0},
    "svn": {id: "svn", goals: 0, title: "Slovenia", flag: "/flags/SVN.png", rankingEurope: 22, rankingWorld: 57, group: "C", points: 0},
    "alb": {id: "alb", goals: 0, title: "Albania", flag: "/flags/ALB.png", rankingEurope: 23, rankingWorld: 66, group: "B", points: 0},
    "geo": {id: "geo", goals: 0, title: "Georgia", flag: "/flags/GEO.png", rankingEurope: 24, rankingWorld: 75, group: "F", points: 0},
};



// export const TeamsObject = (TeamsArray) => {
//     const obj = {}
//     TeamsArray.map((item: SingleTeamType) => {
//         obj = {
//             ...obj,
//             item.id: item
//         }
//     })
//     return {
//         TeamsArray
//     }
// }
