import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#0f172a] relative"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl top-12 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-12"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-10 relative z-10 text-center">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      {/* Wrapper */}
      <div className="relative z-10 max-w-3xl w-full bg-[#1e293b] rounded-xl shadow-lg p-8 border border-gray-700">
        {/* Message */}
        <p className="text-center text-gray-300 mb-8 text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:uttamkr069@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
  }}
>
  <div>
    <label className="block text-gray-300 mb-1 font-medium">
      Your Name
    </label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      className="w-full bg-[#0f172a] border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  <div>
    <label className="block text-gray-300 mb-1 font-medium">
      Your Email
    </label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="w-full bg-[#0f172a] border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  <div>
    <label className="block text-gray-300 mb-1 font-medium">
      Message
    </label>
    <textarea
      name="message"
      placeholder="Write your message"
      rows="5"
      className="w-full bg-[#0f172a] border border-gray-600 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow hover:shadow-xl hover:scale-105 transition"
  >
    Send Message
  </button>
</form>


        {/* Social Links */}
        <div className="text-center mt-10">
          <p className="text-gray-300 font-medium mb-4">
            Or connect with me on
          </p>
          <div className="flex  items-center justify-center gap-6 text-lg text-blue-400">
            <div className="flex  items-center justify-center gap-1.5">
            <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/iloveuttam/"
                  target="_blank"
                  className="hover:text-blue-300 transition"
                >
                  LinkedIn
                </a>
            </div>
            <div className="flex  items-center justify-center gap-1.5">
                 <FaGithub />
                <a
                  href="https://github.com/iloveuttam"
                  target="_blank"
                  className="hover:text-blue-300 transition"
                >
                  GitHub
                </a>
            </div>
           <div className="flex  items-center justify-center gap-1">
               <FaInstagram />
                <a
                  href="https://www.instagram.com/iloveuttam/"
                  target="_blank"
                  className="hover:text-blue-300 transition"
                >
                  Instagram
                </a>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


