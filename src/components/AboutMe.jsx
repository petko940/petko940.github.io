import aboutImage from '../assets/about1.gif'

function AboutMe() {
    return (
        <>
            <section
                id="about-me"
                className="bg-[#969696] py-[4rem] w-auto mb-40"
            >
                <div data-aos="fade-down">
                    <h1 className='text-[#222222] text-3xl text-center pb-10'>
                        Who Am I
                    </h1>
                </div>

                <div className='w-4/5 max-sm:w-11/12 max-md:w-5/6 mx-auto flex flex-wrap gap-5 justify-center'>
                    <div data-aos="fade-right" className='w-1/2 max-md:w-11/12 max-lg:w-11/12'>
                        <div className=''>
                            <h2 className='text-[#222222] text-2xl font-extrabold'>
                                Exploring the World with Python
                            </h2>

                            <div className='text-white text-lg'>
                                <p className='py-5 indent-3'>
                                    My journey through Python has equipped me with the skills to design and develop
                                    outstanding web applications.
                                    I bring a unique blend of technical expertise and creative vision to every
                                    project, ensuring a seamless fusion
                                    of functionality and aesthetics.
                                </p>
                                <p className='indent-3'>
                                    In my capacity as a certified Python and Django developer, along with
                                    proficiency in JavaScript and a creative design flair, I am enthusiastic about
                                    crafting dynamic experiences. With a keen eye for aesthetics and a strong grasp
                                    of HTML, CSS, and JavaScript, I ensure that every project I undertake not only
                                    functions flawlessly but also looks visually captivating, creating memorable
                                    user experiences.
                                </p>
                            </div>
                            <a href="../assets/cv/petko_todorov_cv.pdf" download="petko_todorov_cv.pdf" className='flex justify-center pt-5'>
                                <button className="text-white text-xl py-2 px-6 border border-white rounded-md shadow-[0_0_5em_transparent] hover:bg-transparent hover:shadow-[0_0_0_white] hover:transition-all hover:duration-1000 hover:ease-in-out">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <div>
                            <img
                                src={aboutImage}
                                className='w-full max-w-[500px] max-sm:hidden h-auto object-contain max-md:order-2 rounded-2xl'
                                alt="About Me"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
