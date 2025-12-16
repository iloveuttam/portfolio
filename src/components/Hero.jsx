import { Link } from "react-scroll";
import profileimage from "../assets/uttam.jpg"


const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 "
    >
        <img
            src={profileimage}
            alt="profile"
            className=" relative  h-45 rounded-4xl object-cover shadow-md mb-6 "
            id="profileimage"
            />

      {/* Greeting */}
      <p className="text-gray-600 text-lg mb-2">Hello, I'm</p>

      {/* Name */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Uttam Kumar
      </h1>

      {/* Role / Title */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        MERN Stack Developer & Problem Solver
      </h2>

      {/* Short Bio */}
      <p className="max-w-2xl text-gray-600 leading-relaxed mb-8">
        I build modern, responsive and scalable web applications using
        React, Node.js, Express and MongoDB. I love writing clean code,
        solving DSA problems, and designing user-friendly interfaces.
      </p>
      {/* download-resume */}
      <a href="../public/resume.pdf" download className="mt-5 w-40 h-10 rounded  bg-white font-bold h-8 text-[#155DFC] flex justify-center items-center">
        Download Resume
      </a>

     
      
    </section>
  );
};

export default Hero;

