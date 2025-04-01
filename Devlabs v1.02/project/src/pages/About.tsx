import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Github, Linkedin, Twitter } from 'lucide-react';
import PJ from '../assets/Pushkar1.jpg';
import Sandeep from '../assets/SandeepSingh.png';
import Saksham from '../assets/SakshamMishra.png';

const About = () => {
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
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">DevLabs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DevLabs is a thriving tech community dedicated to fostering innovation,
              learning, and collaboration among developers across various domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our <span className="text-blue-500">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The core principles that guide our community and drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard
              icon={<Users className="h-12 w-12" />}
              title="Community"
              description="Building a supportive network of developers who learn, grow, and innovate together."
              gradient="from-blue-500 to-cyan-500"
            />
            <ValueCard
              icon={<Target className="h-12 w-12" />}
              title="Excellence"
              description="Striving for excellence in everything we do, from code quality to project execution."
              gradient="from-purple-500 to-pink-500"
            />
            <ValueCard
              icon={<Lightbulb className="h-12 w-12" />}
              title="Innovation"
              description="Encouraging creative solutions and pushing the boundaries of technology."
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-blue-500">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate individuals driving innovation and community growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              image={PJ}
              name="Pushkar Jaiswal"
              role="Community Lead"
              socialLinks={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com"
              }}
            />
            <TeamMember
              image={Sandeep}
              name="Sandeep Singh"
              role="Technical Lead"
              socialLinks={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com"
              }}
            />
            <TeamMember
              image={Saksham}
              name="Saksham Mishra"
              role="Events Coordinator"
              socialLinks={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ 
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
    <div className={`bg-gradient-to-r ${gradient} p-3 rounded-lg w-fit mb-4 mx-auto`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </motion.div>
);

const TeamMember = ({ 
  image, 
  name, 
  role,
  socialLinks 
}: { 
  image: string, 
  name: string, 
  role: string,
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  }
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900/80 hover:to-gray-900/50 transition-all duration-300"
  >
    <div className="relative mb-8">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-800"
      />
    </div>
    <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
    <p className="text-gray-400 text-center mb-4">{role}</p>
    <div className="flex justify-center space-x-4">
      <SocialLink href={socialLinks.github} icon={<Github className="w-5 h-5" />} />
      <SocialLink href={socialLinks.linkedin} icon={<Linkedin className="w-5 h-5" />} />
      <SocialLink href={socialLinks.twitter} icon={<Twitter className="w-5 h-5" />} />
    </div>
  </motion.div>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, color: '#3b82f6' }}
    className="text-gray-400 hover:text-blue-500 transition-colors"
  >
    {icon}
  </motion.a>
);

export default About;