import notesaverlogo from "../assets/notelogo.png";
import dormo from "../assets/dormo.png";
import portfolioimg from "../assets/portfolioimg.webp";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#0f172a] relative"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl top-12 right-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-14 left-12"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-12 relative z-10 text-center">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Project 1 */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg hover:shadow-xl p-6 transition hover:-translate-y-1 border border-gray-700">
          <img
            src={dormo}
            alt="Project 1"
            className="rounded-lg w-full h-48 object-cover mb-5"
          />
          <h3 className="text-xl font-semibold text-white mb-3">
            Food Delivery App
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            <span className="text-red-700">Ongoing...</span><br />
            A full-stack MERN food ordering app with restaurant browsing,
            cart, checkout, order tracking and authentication system.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg font-medium shadow hover:scale-105 transition"
            >
              Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 border border-blue-500 text-blue-400 text-sm rounded-lg font-medium hover:bg-blue-500/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg hover:shadow-xl p-6 transition hover:-translate-y-1 border border-gray-700">
          <img
            src={portfolioimg}
            alt="Project 2"
            className="rounded-lg w-full h-48 object-cover mb-5"
          />
          <h3 className="text-xl font-semibold text-white mb-3">
            Portfolio Website
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            A modern personal portfolio with smooth scrolling navigation,
            animated sections and mobile-friendly UI using React + Tailwind.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg font-medium shadow hover:scale-105 transition"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/iloveuttam/portfolio"
              target="_blank"
              className="px-4 py-2 border border-blue-500 text-blue-400 text-sm rounded-lg font-medium hover:bg-blue-500/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg hover:shadow-xl p-6 transition hover:-translate-y-1 border border-gray-700">
          <img
            src={notesaverlogo}
            alt="Project 3"
            className="rounded-lg w-full h-48 object-cover mb-5"
          />
          <h3 className="text-xl font-semibold text-white mb-3">
            Notes Saver
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            CRUD-based productivity application featuring authentication,
            cloud data storage, and responsive UI built using MERN Stack.
          </p>
          <div className="flex gap-3">
            <a
              href="https://note-saver-tan.vercel.app/"
              target="_blank"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg font-medium shadow hover:scale-105 transition"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/iloveuttam/NoteSaver"
              target="_blank"
              className="px-4 py-2 border border-blue-500 text-blue-400 text-sm rounded-lg font-medium hover:bg-blue-500/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


