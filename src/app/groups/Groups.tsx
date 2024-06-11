import React from "react";
import {TeamsArrayType} from "@/data/projectsData";
import GroupsCollapsed from "@/app/groups/GroupsCollapsed";
import GroupsDetails from "@/app/groups/GroupsDetails";


export type PropsTypeGroupsView = {
    // teamList: TeamsListType,
    type: "collapsed" | "details"
    groupsArray: Array<string>
    // sortTeamsTable(key: string): void
    // keySortString: string
}

export default function Groups(props: PropsTypeGroupsView) {
    return (
        <>
            {props.type === "collapsed" && (<GroupsCollapsed type={props.type} groupsArray={props.groupsArray} />)}
            {props.type === "details" && (<GroupsDetails type={props.type} groupsArray={props.groupsArray}/>)}
        </>
    )
}