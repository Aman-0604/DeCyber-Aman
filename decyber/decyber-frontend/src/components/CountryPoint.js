import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/countrypoint.css"

const CountryPoint = () => {
  let { country } = useParams();
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
          <textarea name="answer" id="answer" rows="5" placeholder='Write your answer here'></textarea>
        </div>
      </div>
    </div>
  );
}
export default CountryPoint;