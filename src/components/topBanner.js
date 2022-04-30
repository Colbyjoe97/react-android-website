import React from 'react';
import androidLogo from '../assets/android-logo.png'
import '../scss/topBanner.scss'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const TopBanner = () => {
    return (
        <div>
           <div className="navbar d-flex justify-content-between">
               <div className="navbar-left d-flex justify-content-between align-items-center">
                   <a className='navbar-brand' href="#">android</a>
                   <img src={androidLogo} height="100%" alt="" />
                </div>
                <div className="navbar-right d-flex">
                    <div className="mobile-hidden  d-flex">
                        <li>What is Android</li>
                        <li>Android 12</li>
                        <li>Phones & Tablets</li>
                        <li>Enterprise</li>
                    </div>
                    <SearchIcon />
                    <div className="hamburger">
                        <MenuIcon />
                    </div>
                </div>
           </div>
        </div> 
     );
}



export default TopBanner;