import TicketNumber from "./TicketNumber"

function LotteryTicket({ ticket, spinSignal, handleStop }) {

    function onStop(index, value) {
        handleStop(index, value)
    }

    return (
        <div id="lotteryTicket" className="card border border-danger border-5" style={{ width: "16rem" }}>
            <div className="card-body d-flex flex-row justify-content-center g-3">
                {ticket.map((element, index) => (
                    <TicketNumber
                        key={index}
                        index={index}
                        onStop={onStop}
                        spinSignal={spinSignal}
                    />
                ))}
            </div>
        </div>

    )
}

export default LotteryTicket