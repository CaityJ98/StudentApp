import React from 'react';
import BannerImage from '../assets/students.png';
import "../styles/Home.css"


function Home() {
    return (
      <div className="home-content" style={{ backgroundImage: `url(${BannerImage})`}}>
        <h1>Student life made easier</h1>
        <p>StudentSaver is here to help you save money, save study time, and save your health, so you can focus on enjoying your student experience</p>
      </div>
    );
}

export default Home;