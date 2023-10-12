import React from "react";
import Title from "./animations/title";
import Footer from './animations/footer'
import PofilePic from './animations/profilePic'
// import '../styles/Home.css'


function Home() {

    const text = 'Nick Leon, Full Stack Engineer'
    
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