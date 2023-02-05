import React, { useState } from "react";
import CountryContext from "./countryContext";

const CountryState = (props) => {
    const host = "http://localhost:8000";
    const cpqItem = [{
        "type": 0,
        "code": "DEFAULT",
        "name": "Default Country",
        "ques": "Demo?",
        "pts": 50,
        "ans": "nothing"
    }]
    const [cpq, setCpq] = useState(cpqItem);

    // Get all country questions
    const getcpq = async (country) => {
        // API Call
        let url = `${host}/api/cp_questions/fetchcp_question/${country}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setCpq(json);
        return json[0];
    }
    // Get single country question
    const getsinglecpq = async (country) => {
        // API Call
        let url = `${host}/api/cp_questions/fetchsinglecp_question/${country}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        return json[0];
    }
    // Update country question
    const updatecpq = async (code, type) => {
        // API Calls
        let url = `${host}/api/cp_questions/updateCPQ`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ code, type })
        });
        const json = await response.json();

        let newCPQ = JSON.parse(JSON.stringify(cpq));
        // Logic to update
        for (let index = 0; index < newCPQ.length; index++) {
            const element = newCPQ[index];
            if (element.code === code) {
                newCPQ[index].type = type;
                break;
            }
        }
        setCpq(newCPQ);
    }

    return (
        <CountryContext.Provider value={{ cpq, getcpq,getsinglecpq, updatecpq }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState;