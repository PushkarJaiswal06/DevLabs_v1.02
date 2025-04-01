import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Environment } from '@react-three/drei';
import AnimatedSphere from '../components/AnimatedSphere';
import { Code2, Cpu, Brain, EarthLock as Drone, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <AnimatedSphere />
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment preset="city" />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                DevLabs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building the future through community, innovation, and technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2 mx-auto"
            >
              Join Our Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-500">Domains</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of technology domains and find your path to innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DomainCard
              icon={<Code2 className="h-12 w-12" />}
              title="Web Development"
              description="Build modern, responsive web applications using cutting-edge technologies."
              gradient="from-blue-500 to-cyan-500"
            />
            <DomainCard
              icon={<Cpu className="h-12 w-12" />}
              title="Mobile Development"
              description="Create native and cross-platform mobile applications."
              gradient="from-purple-500 to-pink-500"
            />
            <DomainCard
              icon={<Brain className="h-12 w-12" />}
              title="ML/AI"
              description="Explore machine learning and artificial intelligence solutions."
              gradient="from-green-500 to-emerald-500"
            />
            <DomainCard
              icon={<Drone className="h-12 w-12" />}
              title="Blockchain Development"
              description="Dive into the world of blockchain technology and smart contracts."
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="text-blue-500">Join</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of a growing community of developers and innovators.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2 mx-auto"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const DomainCard = ({ 
  icon, 
  title, 
  description, 
  gradient 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  gradient: string 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900/80 hover:to-gray-900/50 transition-all duration-300"
  >
    <div className={`bg-gradient-to-r ${gradient} p-3 rounded-lg w-fit mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;