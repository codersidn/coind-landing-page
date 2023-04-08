import React from 'react'

import TopBar from './components/TopBar/TopBar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Screenshots from './components/Screenshots/Screenshots'
import Learning from './components/Learning/Learning'
import About from './components/About/About'
import Team from './components/Team/Team'
// import Trusted from './components/Trusted/Trusted'
import Client from './components/Client/Client'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
export default function Layout() {
    return (
        <React.Fragment>       
            <header>                
                <TopBar />                                    
                <Header/>
            </header>
            <div id="container"> 
                <Features />
                <Screenshots />
                <Learning />
                <About />
                <Team />
                {/* <Trusted /> */}
                <Client />
                <Contact />
                <Footer />
            </div>
        </React.Fragment>
    )
}
