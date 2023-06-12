import React from 'react'
import { Footer, Blog, Possibility, Feature, GPT3, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'
import './index.css'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />

            </div>
            <Brand />
            <GPT3 />
            <Feature />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App