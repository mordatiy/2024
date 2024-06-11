import React from "react";
import {PropsTypeGroupsView} from "@/app/groups/Groups";


export default function GroupsDetails(props: PropsTypeGroupsView) {
    return (
        <>
            <div className={"wrapGroupTablesDetails"}>
                <div className={"table"}>
                    Details 1
                </div>
                <div className={"table"}>
                    Details 2
                </div>
            </div>
        </>
    )
}