import React, { useState } from "react";
import ArmyContext from "./armyContext";

const ArmyState = (props) => {
    const host = "http://localhost:8000";
    const apqItem = [{
        "type":0,
        "qid": 0,
        "ques": "Demo?",
        "pts": 50,
        "ans": "nothing"
    }]
    const [apq, setApq] = useState(apqItem);

    // Get all army questions
    const getapq = async () => {
        // API Call
        let url = `${host}/api/ap_questions/fetchAllap_questions`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setApq(json);
        console.log(apq);
        console.log(apq[0].ques);
        console.log(apq.length);
    }


    return (
        <ArmyContext.Provider value={{ apq, getapq }}>
            {props.children}
        </ArmyContext.Provider>
    )
}

export default ArmyState;