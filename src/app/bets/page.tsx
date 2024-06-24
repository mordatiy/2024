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

    // let [pointsD, setPointsD] = useState(0);
    // let [pointsM, setPointsM] = useState(0);
    let pointsD = 0;
    let pointsM = 0;
    // console.log(betsD)

    // const updatePoints = (n: number, userId: string) => {
    //     if (userId === "d") {
    //         setPointsD(pointsD + n);
    //         console.log("d", pointsD)
    //     } else {
    //         setPointsM(pointsM + n);
    //     }
    // }
    // // updatePoints(2, "d");

    allGames.forEach(game => {
        let gameBetD = betsD.find((item) => (item.id === game.id && item.date === game.date));
        let gamePointsD = 0;
        if (game.done && gameBetD) {
            if (game.goals1 === gameBetD?.goals1 && game.goals2 === gameBetD?.goals2) {
                gamePointsD = 3;
            } else if ((game.goals1 === game.goals2 && gameBetD?.goals1 === gameBetD?.goals2)
                || (game.goals1 > game.goals2 && gameBetD?.goals1 > gameBetD?.goals2)
                || (game.goals1 < game.goals2 && gameBetD?.goals1 < gameBetD?.goals2)) {
                gamePointsD = 1;
            } else {
                gamePointsD = 0;
            }
            pointsD += gamePointsD;
        }

        let gameBetM = betsM.find((item) => (item.id === game.id && item.date === game.date));
        let gamePointsM = 0;
        if (game.done && gameBetM) {
            if (game.goals1 === gameBetM?.goals1 && game.goals2 === gameBetM?.goals2) {
                gamePointsM = 3;
                console.log(game)
            } else if ((game.goals1 === game.goals2 && gameBetM?.goals1 === gameBetM?.goals2)
                || (game.goals1 > game.goals2 && gameBetM?.goals1 > gameBetM?.goals2)
                || (game.goals1 < game.goals2 && gameBetM?.goals1 < gameBetM?.goals2)) {
                gamePointsM = 1;
            } else {
                gamePointsM = 0;
            }
            pointsM += gamePointsM;
        }
        // console.log(game.goals1, game.goals2)
        // console.log(gameBetD?.goals1, gameBetD?.goals2)
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
                                <BetsGameRow
                                    game={game}
                                    key={`game__${game.id}` }
                                />
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