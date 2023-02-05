import React, { useContext, useState, useEffect } from 'react';
import userContext from '../context/users/userContext';
import armyContext from '../context/army_questions/armyContext';
import "../styles/armypoint.css"
import { useNavigate } from 'react-router-dom';

const ArmyPoint = (props) => {
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, getUser, updateUser } = user_detail;

  const army_detail = useContext(armyContext);
  const { apq, getapq,getsingleapq, updateapq } = army_detail;

  const updatePoints = async({ ques_id, ans, points }) => {
    const question = apq.find((question) => question.qid === ques_id); // find is a js function to search for an element in an array
    const questionTemp=await getsingleapq(question.qid);
    if(questionTemp.type){
      props.showAlert("danger","someone has done it earlier");
      return ;
    }
    if (questionTemp.ans === ans.trim().toLowerCase()) {
      // update the points of the team if the answer matches correctly
      const newap = user.ap + questionTemp.pts;
      const newcp = user.cp + 0;
      updateUser(newap, newcp);
      props.showAlert("success", `${points} Armypoints added successfully`);
      updateapq(questionTemp.qid, 1);
    }
    else {
      props.showAlert("danger", `Wrong Answer`);
    }
  }
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value);
  }
  const clearText = () => {
    setText("");
  }
  const handleSubmitClick = () => {
    // setText(text);
    // updatePoints({ ques_id: ele.qid, ans: text, points: ele.pts });
    // clearText();
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      // eslint-disable-next-line
    }
    else {
      getapq();
      // eslint-disable-next-line
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
                    <p className="question-pallete">{apq[0].qid}.{apq[0].ques}</p>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.3)", height: "3rem", borderRadius: ".5rem" }}>
                      <p className="points-pallete">Pts. {apq[0].pts}</p>
                    </div>
                  </div>
                  <textarea name="answer" id="answer" rows="5" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
                  <div style={{ width: "75%", marginTop: ".5rem" }}>
                    <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
                    <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                      handleSubmitClick();
                      updatePoints({ ques_id: apq[0].qid, ans: text, points: apq[0].pts });
                      getapq();
                      clearText();
                    }} >Submit</button>
                  </div>
                </div>
              </div>
            </div>

            { // eslint-disable-next-line
              apq.map((ele, index) => {
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
                            updatePoints({ ques_id: ele.qid, ans: text, points: ele.pts });
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
    </div>
  );
}
export default ArmyPoint;