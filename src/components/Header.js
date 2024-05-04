import Logo from "../Img/Designer.png"
import { useState,useEffect } from "react"

import { Link } from "react-router-dom";
import OnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btn,setBtn]   = useState('login');

  const OnlineStatus = useOnlineStatus()



  useEffect(()=>{
  },[btn])
  

    return (


      <div className="header">  
        <div className="logo-container">
          <img
            className="logo"
            src={Logo} alt="img-error"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              online Status:{OnlineStatus ? '🟢':'🔴'}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>

            </li>
            <li>

              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/contact">Contact US</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={()=> btn === 'login' ? setBtn('logout') : setBtn('login')}>{btn}</button>
          </ul>
        </div>             
      </div>
    
    );
  };

 
export default Header;