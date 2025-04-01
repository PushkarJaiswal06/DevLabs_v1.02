import React from 'react';
import { motion } from 'framer-motion';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-40 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join <span className="text-blue-500">DevLabs</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Create your account and start your journey
          </p>
        </div>

        <RegisterForm />
      </motion.div>
    </div>
  );
};

export default Register; 