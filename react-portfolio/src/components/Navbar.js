import React from "react";

function Navbar(props) {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Explore:</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#Home"
                        onClick = {(e)=>{e.preventDefault()
                            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
                                document.getElementById("navbarSupportedContent").classList.remove("show")
                            }
                            else {
                                document.getElementById("navbarSupportedContent").classList.add("show")
                            }
                            props.pageHandler('Home')}}
                        className = {props.currentPage === 'Home'? 'nav-link active':'nav-link'}
                        >Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#AboutMe"
                        onClick = {(e)=>{e.preventDefault()
                            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
                                document.getElementById("navbarSupportedContent").classList.remove("show")
                            }
                            else {
                                document.getElementById("navbarSupportedContent").classList.add("show")
                            }
                            props.pageHandler('AboutMe')}}
                        className = {props.currentPage === 'AboutMe'? 'nav-link active':'nav-link'}
                        >About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Portfolio"
                        onClick = {(e)=>{e.preventDefault()
                            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
                                document.getElementById("navbarSupportedContent").classList.remove("show")
                            }
                            else {
                                document.getElementById("navbarSupportedContent").classList.add("show")
                            }
                            props.pageHandler('Portfolio')}}
                        className = {props.currentPage === 'Portfolio'? 'nav-link active':'nav-link'}
                        >My Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Resume"
                        onClick = {(e)=>{e.preventDefault()
                            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
                                document.getElementById("navbarSupportedContent").classList.remove("show")
                            }
                            else {
                                document.getElementById("navbarSupportedContent").classList.add("show")
                            }
                            props.pageHandler('Resume')}}
                        className = {props.currentPage === 'Resume'? 'nav-link active':'nav-link'}
                        >Resume</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact"
                        onClick = {(e)=>{e.preventDefault()
                            if (document.getElementById("navbarSupportedContent").classList.contains("show")) {
                                document.getElementById("navbarSupportedContent").classList.remove("show")
                            }
                            else {
                                document.getElementById("navbarSupportedContent").classList.add("show")
                            }
                            props.pageHandler('Contact')}}
                        className = {props.currentPage === 'Contact'? 'nav-link active':'nav-link'}
                        >Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar