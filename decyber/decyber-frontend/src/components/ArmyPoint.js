import React, { useContext } from 'react';
import userContext from '../context/users/userContext';
import "../styles/armypoint.css"

const ArmyPoint = () => {

  const user_detail = useContext(userContext);
  const { user, updateUser } = user_detail;

  const updatePoints = () => {
    const newap = user.ap + 10;
    const newcp = user.cp + 10;
    updateUser(newap, newcp);
  }

  return (
    <div className="ArmyPoint">
      <div className="ap-box">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-1</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-2</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='carousel-content d-flex justify-content-center align-items-center'>
                <div className='carousel-subcontent'>Question-3</div>
              </div>
            </div>
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