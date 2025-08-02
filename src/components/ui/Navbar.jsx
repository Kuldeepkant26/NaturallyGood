import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 shadow-2xl border-b border-emerald-100/30 py-3'
          : 'backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo - Larger and More Prominent */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-2xl">NG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-800 dark:text-emerald-300 font-bold text-xl lg:text-2xl tracking-tight">
                  NaturallyGood
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs lg:text-sm font-medium -mt-1">
                  Organic Harvest
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Menu - Clean and Minimalist */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-emerald-700 dark:text-emerald-300 font-medium text-lg hover:text-emerald-600 dark:hover:text-emerald-200 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </motion.a>
            ))}
          </div>

          {/* Right Side Buttons - More Spaced and Modern */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <motion.button
              className="hidden sm:flex items-center px-4 py-2 text-emerald-700 dark:text-emerald-300 font-semibold text-base transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </motion.button>

            {/* Book a Call Button - Premium Design */}
            <motion.button
              className="relative flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-700 hover:via-emerald-800 hover:to-emerald-900 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline relative z-10">Book a Call</span>
              <span className="sm:hidden relative z-10">Call</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 text-emerald-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-emerald-100/30"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-emerald-700 dark:text-emerald-300 font-semibold text-lg hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Login Button */}
              <motion.button
                className="w-full text-left px-4 py-3 text-emerald-700 dark:text-emerald-300 font-semibold text-lg hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl transition-all duration-300 flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: menuItems.length * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
