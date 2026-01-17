import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/codevibe-logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur shadow-md"
            : "bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700"
        }`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CodeVibe"
            className={`transition-all ${scrolled ? "h-10" : "h-12"}`}
          />
          <span className="font-extrabold text-xl bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
            CodeVibe
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex gap-10 items-center font-medium ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/domains">Domains</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <a
            href="https://wa.me/917867830602"
            target="_blank"
            rel="noreferrer"
            className={`px-5 py-2 rounded-xl font-semibold transition
              ${
                scrolled
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-700"
              }`}
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-5 text-center">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block text-lg font-medium text-gray-800"
          >
            Home
          </NavLink>

          <NavLink
            to="/domains"
            onClick={() => setOpen(false)}
            className="block text-lg font-medium text-gray-800"
          >
            Domains
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-lg font-medium text-gray-800"
          >
            Contact
          </NavLink>

          <a
            href="https://wa.me/917867830602"
            target="_blank"
            rel="noreferrer"
            className="block bg-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
