import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
        <nav className="navbar">  
            <img src={logo} alt="Fitness Plus Gym logo"/>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="check-label">
                <i className="fa-solid fa-bars"></i>
            </label>
            <div className='ul'>
                <Link activeClass='active' to='home' spy={true} duration={500} className='li'>Home</Link>
                <Link activeClass='active' to='feeStructure' spy={true} duration={500}  className='li'>MemberShip</Link>
                <Link activeClass='active' to='workout' spy={true} duration={500} className='li'>Workouts</Link>
                <Link activeClass='active' to='about' spy={true} duration={500} className='li'>About</Link>
                <Link activeClass='active' to='contact' spy={true} duration={500} className='li'>Contact Us</Link>
            </div>
            <Link to='contact' className='joinbtn2'>Join Now</Link>
        </nav>
  )
}

export default Navbar;