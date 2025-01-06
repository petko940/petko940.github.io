import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <section
                id="home"
                className="bg-[url('/src/assets/home.jpg')] h-screen w-auto bg-cover bg-center bg-no-repeat flex-col items-center justify-center text-center text-white pt-[16vh]"
            >
                <div data-aos="zoom-in">
                    <h1 className="text-3xl font-bold uppercase pb-5">
                        I am Petko
                    </h1>
                    <h2 className="text-3xl font-bold text-[#FFB21F] uppercase pb-7">
                        Junior Software Developer
                    </h2>
                    <h3 className="text-xl text-[#dcdcdc] mx-auto w-11/12 lg:w-2/3">
                        I am Petko Todorov, certified Python and Django developer and creative designer.
                        Passionate about design, code, and innovation. Crafting dynamic experiences with an eye for aesthetics.
                    </h3>

                    <div className='pt-20 text-2xl flex justify-center'>
                        <ul className="flex justify-center space-x-3">
                            <a href="https://www.facebook.com/petko0/" target="_blank" className='hover:text-[#1F91FF] duration-300'>
                                <div data-aos="zoom-in" data-aos-delay="100">
                                    <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </li>
                                </div>
                            </a>

                            <a href="https://github.com/petko940/" target="_blank" className='hover:text-[#181717] duration-300'>
                                <div data-aos="zoom-in" data-aos-delay="300">
                                    <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </li>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/petko0/" target="_blank" className='hover:text-[#0A66C2] duration-300'>
                                <div data-aos="zoom-in" data-aos-delay="500">
                                    <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </li>
                                </div>
                            </a>

                            <a href="https://discordapp.com/users/zenox#4522/" target="_blank" className='hover:text-[#5662EC] duration-300'>
                                <div data-aos="zoom-in" data-aos-delay="700">
                                    <li className="border-2 border-[#FFB21F] w-14 h-14 rounded-2xl flex items-center justify-center">
                                        <FontAwesomeIcon icon={faDiscord} />
                                    </li>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform text-4xl pb-16">
                    <Link to="about-me" smooth={true} duration={700} offset={-70}>
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            fade
                            style={{
                                '--fa-animation-duration': '2s',                             
                            }}
                        />
                    </Link>
                </div>
            </section>
        </>
    )
};

export default Home;