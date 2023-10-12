import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'
import myResume from '../images/2023resume.pdf'

function Resume() {
    const text = "My Resume"
    return (<div id='container'>
        <Title text={text}/>
        <div id="container">
        <h2>Front End Proficiencies</h2>
             <ul>
                <li>
                    React-Redux   
                </li>
                <li>
                    NextJS
                </li>
                <li>
                    Tailwind  
                </li>
                <li>
                    Bootstrap  
                </li>
                <li>
                    Typescript  
                </li>
            </ul>
            <h2>Back End Proficiencies</h2>
             <ul>
                <li>
                    NodeJS   
                </li>
                <li>
                    AWS Lambda & API Gateway
                </li>
                <li>
                    MongoDB  
                </li>
                <li>
                    DynamoDB  
                </li>
                <li>
                    Express.js  
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