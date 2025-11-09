import React from 'react';
import { motion } from 'framer-motion';

export default function BirthdayPage() {
  const name = 'Apoorva';
  const message = 'Wishing you a day filled with love, laughter, and endless happiness! 🎂💖';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 p-6 text-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-pink-600 drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Happy Birthday {name}! 🎉
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xs sm:max-w-sm bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border-0 p-5 flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg mb-4">
          <img
            src="apoorva.jpg"
            alt={`${name}'s portrait`}
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
          {message}
        </p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg px-6 py-2"
        >
          🎁 Send Love
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-8 text-pink-700 font-medium text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Made with 💖 by Bharrat Gehlot
      </motion.div>
    </div>
  );
}
