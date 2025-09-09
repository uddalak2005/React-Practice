import { useState, useEffect } from "react"

function TicketNumber({ index, onStop, spinSignal }) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (spinSignal) {
            const iterations = Math.floor(Math.random() * 6) + 5;
            let current = 0;

            const interval = setInterval(() => {
                const randomNumber = Math.floor(Math.random() * 10);
                setCount(randomNumber);
                current++

                if (current >= iterations) {
                    clearInterval(interval);
                    onStop(index, randomNumber);
                }
            }, 200)

            return () => clearInterval(interval);
        }
    }, [spinSignal])
    return (
        <div className="d-flex justify-content-center align-items-center bg-danger m-1 p-3 rounded-1 border border-4 border-warning">
            <h4 className="m-0 text-warning"><strong>{count}</strong></h4>
        </div>
    )
}

export default TicketNumber