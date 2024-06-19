"use client";
import React from 'react';
import Groups from "@/app/groups/Groups";


export default function HomePage() {
    console.log("HomePage");
    return (
        <>
            <h1 className={"center"}>💥 Euro 2024 💥</h1>
            <Groups type={"collapsed"} pageType={"home"}/>
        </>
    )
}

