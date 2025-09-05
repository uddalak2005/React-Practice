import TicketNumber from "./TicketNumber"

function LotteryTicket({ spinSignal, handleStop }) {

    function onStop(index, value) {
        handleStop(index, value)
    }

    return (
        <div id="lotteryTicket">

            <TicketNumber index={0} onStop={onStop} spinSignal={spinSignal} />
            <TicketNumber index={1} onStop={onStop} spinSignal={spinSignal} />
            <TicketNumber index={2} onStop={onStop} spinSignal={spinSignal} />
        </div>
    )
}

export default LotteryTicket