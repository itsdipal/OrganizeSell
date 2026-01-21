import Button from './Button'
import HeroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-container">
    <div className="hero-left">
        <h1>
            Manage orders, customers & <br />
            payments from one simple <br />
            dashboard
          </h1>
        <p>
            The all-in-one solution for social media sellers in Nepal.
          </p>
    <div className="hero-buttons">
        <Button title="Get Started" backgroundColor="var(--text-dark)" textColor="var(--primary-white)"/>
        
        <Button title="View Demo"/>
    </div>
    <div className="hero-platforms">
         <span>✓ Facebook</span>
            <span>✓ Instagram</span>
            <span>✓ WhatsApp</span>
    </div>
    </div>

    <div className = "hero-right">
       
      <img src={HeroImage} className="hero-image"/>
          
    </div>

    </div>
    
    </section>
  )
}
export default Hero;