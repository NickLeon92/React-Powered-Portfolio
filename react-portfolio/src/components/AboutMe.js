import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'
const text = "About me"

function AboutMe() {
    return (
        <div id='container'>
            <Title text={text}/>
             
                <div id="aboutMeContent">

                    <div id="questions">
                        <p>I am a Virginia Tech Engineer and future software developer</p>
                        <h3>Where I'm From</h3>
                        <p>Virginia Beach</p>
                        <h3>What are your favorite hobbies?</h3>
                        <p>Music, Videography, Writing</p>
                        <h3>What's your dream job?</h3>
                        <p>Leading software development team</p>
                        <h3>Where do you live?</h3>
                        <p>Richmond, Virginia</p>
                        <h3>Why do you want to be a web developer?</h3>
                        <p>I love coding, automation and efficient problem solving</p>
                    </div>
                </div>
            <Footer/>

        </div>)

}

export default AboutMe