import udaipurimg from "../assets/udaipurimg.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center px-6 py-20 bg-[#0f172a]"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl top-8 right-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-12 left-12"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-6">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
           <img
              src={udaipurimg}
              alt="profile"
              className="
                w-70 h-70 object-cover rounded-2xl
                border-4 border-blue-400/40
                shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                hover:scale-105 hover:shadow-[0_30px_60px_rgba(59,130,246,0.45)]
                transition duration-300 ease-out
              "
            />



          {/* About Content */}
          <div className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            <p className="mb-6">
              I am a passionate{" "}
              <span className="font-semibold text-blue-400">
                MERN Stack Developer
              </span>{" "}
              focused on building user-friendly, scalable and high-performance
              web applications. With expertise in React, Node.js, Express and
              MongoDB, I strive to turn ideas into real-world products.
            </p>

            <p className="mb-6">
              I enjoy writing clean code, solving Data Structures & Algorithms
              problems, and constantly learning new technologies. I love
              creating seamless user experiences through well-designed UI and
              efficient backend logic.
            </p>

            <p className="mb-2 text-gray-400">
              Beyond development, I am enthusiastic about:
            </p>

            <ul className="list-disc text-left mx-auto md:mx-0 text-gray-300 space-y-2 pl-6">
              <li>Learning new tech and developer tools</li>
              <li>Contributing to real-world projects</li>
              <li>Improving problem-solving skills daily</li>
              <li>Exploring UI/UX concepts for better usability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


