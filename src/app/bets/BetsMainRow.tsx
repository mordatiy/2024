"use client";
import React from "react";

export type BetsMainRowType = {
    pointsD: number
    pointsM: number
}

export default function BetsMainRow(props: BetsMainRowType) {
    // console.log("Bets MAIN Row");

    return (
        <div className={"bets-row bets-row-header"}>
            <div className={"bets dima-bets"}>
                <div className={"bets-body"}>
                    <h1 className={"h1grad"}>Dima</h1>
                </div>
                <div className={"bets-points"}>
                    <h1 className={"points total-points"}>{props.pointsD}</h1>
                </div>
            </div>
            <div className={"results"}>
                <h1 className={"grey center"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}> TOTAL WIN </h1>
            </div>
            <div className={"bets matvii-bets"}>
                <div className={"bets-points"}>
                    <h1 className={"points total-points"}>{props.pointsM}</h1>
                </div>
                <div className={"bets-body"}>
                    <h1 className={"h2grad right"}>Matvii</h1>
                </div>
            </div>
        </div>
    )
}