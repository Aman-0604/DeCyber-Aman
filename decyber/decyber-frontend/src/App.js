import './App.css';
import Navbar from './components/Navbar';
import ArmyPoint from './components/ArmyPoint';
import CountryPoint from './components/CountryPoint';
import WorldMap from './components/WorldMap';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import UserState from './context/users/UserState';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <UserState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<WorldMap />} />
            <Route exact path="/ap" element={<ArmyPoint />} />
            <Route exact path="/cp/:country" element={<CountryPoint />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </>
  );
}

export default App;
