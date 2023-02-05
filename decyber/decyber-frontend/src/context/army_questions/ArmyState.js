import React, { useState } from "react";
import ArmyContext from "./armyContext";

const ArmyState = (props) => {
    const host = "http://localhost:8000";
    const apqItem = [{
        "type": 0,
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
    // Get single army questions
    const getsingleapq = async (qid) => {
        // API Call
        let url = `${host}/api/ap_questions/fetchsingleap_questions/${qid}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        console.log(json);
        return json[0];
    }
    // Update army question
    const updateapq = async (qid, type) => {
        // API Calls
        let url = `${host}/api/ap_questions/updateAPQ`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ qid, type })
        });
        const json = await response.json();
        console.log("updated", json);

        let newAPQ = JSON.parse(JSON.stringify(apq));
        // Logic to update
        for (let index = 0; index < newAPQ.length; index++) {
            const element = newAPQ[index];
            if (element.qid === qid) {
                newAPQ[index].type = type;
                break;
            }
        }
        setApq(newAPQ);
    }

    return (
        <ArmyContext.Provider value={{ apq, getapq, getsingleapq, updateapq }}>
            {props.children}
        </ArmyContext.Provider>
    )
}

export default ArmyState;