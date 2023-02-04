import './App.css';
import Navbar from './components/Navbar';
import ArmyPoint from './components/ArmyPoint';
import CountryPoint from './components/CountryPoint';
import WorldMap from './components/WorldMap';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import UserState from './context/users/UserState';
import ArmyState from './context/army_questions/ArmyState';
import CountryState from './context/country_questions/CountryState';
import Alert from "./components/Alert";
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScoreboardState from './context/scoreboard/ScoreboardState';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, display) => {
    setAlert({
      theme: type,
      message: display
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const targetTime = new Date('2023/02/15 13:00:00');
  const currentTime = new Date();
  const time = new Date();
  time.setMilliseconds(targetTime - currentTime);

  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <UserState>
        <CountryState>
          <ArmyState>
           <ScoreboardState>
            <BrowserRouter>
              <Alert alert={alert} />
              <Navbar showAlert={showAlert} />
              <Routes>
                <Route exact path="/" element={<WorldMap />} />
                <Route exact path="/ap" element={<ArmyPoint showAlert={showAlert} />} />
                <Route exact path="/cp/:country" element={<CountryPoint showAlert={showAlert} />} />
                <Route exact path="/dashboard" element={<Dashboard time={time} />} />
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
              </Routes>
            </BrowserRouter>
           </ScoreboardState>
          </ArmyState>
        </CountryState>
      </UserState>
    </>
  );
}

export default App;
