 import Button from './Button.jsx'

 function Navbar(){
     
    return(
      <nav className="navbar">
        <div className= "navbar-left">
          <a href="#" className="navbar-logo"><span>OrganizeSell</span></a>
        </div>
        <div className="navbar-center">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
         
        </div>
        <div className ="navbar-right">
          <Button title = "Sign In" backgroundColor="var(--text-dark)" textColor = "var(--primary-white)"/>
          &nbsp;
          <Button title = "Log In" backgroundColor="var(--primary-dark)" textColor ="var(--text-dark)"/>
        </div>
      </nav>
    )
  }

  export default Navbar;