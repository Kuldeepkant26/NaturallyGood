import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigateToProducts } from '../../utils/navigationUtils';
import NaturallyGoodLogo from '../../assets/NaturalyGoodLogo.jpeg';
import NGlogo from '../../assets/NGlogo.png';
import NGlogoText from '../../assets/NGlogoText.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBlogPopup, setShowBlogPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigateToProducts = useNavigateToProducts();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Basic scroll state for styling
      setIsScrolled(currentScrollY > 20);
      
      // Don't hide navbar on mobile when menu is open
      const isMobile = window.innerWidth < 1024;
      if (isMobile && isMobileMenuOpen) {
        return;
      }
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past initial threshold - hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }
      
      // Always show navbar when at the very top
      if (currentScrollY <= 50) {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
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
  }, [lastScrollY, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Products', href: '#products', isScroll: true },
    { name: 'Farmers', href: '/farmers' },
    { name: 'Nature', href: '/nature' },
    { name: 'You', href: '/you' },
    { name: 'Us', href: '/about' },
  ];

  const handleContactUs = (e) => {
    if (e) {
      e.preventDefault();
    }
    setShowContactPopup(true);
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    setShowBlogPopup(true);
  };

  const closeBlogPopup = () => {
    setShowBlogPopup(false);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  const handleProductsClick = (e) => {
    navigateToProducts(e);
  };

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    
    // Close mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // Extract section ID from href
    const sectionId = href.replace('#', '');
    
    // If we're not on the home page, navigate to home first using React Router
    if (window.location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    
    // Small delay to allow mobile menu to close
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate offset for mobile devices to account for navbar
        const isMobile = window.innerWidth < 1024;
        const offset = isMobile ? 80 : 60; // More offset for mobile
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
      }
    }, 200); // Wait for menu close animation
  };

  const handleAppDownload = () => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // iOS detection (iPhone, iPad, iPod, Mac)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
    
    // Android/Windows detection
    const isAndroid = /android/i.test(userAgent);
    const isWindows = /Windows/.test(userAgent);
    
    // App Store URLs from OurAppPage
    const appStoreUrl = "https://apps.apple.com/in/app/naturally-good/id6749650953";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.naturallygood.app";
    
    // Redirect based on device
    if (isIOS || isMac) {
      window.open(appStoreUrl, '_blank', 'noopener,noreferrer');
    } else if (isAndroid || isWindows) {
      window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Default to Play Store for other devices
      window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ 
        opacity: showNavbar ? 1 : 0, 
        y: showNavbar ? (isNavbarVisible ? 0 : -100) : -80 
      }}
      transition={{ 
        duration: showNavbar ? (isNavbarVisible ? 0.3 : 0.3) : 0.8, 
        ease: showNavbar ? "easeInOut" : "easeOut" 
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-xl bg-white/95 shadow-lg border-b border-gray-200/50 py-3'
          : 'backdrop-blur-2xl bg-white/90 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src={NGlogo}
                alt="NaturallyGood Logo"
                className="w-12 h-12 mix-blend-darken"
              />
              <img
                src={NGlogoText}
                alt="Naturally Good"
                className="h-8 pt-2"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Menu Items */}
            <div className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                item.isScroll ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
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
                ) : (
                  <motion.div
                    key={item.name}
                    className="relative"
                    whileHover={{ y: -1 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={item.name === 'Blog' ? handleBlogClick : undefined}
                      className="relative text-emerald-700 dark:text-emerald-300 font-medium text-base hover:text-emerald-600 dark:hover:text-emerald-200 transition-all duration-200 group cursor-pointer"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                      />
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </div>

          {/* Home, Call, Email & WhatsApp Icons & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Home, Call, Email & WhatsApp Icons - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Home Icon */}
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <Link
                  to="/"
                  className="text-emerald-700 hover:text-emerald-600 transition-colors duration-300"
                  title="Go Home"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                </Link>
              </motion.div>

              {/* Call Icon */}
              <motion.a
                href="tel:+919643722200"
                className="text-emerald-700 hover:text-emerald-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                title="Call Us"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.a>

              {/* WhatsApp Icon */}
              <motion.a
                href="https://wa.me/919643722200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                title="WhatsApp Us"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </motion.a>

              {/* Email Icon */}
              <motion.a
                href="mailto:EatFresh@NaturallyGood.in"
                className="text-emerald-700 hover:text-emerald-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                title="Email Us"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </motion.a>

              {/* Download App Icon - Navigate to App Page */}
              <motion.div
                className="text-emerald-700 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                title="Download App"
                onClick={handleAppDownload}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H7V6h10v10z"/>
                  <circle cx="12" cy="17" r="1"/>
                </svg>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-all duration-200 backdrop-blur-sm"
              style={{ color: '#00963E' }}
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
          <>
            {/* Overlay to prevent background scrolling */}
            <div className="fixed inset-0 z-40 lg:hidden" style={{overflow: 'hidden'}} />
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-200/30 fixed top-0 left-0 w-full z-50"
            >
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200/30">
                <div className="flex items-center">
                  <img src={NGlogo} alt="Naturally Good" className="w-8 h-8" />
                  <img
                    src={NGlogoText}
                    alt="Naturally Good"
                    className="h-6 pt-1.5"
                  />
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

            <div className="px-4 py-6 space-y-4">
              {/* Mobile Menu Items */}
              {menuItems.map((item, index) => (
                item.isScroll ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 font-semibold text-lg hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer"
                    style={{ color: '#00963E' }}
                    onClick={(e) => {
                      handleScrollToSection(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={item.href}
                      className="block px-4 py-3 font-semibold text-lg hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer"
                      style={{ color: '#00963E' }}
                      onClick={(e) => {
                        if (item.name === 'Blog') {
                          handleBlogClick(e);
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              ))}

              {/* Mobile Contact & Action Buttons */}
              <div className="mt-4">
                {/* All buttons in one row */}
                <div className="flex space-x-2">
                  {/* Mobile Home Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Link
                      to="/"
                      className="w-full px-2 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                      style={{background: 'linear-gradient(to right, #79B927, #00963F)'}}
                      onClick={() => setIsMobileMenuOpen(false)}
                      title="Home"
                    >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    </Link>
                  </motion.div>

                  {/* Mobile Call Button */}
                  <motion.a
                    href="tel:+919643722200"
                    className="flex-1 px-2 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                    style={{background: 'linear-gradient(to right, #79B927, #00963F)'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title="Call"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </motion.a>

                  {/* Mobile WhatsApp Button */}
                  <motion.a
                    href="https://wa.me/919643722200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-2 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                    style={{background: 'linear-gradient(to right, #79B927, #00963F)'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </motion.a>

                  {/* Mobile Email Button */}
                  <motion.a
                    href="mailto:EatFresh@NaturallyGood.in"
                    className="flex-1 px-2 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
                    style={{background: 'linear-gradient(to right, #79B927, #00963F)'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    title="Email"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Mobile Download App Section */}
              <div className="mt-6 pt-4 border-t border-gray-200/30">
                <motion.div
                  onClick={() => {
                    handleAppDownload();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H7V6h10v10z"/>
                    <circle cx="12" cy="17" r="1"/>
                  </svg>
                  <span>Download Our App</span>
                </motion.div>
              </div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Blog Development Popup */}
      <AnimatePresence>
        {showBlogPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-[9999] p-4 min-h-screen"
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

      {/* Contact Us Development Popup */}
      <AnimatePresence>
        {showContactPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-[9999] p-4 min-h-screen"
            onClick={closeContactPopup}
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
                  onClick={closeContactPopup}
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Feature Under Development!
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                We're working on building an amazing contact system for you.
                In the meantime, you can reach us directly via WhatsApp or phone!
              </p>

              {/* Action Button */}
              <motion.button
                onClick={closeContactPopup}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Understood!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
