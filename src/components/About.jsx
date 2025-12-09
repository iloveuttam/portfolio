const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center px-6 py-20 "
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-purple-200/40 rounded-full blur-3xl top-8 right-10"></div>
      <div className="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-3xl bottom-12 left-12"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image (Optional) */}
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-52 h-52 object-cover rounded-2xl shadow-md border-4 border-white"
          />

          {/* About Content */}
          <div className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            <p className="mb-6">
              I am a passionate <span className="font-semibold text-blue-600">MERN Stack Developer</span> focused on
              building user-friendly, scalable and high-performance web applications. With expertise in
              React, Node.js, Express and MongoDB, I strive to turn ideas into real-world products.
            </p>

            <p className="mb-6">
              I enjoy writing clean code, solving Data Structures & Algorithms problems, and constantly learning
              new technologies. I love creating seamless user experiences through well-designed UI and efficient
              backend logic.
            </p>

            <p className="mb-2">
              Beyond development, I am enthusiastic about:
            </p>
            <ul className="list-disc text-left mx-auto md:mx-0 text-gray-700 space-y-2 pl-6">
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

