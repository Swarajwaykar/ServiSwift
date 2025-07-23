import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Booking", path: "/booking" },
    { name: "Payment", path: "/payment" },
    { name: "Services", path: "/services" },
    { name: "Login", path: "/login", primary: true },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 bg-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-700">
          ServiSwift
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ name, path, primary }) => (
            <Link
              key={name}
              to={path}
              className={`${
                primary
                  ? "nav-link-primary"
                  : "nav-link"
              } ${location.pathname === path ? "underline underline-offset-4" : ""}`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-indigo-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow">
          {navItems.map(({ name, path, primary }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 ${
                primary ? "nav-link-primary" : "nav-link"
              } ${location.pathname === path ? "font-semibold" : ""}`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
