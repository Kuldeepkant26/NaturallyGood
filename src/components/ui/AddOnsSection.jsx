import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Package, Heart, ShoppingBag, Star, ArrowRight, CheckCircle, X, Smartphone } from 'lucide-react';

// Import vegetable images configuration
import { vegetableImages } from '../../assets/vegetables/imageConfig.js';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const AddOnsSection = () => {
  const [activeCategory, setActiveCategory] = useState('premium-addons');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]));

  const categories = [
    {
      id: 'premium-addons',
      name: 'Premium Add-Ons',
      icon: <Star className="w-5 h-5" />,
      color: 'custom-green'
    },
    {
      id: 'nutrition-packs',
      name: 'Nutrition Packs',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const productData = {
    'premium-addons': [
      {
        name: 'A2 Pure Cow Ghee',
        description: 'Pure A2 Ghee made from A2 Cow Milk- Wholesome, Golden and Authentic.',
        image: vegetableImages['a2-ghee'],
        price: 'Rs. 2,800 for 1 kg',
        features: [
          'Nutrient-Rich',
          'Hand-churned',
          'No Preservatives & Additives'
        ]
      },
      {
        name: 'Pure Raw Honey',
        description: 'Pure Raw Honey, Straight from Beehives- Golden, Floral and Full of Natural Goodness',
        image: vegetableImages['natural-honey'],
        price: 'Rs. 649 for 300 gms',
        features: [
          '100% Pure & Unprocessed',
          'Rich in Enzymes & Nutrients',
          'No Added Sugar or Preservatives'
        ]
      },
      {
        name: 'DIY Microgreens Grow Kit',
        description: 'Fresh Microgreens at Your Home- Sow, Grow and Enjoy',
        image: vegetableImages['microgreens'],
        price: 'Rs. 999 for 1 Kit',
        features: [
          'Easy DIY Kit',
          '7-10 Days Harvest',
          'Packed with Nutrients'
        ]
      }
    ],
    'nutrition-packs': [
      {
        name: 'Soup Pack',
        description: 'Certified organic ingredients packed for your family\'s favorite soups-healthy, tasty, and natural.',
        image: vegetableImages['root-vegetables'],
        price: 'Rs. 799 per Pack',
        features: [
          'Handpicked seasonal vegetables',
          'Rich in flavors & nutrients',
          'Perfect for light meals'
        ]
      },
      {
        name: 'Herbs Pack',
        description: 'A bundle of fresh herbs to add natural aroma, flavor, and health to your meals.',
        image: vegetableImages['herbs-collection'],
        price: 'Rs. 649 per Pack',
        features: [
          'Farm-fresh & aromatic',
          'Naturally rich in nutrients',
          'Elevates every dish'
        ]
      },
      {
        name: 'Juice Pack',
        description: 'A curated bundle of farm-fresh veggies, perfect for making nutritious juices at home.',
        image: vegetableImages['exotic-vegetables'],
        price: 'Rs. 999 per Pack',
        features: [
          'Handpicked seasonal vegetables',
          'Ideal for juicing & blends',
          'Rich in natural vitamins & minerals'
        ]
      },
      {
        name: 'Salad Pack',
        description: 'Fresh salad mixes for quick, healthy, and tasty meals.',
        image: vegetableImages['lettuce-varieties'],
        price: 'Rs. 999 per Pack',
        features: [
          'Farm-fresh ingredients',
          'Quick & convenient',
          'Nutritious & filling'
        ]
      },
      {
        name: 'Immunity Pack',
        description: 'A power-packed combo to naturally strengthen your immunity every day.',
        image: vegetableImages['ginger-turmeric'],
        price: 'Rs. 999 per Pack',
        features: [
          'Rich in antioxidants',
          'Boosts natural defense',
          '100% clean & organic'
        ]
      },
      {
        name: 'Detox Pack',
        description: 'Cleanse, refresh, and reset your body with our natural detox essentials.',
        image: vegetableImages['fresh-spinach'],
        price: 'Rs. 799 per Pack',
        features: [
          'Supports digestion',
          'Flushes out toxins',
          'Restores natural balance'
        ]
      }
    ]
  };

  const handleMouseMove = (e, index) => {
    if (!ref.current || hoveredProduct !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    x.set(deltaX * 0.2);
    y.set(deltaY * 0.2);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in ${product.name}. Price: ${product.price}. Can you provide more details?`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6" style={{background: `linear-gradient(to right, #79B927, #00963F)`}}>
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span style={{background: `linear-gradient(to right, #79B927, #00963F)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Premium Add-Ons
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Enhance your healthy lifestyle with our carefully curated premium products and nutrition packs, sourced directly from organic farms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 sm:px-6 py-3 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base min-h-[44px] touch-manipulation ${
                activeCategory === category.id
                  ? 'text-white shadow-lg border-2 border-transparent'
                  : 'bg-white text-gray-700 hover:text-gray-900 border-2 border-gray-300 hover:border-gray-400 shadow-md'
              }`}
              style={{
                WebkitTapHighlightColor: 'transparent',
                minWidth: 'max-content',
                ...(activeCategory === category.id 
                    ? {background: '#00963F'} 
                    : {})
              }}
            >
              <span className="flex-shrink-0">{category.icon}</span>
              <span className="whitespace-nowrap font-medium">{category.name}</span>
              
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{background: `rgba(0, 150, 63, 0.2)`}}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 px-4 sm:px-0"
        >
          {productData[activeCategory]?.map((product, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                rotateX: hoveredProduct === index ? rotateX : 0,
                rotateY: hoveredProduct === index ? rotateY : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => {
                setHoveredProduct(null);
                x.set(0);
                y.set(0);
              }}
              onClick={() => handleProductClick(product)}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group cursor-pointer transform-gpu relative"
              title={product.name}
            >
              <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl">
                
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `rgba(0, 150, 63, 0.05)`}} />
                
                {/* Product Image */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-32 sm:h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-100', 'to-emerald-200');
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-xs';
                        fallback.textContent = product.name.split(' ')[0];
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </motion.div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {product.price && (
                      <div className="text-green-600 font-semibold text-sm">
                        {product.price}
                      </div>
                    )}
                    
                    {/* Features Preview */}
                    {product.features && product.features.length > 0 && (
                      <div className="space-y-1">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {product.features.length > 2 && (
                          <div className="text-xs text-green-600 font-medium">
                            +{product.features.length - 2} more features
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppOrder(product);
                        }}
                        className="flex-1 bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                      >
                        <WhatsAppIcon className="w-3 h-3" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
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
                className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
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
                    {/* Product Image */}
                    <div className="relative">
                      <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-100', 'to-emerald-200');
                            const fallback = document.createElement('div');
                            fallback.className = 'absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-lg';
                            fallback.textContent = selectedProduct.name;
                            e.target.parentElement.appendChild(fallback);
                          }}
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Price */}
                      {selectedProduct.price && (
                        <div className="text-white text-base sm:text-lg font-semibold px-3 sm:px-4 py-2 rounded-full inline-block" style={{background: '#00963F'}}>
                          {selectedProduct.price}
                        </div>
                      )}

                      {/* Features */}
                      {selectedProduct.features && selectedProduct.features.length > 0 && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Features</h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {selectedProduct.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                {feature}
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

export default AddOnsSection;
