import { RevealOnScroll } from "./RevealOnScroll";

export const About = () =>{

    const frontendSkills = [
        "React",
        "TailwindCSS",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript",
        "ReactNative"
        
    ];
    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "Java",
        "SpringBoot",
    ];

    return(
        <section id="about" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 ">
                        I'm a third-year Software Engineering undergraduate with a strong passion for frontend development. 
                        I enjoy building clean, responsive, and user-friendly interfaces that blend design with functionality. 
                        Constantly learning and exploring new technologies, I'm driven by a desire to create meaningful digital experiences that leave a lasting impact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (

                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (

                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                 </div>
                 <div className=" mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🎓Education</h3>
                                <p className="text-gray-300 mb-2">
                                        <strong>BSc. in Software Engineering</strong> - University of Kelaniya (2023 - Present)
                                   </p> 
                            </div>
                 </div>
            </div>
         </RevealOnScroll>
        </section>
    );
}