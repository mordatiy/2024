"use client";
import React, {useState} from "react";
import {AllGamesArray, GamesListType, SingleGame} from "@/data/projectsDataGames";
import SingleGameBrief from "@/app/matches/SingleGameBrief";
import BetsGameRow from "@/app/bets/BetsGameRow";
import BetsMainRow from "@/app/bets/BetsMainRow";
import BetsGlobalRows from "@/app/bets/BetsGlobalRows";
import {BetsArrayType, DimaBets, MatviiBets} from "@/data/projectsDataBets";

export default function BetsPage() {

    const allGames:GamesListType = structuredClone(AllGamesArray);
    const betsD:GamesListType = structuredClone(DimaBets);
    const betsM:GamesListType = structuredClone(MatviiBets);

    let [pointsD, setPointsD] = useState(0);
    let [pointsM, setPointsM] = useState(0);
    console.log(betsD)

    const updatePoints = (n: number, userId: string) => {
        if (userId === "d") {
            setPointsD(pointsD + n);
            console.log("d", pointsD)
        } else {
            setPointsM(pointsM + n);
        }
    }
    // updatePoints(2, "d");

    allGames.forEach(game => {


    })





    return (
        <>
            <h1 className={"center"}>Dima & Matvii Bets</h1>

            <div className={"bets-table"}>

                <BetsMainRow pointsD={pointsD} pointsM={pointsM} />

                <BetsGlobalRows />

                <div className={"bets-table-body"}>
                    {
                        allGames.map((game: SingleGame) => {
                            return (
                                <BetsGameRow game={game} updateData={updatePoints} key={`game__${game.id}` } />
                            )
                        })
                    }
                    <div className={"bets-row"}>

                    </div>
                </div>


            </div>
        </>
    )
}