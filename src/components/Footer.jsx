import { Link } from "react-router-dom";
import logo from "../assets/codevibe-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="CodeVibe" className="h-14 w-auto" />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
              CodeVibe
            </span>
          </div>

          <p className="mt-4 text-purple-200 max-w-sm">
            CodeVibe — where ideas meet real-world execution.  
            University-approved, viva-ready project solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-purple-200">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/domains" className="hover:text-white">Domains</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get Started</h4>
          <p className="text-purple-200 mb-4">
            Have a project in mind? Let’s build it.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 text-center py-4 text-purple-200 text-sm">
        © {new Date().getFullYear()} CodeVibe. All rights reserved.
      </div>
    </footer>
  );
}
