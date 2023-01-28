import React,{useContext,useEffect} from 'react'
import userContext from '../context/users/userContext';
import "../styles/dashboard.css"

export default function Dashboard() {
  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;

  useEffect(() => {
      getUser();
      // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega
  return (
    <>
      <div className='Dashboard'>
        <h1 style={{textAlign:"center"}}>{user.team}</h1>
        <div className="dashboard-outlier d-flex justify-content-center align-items-center">
            <div className="outlier-2 d-flex flex-column justify-content-center align-items-center">
              <div className="user-status">
                  <p>Your status</p>
                  <p>Army Points : {user.ap}</p>
                  <p>Country Points : {user.cp}</p>
              </div>
              <div className="outlier-3 d-flex flex-row justify-content-center align-items-center">
                  <div className="member-details">
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <p>{user.college}</p>
                  </div>
                  <div className="remaining-time">
                      Time Left
                  </div>
              </div>
            </div>
            <div className="scoreboard">
                Scoreboard
            </div>
        </div>
      </div>
    </>
  )
}
