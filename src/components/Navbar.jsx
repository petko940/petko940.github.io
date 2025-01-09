import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function NavBar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="sticky top-0 bg-white z-50">
                <ul className="uppercase flex flex-row justify-center items-center gap-10 mb-15 h-20">
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'home' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'about-me' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="about-me"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            About me
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'skills' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="skills"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Skills
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'projects' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Projects
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'certificates' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="certificates"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Certificates
                        </Link>
                    </li>
                    <li
                        className={`hover:cursor-pointer select-none ${activeSection === 'contact' ? 'text-[#FFB21F]' : ''}`}
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={700}
                            offset={-70}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
