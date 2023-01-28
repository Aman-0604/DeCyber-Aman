import React, { useContext, useEffect } from 'react';
import { ReactComponent as ReactLogo } from './world.svg';
import "../styles/worldmap.css"
import userContext from '../context/users/userContext';
import { useNavigate } from 'react-router-dom';

const WorldMap = () => {
  let navigate = useNavigate();

  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      getUser();
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])//[]means sirf ek baar yeh function chalega

  return (
    <div className="WorldMap">
      <div className="point-section">
        <p>Army Points : {user.ap}</p>
        <p>Country Points : {user.cp}</p>
      </div>
      <ReactLogo />
    </div>
  );
}
export default WorldMap;