import SingleGameBrief from "@/app/matches/SingleGameBrief";

export default function MatchesPage() {
    return (
        <>
            <div style={{display: "flex", justifyContent: "space-around", width: "30%"}}>
                <SingleGameBrief team1Id={"ger"} team2Id={"sco"} type={"group"}/>
            </div>

            <div style={{display: "flex", justifyContent: "space-around", width: "30%"}}>
                <SingleGameBrief team1Id={"cro"} team2Id={"alb"} type={"group"}/>
            </div>

        </>
    )
}