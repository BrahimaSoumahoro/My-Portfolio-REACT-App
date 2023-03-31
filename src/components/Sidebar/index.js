import { NavLink, Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
 <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            {/* <img className='sub-logo' src={LogoSubtitle} alt="Brahima" /> */}
        </Link>
    
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FF7000" />
            </NavLink>

              <NavLink exact="true" activeclassname="active"            
               className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FF7000" />
            </NavLink>

              <NavLink exact="true" activeclassname="active" 
               className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FF7000" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel="nonreferrer" href="https://www.linkedin.com/in/brahima-soumahoro/">
                <FontAwesomeIcon icon={faLinkedin}  color="#290FBA" />
                </a>
            </li>

               <li>
                <a target="_blank" 
                rel="nonreferrer" href="https://github.com/BrahimaSoumahoro/">
                <FontAwesomeIcon icon={faGithub}  color="#540375" />
                </a>
            </li>
        </ul>

 </div>)

export default Sidebar 