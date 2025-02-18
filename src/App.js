import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <ExerciseButtons />
      </header>
    </div>
  );
}

function ExerciseButtons() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate("/plank")}>Plank</button>
        </li>
        <li>
          <button onClick={() => navigate("/push-ups")}>Push Ups</button>
        </li>
        <li>
          <button>Running</button>
        </li>
        <li>
          <button>Crunches</button>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plank" element={<DurationExercise />} />
        <Route path="/push-ups" element={<RepetitionExercise />} />
      </Routes>
    </Router>
  );
}

export default App;