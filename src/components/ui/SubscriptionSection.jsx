import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { CheckCircle, Star, Zap, Calendar, Gift, ArrowRight, X, ShoppingBasket, Users, Clock } from 'lucide-react';

const SubscriptionSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]));

  const subscriptionPlans = [
    {
      id: 'monthly',
      title: 'Monthly Plan',
      subtitle: 'Perfect for Beginners',
      duration: '4 Weekly Deliveries/Month',
      originalPrice: '₹6,396',
      discountedPrice: '₹5,999',
      pricePerBasket: '₹1,500 Per Basket',
      discount: '6% off',
      popular: false,
      color: 'from-emerald-500 to-green-600',
      features: [
        'Fresh seasonal vegetables',
        '3-4 kg mixed veggies',
        'Weekly delivery',
        'Organic & pesticide-free',
        'Farm to doorstep'
      ],
      detailedFeatures: [
        'Fresh seasonal vegetables delivered weekly',
        '3-4 kg mixed vegetables per basket',
        'Organic and pesticide-free produce',
        'Direct farm to doorstep delivery',
        'Flexible delivery schedule',
        'Quality guarantee on all items',
        'Customer support via WhatsApp',
        'Easy subscription management'
      ],
      benefits: [
        'Try our service with minimal commitment',
        'Perfect for small families',
        'Seasonal variety guaranteed',
        'No long-term binding'
      ],
      familySize: '2-3 members',
      deliveryWindow: 'Weekly (Same day each week)',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      id: 'quarterly',
      title: 'Quarterly Plan',
      subtitle: 'Most Popular Choice',
      duration: '4 Weekly Deliveries/Month for 3 Months',
      originalPrice: '₹19,188',
      discountedPrice: '₹14,999',
      pricePerBasket: '₹1,250 Per Basket',
      discount: '22% off',
      popular: true,
      color: 'from-orange-500 to-red-500',
      features: [
        'Best value for money',
        'Seasonal variety guaranteed',
        'Priority customer support',
        'Flexible delivery schedule',
        'Quality assurance'
      ],
      detailedFeatures: [
        'Best value for money with 22% savings',
        'Seasonal variety guaranteed throughout the quarter',
        'Priority customer support via dedicated helpline',
        'Flexible delivery schedule adjustments',
        'Quality assurance with money-back guarantee',
        'Free delivery on all orders',
        'Exclusive seasonal recipes and tips',
        'Early access to premium add-ons'
      ],
      benefits: [
        'Significant savings compared to monthly plan',
        'Consistent supply for 3 months',
        'Priority customer service',
        'Seasonal recipe suggestions included'
      ],
      familySize: '3-4 members',
      deliveryWindow: 'Weekly (Preferred day selection)',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 'semi-annual',
      title: 'Semi Annual Plan',
      subtitle: 'Great Value',
      duration: '4 Weekly Deliveries/Month for 6 Months',
      originalPrice: '₹38,376',
      discountedPrice: '₹26,999',
      pricePerBasket: '₹1,125 Per Basket',
      discount: '30% off',
      popular: false,
      color: 'from-blue-500 to-purple-600',
      features: [
        'Huge savings',
        'Consistent supply',
        'Premium customer care',
        'Seasonal recipe suggestions',
        'Health tracking support'
      ],
      detailedFeatures: [
        'Huge savings of 30% on regular prices',
        'Consistent supply for 6 months',
        'Premium customer care with dedicated manager',
        'Seasonal recipe suggestions and cooking tips',
        'Health tracking support and nutrition guidance',
        'Free home delivery with express options',
        'Exclusive access to exotic vegetables',
        'Complimentary add-ons worth ₹1000'
      ],
      benefits: [
        'Maximum value with 30% discount',
        'Long-term fresh supply security',
        'Premium customer experience',
        'Health and nutrition support included'
      ],
      familySize: '4-5 members',
      deliveryWindow: 'Weekly (Priority scheduling)',
      icon: <Gift className="w-6 h-6" />
    },
    {
      id: 'annual',
      title: 'Annual Plan',
      subtitle: 'Maximum Savings',
      duration: '4 Weekly Deliveries/Month for 12 Months',
      originalPrice: '₹76,752',
      discountedPrice: '₹44,999',
      pricePerBasket: '₹937 Per Basket',
      discount: '41% off',
      popular: false,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Maximum discount',
        'Year-round fresh supply',
        'VIP customer status',
        'Free nutrition consultation',
        'Exclusive add-on discounts'
      ],
      detailedFeatures: [
        'Maximum discount of 41% - best value ever',
        'Year-round fresh supply guaranteed',
        'VIP customer status with priority service',
        'Free nutrition consultation sessions',
        'Exclusive add-on discounts up to 50%',
        'Premium packaging and express delivery',
        'Personal nutrition coach assignment',
        'Complimentary organic herbs and spices',
        'Free seasonal fruit baskets (4 times/year)',
        'Health tracking app premium subscription'
      ],
      benefits: [
        'Unbeatable 41% savings',
        'Complete year-long fresh produce',
        'VIP treatment and premium services',
        'Personal health and nutrition support'
      ],
      familySize: '5+ members or joint families',
      deliveryWindow: 'Weekly (Premium scheduling)',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const handleMouseMove = (event, planId) => {
    if (hoveredPlan === planId) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }
  };

  const handleWhatsAppOrder = (plan) => {
    const message = `Hi! I'm interested in the ${plan.title} - ${plan.duration}. Price: ${plan.discountedPrice}`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  const handleSubscribeNow = () => {
    const message = `Hi! I'd like to subscribe to the ${selectedPlan.title}:
    
📋 Plan Details:
• Duration: ${selectedPlan.duration}
• Price: ${selectedPlan.discountedPrice} (${selectedPlan.discount})
• Per Basket: ${selectedPlan.pricePerBasket}
• Ideal for: ${selectedPlan.familySize}

Please help me complete the subscription process. Thank you!`;
    
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-6"
          >
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Subscription Plans
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your family's fresh, organic vegetable needs. 
            The longer you subscribe, the more you save!
          </motion.p>
        </motion.div>

        {/* Subscription Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              style={{
                rotateX: hoveredPlan === plan.id ? rotateX : 0,
                rotateY: hoveredPlan === plan.id ? rotateY : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, plan.id)}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => {
                setHoveredPlan(null);
                x.set(0);
                y.set(0);
              }}
              onClick={() => handlePlanClick(plan)}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={`relative group cursor-pointer transform-gpu`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="absolute -top-3 -right-3 z-10"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                </motion.div>
              )}

              <div className={`relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-green-300/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{plan.subtitle}</p>
                  
                  {/* Discount Badge */}
                  <div className={`inline-block bg-gradient-to-r ${plan.color} text-white text-sm font-semibold px-3 py-1 rounded-full`}>
                    {plan.discount}
                  </div>
                </div>

                {/* Pricing */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-gray-900">{plan.discountedPrice}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{plan.pricePerBasket}</p>
                  <p className="text-xs text-gray-500">{plan.duration}</p>
                </div>

                {/* Features */}
                <div className="relative z-10 flex-grow mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppOrder(plan);
                  }}
                  className={`relative z-10 w-full bg-gradient-to-r ${plan.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/button`}
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Have questions? Need a custom plan?
          </p>
          <motion.a
            href="https://wa.me/919643722200?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <span>Contact Us on WhatsApp</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>

        {/* Subscription Detail Modal */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Close Button */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Plan Overview */}
                    <div className="space-y-6">
                      {/* Plan Header */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${selectedPlan.color} rounded-2xl mr-4`}>
                            <div className="text-white">
                              {selectedPlan.icon}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                              {selectedPlan.title}
                            </h2>
                            <p className="text-lg text-gray-600">{selectedPlan.subtitle}</p>
                          </div>
                        </div>

                        {/* Popular Badge */}
                        {selectedPlan.popular && (
                          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                            🔥 MOST POPULAR CHOICE
                          </div>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="text-3xl font-bold text-gray-900">{selectedPlan.discountedPrice}</span>
                              <span className="text-xl text-gray-500 line-through ml-3">{selectedPlan.originalPrice}</span>
                            </div>
                            <p className="text-lg font-semibold text-green-600">{selectedPlan.pricePerBasket}</p>
                          </div>
                          <div className={`bg-gradient-to-r ${selectedPlan.color} text-white text-lg font-bold px-4 py-2 rounded-full`}>
                            {selectedPlan.discount}
                          </div>
                        </div>
                        <p className="text-gray-600">{selectedPlan.duration}</p>
                      </div>

                      {/* Plan Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                          <Users className="w-6 h-6 text-blue-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Ideal for</p>
                            <p className="font-semibold">{selectedPlan.familySize}</p>
                          </div>
                        </div>
                        <div className="flex items-center p-4 bg-green-50 rounded-xl">
                          <Clock className="w-6 h-6 text-green-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Delivery</p>
                            <p className="font-semibold">{selectedPlan.deliveryWindow}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plan Features */}
                    <div className="space-y-6">
                      {/* What's Included */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {selectedPlan.detailedFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {selectedPlan.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Subscribe Button */}
                      <motion.button
                        onClick={handleSubscribeNow}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${selectedPlan.color} text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                      >
                        <ShoppingBasket className="w-6 h-6" />
                        <span>Subscribe Now via WhatsApp</span>
                      </motion.button>

                      {/* Money Back Guarantee */}
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <p className="text-sm text-green-700 font-semibold">
                          💚 100% Satisfaction Guaranteed
                        </p>
                        <p className="text-xs text-green-600 mt-1">
                          Not happy? Get full refund within first week
                        </p>
                      </div>
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

export default SubscriptionSection;
