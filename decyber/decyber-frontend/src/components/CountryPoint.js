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
  const { cpq, getcpq, updatecpq} = country_detail;

  const updatePoints = ({ ans, points }) => {
    const question = cpq[0]; 
    if (question.ans === ans) {
      // update the points of the team if the answer matches correctly
      const newap = user.ap + 0;
      const newcp = user.cp + points;
      updateUser(newap, newcp);
      props.showAlert("success", `${points} Countrypoints added successfuly`);
      updatecpq(question.code, 1);
    }
    else{
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
  const handleSubmitClick = () => {
    setText(text)
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
    else {
      getcpq(country);
      // if(cpq[0].type===1) navigate('/');
      console.log(cpq);
    }
  }, [])

  return (
    <div className="CountryPoint">
      <div className='cp-content d-flex justify-content-center align-items-center'>
        <div className='cp-subcontent'>
          <div className="question">
            <p className="question-pallete">{cpq[0].ques}</p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
              <p className="points-pallete">Pts. {cpq[0].pts}</p>
            </div>
          </div>
          <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
          <div style={{width:"75%",marginTop:".5rem"}}>
          <button className="btn btn-danger me-3" style={{width:"40%"}} onClick={clearText}>Clear</button>
          <button className="btn btn-success" style={{width:"40%"}} onClick={()=>{
            handleSubmitClick();
            updatePoints({ ans: text, points: cpq[0].pts });
            clearText();
            }} >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountryPoint;