import React, { useState, useRef } from "react";

function RunningExercise({ exerciseName }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const timerRef = useRef(null);

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const handleRecordLap = () => {
        if (isRunning) {
            setLaps([...laps, time]);
        }
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };

    const formatTime = (t) =>
        `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60)
            .toString()
            .padStart(2, "0")}`;

    return (
        <div>
            <h2>{exerciseName}</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={handleRecordLap} disabled={!isRunning}>Record Lap</button>
            <button onClick={handleReset}>Reset</button>

            <h3>Lap Times:</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise;
