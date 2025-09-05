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
        <div>{count}</div>
    )
}

export default TicketNumber