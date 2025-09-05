import { useState, useEffect } from "react"
import LotteryTicket from "../components/LotteryTicket";
import ticketInit from "../utils/ticketInit";
import checkWin from "../utils/checkWin";

function Lottery() {
    const [ticket, setTicket] = useState(ticketInit(3));
    const [isWin, setIsWin] = useState(null);
    const [spinSignal, setSpinSignal] = useState(false);

    useEffect(() => {
        if (ticket.every(num => num !== null)) {
            setIsWin({ win: checkWin(ticket) })
        }
    }, [ticket]);

    function handleStop(index, value) {
        setTicket((prev) => {
            const updated = [...prev];
            updated[index] = value;
            console.log(updated);
            return updated;
        })
    }

    function buyTicket() {
        console.log(ticketInit(3));
        setTicket(ticketInit(3));
        setIsWin(null);
        setSpinSignal(false);
        setTimeout(() => { setSpinSignal(true) }, 50);
    }

    return (
        <div id="lottery">
            <h1>Welcome to the Game of Luck</h1>
            <h2>Press the button below to buy a ticker</h2>
            <h4>If the sum of the numbers on your ticker is 15 you win else you lose!</h4>
            <LotteryTicket ticket={ticket} spinSignal={spinSignal} handleStop={handleStop} />
            <button onClick={buyTicket}>
                Buy Ticket
            </button>
            {(isWin) ? (isWin.win ? "Win" : "Lose") : ""}
        </div>
    )

}

export default Lottery;