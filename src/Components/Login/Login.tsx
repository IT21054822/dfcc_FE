import './Login.css'
import { Link } from 'react-router-dom';
import bg2 from '../../assets/DFCC.jpg'
import logo from '../../assets/logo.png'
import background from '../../assets/dfccS.png'
import bg11 from '../../assets/neww.webp'
import bg12 from '../../assets/DFCC5.jpg'



function Login() {
  return (
    <div className='container1'  >
      <div className="left-container" >
        <img src={logo} alt="" className='logoD' />
        <h1>"To be the leading financial solutions provider sustainably developing individuals and businesses!"</h1>
      </div>
      <div className="right-container" style={{backgroundImage:`url(${bg11})`, backgroundPosition: 'center', backgroundSize:'cover'}} >
        <div className="header">
          <div className="text">Sign In</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Username" />
          </div>
        
          <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
              forgot password? <span>Click here!</span>
            </div>
        <div className="submit-container">
          <button className='button'><Link className='towhite' to='/Home'>Sign In</Link></button>
        </div>
        
      </div>
    </div>
  
  )
}

export default Login
