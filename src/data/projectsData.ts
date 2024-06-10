export const imgPath = "https://raw.githubusercontent.com/mordatiy/euro2024/main/public/";

export type SingleTeamType = {
    id: number
    title: string
    flag: string
    ranking: number
    group: string
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
    {id: 1, title: "France", flag: "/flags/FRA.png", ranking: 2, group: "France"},
    {id: 2, title: "Belgium", flag: "/flags/BEL.png", ranking: 3, group: "France"},
    {id: 3, title: "England", flag: "/flags/ENG.png", ranking: 4, group: "France"},
    {id: 4, title: "Portugal", flag: "/flags/POR.png", ranking: 6, group: "France"},
    {id: 5, title: "Netherlands", flag: "/flags/NED.png", ranking: 7, group: "France"},
    {id: 6, title: "Spain", flag: "/flags/ESP.png", ranking: 8, group: "France"},
    {id: 7, title: "Italy", flag: "/flags/ITA.png", ranking: 9, group: "France"},
    {id: 8, title: "Croatia", flag: "/flags/CRO.png", ranking: 10, group: "France"},
    {id: 9, title: "Germany", flag: "/flags/GER.png", ranking: 16, group: "France"},
    {id: 10, title: "Switzerland", flag: "/flags/SUI.png", ranking: 19, group: "France"},
    {id: 11, title: "Denmark", flag: "/flags/DEN.png", ranking: 21, group: "France"},
    {id: 12, title: "Ukraine", flag: "/flags/UKR.png", ranking: 22, group: "France"},
    {id: 13, title: "Austria", flag: "/flags/AUT.png", ranking: 25, group: "France"},
    {id: 14, title: "Hungary", flag: "/flags/HUN.png", ranking: 26, group: "France"},
    {id: 15, title: "Poland", flag: "/flags/POL.png", ranking: 28, group: "France"},
    {id: 16, title: "Serbia", flag: "/flags/SRB.png", ranking: 33, group: "France"},
    {id: 17, title: "Czechia", flag: "/flags/CZE.png", ranking: 36, group: "France"},
    {id: 18, title: "Scotland", flag: "/flags/SCO.png", ranking: 39, group: "France"},
    {id: 19, title: "Türki̇ye", flag: "/flags/TUR.png", ranking: 40, group: "France"},
    {id: 20, title: "Romania", flag: "/flags/ROU.png", ranking: 46, group: "France"},
    {id: 21, title: "Slovakia", flag: "/flags/SVK.png", ranking: 48, group: "France"},
    {id: 22, title: "Slovenia", flag: "/flags/SVN.png", ranking: 57, group: "France"},
    {id: 23, title: "Albania", flag: "/flags/ALB.png", ranking: 66, group: "France"},
    {id: 24, title: "Georgia", flag: "/flags/GEO.png", ranking: 75, group: "France"},
];
