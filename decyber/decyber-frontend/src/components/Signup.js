import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css"
import countries from '../countries'

export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ team_name: "", team_password: "", team_leader: "", team_leader_email: "", team_leader_college: "", team_member_1: "", team_member_1_email: "", team_member_1_college: "", team_member_2: "", team_member_2_email: "", team_member_2_college: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ team_name: credentials.team_name, team_password: credentials.team_password, team_leader: credentials.team_leader, team_leader_email: credentials.team_leader_email, team_leader_college: credentials.team_leader_college, team_member_1: credentials.team_member_1, team_member_1_email: credentials.team_member_1_email, team_member_1_college: credentials.team_member_1_college, team_member_2: credentials.team_member_2, team_member_2_email: credentials.team_member_2_email, team_member_2_college: credentials.team_member_2_college })//will convert the object into type JSON
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.auth_token);
            navigate("/");
        }
    }
    return (
        <div className='Signup'>
            <div className='container' style={{ width: "50%" }}>
                <form onSubmit={submitHandler}>
                    <div className='team-signup'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: "aquamarine" }}><h5>Team Name</h5></label>
                            <select type="text" className="form-control" name="team_name" id="team_name" value={credentials.team_name} onChange={onChange}>
                                <option value="default">--select--</option>
                                {
                                    countries.map((ele, index) => {
                                        return <option value={ele.name} key={index}>{ele.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "aquamarine" }}><h5>Team Password</h5></label>
                            <input type="password" className="form-control" name="team_password" id="team_password" value={credentials.team_password} onChange={onChange} />
                            <div id="password" className="form-text" style={{ color: "cyan" }}>Enter a strong password. <span style={{ fontSize: "1.5rem" }}>💪</span></div>
                        </div>
                    </div>
                    <div className="members">
                        <div className="member-0 member-signup" key={0}>
                            <p className="member-Number">Team Leader</p>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"><h5>Name</h5></label>
                                <input type="text" className="form-control" name="team_leader" id="team_leader" value={credentials.team_leader} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
                                <input type="email" className="form-control" name="team_leader_email" id="team_leader_email" aria-describedby="emailHelp" value={credentials.team_leader_email} onChange={onChange} />
                                <div id="emailHelp" className="form-text" style={{ color: "tomato", margin: ".5rem 0" }}>We'll never share your email with anyone else. <span style={{ fontSize: "1.5rem" }}>🤫</span></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><h5>College</h5></label>
                                <input type="college" className="form-control" name="team_leader_college" id="team_leader_college" value={credentials.team_leader_college} onChange={onChange} />
                            </div>
                        </div>
                        <div className="member-1 member-signup" key={1}>
                            <p className="member-Number">Member 1</p>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"><h5>Name</h5></label>
                                <input type="text" className="form-control" name="team_member_1" id="team_member_1" value={credentials.team_member_1} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
                                <input type="email" className="form-control" name="team_member_1_email" id="team_member_1_email" aria-describedby="emailHelp" value={credentials.team_member_1_email} onChange={onChange} />
                                <div id="emailHelp" className="form-text" style={{ color: "tomato", margin: ".5rem 0" }}>We'll never share your email with anyone else. <span style={{ fontSize: "1.5rem" }}>🤫</span></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><h5>College</h5></label>
                                <input type="college" className="form-control" name="team_member_1_college" id="team_member_1_college" value={credentials.team_member_1_college} onChange={onChange} />
                            </div>
                        </div>
                        <div className="member-2 member-signup" key={2}>
                            <p className="member-Number">Member 2</p>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"><h5>Name</h5></label>
                                <input type="text" className="form-control" name="team_member_2" id="team_member_2" value={credentials.team_member_2} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
                                <input type="email" className="form-control" name="team_member_2_email" id="team_member_2_email" aria-describedby="emailHelp" value={credentials.team_member_2_email} onChange={onChange} />
                                <div id="emailHelp" className="form-text" style={{ color: "tomato", margin: ".5rem 0" }}>We'll never share your email with anyone else. <span style={{ fontSize: "1.5rem" }}>🤫</span></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><h5>College</h5></label>
                                <input type="college" className="form-control" name="team_member_2_college" id="team_member_2_college" value={credentials.team_member_2_college} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#212529", color: "aquamarine", border: "none" }}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
