 import Button from './Button.jsx'
 import {Link} from 'react-router-dom'

 function Navbar(){
 

  

    return(
      <nav className="navbar">
        <div className= "navbar-left">
          <a href="/#home" className="navbar-logo"><span>OrganizeSell</span></a>
        </div>
        <div className="navbar-center">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#about">About Us</a>
         
        </div>
        <div className ="navbar-right">
          <Button title = "Sign In" backgroundColor="var(--text-dark)" textColor = "var(--primary-white)" url = "/register"/>
          &nbsp;
          <Button title = "Log In" backgroundColor="var(--primary-dark)" textColor ="var(--text-dark)"/>
        </div>
      </nav>
    )
  }

  export default Navbar;