import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleShowNavbar = () => {
      setShowNavbar(true);
    };

    // Show navbar immediately on non-home pages or after delay on home page
    const isHomePage = window.location.pathname === '/';
    if (!isHomePage) {
      setShowNavbar(true);
    } else {
      // Listen for custom event from HeroSection
      window.addEventListener('showNavbar', handleShowNavbar);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('showNavbar', handleShowNavbar);
    };
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-3xl bg-white/10 shadow-lg border-b border-white/10 py-3'
          : 'backdrop-blur-2xl bg-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">NG</span>
              </div>
              <span className="text-emerald-800 dark:text-emerald-300 font-bold text-xl tracking-tight">
                NaturallyGood
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu & Search */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Menu Items */}
            <div className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-emerald-700 dark:text-emerald-300 font-medium text-base hover:text-emerald-600 dark:hover:text-emerald-200 transition-all duration-200 group"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  />
                </motion.a>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2.5 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-emerald-800 dark:text-emerald-200 placeholder-emerald-600 dark:placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <motion.button
              className="flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">Login</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2.5 text-emerald-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden backdrop-blur-3xl bg-white/10 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <motion.div
                className="relative mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-emerald-800 dark:text-emerald-200 placeholder-emerald-600 dark:placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.div>

              {/* Mobile Menu Items */}
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-emerald-700 dark:text-emerald-300 font-semibold text-lg hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-white/10 rounded-xl transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
