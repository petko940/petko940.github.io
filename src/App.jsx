import './App.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'


function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <Home />
            <NavBar />
            <AboutMe />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
        </>
    )
}

export default App;
