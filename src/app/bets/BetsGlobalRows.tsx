"use client";
import React from "react";
import {imgPath} from "@/data/projectsData";

// export type BetsMainRowType = {
//     pointsD: number
//     pointsM: number
// }

export default function BetsGlobalRows() {
    // console.log("Bets MAIN Row");

    return (
        <>
            {/*Winner (before group stage)*/}
            <div className={"bets-row"}>
                <div className={"bets"}>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>France</h1>
                    </div>
                    <div className={"bets-points"}>
                        <h1 className={"points grey"}>0</h1>
                    </div>
                </div>
                <div className={"results"}>
                    <div className={"w100 center"}>
                        <span className={"small"}>Winner (BEFORE group stage)</span>
                    </div>
                    <h1 className={"center"}>?</h1>
                </div>
                <div className={"bets"}>
                    <div className={"bets-points"}>
                        <h1 className={"points grey"}>0</h1>
                    </div>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>France</h1>
                    </div>
                </div>
            </div>
            {/*end Winner (before group stage)*/}

            {/*Winner (after group stage)*/}
            <div className={"bets-row"}>
                <div className={"bets"}>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>?</h1>
                    </div>
                    <div className={"bets-points"}>
                        <h1 className={"grey points"}>0</h1>
                    </div>
                </div>
                <div className={"results"}>
                    <div className={"w100 center"}>
                        <span className={"small"}>Winner (AFTER group stage)</span>
                    </div>
                    <h1 className={"center"}>?</h1>
                </div>
                <div className={"bets"}>
                    <div className={"bets-points"}>
                        <h1 className={"grey points"}>0</h1>
                    </div>
                    <div className={"bets-body"}>
                        <h1 className={"grey center"}>?</h1>
                    </div>
                </div>
            </div>
            {/*end Winner (after group stage)*/}

            {/*BEST STRIKERS*/}
            <div className={"bets-row"}>
                <div className={"bets"}>
                    <div className={"bets-body"}>
                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/FRA.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Mbappé - 0</span>
                        </h3>
                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/POR.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Ronaldo - 0</span>
                        </h3>
                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/BEL.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Lukaku - 0</span>
                        </h3>
                    </div>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>0</h1>
                    </div>
                </div>
                <div className={"results"}>
                    <div className={"w100 center"}>
                        <span className={"small"}>BEST STRIKERS</span>
                    </div>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/GEO.png"}
                             alt=""
                             title="Germany" className="flag-small"/>
                        <span>Mikautadze - 3</span>
                    </h2>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/ROU.png"}
                             alt=""
                             title="Romania" className="flag-small"/>
                        <span>R.Marin - 2</span>
                    </h2>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/NED.png"}
                             alt=""
                             title="Romania" className="flag-small"/>
                        <span>Gakpo - 2</span>
                    </h2>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/GER.png"}
                             alt=""
                             title="Germany" className="flag-small"/>
                        <span>Musiala - 2</span>
                    </h2>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/SVK.png"}
                             alt=""
                             title="Germany" className="flag-small"/>
                        <span>Schranz - 2</span>
                    </h2>
                    <h2 className={"player-info center"}>
                        <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/GER.png"}
                             alt=""
                             title="Germany" className="flag-small"/>
                        <span>Füllkrug - 2</span>
                    </h2>
                </div>
                <div className={"bets"}>
                    <div className={"bets-points"}>
                        <h1 className={"points"}>0</h1>
                    </div>
                    <div className={"bets-body"}>
                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/FRA.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Mbappé - 0</span>
                        </h3>

                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/ENG.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Kane - 1</span>
                        </h3>
                        <h3 className={"grey center player-info"}>
                            <img src={"https://raw.githubusercontent.com/mordatiy/euro2024/main/public//flags/POR.png"}
                                 alt=""
                                 title="Germany" className="flag-small"/>
                            <span>Ronaldo - 0</span>
                        </h3>
                    </div>
                </div>
            </div>
            {/*end BEST STRIKERS*/}
        </>
    )
}