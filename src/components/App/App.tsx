import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions"
import VoteStats from "../VoteStats/VoteStats";
import { useState } from "react";
import Notification from "../Notification/Notification";
import  type { Votes } from "../../types/vote";
import type { VoteType } from "../../types/vote";


export default function App() {
    const [vote, setVote] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    }
    )

    function handleVote(type: VoteType){
        const prev = {...vote}
        prev[type]+=1
        setVote(prev)
    }


    function resetVotes(){
       const noVotes:Votes = {
         good: 0,
         bad: 0,
         neutral: 0,
       }
       setVote(noVotes)
    }

    const totalVotes = vote.good + vote.neutral + vote.bad;
    const positiveRate = totalVotes
    ? Math.round((vote.good / totalVotes) * 100)
    : 0

    return (<div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes}  canReset={totalVotes>0?true:false}/>
        {(totalVotes>0)?<VoteStats votes={vote} totalVotes={totalVotes} positiveRate={positiveRate}/>:<Notification/>}
    </div>) 
}


