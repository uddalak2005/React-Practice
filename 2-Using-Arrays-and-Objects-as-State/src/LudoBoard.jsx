import { useState } from "react";
import "./App.css";

function LudoBoard(props) {
    const [moves, setMoves] = useState({
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    });

    const [record, setRecord] = useState([]);

    function handleBlueMove() {
        //using callback in update function
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        })

        setRecord((prevRecord) => {
            return [...prevRecord, "blue moves"];
        })
    }

    function handleBlueMove() {
        //using callback in update function
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        })

        setRecord((prevRecord) => {
            return [...prevRecord, "blue moves"];
        })
    }

    function handleRedMove() {
        //using callback in update function
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        })

        setRecord((prevRecord) => {
            return [...prevRecord, "red moves"];
        })
    }

    function handleGreenMove() {
        //using callback in update function
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        })

        setRecord((prevRecord) => {
            return [...prevRecord, "green moves"];
        })
    }
    function handleYellowMove() {
        //using callback in update function
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        })

        setRecord((prevRecord) => {
            return [...prevRecord, "yellow moves"];
        })
    }

    return (
        <div>
            <h1>Player : {props.player}</h1>
            <hr />
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <button onClick={handleRedMove} style={{ backgroundColor: "red" }}>Move Red : {moves.red}</button>
                <button onClick={handleBlueMove} style={{ backgroundColor: "blue" }}>Move Blue : {moves.blue}</button>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <button onClick={handleGreenMove} style={{ backgroundColor: "green" }}>Move Green : {moves.green}</button>
                <button onClick={handleYellowMove} style={{ backgroundColor: "yellow", color: "black" }}>Move Yelow : {moves.yellow}</button>
            </div>
            <hr />
            <h2>Moves</h2>
            <ul>
                {record.map((move) => {
                    return <li>{move}</li>
                })}
            </ul>
        </div>
    )
}

export default LudoBoard;