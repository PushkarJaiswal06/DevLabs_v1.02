import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Brain, Cpu, Database, Cloud, Shield, Bone as Drone } from 'lucide-react';

const Domains = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Domains</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the various technology domains where we excel and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology <span className="text-blue-500">Domains</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our expertise across various cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DomainCard
              icon={<Code2 className="w-8 h-8" />}
              title="Web Development"
              description="Modern web applications using React, Vue, Angular, and other cutting-edge frameworks."
              technologies={['React', 'Vue.js', 'Node.js', 'TypeScript']}
              gradient="from-blue-500 to-cyan-500"
            />
            <DomainCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile Development"
              description="Native and cross-platform mobile applications for iOS and Android."
              technologies={['React Native', 'Flutter', 'Swift', 'Kotlin']}
              gradient="from-purple-500 to-pink-500"
            />
            <DomainCard
              icon={<Brain className="w-8 h-8" />}
              title="Machine Learning"
              description="AI and ML solutions for complex problem-solving and automation."
              technologies={['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV']}
              gradient="from-green-500 to-emerald-500"
            />
            <DomainCard
              icon={<Database className="w-8 h-8" />}
              title="Data Engineering"
              description="Big data processing and analytics solutions."
              technologies={['Hadoop', 'Spark', 'PostgreSQL', 'MongoDB']}
              gradient="from-orange-500 to-red-500"
            />
            <DomainCard
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Computing"
              description="Cloud-native applications and infrastructure solutions."
              technologies={['AWS', 'Azure', 'Docker', 'Kubernetes']}
              gradient="from-indigo-500 to-purple-500"
            />
            <DomainCard
              icon={<Drone className="w-8 h-8" />}
              title="IoT & Drones"
              description="Smart devices and drone system development."
              technologies={['Arduino', 'Raspberry Pi', 'ROS', 'Python']}
              gradient="from-teal-500 to-cyan-500"
            />
            <DomainCard
              icon={<Shield className="w-8 h-8" />}
              title="Cybersecurity"
              description="Security solutions and best practices implementation."
              technologies={['Penetration Testing', 'Encryption', 'Security Auditing']}
              gradient="from-red-500 to-orange-500"
            />
            <DomainCard
              icon={<Cpu className="w-8 h-8" />}
              title="Embedded Systems"
              description="Low-level programming and hardware interfacing."
              technologies={['C/C++', 'Assembly', 'RTOS', 'Microcontrollers']}
              gradient="from-yellow-500 to-orange-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const DomainCard = ({
  icon,
  title,
  description,
  technologies,
  gradient
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
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
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-gray-800/50 text-sm px-3 py-1 rounded-full border border-gray-700 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-800/50 transition-all duration-300"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Domains;