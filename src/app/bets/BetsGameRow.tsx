"use client";
import SingleGameBrief from "@/app/matches/SingleGameBrief";
import React from "react";
import {SingleGame} from "@/data/projectsDataGames";

export type BetsGameRowType = {
    game: SingleGame
    updateData: (n: number, userId: string) => void
}

export default function BetsGameRow(props: BetsGameRowType) {
    // console.log("Bets Game Row");
    // props.updateData(1, "d");

    return (
        <div className={"bets-row"}>
            <div className={"bets"}>
                <div className={"bets-body"}>
                    <h1 className={"grey center"}>? </h1>
                </div>
                <div className={"bets-points"}>
                    <h1 className={"points"}>2</h1>
                </div>
            </div>
            <div className={"results"}>
                <SingleGameBrief type={"group"} team1Id={props.game.team1} team2Id={props.game.team2}/>
            </div>
            <div className={"bets"}>
                <div className={"bets-points"}>
                    <h1 className={"points"}>1</h1>
                </div>
                <div className={"bets-body"}>
                    <h1 className={"grey center"}>?</h1>
                </div>
            </div>
        </div>
    )
}