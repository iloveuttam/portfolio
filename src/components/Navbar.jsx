import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;
        if (top <= 120 && top >= -el.offsetHeight + 120) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur border-b border-gray-700 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          offset={-70}
          className="text-2xl font-bold cursor-pointer text-white tracking-wide"
        >
          Uttam<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-70}
              className={`cursor-pointer font-medium transition relative ${
                active === item.id
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-400 rounded"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-700 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-70}
              className={`block py-2 rounded text-lg transition ${
                active === item.id
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;



