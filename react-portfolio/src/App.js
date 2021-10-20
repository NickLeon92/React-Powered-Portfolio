import React, { useState } from "react";
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

const App = () => {

    const [currentPage,setPage] = useState('AboutMe')

    const renderPage = () => {
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
    }

    const pageHandler = (page) => setPage(page)

    return (
        <div>
            <Navbar currentPage={currentPage} pageHandler={pageHandler}/>
            {renderPage()}
        </div>
    );

}

export default App