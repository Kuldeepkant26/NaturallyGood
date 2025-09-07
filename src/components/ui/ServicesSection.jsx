import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Award, Zap, Leaf, ArrowRight, CheckCircle, X, Users, Target, BookOpen } from 'lucide-react';

// Import vegetable images configuration
import { vegetableImages } from '../../assets/vegetables/imageConfig.js';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]));

  const servicesData = [
    {
      name: 'Naturally Fit',
      description: 'Expert nutrition guidance tailored to your lifestyle for long-term health and fitness.',
      image: vegetableImages['fresh-spinach'],
      price: 'Contact for Pricing',
      icon: <Zap className="w-8 h-8" />,
      category: 'Nutrition Consulting',
      features: [
        'Personalized diet plans',
        'Certified nutritionists',
        'Sustainable & result-driven'
      ],
      services: [
        'Personalised/Custom Perfect Plan',
        'Weekly Followups',
        'Daily/Regular intake tracking',
        'Meal recipes support',
        'Goal Tracking',
        'Tips & Recipes (Health Related)',
        'Monthly Webinar'
      ],
      hasKnowMore: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Naturally Curious',
      description: 'Educational program designed to deepen your understanding of organic farming and sustainable living.',
      image: vegetableImages['exotic-vegetables'],
      price: 'Coming Soon',
      icon: <BookOpen className="w-8 h-8" />,
      category: 'Education Program',
      features: [
        'Farm education tours',
        'Organic farming workshops',
        'Sustainability practices'
      ],
      services: [
        'Guided farm visits',
        'Hands-on farming workshops',
        'Sustainable living seminars',
        'Organic certification guidance',
        'Community farming projects',
        'Environmental impact education'
      ],
      hasKnowMore: true,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Patch Rental Program',
      description: 'Rent your own organic patch and grow your favorite vegetables with our expert guidance.',
      image: vegetableImages['tomato-collection'],
      price: 'Contact for Details',
      icon: <Target className="w-8 h-8" />,
      category: 'Farming Solutions',
      features: [
        'Personal farm patch',
        'Expert guidance',
        'Your own harvest'
      ],
      services: [
        'Dedicated patch allocation',
        'Soil preparation & testing',
        'Seed selection guidance',
        'Regular maintenance support',
        'Harvest assistance',
        'Organic farming training'
      ],
      hasKnowMore: true,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Kitchen Garden Setup',
      description: 'Complete kitchen garden setup and maintenance service for your home.',
      image: vegetableImages['herbs-collection'],
      price: 'Contact for Quote',
      icon: <Leaf className="w-8 h-8" />,
      category: 'Home Gardening',
      features: [
        'Complete setup service',
        'Maintenance support',
        'Organic seeds & supplies'
      ],
      services: [
        'Garden design & planning',
        'Soil preparation',
        'Planting & setup',
        'Irrigation system setup',
        'Ongoing maintenance',
        'Seasonal planting guidance'
      ],
      hasKnowMore: true,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const handleMouseMove = (e, index) => {
    if (!ref.current || hoveredService !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    x.set(deltaX * 0.2);
    y.set(deltaY * 0.2);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const handleKnowMore = (service) => {
    const message = `Hi! I'd like to know more about the ${service.name} program. Can you provide detailed information about the services and pricing?`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6" style={{background: `linear-gradient(to right, #8B5CF6, #3B82F6)`}}>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span style={{background: `linear-gradient(to right, #8B5CF6, #3B82F6)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Our Services
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Professional consultation and specialized programs designed to support your organic lifestyle journey with expert guidance and personalized solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 px-4 sm:px-0">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                rotateX: hoveredService === index ? rotateX : 0,
                rotateY: hoveredService === index ? rotateY : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => {
                setHoveredService(null);
                x.set(0);
                y.set(0);
              }}
              onClick={() => handleServiceClick(service)}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group cursor-pointer transform-gpu relative"
              title={service.name}
            >
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl">
                
                {/* Background Effects */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />
                
                {/* Service Content */}
                <div className="relative z-10">
                  
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {service.category}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl leading-tight group-hover:text-purple-600 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Service Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-40 sm:h-52 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-purple-100', 'to-blue-200');
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center text-purple-600 font-semibold text-xs';
                        fallback.textContent = service.name.split(' ')[0];
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </motion.div>
                  
                  {/* Service Info */}
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    {service.price && (
                      <div className={`text-white text-sm font-semibold px-3 py-1 rounded-full inline-block bg-gradient-to-r ${service.color}`}>
                        {service.price}
                      </div>
                    )}
                    
                    {/* Features Preview */}
                    {service.features && service.features.length > 0 && (
                      <div className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-purple-500 mr-1 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 2 && (
                          <div className="text-xs text-purple-600 font-medium">
                            +{service.features.length - 2} more features
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleKnowMore(service);
                        }}
                        className={`w-full text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} hover:shadow-lg`}
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 sm:p-8">
                  {/* Close Button */}
                  <div className="flex justify-end mb-2 sm:mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors touch-manipulation cursor-pointer"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                    {/* Service Image */}
                    <div className="relative">
                      <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={selectedService.image}
                          alt={selectedService.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-purple-100', 'to-blue-200');
                            const fallback = document.createElement('div');
                            fallback.className = 'absolute inset-0 flex items-center justify-center text-purple-600 font-semibold text-lg';
                            fallback.textContent = selectedService.name;
                            e.target.parentElement.appendChild(fallback);
                          }}
                        />
                        {/* Service Category Badge */}
                        <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 bg-gradient-to-r ${selectedService.color}`}>
                          {selectedService.icon}
                          <span className="hidden sm:inline">{selectedService.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {selectedService.name}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {selectedService.description}
                        </p>
                      </div>

                      {/* Price */}
                      {selectedService.price && (
                        <div className={`text-white text-base sm:text-lg font-semibold px-3 sm:px-4 py-2 rounded-full inline-block bg-gradient-to-r ${selectedService.color}`}>
                          {selectedService.price}
                        </div>
                      )}

                      {/* Features */}
                      {selectedService.features && selectedService.features.length > 0 && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {selectedService.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Services Included */}
                      {selectedService.services && selectedService.services.length > 0 && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Services Included</h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {selectedService.services.map((service, index) => (
                              <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
