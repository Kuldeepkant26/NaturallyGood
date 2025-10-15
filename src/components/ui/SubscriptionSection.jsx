import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Star, Zap, Calendar, Gift, ArrowRight, X, ShoppingBasket, Users, Clock, Crown } from 'lucide-react';

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Helper function to get gradient styles
  const getGradientStyle = (plan) => {
    if (plan.colorStyle) {
      return plan.colorStyle;
    }
    return {}; // Keep original colors for other plans
  };

  
  const subscriptionPlans = [
    {
      id: 'monthly',
      title: 'WELLNESS STARTER',
      subtitle: 'Monthly',
      duration: '4 Weekly Delivery/Month • 1 Month',
      originalPrice: '₹7,596',
      discountedPrice: '₹7,499',
      pricePerBasket: '₹1,875 per 10 kg bag',
      pricePerDay: '₹250 per day',
      discount: '1% off',
      popular: false,
      color: 'from-light-green to-dark-green',
      colorStyle: {background: `linear-gradient(to right, #79B927, #00963F)`},
      organicBags: '4',
      standardizedBenefits: [
        { name: 'Organic Vegetable Bags', value: '4', included: true },
        { name: 'Dedicated Wellness Advisor', included: true },
        { name: 'Recipe Support', included: true },
        { name: 'Bag Customisation', included: true },
        { name: 'Complimentary Farm Visit', included: false },
        { name: 'Pure Raw Honey', included: false },
        { name: 'A2 Pure Cow Ghee', included: false },
        { name: 'Exclusive Harvest', included: false },
        { name: 'Organic Farming Training', included: false },
        { name: 'Naturally Fit (Nutrition Guidance)', included: false }
      ],
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
      familySize: '3-5 members',
      deliveryWindow: 'Weekly (Same day each week)',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      id: 'quarterly',
      title: 'WELLNESS PLUS',
      subtitle: 'Quarterly',
      duration: '4 Weekly Delivery/Month • 3 Months',
      originalPrice: '₹22,788',
      discountedPrice: '₹17,999',
      pricePerBasket: '₹1,500 per 10 kg bag',
      pricePerDay: '₹195 per day',
      discount: '21% off',
      popular: true,
      color: 'from-emerald-400 to-emerald-600',
      colorStyle: {background: `linear-gradient(to right, #9AC5A9, #7FB069)`},
      organicBags: '12',
      standardizedBenefits: [
        { name: 'Organic Vegetable Bags', value: '12', included: true },
        { name: 'Dedicated Wellness Advisor', included: true },
        { name: 'Recipe Support', included: true },
        { name: 'Bag Customisation', included: true },
        { name: 'Complimentary Farm Visit', included: true },
        { name: 'Pure Raw Honey', value: '300 Gms', included: true },
        { name: 'A2 Pure Cow Ghee', included: false },
        { name: 'Exclusive Harvest', included: false },
        { name: 'Organic Farming Training', included: false },
        { name: 'Naturally Fit (Nutrition Guidance)', included: false }
      ],
      features: [
        'Best value for money',
        'Seasonal variety guaranteed',
        'Priority customer support',
        'Flexible delivery schedule',
        'Quality assurance'
      ],
      detailedFeatures: [
        'Best value for money with 21% savings',
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
      familySize: '3-5 members',
      deliveryWindow: 'Weekly (Preferred day selection)',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 'semi-annual',
      title: 'WELLNESS PREMIUM',
      subtitle: 'Semi Annual',
      duration: '4 Weekly Delivery/Month • 6 Months',
      originalPrice: '₹45,576',
      discountedPrice: '₹32,999',
      pricePerBasket: '₹1,375 per 10 kg bag',
      pricePerDay: '₹180 per day',
      discount: '28% off',
      recommended: true,
      color: 'from-yellow-400 to-yellow-500',
      colorStyle: {background: `linear-gradient(to right, #FECE13, #F4C430)`},
      organicBags: '24',
      standardizedBenefits: [
        { name: 'Organic Vegetable Bags', value: '24', included: true },
        { name: 'Dedicated Wellness Advisor', included: true },
        { name: 'Recipe Support', included: true },
        { name: 'Bag Customisation', included: true },
        { name: 'Complimentary Farm Visit', included: true },
        { name: 'Pure Raw Honey', value: '300 Gms', included: true },
        { name: 'A2 Pure Cow Ghee', value: '500 Gms', included: true },
        { name: 'Exclusive Harvest', included: false },
        { name: 'Organic Farming Training', included: false },
        { name: 'Naturally Fit (Nutrition Guidance)', included: false }
      ],
      features: [
        'Huge savings',
        'Consistent supply',
        'Premium customer care',
        'Seasonal recipe suggestions',
        'Health tracking support'
      ],
      detailedFeatures: [
        'Huge savings of 28% on regular prices',
        'Consistent supply for 6 months',
        'Premium customer care with dedicated manager',
        'Seasonal recipe suggestions and cooking tips',
        'Health tracking support and nutrition guidance',
        'Free home delivery with express options',
        'Exclusive access to exotic vegetables',
        'Complimentary add-ons worth ₹1000'
      ],
      benefits: [
        'Maximum value with 28% discount',
        'Long-term fresh supply security',
        'Premium customer experience',
        'Health and nutrition support included'
      ],
      familySize: '3-5 members',
      deliveryWindow: 'Weekly (Priority scheduling)',
      icon: <Gift className="w-6 h-6" />
    },
    {
      id: 'annual',
      title: 'WELLNESS 360°',
      subtitle: 'Annual',
      duration: '4 Weekly Delivery/Month • 12 Months',
      originalPrice: '₹91,152',
      discountedPrice: '₹56,999',
      pricePerBasket: '₹1,187 per 10 kg bag',
      pricePerDay: '₹155 per day',
      discount: '37% off',
      popular: false,
      color: 'from-red-500 to-red-600',
      colorStyle: {background: `linear-gradient(to right, #FF4646, #E53E3E)`},
      organicBags: '48',
      standardizedBenefits: [
        { name: 'Organic Vegetable Bags', value: '48', included: true },
        { name: 'Dedicated Wellness Advisor', included: true },
        { name: 'Recipe Support', included: true },
        { name: 'Bag Customisation', included: true },
        { name: 'Complimentary Farm Visit', included: true },
        { name: 'Pure Raw Honey', value: '300 Gms', included: true },
        { name: 'A2 Pure Cow Ghee', value: '1 KG', included: true },
        { name: 'Exclusive Harvest', included: true },
        { name: 'Organic Farming Training', included: true },
        { name: 'Naturally Fit (Nutrition Guidance)', included: true }
      ],
      features: [
        'Maximum discount',
        'Year-round fresh supply',
        'VIP customer status',
        'Free nutrition consultation',
        'Exclusive add-on discounts'
      ],
      detailedFeatures: [
        'Maximum discount of 37% - best value ever',
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
        'Unbeatable 37% savings',
        'Complete year-long fresh produce',
        'VIP treatment and premium services',
        'Personal health and nutrition support'
      ],
      familySize: '3-5 members',
      deliveryWindow: 'Weekly (Premium scheduling)',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const handleWhatsAppOrder = (plan) => {
    const message = `Hi! I'm interested in the ${plan.title} - ${plan.duration}. Price: ${plan.discountedPrice}`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPlan(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
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
    <section id="subscription" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6" style={{background: `linear-gradient(to right, #79B927, #00963F)`}}>
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span style={{background: `linear-gradient(to right, #79B927, #00963F)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Subscription Plans
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose the perfect plan for your family's fresh, organic vegetable needs. 
            The longer you subscribe, the more you save!
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={plan.id}
              onClick={() => handlePlanClick(plan)}
              className={`relative cursor-pointer group transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-2 hover:z-10`}
            >
              {/* Popular/Recommended Badge */}
              {plan.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    POPULAR
                  </div>
                </div>
              )}
              {plan.recommended && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-orange-200' : plan.recommended ? 'ring-2 ring-orange-200' : ''
              }`}>
                
                {/* Background Gradient */}
                <div 
                  className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500`} 
                  style={plan.id === 'monthly' ? {...getGradientStyle(plan), opacity: 0.05} : {}} 
                />
                
                {/* Animated Background Circle */}
                <div 
                  className={`absolute top-0 right-0 w-24 h-24 ${plan.id === 'monthly' ? '' : `bg-gradient-to-br ${plan.color}`} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700 ease-out`}
                  style={plan.id === 'monthly' ? getGradientStyle(plan) : {}}
                />
                
                {/* Header */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <div 
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${plan.id === 'monthly' ? '' : `bg-gradient-to-r ${plan.color}`} rounded-xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl`}
                    style={plan.id === 'monthly' ? getGradientStyle(plan) : {}}
                  >
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 transition-colors duration-300">{plan.subtitle}</p>
                  
                  {/* Discount Badge */}
                  <div 
                    className={`inline-block ${plan.id === 'monthly' ? '' : `bg-gradient-to-r ${plan.color}`} text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:scale-105 transition-transform duration-300 shadow-sm group-hover:shadow-md`}
                    style={plan.id === 'monthly' ? getGradientStyle(plan) : {}}
                  >
                    {plan.discount}
                  </div>
                </div>

                {/* Pricing */}
                <div className="relative z-10 mb-2 sm:mb-3">
                  <div className="flex items-center mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300">{plan.discountedPrice}</span>
                    <span className="text-base sm:text-lg text-gray-500 line-through ml-2 group-hover:text-gray-600 transition-colors duration-300">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-700 transition-colors duration-300">{plan.pricePerBasket}</p>
                  <p className="text-xs text-gray-500 mb-1 group-hover:text-gray-600 transition-colors duration-300">{plan.pricePerDay}</p>
                  <div className="h-8 flex items-start">
                    <p className="text-xs text-gray-500 leading-tight">{plan.duration}</p>
                  </div>
                </div>

                {/* Standardized Benefits */}
                <div className="relative z-10 flex-grow mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.standardizedBenefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        {benefit.included ? (
                          <CheckCircle 
                            className="w-4 h-4 mr-2 flex-shrink-0 group-hover:scale-110 transition-all duration-300" 
                            style={{color: plan.id === 'monthly' ? '#79B927' : '#10b981'}}
                          />
                        ) : (
                          <X 
                            className="w-4 h-4 mr-2 flex-shrink-0 text-red-500 group-hover:scale-110 transition-all duration-300" 
                          />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {benefit.name === 'Organic Vegetable Bags' && benefit.value ? (
                            <>
                              <span className="font-semibold">{benefit.value}</span> {benefit.name}
                            </>
                          ) : (
                            <>
                              {benefit.name}
                              {benefit.value && (
                                <span className="font-semibold ml-1">
                                  {benefit.value}
                                </span>
                              )}
                            </>
                          )}
                        </span>
                      </li>
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
                  className={`relative z-10 w-full ${plan.id === 'monthly' ? '' : `bg-gradient-to-r ${plan.color}`} text-white font-semibold py-3 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group/button text-sm sm:text-base touch-manipulation overflow-hidden group-hover:shadow-2xl group-hover:scale-105`}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    ...(plan.id === 'monthly' ? getGradientStyle(plan) : {})
                  }}
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="relative z-10">Order Now</span>
                  <ArrowRight className="relative z-10 w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Detail Modal */}
        <AnimatePresence>
          {selectedPlan && (
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
                className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Plan Overview */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Plan Header */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div 
                            className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${selectedPlan.id === 'monthly' ? '' : `bg-gradient-to-r ${selectedPlan.color}`} rounded-xl sm:rounded-2xl mr-3 sm:mr-4`}
                            style={selectedPlan.id === 'monthly' ? getGradientStyle(selectedPlan) : {}}
                          >
                            <div className="text-white">
                              {selectedPlan.icon}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                              {selectedPlan.title}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600">{selectedPlan.subtitle}</p>
                          </div>
                        </div>

                        {/* Popular/Recommended Badge */}
                        {selectedPlan.popular && (
                          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 sm:px-4 py-2 rounded-full mb-4">
                            MOST POPULAR CHOICE
                          </div>
                        )}
                        {selectedPlan.recommended && (
                          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 sm:px-4 py-2 rounded-full mb-4">
                            RECOMMENDED CHOICE
                          </div>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <span className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedPlan.discountedPrice}</span>
                              <span className="text-lg sm:text-xl text-gray-500 line-through ml-2 sm:ml-3">{selectedPlan.originalPrice}</span>
                            </div>
                            <p className="text-base sm:text-lg font-semibold" style={{color: '#79B927'}}>{selectedPlan.pricePerBasket}</p>
                            <p className="text-sm sm:text-base font-medium text-gray-600 mt-1">{selectedPlan.pricePerDay}</p>
                          </div>
                          <div 
                            className={`${selectedPlan.id === 'monthly' ? '' : `bg-gradient-to-r ${selectedPlan.color}`} text-white text-base sm:text-lg font-bold px-3 sm:px-4 py-2 rounded-full`}
                            style={selectedPlan.id === 'monthly' ? getGradientStyle(selectedPlan) : {}}
                          >
                            {selectedPlan.discount}
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">{selectedPlan.duration}</p>
                      </div>

                      {/* Plan Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-center p-3 sm:p-4 bg-blue-50 rounded-xl">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-2 sm:mr-3" />
                          <div>
                            <p className="text-xs sm:text-sm text-gray-600">Ideal for</p>
                            <p className="text-sm sm:text-base font-semibold">{selectedPlan.familySize}</p>
                          </div>
                        </div>
                        <div className="flex items-center p-3 sm:p-4 rounded-xl" style={{backgroundColor: '#f0f9ff'}}>
                          <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" style={{color: '#79B927'}} />
                          <div>
                            <p className="text-xs sm:text-sm text-gray-600">Delivery</p>
                            <p className="text-sm sm:text-base font-semibold">{selectedPlan.deliveryWindow}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plan Features */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Subscription Benefits Comparison */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Subscription Benefits</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedPlan.standardizedBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-sm sm:text-base text-gray-600">
                              {benefit.included ? (
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" style={{color: '#79B927'}} />
                              ) : (
                                <X className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 text-red-500" />
                              )}
                              <span>
                                {benefit.name === 'Organic Vegetable Bags' && benefit.value ? (
                                  <>
                                    <span className="font-semibold text-green-600">{benefit.value}</span> {benefit.name}
                                  </>
                                ) : (
                                  <>
                                    {benefit.name}
                                    {benefit.value && (
                                      <span className="font-semibold ml-1 text-green-600">
                                        {benefit.value}
                                      </span>
                                    )}
                                  </>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Subscribe Button */}
                      <motion.button
                        onClick={handleSubscribeNow}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full ${selectedPlan.id === 'monthly' ? '' : `bg-gradient-to-r ${selectedPlan.color}`} text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation`}
                        style={{ 
                          WebkitTapHighlightColor: 'transparent',
                          ...(selectedPlan.id === 'monthly' ? getGradientStyle(selectedPlan) : {})
                        }}
                      >
                        <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Subscribe Now via WhatsApp</span>
                      </motion.button>

                      {/* Money Back Guarantee */}
                      <div className="text-center p-3 sm:p-4 rounded-xl" style={{backgroundColor: '#f0f9ff'}}>
                        <p className="text-sm font-semibold" style={{color: '#00963F'}}>
                          💚 100% Satisfaction Guaranteed
                        </p>
                        <p className="text-xs mt-1" style={{color: '#79B927'}}>
                          Not happy? Get free replacement
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
