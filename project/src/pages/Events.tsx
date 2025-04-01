import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import ReactNative from '../assets/ReactNativeWorkshop.png';

const Events = () => {
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
              Upcoming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for exciting workshops, hackathons, and tech talks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
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
              Featured <span className="text-blue-500">Events</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to learn and grow
            </p>
          </motion.div>

          <div className="space-y-8">
          <EventCard
              title="React Native Workshop  "
              date="April 15, 2024"
              time="3:00 PM - 6:00 PM"
              location="Pushpagiri Lecture Hall"
              description="Hands-on workshop series on React Native development."
              image={ReactNative}
              gradient="from-green-500 to-emerald-500"
            />
            <EventCard
              title="Web Development Workshop"
              date="March 15, 2024"
              time="2:00 PM - 5:00 PM"
              location="Aryabhatt Hall"
              description="Learn modern web development techniques and best practices from industry experts."
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              gradient="from-blue-500 to-cyan-500"
            />
            <EventCard
              title="AI/ML Hackathon"
              date="April 1-2, 2024"
              time="9:00 AM - 6:00 PM"
              location="ITRC "
              description="48-hour hackathon focused on solving real-world problems using AI and ML."
              image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              gradient="from-purple-500 to-pink-500"
            />
            
          </div>
        </div>
      </section>
    </div>
  );
};

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  image,
  gradient
}: {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  gradient: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900/80 hover:to-gray-900/50 transition-all duration-300 overflow-hidden"
  >
    <div className="md:flex">
      <div className="md:w-1/3 relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover md:h-full"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20`} />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="h-5 w-5 mr-2 text-purple-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="h-5 w-5 mr-2 text-green-500" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <span>Register Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default Events;