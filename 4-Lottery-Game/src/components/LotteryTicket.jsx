import TicketNumber from "./TicketNumber"

function LotteryTicket({ ticket, spinSignal, handleStop }) {

    function onStop(index, value) {
        handleStop(index, value)
    }

    return (
        <div id="lotteryTicket" className="d-flex">
            {ticket.map((element, index) => {
                return <TicketNumber key={index} index={index} onStop={onStop} spinSignal={spinSignal} />
            })}
        </div>
    )
}

export default LotteryTicket