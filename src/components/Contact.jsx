const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
    >
      {/* Decorative blurred circles */}
      <div className="absolute w-64 h-64 bg-blue-200/40 rounded-full blur-3xl top-12 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-200/40 rounded-full blur-3xl bottom-10 right-12"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-10 relative z-10 text-center">
        Contact <span className="text-blue-600">Me</span>
      </h2>

      {/* Wrapper */}
      <div className="relative z-10 max-w-3xl w-full bg-white rounded-xl shadow-md p-8">
        {/* Message */}
        <p className="text-center text-gray-700 mb-8 text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              placeholder="Write your message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-xl hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="text-center mt-10">
          <p className="text-gray-700 font-medium mb-4">Or connect with me on</p>
          <div className="flex items-center justify-center gap-6 text-lg text-blue-600">
            <a href="#" target="_blank" className="hover:text-blue-800 transition">LinkedIn</a>
            <a href="#" target="_blank" className="hover:text-blue-800 transition">GitHub</a>
            <a href="#" target="_blank" className="hover:text-blue-800 transition">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

