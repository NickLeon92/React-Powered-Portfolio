import React from "react";
import Title from './animations/title'
import Footer from './animations/footer'

function Contact() {
    const text = "Let's Get in Touch!"
    return (
        <div id='container'>
                <Title text={text} />
            <div id = 'formContainer'>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <br/>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Leave your message here!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <Footer />
            </div>

        </div>)
}

export default Contact