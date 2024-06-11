import React from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";


export default function GroupsCollapsed(props: PropsTypeGroupsView) {
    const classWrapTable = (props.type === "collapsed") ? "wrapGroupTablesCollapsed" : "wrapGroupTablesDetails";

    return (
        <>
            <div className={classWrapTable}>
                {props.groupsArray.map((group) => (

                    <div className={"wrapGroup"} key={"group_" + group}>
                        <h2>Group {group}</h2>

                        <div className={"table"}>table Group {group}</div>
                    </div>

                ))}

            </div>
        </>
    )
}