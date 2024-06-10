
export type SingleTeamType = {
    id: number
    title: string
    flag: string
    ranking: number
}

// export type TeamsType = Array<SingleTeamType>;
//
// export const Teams: TeamsType = [
//     1: {id: 1, title: "France", flag: "/flags/FRA.png", ranking: 1},
//     2: {id: 2, title: "Belgium", flag: "/flags/BEL.png", ranking: 2},
//     3: {id: 3, title: "England", flag: "/flags/ENG.png", ranking: 3},
// ];Italy

export type TeamsListType = Array<SingleTeamType>;

export const Teams: TeamsListType = [
    {id: 1, title: "France", flag: "/flags/FRA.png", ranking: 2},
    {id: 2, title: "Belgium", flag: "/flags/BEL.png", ranking: 3},
    {id: 3, title: "England", flag: "/flags/ENG.png", ranking: 4},
    {id: 4, title: "Portugal", flag: "/flags/POR.png", ranking: 6},
    {id: 5, title: "Netherlands", flag: "/flags/NED.png", ranking: 7},
    {id: 6, title: "Spain", flag: "/flags/ESP.png", ranking: 8},
    {id: 7, title: "Italy", flag: "/flags/ITA.png", ranking: 9},
    {id: 8, title: "Croatia", flag: "/flags/CRO.png", ranking: 10},
    {id: 9, title: "Germany", flag: "/flags/GER.png", ranking: 16},
    {id: 10, title: "Switzerland", flag: "/flags/SUI.png", ranking: 19},
    {id: 11, title: "Denmark", flag: "/flags/DEN.png", ranking: 21},
    {id: 12, title: "Ukraine", flag: "/flags/UKR.png", ranking: 22},
    {id: 13, title: "Austria", flag: "/flags/AUT.png", ranking: 25},
    {id: 14, title: "Hungary", flag: "/flags/HUN.png", ranking: 26},
    {id: 15, title: "Poland", flag: "/flags/POL.png", ranking: 28},
    {id: 16, title: "Serbia", flag: "/flags/SRB.png", ranking: 33},
    {id: 17, title: "Czechia", flag: "/flags/CZE.png", ranking: 36},
    {id: 18, title: "Scotland", flag: "/flags/SCO.png", ranking: 39},
    {id: 19, title: "Türki̇ye", flag: "/flags/TUR.png", ranking: 40},
    {id: 20, title: "Romania", flag: "/flags/ROU.png", ranking: 46},
    {id: 21, title: "Slovakia", flag: "/flags/SVK.png", ranking: 48},
    {id: 22, title: "Slovenia", flag: "/flags/SVN.png", ranking: 57},
    {id: 23, title: "Albania", flag: "/flags/ALB.png", ranking: 66},
    {id: 24, title: "Georgia", flag: "/flags/GEO.png", ranking: 75},
];
