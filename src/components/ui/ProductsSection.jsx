import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Leaf, Package, ShoppingBag, Heart, Star, ArrowRight, CheckCircle, X, Phone, Smartphone } from 'lucide-react';

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

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('veggies');
  const [hoveredVeggie, setHoveredVeggie] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]));

  const categories = [
    {
      id: 'veggies',
      name: 'Veggies & Exotics',
      icon: <Leaf className="w-5 h-5" />,
      color: 'custom-green'
    },
    {
      id: 'staples',
      name: 'Staples & Condiments',
      icon: <Package className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'salads',
      name: 'Salads & Assortments',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'greens',
      name: 'Greens & Herbs',
      icon: <ShoppingBag className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const veggieData = {
    veggies: [
      { name: 'Brinjal', image: vegetableImages['brinjal-cabbage'] },
      { name: 'Cabbage', image: vegetableImages['brinjal-cabbage'] },
      { name: 'Capsicum', image: vegetableImages['bell-peppers'] },
      { name: 'Carrots', image: vegetableImages['root-vegetables'] },
      { name: 'Cauliflower', image: vegetableImages['exotic-vegetables'] },
      { name: 'Beans', image: vegetableImages['exotic-vegetables'] },
      { name: 'Okra (Bhindi)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Peas', image: vegetableImages['exotic-vegetables'] },
      { name: 'Radish', image: vegetableImages['root-vegetables'] },
      { name: 'Spring Onions', image: vegetableImages['onion-garlic'] },
      { name: 'Tarot Roots (Arbi)', image: vegetableImages['root-vegetables'] },
      { name: 'Bitter Gourd (Karela)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Bottle Gourd (Lauki)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Pumpkin', image: vegetableImages['exotic-vegetables'] },
      { name: 'Ridge Gourd (Torai)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Pointed Gourd (Parwal)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Baby Corn', image: vegetableImages['exotic-vegetables'] },
      { name: 'Bell Peppers', image: vegetableImages['bell-peppers'] },
      { name: 'Broccoli', image: vegetableImages['exotic-vegetables'] },
      { name: 'Cabbage Red', image: vegetableImages['brinjal-cabbage'] },
      { name: 'Cauliflower Colored', image: vegetableImages['exotic-vegetables'] },
      { name: 'Cherry Tomato', image: vegetableImages['tomato-collection'] },
      { name: 'Kingsnut Squash', image: vegetableImages['exotic-vegetables'] },
      { name: 'Mushrooms', image: vegetableImages['exotic-vegetables'] },
      { name: 'Okra Red', image: vegetableImages['exotic-vegetables'] },
      { name: 'Raw Banana', image: vegetableImages['exotic-vegetables'] },
      { name: 'White Onions', image: vegetableImages['onion-garlic'] },
      { name: 'Zucchini Green', image: vegetableImages['exotic-vegetables'] },
      { name: 'Zucchini Yellow', image: vegetableImages['exotic-vegetables'] }
    ],
    staples: [
      { name: 'Potatoes', image: vegetableImages['potato-varieties'] },
      { name: 'Onions', image: vegetableImages['onion-garlic'] },
      { name: 'Tomatoes', image: vegetableImages['tomato-collection'] },
      { name: 'Garlic', image: vegetableImages['onion-garlic'] },
      { name: 'Ginger', image: vegetableImages['ginger-turmeric'] },
      { name: 'Coriander', image: vegetableImages['herbs-collection'] },
      { name: 'Mint', image: vegetableImages['herbs-collection'] },
      { name: 'Lemons', image: vegetableImages['exotic-vegetables'] },
      { name: 'Chillies', image: vegetableImages['herbs-collection'] }
    ],
    salads: [
      { name: 'Cucumber', image: vegetableImages['exotic-vegetables'] },
      { name: 'Snake Gourd (Kakdi)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Melons', image: vegetableImages['exotic-vegetables'] },
      { name: 'Carrot', image: vegetableImages['root-vegetables'] },
      { name: 'Radish', image: vegetableImages['root-vegetables'] },
      { name: 'Beetroot', image: vegetableImages['root-vegetables'] },
      { name: 'Turnip', image: vegetableImages['root-vegetables'] },
      { name: 'Lettuce', image: vegetableImages['lettuce-varieties'] },
      { name: 'Kale', image: vegetableImages['lettuce-varieties'] },
      { name: 'Celery', image: vegetableImages['lettuce-varieties'] },
      { name: 'Rocket', image: vegetableImages['lettuce-varieties'] },
      { name: 'Ajwain Caraway', image: vegetableImages['herbs-collection'] },
      { name: 'Basil', image: vegetableImages['herbs-collection'] },
      { name: 'Corn', image: vegetableImages['exotic-vegetables'] },
      { name: 'Lemon Grass', image: vegetableImages['herbs-collection'] },
      { name: 'Sweet Potato', image: vegetableImages['root-vegetables'] },
      { name: 'Turmeric', image: vegetableImages['ginger-turmeric'] },
      { name: 'Dried Red Chillies', image: vegetableImages['herbs-collection'] },
      { name: 'Curry Leaves', image: vegetableImages['herbs-collection'] }
    ],
    greens: [
      { name: 'Fenugreek (Methi)', image: vegetableImages['fresh-spinach'] },
      { name: 'Spinach', image: vegetableImages['fresh-spinach'] },
      { name: 'Mustard Greens', image: vegetableImages['fresh-spinach'] },
      { name: 'Bathua', image: vegetableImages['fresh-spinach'] },
      { name: 'Chaulai', image: vegetableImages['fresh-spinach'] },
      { name: 'Poi', image: vegetableImages['fresh-spinach'] },
      { name: 'Ajwain Caraway', image: vegetableImages['herbs-collection'] },
      { name: 'Baby Spinach', image: vegetableImages['fresh-spinach'] },
      { name: 'Basil', image: vegetableImages['herbs-collection'] },
      { name: 'Coriander', image: vegetableImages['herbs-collection'] },
      { name: 'Corn', image: vegetableImages['exotic-vegetables'] },
      { name: 'Cucumber', image: vegetableImages['exotic-vegetables'] },
      { name: 'Garlic', image: vegetableImages['onion-garlic'] },
      { name: 'Green Chillies', image: vegetableImages['herbs-collection'] },
      { name: 'Lemon Grass', image: vegetableImages['herbs-collection'] },
      { name: 'Snake Gourd (Kakdi)', image: vegetableImages['exotic-vegetables'] },
      { name: 'Sweet Potato', image: vegetableImages['root-vegetables'] },
      { name: 'Turmeric', image: vegetableImages['ginger-turmeric'] },
      { name: 'Wheat Grass', image: vegetableImages['microgreens'] },
      { name: 'Seasonal Salad Greens', image: vegetableImages['lettuce-varieties'] }
    ]
  };

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

  const handleMouseMove = (event, veggieIndex) => {
    if (hoveredVeggie === veggieIndex) {
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
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  const handleOrderProduct = () => {
    const message = `Hi! I'd like to order ${selectedProduct.name}. ${selectedProduct.price ? `Price: ${selectedProduct.price}` : ''} Please let me know the availability and total cost.`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section ref={ref} id="products-section" data-section="products" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6" style={{background: '#00963F'}}>
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            <span style={{color: '#00963F'}}>
              What's in Your Bag?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the nutritious, aromatic and power-packed variety of fresh, 100% organic produce that comes in your seasonal veggie bag. Each delivery is carefully curated for you based on your preferences and seasonal availability.
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

        {/* Vegetables Grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 mb-16 px-4 sm:px-0"
        >
          {veggieData[activeCategory]?.map((veggie, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                rotateX: hoveredVeggie === index ? rotateX : 0,
                rotateY: hoveredVeggie === index ? rotateY : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredVeggie(index)}
              onMouseLeave={() => {
                setHoveredVeggie(null);
                x.set(0);
                y.set(0);
              }}
              onClick={() => handleProductClick(veggie)}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group cursor-pointer transform-gpu relative"
              title={veggie.name}
            >
              <div className="relative bg-white rounded-xl p-3 shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl">
                
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `rgba(0, 150, 63, 0.05)`}} />
                
                {/* Veggie Image */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-20 sm:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                  >
                    <img
                      src={veggie.image}
                      alt={veggie.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-100', 'to-emerald-200');
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center text-green-600 font-semibold text-xs';
                        fallback.textContent = veggie.name.split(' ')[0];
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                    
                    {/* Fresh Badge */}
                    <div className="absolute top-1 left-1 bg-green-500 text-white text-xs font-bold px-1 py-0.5 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Leaf className="w-2 h-2" />
                    </div>
                  </motion.div>
                  
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">{veggie.name}</h3>
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                    {veggie.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note for Staples */}
        {activeCategory === 'staples' && (
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 bg-orange-50 p-4 rounded-lg max-w-2xl mx-auto">
              <strong>Note:</strong> The bag will contain 3-4 KGs of below veggies as per availability and harvest
            </p>
          </div>
        )}

        {/* Bottom Info */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white mx-4 sm:mx-0" style={{background: '#00963F'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">What does your Organic Seasonal Bag contains</h3>
              <div className="space-y-3">
                <div className="flex items-start sm:items-center">
                  <Star className="w-5 h-5 mr-3 mt-0.5 sm:mt-0 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">4-5 kg mix of Seasonal Veggies & Exotics</span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Star className="w-5 h-5 mr-3 mt-0.5 sm:mt-0 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">3-4 kg mix of Aromatic Staples & Condiments</span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Star className="w-5 h-5 mr-3 mt-0.5 sm:mt-0 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">0.5-1 kg mix of Nutritious Salads & Assortments</span>
                </div>
                <div className="flex items-start sm:items-center">
                  <Star className="w-5 h-5 mr-3 mt-0.5 sm:mt-0 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">0.5-1 kg mix of Vitality Greens & Herbs</span>
                </div>
              </div>
              <p className="text-green-100 text-xs sm:text-sm mt-4 leading-relaxed">
                *The actual selection varies based on seasonal availability and harvest. 
                We recommend going with our farmers' choice for the freshest produce.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.button
                onClick={handleWhatsAppOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base min-w-[200px]"
                style={{ WebkitTapHighlightColor: 'transparent', color: '#00963F' }}
              >
                <span>Order Your Bag</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </motion.button>
              
              {/* Small ordering icons */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <motion.button
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={() => window.open('tel:+919876543210', '_self')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                  title="Call"
                >
                  <Phone className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={() => alert('App coming soon!')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                  title="App"
                >
                  <Smartphone className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
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
                        />
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Leaf className="w-3 h-3" />
                          Fresh
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {selectedProduct.name}
                        </h2>
                        {selectedProduct.description && (
                          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {selectedProduct.description}
                          </p>
                        )}
                        {!selectedProduct.description && (
                          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Fresh, organic {selectedProduct.name.toLowerCase()} delivered straight from our farms. 
                            Part of our seasonal vegetable collection.
                          </p>
                        )}
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

                      {/* Default features for vegetables without specific features */}
                      {(!selectedProduct.features || selectedProduct.features.length === 0) && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Features</h3>
                          <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-center text-sm sm:text-base text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              100% Organic & Fresh
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Pesticide-free
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Farm fresh delivery
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Seasonal availability
                            </li>
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

export default ProductsSection;
