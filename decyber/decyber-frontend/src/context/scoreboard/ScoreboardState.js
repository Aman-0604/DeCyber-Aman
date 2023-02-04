import React, { useState } from "react";
import ScoreboardContext from "./scoreboardContext";

const ScoreboardState = (props) => {
    const host = "http://localhost:8000";
    let initialstate = [];
    const [usersScores, setUsersScores] = useState(initialstate);

    // Get all army questions
    const getScores = async ()=>{
        // API Call
        let url = `${host}/api/scoreboard/fetchscores`;
        const response = await fetch(url, {
            method: "GET"
        });
        const json = await response.json();
        setUsersScores(json);
    }


    return (
        <ScoreboardContext.Provider value={{ usersScores,getScores }}>
            {props.children}
        </ScoreboardContext.Provider>
    )
}

export default ScoreboardState;