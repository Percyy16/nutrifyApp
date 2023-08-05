import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home/Home";
import { FoodDiary } from "./pages/FoodDiary/FoodDiary";
import { WorkoutPlanner } from "./pages/WorkoutPlanner/WorkoutPlanner";
import { About } from "./pages/About/About";
import { LogIn } from "./pages/LogIn/LogIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FoodDiary" element={<FoodDiary />} />
          <Route path="/WorkoutPlanner" element={<WorkoutPlanner />} />
          <Route path="/About" element={<About />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
