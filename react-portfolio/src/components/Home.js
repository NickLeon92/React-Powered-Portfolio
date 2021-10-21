import React from "react";
import pic from '../images/profile.JPG'
import Title from "./animations/title";
import Footer from './animations/footer'

// import '../styles/Home.css'


function Home() {
    const text = 'Nick Leon, Jr. Full Stack Developer'
    return (
        <div  id="header">
        <div id="header-container">
            <Title text={text}/>
            
            <img id="profile-pic" src={pic} alt="profile pic"/>
            <Footer/>
        </div>

    </div>
    
    )}

export default Home