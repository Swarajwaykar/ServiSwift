import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Services", "Pricing", "Contact"];

  return (
    <nav className="w-full px-6 md:px-16 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-700 dark:text-white">ServiSwift</h1>

      <div className="hidden md:flex space-x-8">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-xl text-indigo-700 dark:text-yellow-300 hover:text-indigo-500">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-indigo-700 dark:text-white">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-800 p-6 z-40 flex flex-col space-y-6 shadow-2xl"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
