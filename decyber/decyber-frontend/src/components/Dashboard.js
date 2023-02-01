import React,{useContext,useEffect} from 'react'
import userContext from '../context/users/userContext';
import "../styles/dashboard.css"
import { Avatar } from '../icons';
import Timer from './Timer';

export default function Dashboard({time}) {
  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;
  const array = [{ rank: 1, name: "India", points: 2500 }, { rank: 1, name: "India", points: 2500 }, { rank: 1, name: "India", points: 2500 }]

  useEffect(() => {
      getUser();
      // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega
  return (
    <>
      {/* <div className='Dashboard'>
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
      </div> */}
      <div className='Dashboard'>
        <h1 style={{ textAlign: "center", margin: "1rem 0",color:"lightgreen" }}>{user.team}</h1>
        <div className="dashboard-outlier d-flex justify-content-center align-items-center">
          <div className="outlier-2 d-flex flex-column justify-content-center align-items-center" >
            <div className="user-status">
              <div className="country-points db-props">
                <div className="cps">
                  <div>
                    <h4>{user.cp}</h4>
                  </div>
                </div>
                <p>Your Country Points</p>
              </div>
              <div className="army-points db-props">
                <div className="aps">
                  <div>
                    <h4>{user.ap}</h4>
                  </div>
                </div>
                <p>Your Army Points</p>
              </div>
              <div className="rank db-props">
                <div className="rank-props">
                  <h4>1st</h4>
                  <p>of 2500 Users</p>
                </div>
              </div>
            </div>
            <div className="outlier-3 d-flex flex-row justify-content-center align-items-center">
              <div className="member-details">
                <div className="member">
                  {/* avatar | name leader/member  */}
                  <div className="avatar">
                    <Avatar />
                  </div>
                  <div className="basic-info">
                    <p className="name">{user.name}</p>
                    <p className="designation">{user.email}</p>
                    <p className="designation">{user.college}</p>
                  </div>
                </div>
                <div className="member">
                  <div className="avatar">
                    <Avatar />
                  </div>
                  <div className="basic-info">
                    <p className="name">{user.name}</p>
                    <p className="designation">{user.email}</p>
                    <p className="designation">{user.college}</p>
                  </div>
                </div>
                <div className="member">
                  <div className="avatar">
                    <Avatar />
                  </div>
                  <div className="basic-info">
                    <p className="name">{user.name}</p>
                    <p className="designation">{user.email}</p>
                    <p className="designation">{user.college}</p>
                  </div>
                </div>
              </div>
              <div className="remaining-time">
                <div className="timer">
                  <div className="timer-display">
                    {/* <Timer expiryTimestamp={time} style={{background: "transparent",color: "white",marginRight: ".2rem"}}/> */}
                    <p style={{color:"white",fontWeight:"500"}}>hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="leader-board">
            <div className="table-layout">
              <table>
                <tbody>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Points</th>
                  </tr>
                  {array.map((ele,index) => {
                    return <tr key={index}>
                      <td>{ele.rank}</td>
                      <td>{ele.name}</td>
                      <td>{ele.points}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
