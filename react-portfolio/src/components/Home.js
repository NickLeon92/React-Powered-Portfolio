import React from "react";
import Title from "./animations/title";
import Footer from './animations/footer'
import PofilePic from './animations/profilePic'
// import '../styles/Home.css'


function Home() {

    const text = 'Nick Leon, Jr. Full Stack Developer'
    
    return (
        <div  id="header">
            <div id="header-container">
                <Title text={text}/>
                <PofilePic/>
                <Footer/>
            </div>
        </div>
    
    )}

export default Home