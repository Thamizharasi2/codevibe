import { Link } from "react-router-dom";
import logo from "../assets/codevibe-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="CodeVibe logo"
              className="h-12 w-auto"
              loading="lazy"
            />
            <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              CodeVibe
            </span>
          </div>

          <p className="mt-4 text-purple-200 text-sm leading-relaxed max-w-sm">
            CodeVibe — where ideas meet real-world execution.
            University-approved, viva-ready project solutions for students
            and businesses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav aria-label="Footer navigation">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-purple-200 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/domains" className="hover:text-white transition">
                Domains
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get Started</h4>
          <p className="text-purple-200 text-sm mb-4">
            Have a project in mind? Let’s build it together.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              bg-white text-purple-700
              px-6 py-3
              rounded-xl
              font-semibold
              text-sm
              hover:scale-105
              transition-transform
              shadow-lg
            "
            aria-label="Chat with CodeVibe on WhatsApp"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 text-center py-4 text-purple-200 text-xs sm:text-sm">
        © 2025 CodeVibe. All rights reserved.
      </div>
    </footer>
  );
}
