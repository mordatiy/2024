import React from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";
import {TeamIDsType} from "@/data/projectsData";
import {getGroupGameByTeamsIDs} from "@/utils/utils";

type GroupTableGameResultPropsType = {
    team1: TeamIDsType
    team2: TeamIDsType
}

export const mS: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export default function GroupTableGameResult(props: GroupTableGameResultPropsType) {

    //let resultHtml = "<div></div>";
    // const mS: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let resultType = "pass";
    let result = "";
    let result2 = "";
    if (props.team1 !== props.team2) {
        const groupGame = getGroupGameByTeamsIDs(props.team1, props.team2);
        if (groupGame.length > 0) {
            //console.log(groupGame);
            const nowDate = new Date();
            const gameDate = new Date(groupGame[0].date);
            if (nowDate > gameDate) {
                resultType = "result";
                if (groupGame[0].team1 === props.team1) {
                    result = `${groupGame[0].goals1} : ${groupGame[0].goals2}`;
                } else {
                    result = `${groupGame[0].goals2} : ${groupGame[0].goals1}`;
                }

            } else {
                //resultHtml = '<div className="small"></div>'
                resultType = "date";
                // result = groupGame[0].date;
                //result = gameDate.getDate() + ":00" + " <br> " + gameDate.getDay().toString() + " " + mS[gameDate.getMonth()];
                result = gameDate.getHours() + ":00";
                result2 = gameDate.getDate().toString() + " " + mS[gameDate.getMonth()]

            }
        } else {
            resultType = "none";
        }
    } else {
        resultType = "pass";
    }

    return (
        <>
            {resultType === "pass" && <div className={"pass-game"}></div>}
            {resultType === "date" && <div className={"smaller"}>{result}<br/>{result2}</div>}
            {resultType === "result" && <div>{result}</div>}
        </>
    )
}