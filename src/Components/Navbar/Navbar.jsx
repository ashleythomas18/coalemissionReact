import './Navbar.css'
import team from '../../assets/team.png'
import {Link, useLocation} from 'react-router-dom';

export const Navbar = () => {
  const location= useLocation();
  return (
    <div className='nav'>
        <div className="nav-logo">
        <img src={team} alt="GreenTech Logo" className="logo-image" />
        </div>
        <ul className="nav-menu">
        <li>{location.pathname !=="/Calculator"}
  <Link to="/.">Home</Link>
</li>
        <li>
  <Link to="/visualisations">Dashboard</Link>
</li>

            <li>
              <Link to = "/Calculator">Coal Emission Calculator</Link></li>
        {location.pathname !=="/Calculator" && <li>Carbon Credits</li>}
        {location.pathname !=="/Calculator" &&<li className= 'nav-about'>About Us</li>}
        </ul>
    </div>
  )
}

export default Navbar 