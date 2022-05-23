import {React} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/logo192.png';
import './header.scss';


const Header = () => {

    return (
        <header>
            <Navbar/>
            <Link to={"/"}>
                <div className={"logo"}>
                    <img src={Logo} alt="Secont hand shop name"/>
                </div>
            </Link>
            <div className='Icons'>
            <Link to={"/favourites"}>
                <div className={"favourites"}>
                    <img src={Logo} alt="View my favourites"/>
                </div>
            </Link>
            <Link to={"/reservations"}>
                <div className={"reservations"}>
                    <img src={Logo} alt="My reservations"/>
                </div>
            </Link>            
            <Link to={"/dashboard"}>
                <div className={"profile"}>
                    <img src={Logo} alt="My account"/>
                </div>
            </Link>            
            </div>
        </header>
    );
  };
  
  export default Header;