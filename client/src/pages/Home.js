import React from 'react';
import BannerImage from '../assets/students.png';
import "../styles/Home.css"


function Home() {
    return (
      <div className="home-content" style={{ backgroundImage: `url(${BannerImage})`}}>
        <h1> Welcome to StudentSaver </h1>
        <p> Insert some kind of brief tagline/description for the site </p>
      </div>
    );
}

export default Home;