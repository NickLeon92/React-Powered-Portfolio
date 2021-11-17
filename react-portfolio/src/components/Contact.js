import React, { useState } from "react";
import Title from './animations/title'
import Footer from './animations/footer'
import emailjs from 'emailjs-com'

function Contact() {
    const text = "Let's Get in Touch!"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_vc0xr3o',
            'template_ibssodk',
            e.target,
            'user_O4iIDawbXI4SECXtmDBpn'
        ).then(res => {
            console.log(res)
            setName("")
            setEmail("")
            setMessage("")
            window.alert('Your message was sent successfully')
        }).catch(err => console.log(err))

        

    } 

    return (
        <div id='container'>
                <Title text={text} />
            <div style={{marginLeft:'15vw', marginRight:'15vw'}}  id = 'formContainer'>
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input onChange={(e)=>setName(e.target.value)} value={name} name="name" type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} name="email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <br/>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Leave your message here!</label>
                        <textarea onChange={(e)=>setMessage(e.target.value)} value={message} name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input
                    type="submit"
                    value="send"
                    className = "form-control btn btn-primary"
                    style ={{marginTop:'10px', width: '20%'}}
                    />
                </form>
                {/* <button style={{marginTop: '10px'}} type="button" class="btn btn-primary">Send Message</button> */}
                <Footer />
            </div>

        </div>)
}

export default Contact