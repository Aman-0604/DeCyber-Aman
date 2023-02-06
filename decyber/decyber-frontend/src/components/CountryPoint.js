import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userContext from '../context/users/userContext';
import countryContext from '../context/country_questions/countryContext';
import "../styles/countrypoint.css"
import { useNavigate } from 'react-router-dom';

const CountryPoint = (props) => {
  let navigate = useNavigate();
  let { country } = useParams();

  const user_detail = useContext(userContext);
  const { user, updateUser } = user_detail;

  const country_detail = useContext(countryContext);
  const { cpq, getcpq, getsinglecpq, updatecpq } = country_detail;

  const updatePoints = async ({ ans, points }) => {
    // const question = cpq[0];
    const updatedCountryQuestion = await getsinglecpq(country); // fresh question fetched from the backend
    if (updatedCountryQuestion.type) {
      props.showAlert("danger", "Someone has done it earlier");
      return;
    }
    if (updatedCountryQuestion.ans === ans.trim().toLowerCase()) {
      // update the points of the team if the answer matches correctly
      const newap = user.ap + 0;
      const newcp = user.cp + points;
      updateUser(newap, newcp);
      props.showAlert("success", `${points} Countrypoints added successfuly`);
      updatecpq(updatedCountryQuestion.code, 1);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    else {
      props.showAlert("danger", `Wrong Answer`);
    }
  }

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value)
  }
  const clearText = () => {
    setText("");
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      // eslint-disable-next-line
    }
    else {
      getcpq(country);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="CountryPoint">
      <h1 style={{ textAlign: "center", margin: "1rem 0", color: "lightgreen" }}>{country}</h1>
      <div className='cp-content d-flex justify-content-center align-items-center'>
        {!cpq[0].type ? <div className='cp-subcontent'>
          <div className="question">
            <p className="question-pallete">{cpq[0].ques}</p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
              <p className="points-pallete">Pts. {cpq[0].pts}</p>
            </div>
          </div>
          <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
          <div style={{ width: "75%", marginTop: ".5rem" }}>
            <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
            <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
              updatePoints({ ans: text, points: cpq[0].pts });
            }} >Submit</button>
          </div>
        </div> : <div className='question-pallete' style={{fontSize:'30px'}}>Someone has captured this country before you !</div>}
      </div>
    </div>
  );
}
export default CountryPoint;