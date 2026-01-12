import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/codevibe-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md py-2"
            : "bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="CodeVibe Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-12" : "h-16 md:h-24"
            } w-auto`}
          />
          <span
            className={`font-extrabold transition-all duration-300 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent
              ${scrolled ? "text-2xl" : "text-3xl md:text-5xl"}`}
          >
            CodeVibe
          </span>
        </Link>

        {/* NAV LINKS */}
        <div
          className={`hidden md:flex gap-10 font-medium items-center transition-colors
            ${scrolled ? "text-gray-800" : "text-white"}`}
        >
          <NavLink to="/" className="hover:text-cyan-400 transition">
            Home
          </NavLink>
          <NavLink to="/domains" className="hover:text-cyan-400 transition">
            Domains
          </NavLink>
          <NavLink to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </NavLink>

          <a
            href="https://wa.me/917867830602"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-xl font-semibold transition
              ${
                scrolled
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-purple-700 hover:scale-105"
              }`}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
