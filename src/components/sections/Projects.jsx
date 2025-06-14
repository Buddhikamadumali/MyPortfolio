import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Fuel Management System</h3>
                        <p className="text-gray-400 mb-4">Fuel management system for Sri Lanka's crisis, featuring vehicle registration, QR-based tracking, secure REST APIs, real
                            time updates, and integration with Twilio and Mailgun.
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "React","ReactNative","Springboot","MySQL"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lakshitha779988/Fuel-Management-System" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Mobile Accessories E-Commerce Shop</h3>
                        <p className="text-gray-400 mb-4">E-commerce platform for mobile accessories with buyer shopping, cart, checkout, and ratings; sellers can list items, 
                                                            access reports, and use promo tools, all with admin approval.
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[  "HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/lakshitha779988/TechTrove" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Blog Post Website</h3>
                        <p className="text-gray-400 mb-4"> A simple and responsive blog post app where users can view and filter posts by category. Built with Express.js and 
                                        MySQL, it offers smooth browsing and content organization across all devices.
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Express.js" , "React" , "MySQL"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Buddhikamadumali/Blog-posting-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Todo mobile app</h3>
                        <p className="text-gray-400 mb-4"> A user-friendly To-Do app for Android that lets users add, complete, and delete tasks with ease. Built with Zustand and 
                                        AsyncStorage, it offers smooth performance and task persistence across sessions.
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {[ "ReactNative","TypeScript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Buddhikamadumali/TodoApp" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> HabitTracker mobile app</h3>
                        <p className="text-gray-400 mb-4"> A simple Habit Tracker app to add daily or weekly habits, filter them by date and frequency, mark progress, and stay on 
                                        track with personal goals through an intuitive and organized interface
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ReactNative","TypeScript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Buddhikamadumali/Habit-Tracker" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> My Personal Portfolio</h3>
                        <p className="text-gray-400 mb-4">A responsive portfolio website built using React to showcase
                             my projects, skills, and education. It features smooth navigation, reusable components, and
                              a clean layout.
                        </p> 
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⇨</a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}