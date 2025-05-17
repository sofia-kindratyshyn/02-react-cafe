import css from "./VoteOptions.module.css"
import type { VoteType } from "../../types/vote"

interface VoteProps{
    onVote: (prop: VoteType) => void,
    onReset: () => void,
    canReset: boolean
}

export default function VoteOptions({onVote, onReset, canReset}: VoteProps) {
    
function handleClick(prop: VoteType){
    onVote(prop)
}

    return (
        <div className={css.container}>
            <button onClick={(()=> handleClick("good"))} className={css.button}>Good</button>
            <button onClick={(()=> handleClick("neutral"))} className={css.button}>Neutral</button>
            <button onClick={(()=> handleClick("bad"))} className={css.button}>Bad</button>
           { canReset && <button onClick={onReset} className={`${css.button} ${css.reset}`}>Reset</button>}
        </div>
    )
}