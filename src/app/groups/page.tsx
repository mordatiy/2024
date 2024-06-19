import React from "react";
import Groups from "@/app/groups/Groups";

export default function GroupsPage() {
    return (
        <>
            <h1 className={"center"}>Euro 2024 Group stage Tables</h1>
            <Groups type={"details"} pageType={"groups"}/>
        </>
    )
}