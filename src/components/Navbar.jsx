import { useState, useEffect } from "react";

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

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav>
                <ul className="uppercase flex flex-row justify-center items-center gap-10 mb-15 h-24">
                    <li
                        onClick={() => handleClick('home')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'home' ? 'text-[#FFB21F]' : ''}`}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => handleClick('about-me')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'about-me' ? 'text-[#FFB21F]' : ''}`}
                    >
                        About me
                    </li>
                    <li
                        onClick={() => handleClick('skills')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'skills' ? 'text-[#FFB21F]' : ''}`}
                    >
                        Skills
                    </li>
                    <li
                        onClick={() => handleClick('projects')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'projects' ? 'text-[#FFB21F]' : ''}`}
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => handleClick('certificates')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'certificates' ? 'text-[#FFB21F]' : ''}`}
                    >
                        Certificates
                    </li>
                    <li
                        onClick={() => handleClick('Contact')}
                        className={`hover:cursor-pointer select-none ${activeSection === 'contact' ? 'text-[#FFB21F]' : ''}`}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </>
    );

};

export default NavBar;