import React, { useContext,useState,useEffect } from 'react';
import userContext from '../context/users/userContext';
import "../styles/armypoint.css"
import questions from '../questions'
import { useNavigate } from 'react-router-dom';

const ArmyPoint = () => {
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, updateUser } = user_detail;

  const updatePoints = ({ques_id,ans,points}) => {
    const question = questions.find((question)=>question.qid===ques_id); // find is a js function to search for an element in an array
    if (question.ans===ans){
      // update the points of the team if the answer matches correctly
      const newap = user.ap + points;
      const newcp = user.cp + points;
      updateUser(newap, newcp);
    }
  }
  const [text, setText] = useState("")

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
    if (!localStorage.getItem('token')){
      navigate('/login')
    }
  }, [])
  
  return (
    <div className="ArmyPoint">
      <div className="ap-box">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='carousel-content d-flex justify-content-center align-items-baseline'>
                <div className='carousel-subcontent question-section'>
                  <div className="question">
                    <p className="question-pallete">{questions[0].qid}.{questions[0].ques}</p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
                      <p className="points-pallete">Pts. {questions[0].pts}</p>
                    </div>
                  </div>
                  <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
                  <div style={{ width: "75%", marginTop: ".5rem" }}>
                  <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
                    <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                            handleSubmitClick();
                            updatePoints({ques_id:questions[0].qid,ans:text,points:questions[0].pts});
                            clearText();
                          }} >Submit</button>
                  </div>                
                </div>
              </div>
            </div>

            { // eslint-disable-next-line
              questions.map((ele, index) => {
                if (index !== 0) {
                  return <div className="carousel-item" key={index}>
                    <div className='carousel-content d-flex justify-content-center align-items-baseline'>
                      <div className='carousel-subcontent question-section'>
                        <div className="question">
                          <p className="question-pallete">{ele.qid}.{ele.ques}</p>
                          <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
                            <p className="points-pallete">Pts. {ele.pts}</p>
                          </div>
                        </div>
                        <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
                        <div style={{ width: "75%", marginTop: ".5rem" }}>
                          <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
                          <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                            handleSubmitClick();
                            updatePoints({ques_id:ele.qid,ans:text,points:ele.pts});
                            clearText();
                          }} >Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="point-section">
        <p>Army Points : {user.ap}</p>
        <p>Country Points : {user.cp}</p>
        <button type="button" className="btn" onClick={updatePoints} style={{ backgroundColor: "#212529", color: "#3D6343", fontSize: "20px", fontWeight: "600" }}>Update AP</button>
      </div>
    </div>
  );
}
export default ArmyPoint;