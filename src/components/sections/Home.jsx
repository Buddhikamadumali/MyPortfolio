import { RevealOnScroll } from "./RevealOnScroll";


export const Home = () =>{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Hi,I'm Buddhika </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a third-year Software Engineering undergraduate
                     with a strong passion for frontend development.
                      I enjoy building clean, responsive, and user-friendly interfaces
                       that blend design with functionality. 
                       Constantly learning and exploring new technologies,
                        I'm driven by a desire to create meaningful digital experiences that leave a
                         lasting impact.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="../../public/cv.pdf" download="My_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">Download CV</a>

                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
                </div>
            </div>
            </RevealOnScroll>
        </section>


    ) ;
}