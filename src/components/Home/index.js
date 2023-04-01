import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';


const   Home = ()   => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <br /> 
                <img src={LogoTitle} alt="Developer" />
                <br /> 
                Brahima
                <br />
                Software & Hardware Engineer
                </h1>
                <h2>Frontend Developer / Information Technology Engineer & Instructor / JavaScript Expert /Graphic Specialist </h2>
             <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
      
    );
}



export default Home