const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-blue-200/40 rounded-full blur-3xl top-12 left-16"></div>
      <div className="absolute w-72 h-72 bg-purple-200/40 rounded-full blur-3xl bottom-16 right-12"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12 relative z-10 text-center">
        My <span className="text-blue-600">Skills</span>
      </h2>

      {/* Skill Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* Frontend Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Frontend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>React.js</li>
            <li>HTML5 / CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS / Bootstrap</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Backend Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Backend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API Development</li>
            <li>Authentication (JWT, Bcrypt)</li>
          </ul>
        </div>

        {/* Database Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Database & Storage</h3>
          <ul className="space-y-2 text-gray-700">
            <li>MongoDB</li>
            <li>Mongoose ODM</li>
            <li>Atlas Cloud</li>
          </ul>
        </div>

        {/* Tools Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Tools & Platforms</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Render / Vercel / Netlify Hosting</li>
          </ul>
        </div>

        {/* DSA Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Data Structures & Algorithms</h3>
          <ul className="space-y-2 text-gray-700">
            <li>200+ DSA Questions Solved</li>
            <li>Arrays, Strings, Linked Lists</li>
            <li>Recursion & Backtracking</li>
            <li>Trees & Graphs</li>
            <li>Dynamic Programming</li>
          </ul>
        </div>

        {/* Soft Skills Card */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Soft Skills</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork & Collaboration</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

