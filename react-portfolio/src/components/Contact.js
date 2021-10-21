import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'

function Contact() {
    const text = "Let's Get in Touch!"
    return (<div>
        <Title text={text}/>
        <Footer/>
        </div>)
}

export default Contact