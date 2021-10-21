import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'
const text = "About me"

function AboutMe() {
    return (<div>
        <Title text={text}/>
        <Footer/>
        </div>)

}

export default AboutMe