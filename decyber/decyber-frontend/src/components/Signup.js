import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css"
import countries from '../countries'

export default function Signup() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ team: "", name: "", email: "", password: "", college: "" });
    // eslint-disable-next-line
    const [memberCount, setMemberCount] = useState([1, 2, 3]);

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
            body: JSON.stringify({ team: credentials.team, name: credentials.name, email: credentials.email, password: credentials.password, college: credentials.college })//will convert the object into type JSON
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.auth_token);
            navigate("/");
        }
        else {
            // showAlert("danger", "Some Error Occured");
        }
    }
    return (
        <div className='Signup'>
            <div className='container' style={{ width: "50%" }}>
                <form onSubmit={submitHandler}>
                    <div className='team-signup'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: "aquamarine" }}><h5>Team Name</h5></label>
                            <select type="text" className="form-control" name="team" id="team" value={credentials.team} onChange={onChange}>
                                <option value="default">--select--</option>
                                {
                                    countries.map((ele, index) => {
                                        return <option value={ele.code} key={index}>{ele.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "aquamarine" }}><h5>Team Password</h5></label>
                            <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange} />
                            <div id="password" className="form-text" style={{ color: "cyan" }}>Enter a strong password. <span style={{ fontSize: "1.5rem" }}>💪</span></div>
                        </div>
                    </div>
                    <div className="members">
                        {
                            memberCount.map((mem) => {
                                return <div className={`member-${mem} member-signup`} key={mem}>
                                    <p className="member-Number">{mem===1?"Team Leader":`Member : ${mem-1}`}</p>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label"><h5>Name</h5></label>
                                        <input type="text" className="form-control" name="name" id={`name`} value={credentials.name} onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><h5>Email address</h5></label>
                                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                                        <div id="emailHelp" className="form-text" style={{ color: "tomato", margin: ".5rem 0" }}>We'll never share your email with anyone else. <span style={{ fontSize: "1.5rem" }}>🤫</span></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label"><h5>College</h5></label>
                                        <input type="college" className="form-control" name="college" id="college" value={credentials.college} onChange={onChange} />
                                    </div>
                                </div>

                            })
                        }
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#212529", color: "aquamarine", border: "none" }}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
