import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/countrypoint.css"

const CountryPoint = () => {
  let { country } = useParams();
  const [text, setText] = useState("")
  // let textval;
  const onChange =(e)=>{
    setText(e.target.value)
    // console.log(e.target.value)
    // textval = e.target.value;
  }
  const clearText = ()=>{
    setText("");
  }
  const handleSubmitClick = ()=>{
    setText(text)
  }
  return (
    <div className="CountryPoint">
      <div className='cp-content d-flex justify-content-center align-items-center'>
        <div className='cp-subcontent'>
          <div className="question">
            <p className="question-pallete">Who is Putin in {country} ?</p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
              <p className="points-pallete">Pts. 500</p>
            </div>
          </div>
          <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
          <div style={{width:"75%",marginTop:".5rem"}}>
          <button className="btn btn-danger me-3" style={{width:"40%"}} onClick={clearText}>Clear</button>
          <button className="btn btn-success" style={{width:"40%"}} onClick={()=>{
            handleSubmitClick();
            clearText();
            }} >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountryPoint;