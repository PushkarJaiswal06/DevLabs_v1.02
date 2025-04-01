import React from 'react';
import { Github, Twitter, Linkedin, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">DevLabs</span>
            </div>
            <p className="text-sm">
              Empowering developers to build the future through community, learning, and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="/events" className="hover:text-blue-500 transition-colors">Events</a></li>
              <li><a href="/domains" className="hover:text-blue-500 transition-colors">Domains</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Domains</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>ML/AI</li>
              <li>IoT/Drone Systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DevLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;