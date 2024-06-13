import React from "react";
import {SingleTeamType, TeamsArray, TeamsArrayType, TeamsListType} from "@/data/projectsData";
import GroupTable from "@/app/groups/GroupTable";
import {getTeamByID} from "@/utils/utils";

export type PropsTypeGroupsView = {
    type: "collapsed" | "details"
    groupsArray: Array<string>
    teamsArray: TeamsArrayType

    // sortTeamsTable(key: string): void
    // keySortString: string
}

export default function Groups(props: PropsTypeGroupsView) {
    const classWrapTable = (props.type === "collapsed") ? "wrapGroupTablesCollapsed" : "wrapGroupTablesDetails";
    // console.log(props);

    // Test
    // console.log(getTeamByID("ger"));
    // let ger: Array<SingleTeamType> = getTeamByID("ger");
    // setTimeout( () => {
    //         // ger[0].points = 55;
    //         console.log(ger);
    //     }, 1000
    // )
    // console.log(TeamsArray);


    return (
        <>
            <div className={classWrapTable}>
                {props.groupsArray.map((group) => (
                    <GroupTable key={"group_" + group}
                        type={props.type}
                        groupsId={group}
                        teamsArray={props.teamsArray}
                    />
                ))};
            </div>
        </>
    )
}