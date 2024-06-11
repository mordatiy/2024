import {SingleTeamType} from "@/data/projectsData";

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