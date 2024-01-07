"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signIn, useSession , signOut } from 'next-auth/react';



const navLinks = [
  { text: 'H O M E', href: '/' },
  { text: 'S T O R E', href: '/store' },

];

export default function SideNavBar() {
  
  const { data: session } = useSession();
  console.log(session);
  



  return (
    <>
      {session?.user ? (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between h-[350px] bg-gradient-to-r from-purple-600 to-pink-500 p-4"
        >
        
        <p className='text-xl text-center mb-4'>{session.user.name}</p>
<div className='flex items-center justify-center mb-4'>
  <img
    src={session.user.image as string}
    alt="perfil"
    className='w-16 h-16 rounded-full cursor-pointer border-2 border-gray-300'
  />
</div>
<p className='text-sm text-center'>{session.user.email}</p>

<button onClick={() => signOut()} className='bg-white text-black px-4 py-2 rounded-full mt-4 flex justify-end'>
  Log Out
</button>
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
      ) : (
        
        <div className="flex flex-col items-center justify-center space-y-4">
        <button
          onClick={() => signIn()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign in with Google
        </button>
        <Link className="text-white font-bold text-xl underline hover:text-gray-300" href="/signup">
           
          Sign up Manual
          
        </Link>
        <Link className="text-white font-bold text-xl underline hover:text-gray-300" href="/login">
           
           Login
           
         </Link>
      </div>
      )}

   
    </>
  );
}
