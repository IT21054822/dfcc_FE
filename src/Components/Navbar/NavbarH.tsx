import { Link } from 'react-router-dom'
import './Navbar.css'
import logoN from '../../assets/logo.svg'

function NavbarH() {
  return (
    <div className="Navbar">
        <img src="" alt="" className='logo3' />
        <ul>
            <li><Link to='/Home' className='towhiteN'>Home</Link></li>
            <li><Link to='/Activity' className='towhiteN'>Activity</Link></li>
            <li><Link to='/Form' className='towhiteN'>Form</Link></li>
            <li><Link to='/' className='towhiteN'>Logout</Link></li>
        </ul>
        <img src={logoN} alt="" className='logo_c' />
        
    </div>
  )
}

export default NavbarH
