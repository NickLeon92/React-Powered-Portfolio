import React, { useState } from "react";
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Home from "./components/Home";

function App(){

    const [currentPage,setPage] = useState('Home')

    const renderPage = () => {
        console.log(currentPage)
        if (currentPage === 'AboutMe'){
            return <AboutMe/>
        }
        if (currentPage === 'Contact'){
            return <Contact/>
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio/>
        }
        if (currentPage === 'Resume'){
            return <Resume/>
        }
        return <Home/>
    }

    const pageHandler = (page) => {console.log(page)
         setPage(page)}

    return (
        <div>
            <Navbar currentPage={currentPage} pageHandler={pageHandler}/>
            {renderPage()}
        </div>
    );

}

export default App