import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
    className="bg-white mt-16 py-6"
  >
    <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
      © 2025 ServiSwift. Built with ❤️ using Microservices + React.
    </div>
  </motion.footer>
);

export default Footer;
