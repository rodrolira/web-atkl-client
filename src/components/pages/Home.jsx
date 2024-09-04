// Home.jsx

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import './Home.css'
import Navbar from '../organisms/Navbar'
import AboutSection from '../organisms/AboutSection'
import DemosSection from '../organisms/DemoSection'
import ContactSection from '../organisms/ContactSection'
import ReleasesSection from './Release/ReleasesSection'
import ArtistsSection from './Artist/ArtistsSection'

function Home() {
    const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.scrollToDemos) {
            const demosSection = document.getElementById('demos')
            if (demosSection) {
                demosSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    return (
        <>
            <Navbar />
            <div id="home" className="home">
            <div className="w-full parallax-container flex relative h-screen overflow-hidden">
                <div className="w-full absolute parallax-content inset-0 bg-gradient-to-b from-transparent to-[#122e0f] backdrop-blur-md">
                    {/* Contenido del encabezado aquí */}
                    <div className="container h-full">
                        <section
                            id="main"
                            className="main h-full w-full flex flex-col justify-end"
                        >
                            <div className="logo-main flex items-center md:h-full w-full">
                                <img
                                    alt="main"
                                    className="md:h-96 mt-0 lg:mt-0 mx-auto md:mt-80 h-36"
                                    src="/img/main.png"
                                />
                            </div>
                            <div className="text-center mx-auto w-full text-white flex flex-col lg:mb-24">
                                <h1 className="font-extrabold mx-auto text-center lg:text-5xl text-xl">
                                    {language === 'en'
                                        ? 'HARD TECHNO IS LIFE'
                                        : 'HARD TECHNO IS LIFE'}
                                </h1>
                                <h2 className="text-lg lg:text-3xl ">
                                    {language === 'en'
                                        ? 'LABEL'
                                        : 'SELLO DISCOGRÁFICO'}
                                </h2>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <ReleasesSection />
            <ArtistsSection />
            <AboutSection />
            <DemosSection />
            <ContactSection />
        </div>
        </>
    )
}

export default Home
