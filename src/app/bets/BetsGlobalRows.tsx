"use client";
import React from "react";

// export type BetsMainRowType = {
//     pointsD: number
//     pointsM: number
// }

export default function BetsGlobalRows() {
    // console.log("Bets MAIN Row");

    return (
        <>
            <div className={"bets-row"}>
                <div className={"bets"}>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>France</h1>
                    </div>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>15</h1>
                    </div>
                </div>
                <div className={"results"}>
                    <div className={"w100 center"}>
                        <span className={"small"}>Winner (before group stage)</span>
                    </div>
                    <h1 className={"center"}>France</h1>
                </div>
                <div className={"bets"}>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>15</h1>
                    </div>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>Albania</h1>
                    </div>
                </div>
            </div>
        </>
    )
}