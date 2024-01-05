"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';


const navLinks = [
  { text: 'H O M E', href: '/' },
  { text: 'S T O R E', href: '/store' },
  { text: "S I N G -- U P", href: '/signup' },

];

export default function SideNavBar() {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between h-[350px] bg-gradient-to-r from-purple-600 to-pink-500 p-4"
    >
      <div className="flex flex-col items-center">
        {navLinks.map((link) => (
          <motion.div
            key={link.text}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link className="text-white font-bold my-4 text-xl" href={link.href}>
              {link.text}
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white text-sm mb-2"
      >
        &copy; 2024 Future World
      </motion.p>
    </motion.div>
  );
}
