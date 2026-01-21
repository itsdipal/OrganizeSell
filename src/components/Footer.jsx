const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
    <div className="footer-brand">
        <h3>OrganizeSell</h3>
        <p>
            The all-in-one order & customer manager for social sellers in Nepal.
          </p>
    </div>
    <div className="footer-links">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
        </div>
      
    </div>
    <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OrganizeSell.All rights reserved.</p>
    </div>

    </footer>
  )
}
export default Footer