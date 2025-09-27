import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, Leaf, ShoppingBag, Users } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1);
  };

  const popularPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Leaf },
    { name: 'Our Farmers', path: '/farmers', icon: Users },
    { name: 'Your Wellness', path: '/you', icon: ShoppingBag }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4 pt-24 pb-12">
      <SEOHead 
        title="Page Not Found - NaturallyGood | 404 Error"
        description="Sorry, the page you're looking for doesn't exist. Discover our fresh organic vegetables and sustainable farming practices at NaturallyGood."
        keywords="404 error, page not found, NaturallyGood, organic vegetables"
        url="https://www.naturallygood.in/404"
      />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.div 
            className="relative mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-[#78B826] to-[#00963E] bg-clip-text leading-none">
              404
            </div>
            
            {/* Floating Vegetables Animation */}
            <motion.div
              className="absolute -top-4 -left-4"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <div className="text-4xl">🥕</div>
            </motion.div>
            
            <motion.div
              className="absolute -top-2 -right-8"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5 
              }}
            >
              <div className="text-3xl">🥬</div>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -left-8"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 8, 0] 
              }}
              transition={{ 
                duration: 2.8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            >
              <div className="text-3xl">🥒</div>
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oops! This Page Got Lost in the Garden
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The page you're looking for seems to have wandered off like a free-range vegetable! 
            Don't worry, our fresh organic content is still growing strong elsewhere.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={goHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-[#78B826] to-[#00963E] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Home Garden
            </motion.button>

            <motion.button
              onClick={goBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-[#78B826] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="w-5 h-5 text-[#78B826]" />
              <h2 className="text-xl font-semibold text-gray-900">
                Explore Our Fresh Sections
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularPages.map((page, index) => (
                <motion.button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-[#78B826] hover:to-[#00963E] hover:text-white transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                >
                  <page.icon className="w-6 h-6 text-[#78B826] group-hover:text-white transition-colors" />
                  <span className="font-medium text-sm text-gray-700 group-hover:text-white transition-colors">
                    {page.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            className="mt-8 p-6 bg-white/70 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <p className="text-gray-600 italic">
              <Leaf className="inline w-4 h-4 text-[#78B826] mr-2" />
              While you're here, did you know that organic vegetables retain up to 40% more nutrients than conventional ones? 
              <br />
              <span className="font-semibold text-[#00963E]">Now that's some food for thought!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;