import { Link } from "react-scroll";
import profileimage from "../assets/uttamfront.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT : Profile Image */}
        <div className="flex justify-center md:justify-start">
         <div className="relative group">
  {/* Gradient glow */}
  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-40 group-hover:opacity-70 transition"></div>

  {/* Image container */}
  <img
    src={profileimage}
    alt="profile"
    className="
      relative
      w-48 h-48
      sm:w-56 sm:h-56
      md:w-100 md:h-100
      object-cover
      rounded-3xl
      border border-white/10
      shadow-2xl
      transition-all duration-300
      group-hover:scale-105
    "
  />
</div>
        </div>

        {/* RIGHT : Content */}
        <div className="text-center md:text-left">
          {/* Greeting */}
          <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-5xl font-bold text-white mb-4">
            Uttam Kumar
          </h1>

          {/* Role */}
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            MERN Stack Developer & Problem Solver
          </h2>

          {/* Bio */}
          <p className="max-w-xl text-gray-300 leading-relaxed mb-8">
            I build modern, responsive and scalable web applications using
            React, Node.js, Express and MongoDB. I love writing clean code,
            solving DSA problems, and designing user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="w-44 h-11 rounded bg-[#1e293b] font-bold text-blue-400 border border-blue-500 hover:bg-blue-500 hover:text-white transition flex justify-center items-center"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="w-44 h-11 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition flex justify-center items-center"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

