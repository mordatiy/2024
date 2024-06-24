"use client";
import SingleGameBrief from "@/app/matches/SingleGameBrief";
import React from "react";
import {GamesListType, SingleGame} from "@/data/projectsDataGames";
import {DimaBets, MatviiBets} from "@/data/projectsDataBets";
import SingleGameDetails from "@/app/matches/SingleGameDetails";

export type BetsGameRowType = {
    game: SingleGame
    // updateData: (n: number, userId: string) => void
}

export default function BetsGameRow(props: BetsGameRowType) {
    // console.log("Bets Game Row");
    // props.updateData(1, "d");
    const betsD:GamesListType = structuredClone(DimaBets);
    const betsM:GamesListType = structuredClone(MatviiBets);

    // Dima
    const gameBetD = betsD.find((item) => (item.id === props.game.id && item.date === props.game.date));
    let gameBetDetailsD = {
        goals1: 0,
        goals2: 0,
        pointsResult: 0,
        typeResult: "none"
    }
    if (gameBetD && gameBetD.done) {
        gameBetDetailsD.goals1 = gameBetD.goals1;
        gameBetDetailsD.goals2 = gameBetD.goals2;

        if (props.game.goals1 === gameBetD?.goals1 && props.game.goals2 === gameBetD?.goals2) {
            gameBetDetailsD.pointsResult = 3;
            gameBetDetailsD.typeResult = "green"
        } else if ((props.game.goals1 === props.game.goals2 && gameBetD?.goals1 === gameBetD?.goals2)
            || (props.game.goals1 > props.game.goals2 && gameBetD?.goals1 > gameBetD?.goals2)
            || (props.game.goals1 < props.game.goals2 && gameBetD?.goals1 < gameBetD?.goals2)) {
            gameBetDetailsD.pointsResult = 1;
            gameBetDetailsD.typeResult = "grey"
        } else {
            gameBetDetailsD.typeResult = "red"
        }
    } else {}
    // if (!props.game.done) {
    //     // gameBetDetailsD.typeResult = "none"
    //     gameBetDetailsD.pointsResult = 0;
    // }

    // Matvii
    const gameBetM = betsM.find((item) => (item.id === props.game.id && item.date === props.game.date));
    let gameBetDetailsM = {
        goals1: 0,
        goals2: 0,
        pointsResult: 0,
        typeResult: "none"
    }
    if (gameBetM && gameBetM.done) {
        gameBetDetailsM.goals1 = gameBetM.goals1;
        gameBetDetailsM.goals2 = gameBetM.goals2;

        if (props.game.goals1 === gameBetM?.goals1 && props.game.goals2 === gameBetM?.goals2) {
            gameBetDetailsM.pointsResult = 3;
            gameBetDetailsM.typeResult = "green"
        } else if ((props.game.goals1 === props.game.goals2 && gameBetM?.goals1 === gameBetM?.goals2)
            || (props.game.goals1 > props.game.goals2 && gameBetM?.goals1 > gameBetM?.goals2)
            || (props.game.goals1 < props.game.goals2 && gameBetM?.goals1 < gameBetM?.goals2)) {
            gameBetDetailsM.pointsResult = 1;
            gameBetDetailsM.typeResult = "grey"
        } else {
            gameBetDetailsM.typeResult = "red"
        }
    } else {}




    return (
        <div className={"bets-row"}>
            <div className={`bets ${gameBetDetailsD.typeResult}`}>
                {gameBetDetailsD.typeResult !== "none" && <>
                    <div className={"bets-body"}>
                        <div className={`border`}>
                            <h3 className={"grey center"}>
                                {gameBetDetailsD?.goals1} : {gameBetDetailsD?.goals2}
                            </h3>
                        </div>

                    </div>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>
                            {(props.game.done) ? gameBetDetailsD.pointsResult : ""}
                        </h1>
                    </div>

                </>}
            </div>
            <div className={"results"}>
                <SingleGameDetails type={"group"} team1Id={props.game.team1} team2Id={props.game.team2}/>
            </div>
            <div className={`bets ${gameBetDetailsM.typeResult}`}>
                {gameBetDetailsM.typeResult !== "none" && <>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>
                            {/*{gameBetDetailsM.pointsResult}*/}
                            {(props.game.done) ? gameBetDetailsM.pointsResult : ""}
                        </h1>
                    </div>
                    <div className={"bets-body"}>
                        <div className={`border`}>
                            <h3 className={"grey center"}>
                                {gameBetDetailsM?.goals1} : {gameBetDetailsM?.goals2}
                            </h3>
                        </div>

                    </div>

                </>}
            </div>

        </div>
    )
}