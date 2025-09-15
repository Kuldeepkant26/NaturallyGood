import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NGlogo from '../../assets/NGlogo.png';

const SplashScreen = ({ onComplete, minimumDisplayTime = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-complete after minimum time
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation before calling onComplete
      setTimeout(() => {
        onComplete && onComplete();
      }, 800);
    }, minimumDisplayTime);

    return () => clearTimeout(timer);
  }, [minimumDisplayTime, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full z-[99999] bg-white flex items-center justify-center"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh',
            zIndex: 99999 
          }}
        >
          {/* Subtle background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-green-50/30" />
          
          {/* Main Content Container */}
          <div className="relative z-10 text-center">
            
            {/* Logo with elegant animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80
              }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.img
                  src={NGlogo}
                  alt="Naturally Good"
                  className="w-20 h-20 md:w-24 md:h-24"
                  animate={{ 
                    rotateY: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400 rounded-full opacity-10 blur-2xl"
                  animate={{ 
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Brand Name with sophisticated typography */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
                <span className="font-medium text-emerald-700">Naturally</span>
                <span className="text-gray-700 mx-2">Good</span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-4"
              />
            </motion.div>

            {/* Minimalist loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="flex items-center space-x-1">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Minimal floating elements for subtle animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-32 h-32 bg-emerald-100 rounded-full opacity-5"
                style={{
                  left: `${20 + index * 30}%`,
                  top: `${20 + index * 25}%`,
                }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;