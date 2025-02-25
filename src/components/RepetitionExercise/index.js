import React, { useState } from "react";

function RepetitionExercise({ exerciseName }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{exerciseName}</h2>
            <p>Repetitions: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;