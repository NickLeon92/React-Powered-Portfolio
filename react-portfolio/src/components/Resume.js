import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'
import myResume from '../images/Nick_Leon_resume.pdf'

function Resume() {
    const text = "My Resume"
    return (<div id='container'>
        <Title text={text}/>
        <div id="container">
        <h2>Front End Proficiencies</h2>
             <ul>
                <li>
                    React   
                </li>
                <li>
                    HTLM
                </li>
                <li>
                    JavaScript  
                </li>
                <li>
                    CSS  
                </li>
                <li>
                    Bootstrap  
                </li>
            </ul>
            <h2>Back End Proficiencies</h2>
             <ul>
                <li>
                    NodeJS   
                </li>
                <li>
                    MongoDB
                </li>
                <li>
                    MySQL2  
                </li>
                <li>
                    Express  
                </li>
                <li>
                    graphQL  
                </li>
            </ul>

        <h3>Download Full Resume:</h3>
                <p>  <a href={myResume} target="_blank">Here</a>
                </p>
                </div>
        <Footer/>
        </div>)
}

export default Resume