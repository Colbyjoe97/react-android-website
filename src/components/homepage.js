import React from 'react';
import soccer from '../assets/soccer.jpg'
import '../css/homepage.css'

const HomePage = () => {
    return ( 
        <div>
            <img src={soccer} alt="soccer" />
            <h1 className="test">Testing</h1>
        </div>
     );
}

export default HomePage;