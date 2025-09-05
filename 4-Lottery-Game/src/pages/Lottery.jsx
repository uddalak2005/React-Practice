import { useState, useEffect } from "react"
import LotteryTicket from "../components/LotteryTicket";
import ticketInit from "../utils/ticketInit";
import checkWin from "../utils/checkWin";
import jackpot from "../assets/jackpot.png";

function Lottery({ length }) {
    const [ticket, setTicket] = useState(ticketInit(length));
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
        console.log(ticketInit(length));
        setTicket(ticketInit(length));
        setIsWin(null);
        setSpinSignal(false);
        setTimeout(() => { setSpinSignal(true) }, 50);
    }

    return (
        <div id="lottery" className="d-flex flex-column justify-content-center align-items-center card shadow-lg">


            <div className="card-header w-100 bg-primary text-white d-flex justify-content-center align-items-center g-3">

                <div className="d-flex justify-content-center align-items-center gap-3">
                    <img src={jackpot} alt="" style={{ height: "50px", width: "50px", filter: "invert(1)" }} />
                    <h1 className="m-0">Game of Luck</h1>
                </div>

            </div>

            <div className="card-body d-flex flex-column justify-content-center align-items-center">

                <div className="alert alert-info d-flex flex-row align-items-center gap-3">
                    <h3>Press the button</h3>
                    <button className="btn btn-danger text-warning " onClick={buyTicket}>
                        <strong>Buy Ticket</strong>
                    </button>
                </div>


                <LotteryTicket ticket={ticket} spinSignal={spinSignal} handleStop={handleStop} />

                <div className="m-3 mb-0">
                    {isWin ? (
                        <h3 className="text-center">
                            <span className={`badge rounded-pill ${isWin.win ? "bg-success" : "bg-danger"} fs-4`}>
                                {isWin.win ? "Win" : "Lose"}
                            </span>
                        </h3>
                    ) : null}

                </div>
            </div>

            <div className="card-footer">
                <p className="m-0 p-3">Rules : If the sum of the numbers on your ticker is 15 you win else you lose!</p>
            </div>
        </div>
    )

}

export default Lottery;