import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigateToProducts } from '../../utils/navigationUtils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBlogPopup, setShowBlogPopup] = useState(false);
  const navigateToProducts = useNavigateToProducts();

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
    { name: 'Products', href: '#products', isScroll: true },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '#', isBlog: true },
  ];

  const handleGetQuote = () => {
    const message = `Hi! I'm interested in your seasonal veggie baskets and would like to get a quote. Please share the available plans and pricing details.`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    setShowBlogPopup(true);
  };

  const closeBlogPopup = () => {
    setShowBlogPopup(false);
  };

  const handleProductsClick = (e) => {
    navigateToProducts(e);
  };  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/95 shadow-lg border-b border-gray-200/50 py-3'
          : 'backdrop-blur-2xl bg-white/90 py-4'
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Menu Items */}
            <div className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={
                    item.name === 'Products' 
                      ? handleProductsClick 
                      : item.name === 'Blog' 
                      ? handleBlogClick 
                      : undefined
                  }
                  className="relative text-emerald-700 dark:text-emerald-300 font-medium text-base hover:text-emerald-600 dark:hover:text-emerald-200 transition-all duration-200 group cursor-pointer"
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
          </div>

          {/* Get Quote Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Get Quote Button */}
            <motion.button
              onClick={handleGetQuote}
              className="flex items-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Get Quote</span>
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
            className="lg:hidden backdrop-blur-3xl bg-white/85 border-t border-gray-200/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Menu Items */}
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-emerald-700 dark:text-emerald-300 font-semibold text-lg hover:text-emerald-600 dark:hover:text-emerald-200 hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer"
                  onClick={(e) => {
                    if (item.name === 'Products') {
                      handleProductsClick(e);
                    } else if (item.name === 'Blog') {
                      handleBlogClick(e);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Mobile Get Quote Button */}
              <motion.button
                onClick={() => {
                  handleGetQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Get Quote</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Development Popup */}
      <AnimatePresence>
        {showBlogPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 min-h-screen"
            onClick={closeBlogPopup}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-6 sm:p-8 text-center relative mx-auto my-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: '90vh',
                overflow: 'auto'
              }}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeBlogPopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Blog Coming Soon!
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                We're working hard to bring you amazing content about organic farming, 
                seasonal vegetables, and healthy living. Stay tuned!
              </p>

              {/* Action Button */}
              <motion.button
                onClick={closeBlogPopup}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
