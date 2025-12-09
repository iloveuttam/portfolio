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

  // Change navbar background on scroll + detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;
        if (top <= 100 && top >= -el.offsetHeight + 100) {
          setActive(item.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-2xl font-bold cursor-pointer"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className={`cursor-pointer transition ${
                active === item.id ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className={`block py-2 cursor-pointer rounded ${
                active === item.id ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
            
          ))}
          <div className="w-5 h-1 bg-green-500"> heelo</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


