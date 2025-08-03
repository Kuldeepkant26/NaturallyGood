import React, { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Leaf, Package, ShoppingBasket, Heart, Star, ArrowRight, CheckCircle, X, Plus, Minus } from 'lucide-react';

// Import vegetable images configuration
import { vegetableImages } from '../../assets/vegetables/imageConfig.js';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('veggies');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]));

  const categories = [
    {
      id: 'veggies',
      name: 'Seasonal Veggies',
      icon: <Leaf className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'greens',
      name: 'Greens & Herbs',
      icon: <Package className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'staples',
      name: 'Farm Staples',
      icon: <ShoppingBasket className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'addons',
      name: 'Premium Add-ons',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const products = {
    veggies: [
      {
        name: 'Brinjal & Cabbage',
        description: 'Fresh seasonal purple brinjal and green cabbage',
        image: vegetableImages['brinjal-cabbage'],
        features: ['Organic grown', 'Pesticide-free', 'Farm fresh']
      },
      {
        name: 'Bell Peppers Mix',
        description: 'Colorful mix of red, yellow and green bell peppers',
        image: vegetableImages['bell-peppers'],
        features: ['Rich in vitamins', 'Crunchy texture', 'Perfect for salads']
      },
      {
        name: 'Root Vegetables',
        description: 'Carrots, radish, beetroot and turnip mix',
        image: vegetableImages['root-vegetables'],
        features: ['High fiber', 'Natural sweetness', 'Great for soups']
      },
      {
        name: 'Exotic Vegetables',
        description: 'Baby corn, broccoli, zucchini and mushrooms',
        image: vegetableImages['exotic-vegetables'],
        features: ['Premium quality', 'Restaurant grade', 'Limited availability']
      }
    ],
    greens: [
      {
        name: 'Fresh Spinach',
        description: 'Tender baby spinach leaves, rich in iron',
        image: vegetableImages['fresh-spinach'],
        features: ['Iron rich', 'Baby leaves', 'Perfect for salads']
      },
      {
        name: 'Herbs Collection',
        description: 'Basil, coriander, mint and curry leaves',
        image: vegetableImages['herbs-collection'],
        features: ['Aromatic', 'Fresh cut', 'Pesticide-free']
      },
      {
        name: 'Microgreens',
        description: 'Nutrient-dense microgreens and sprouts',
        image: vegetableImages['microgreens'],
        features: ['Super nutritious', 'Concentrated flavor', 'Gourmet grade']
      },
      {
        name: 'Lettuce Varieties',
        description: 'Iceberg, romaine and mixed lettuce leaves',
        image: vegetableImages['lettuce-varieties'],
        features: ['Crisp texture', 'Hydroponic grown', 'Restaurant quality']
      }
    ],
    staples: [
      {
        name: 'Onion & Garlic',
        description: 'Essential cooking staples, fresh and pungent',
        image: vegetableImages['onion-garlic'],
        features: ['Long lasting', 'Strong flavor', 'Cooking essential']
      },
      {
        name: 'Potato Varieties',
        description: 'Mix of cooking and boiling potatoes',
        image: vegetableImages['potato-varieties'],
        features: ['Versatile cooking', 'High quality', 'Different varieties']
      },
      {
        name: 'Tomato Collection',
        description: 'Red ripe tomatoes, perfect for cooking',
        image: vegetableImages['tomato-collection'],
        features: ['Vine ripened', 'Juicy texture', 'Rich flavor']
      },
      {
        name: 'Ginger & Turmeric',
        description: 'Fresh rhizomes with medicinal properties',
        image: vegetableImages['ginger-turmeric'],
        features: ['Medicinal herbs', 'Anti-inflammatory', 'Immunity boost']
      }
    ],
    addons: [
      {
        name: 'A2 Gir Cow Ghee',
        description: 'Pure A2 ghee from Gir cows, golden and aromatic',
        image: vegetableImages['a2-ghee'],
        features: ['A2 protein', 'Traditional method', 'Pure & natural'],
        price: '₹2,800 Per Kg'
      },
      {
        name: 'Pure Jaggery',
        description: 'Unrefined jaggery, natural sweetener',
        image: vegetableImages['pure-jaggery'],
        features: ['No chemicals', 'Traditional process', 'Mineral rich'],
        price: '₹90 for 100gms'
      },
      {
        name: 'Natural Honey',
        description: 'Raw honey, directly from beehives',
        image: vegetableImages['natural-honey'],
        features: ['Raw & unprocessed', 'Floral essence', 'Natural enzymes'],
        price: '₹600 Per 500gm'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const productVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const handleMouseMove = (event, productIndex) => {
    if (hoveredProduct === productIndex) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((event.clientX - centerX) * 0.5);
      y.set((event.clientY - centerY) * 0.5);
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in your seasonal veggie basket and would like to know more about the products.`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleOrderProduct = () => {
    const message = `Hi! I'd like to order ${quantity} ${quantity > 1 ? 'units' : 'unit'} of ${selectedProduct.name}. ${selectedProduct.price ? `Price: ${selectedProduct.price}` : ''} Please let me know the availability and total cost.`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6"
          >
            <ShoppingBasket className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What's in Your Basket?
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the amazing variety of fresh, organic produce that comes in your seasonal veggie basket. 
            Each delivery is carefully curated based on seasonal availability.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {products[activeCategory].map((product, index) => (
            <motion.div
              key={index}
              variants={productVariants}
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
              className="group cursor-pointer transform-gpu"
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl group-hover:border-green-200">
                
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500" />
                
                {/* Product Image */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-100', 'to-emerald-200');
                        // Add fallback icon or text
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-lg';
                        fallback.textContent = product.name.split(' ')[0];
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Fresh Badge */}
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Fresh
                    </div>
                  </motion.div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    {product.price && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        {product.price}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="relative z-10">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Seasonal Veggie Basket Contents</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>3-4 kg mix of Seasonal Veggies & Exotics</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>0.5-1 kg mix of Seasonal Salads & Assortments</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>3-4 kg mix of Essential Staples</span>
                </div>
              </div>
              <p className="text-green-100 text-sm mt-4">
                *The actual selection varies based on seasonal availability and harvest. 
                We recommend going with our farmers' choice for the freshest produce.
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              <motion.button
                onClick={handleWhatsAppOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                <span>Order Your Basket</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
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
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Leaf className="w-3 h-3" />
                          Fresh
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {selectedProduct.name}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Price */}
                      {selectedProduct.price && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold px-4 py-2 rounded-full inline-block">
                          {selectedProduct.price}
                        </div>
                      )}

                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                        <ul className="space-y-3">
                          {selectedProduct.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quantity Selector */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantity</h3>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={decreaseQuantity}
                            className="p-2 border-2 border-gray-300 rounded-full hover:border-green-500 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-xl font-semibold min-w-[3rem] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={increaseQuantity}
                            className="p-2 border-2 border-gray-300 rounded-full hover:border-green-500 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Order Button */}
                      <motion.button
                        onClick={handleOrderProduct}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ShoppingBasket className="w-5 h-5" />
                        <span>Order via WhatsApp</span>
                      </motion.button>
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

export default ProductsSection;
