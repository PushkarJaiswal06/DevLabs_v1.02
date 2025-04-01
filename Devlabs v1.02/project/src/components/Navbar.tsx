import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JoinCommunityForm from './JoinCommunityForm';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showJoinForm, setShowJoinForm] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { user, logout } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
              </motion.div>
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                DevLabs
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/domains">Domains</NavLink>
              {user ? (
                <>
                  <NavLink to="/profile">
                    <User className="h-5 w-5 inline-block mr-1" />
                    Profile
                  </NavLink>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Logout
                  </motion.button>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-medium"
                    onClick={() => setShowJoinForm(true)}
                  >
                    Join Community
                  </motion.button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink to="/events" onClick={() => setIsOpen(false)}>
                    Events
                  </MobileNavLink>
                  <MobileNavLink to="/domains" onClick={() => setIsOpen(false)}>
                    Domains
                  </MobileNavLink>
                  {user ? (
                    <>
                      <MobileNavLink to="/profile" onClick={() => setIsOpen(false)}>
                        <User className="h-5 w-5 inline-block mr-1" />
                        Profile
                      </MobileNavLink>
                      <button
                        className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors flex items-center"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-5 w-5 mr-1" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <MobileNavLink to="/login" onClick={() => setIsOpen(false)}>
                        Login
                      </MobileNavLink>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full text-left px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500"
                        onClick={() => {
                          setIsOpen(false);
                          setShowJoinForm(true);
                        }}
                      >
                        Join Community
                      </motion.button>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <JoinCommunityForm 
        isOpen={showJoinForm} 
        onClose={() => setShowJoinForm(false)} 
      />
    </>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative text-gray-300 hover:text-white transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const MobileNavLink = ({ 
  to, 
  onClick, 
  children 
}: { 
  to: string; 
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;