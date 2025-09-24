import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Package, ShoppingBag, Heart, Star, ArrowRight, CheckCircle, X, Phone, Smartphone, Mail } from 'lucide-react';

// Import vegetable images configuration
import { vegetableImages } from '../../assets/vegetables/imageConfig.js';

// Import specific vegetable images for individual items
import brinjal from '../../assets/Vegies3/Brinjal.jpg';
import cabbage from '../../assets/Vegies3/Cabbage 1.jpg';
import capsicum from '../../assets/Vegies3/Capsicum.jpg';
import orangeCarrot from '../../assets/Vegies3/Orange Carrot.jpg';
import cauliflower from '../../assets/Vegies3/Cauliflower.jpg';
import frenchBeans from '../../assets/Vegies3/Frencgh Beans 1.jpg';
import okra from '../../assets/Vegies3/Okra.jpg';
import peas from '../../assets/Vegies3/Peas 1.jpg';
import radish from '../../assets/Vegies3/Radish.jpg';
import springOnions from '../../assets/Vegies3/Spring Onions.jpg';
import arvi from '../../assets/Vegies3/Arvi.jpg';
import babyKarela from '../../assets/Vegies2/Baby Karela.jpg';
import bottleGourd from '../../assets/Vegies3/Bottle Gourd 1.jpg';
import pumpkin from '../../assets/Vegies3/Pumpkin.jpg';
import ridgeGourd from '../../assets/Vegies3/Ridge Gourd.jpg';
import parwal from '../../assets/Vegies3/Parwal.jpg';
import babyCorn from '../../assets/Vegies3/Baby Corn.jpg';
import redBellPepper from '../../assets/Vegies3/Red Bell pepper.jpg';
import broccoli from '../../assets/Vegies3/Brocolli.jpg';
import redCabbage from '../../assets/Vegies3/Red Cabbage 1.jpg';
import coloredCauliflower from '../../assets/Vegies3/Coloured CauliFlower.jpeg';
import cherryTomato from '../../assets/Vegies3/Cherry Tomatos.jpg';
import mushroom from '../../assets/Vegies3/Mushroom.jpg';
import redOkra from '../../assets/Vegies3/Red Okra 1.jpg';
import rawBanana from '../../assets/Vegies3/Raw Banana.jpg';
import whiteOnions from '../../assets/Vegies1/WHITE-ONIONS.jpg';
import zucchiniGreen from '../../assets/Vegies1/ZUCCHINI.jpg';
import zucchiniYellow from '../../assets/Vegies1/YELLOW-ZUCCHINI.jpg';
import potatoes from '../../assets/Vegies3/Potatoes.jpg';
import onion from '../../assets/Vegies3/Onion.jpg';
import tomato from '../../assets/Vegies3/Tomato.jpg';
import garlic from '../../assets/Vegies3/Garlic.jpg';
import ginger from '../../assets/Vegies3/Ginger.jpg';
import coriander from '../../assets/Vegies3/Coriander.jpg';
import mint from '../../assets/Vegies3/Mint.jpg';
import lemons from '../../assets/Vegies3/Lemons.jpg';
import greenChillies from '../../assets/Vegies3/Green Chillies.jpg';
import cucumber from '../../assets/Vegies3/Cucumber 1.jpg';
import kakadi from '../../assets/Vegies3/Kakadi 2.jpg';
import muskMelon from '../../assets/Vegies3/Musk Melon.jpg';
import redRadish from '../../assets/Vegies3/Red Radish.jpg';
import beetroot from '../../assets/Vegies3/Beetroot.jpg';
import turnips from '../../assets/Vegies1/TURNIPS.jpg';
import lettuce from '../../assets/Vegies3/Lettuce.jpg';
import kale from '../../assets/Vegies3/Kale.jpg';
import celery from '../../assets/Vegies3/Celery.jpg';
import rocketLeaves from '../../assets/Vegies3/Rocket Leaves.jpg';
import ajwainLeaves from '../../assets/Vegies3/Ajwain Leaves.jpg';
import basil from '../../assets/Vegies3/Basil.jpg';
import sweetCorn from '../../assets/Vegies3/Sweet Corn.jpg';
import lemonGrass from '../../assets/Vegies3/Leamon Grass.jpg';
import sweetPotato from '../../assets/Vegies3/Sweet Potato.jpg';
import rawTurmeric from '../../assets/Vegies1/raw-turmeric.jpg';
import redChillies from '../../assets/Vegies3/Red Chillies.jpg';
import curryLeaves from '../../assets/Vegies3/Curry Leaves.jpg';
import fenugreek from '../../assets/Vegies3/Fenugeek.jpg';
import spinach from '../../assets/Vegies3/Spinach 1.jpg';
import mustardGreens from '../../assets/Vegies3/Mustard Greens.jpg';
import bathua from '../../assets/Vegies3/Bathua.jpg';
import chaulai from '../../assets/Vegies3/Chaulai.jpg';
import poiSaag from '../../assets/Vegies3/Poi Saag.jpg';
import babySpinach from '../../assets/Vegies3/Baby Spinach.jpg';
import chineseCucumber from '../../assets/Vegies3/Chinese Cucumber.jpg';
import kakdi from '../../assets/Vegies3/Kakdi 1.jpg';
import microgreens from '../../assets/Vegies1/microgreens.jpg';
import redLettuce from '../../assets/Vegies3/Red Lettuce.jpg';

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
  const [visibleRows, setVisibleRows] = useState(3); // Show 3 rows initially
  const ref = useRef(null);

  // Function to detect device and redirect to appropriate app store
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check if iOS device
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open('https://apps.apple.com/in/app/naturally-good/id6749650953', '_blank');
    }
    // Check if Android device
    else if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.naturallygood.app', '_blank');
    }
    // Default fallback (could be desktop or other devices) - show both options
    else {
      // For desktop or other devices, redirect to Play Store as default
      window.open('https://play.google.com/store/apps/details?id=com.naturallygood.app', '_blank');
    }
  };

  // Listen for tab activation events from footer navigation
  useEffect(() => {
    const handleActivateTab = (event) => {
      const { sectionType, tabValue, sectionId } = event.detail;
      if (sectionType === 'products' && sectionId === 'products') {
        setActiveCategory(tabValue);
      }
    };

    window.addEventListener('activateTab', handleActivateTab);
    return () => window.removeEventListener('activateTab', handleActivateTab);
  }, []);

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
      { name: 'Cabbage', image: cabbage },
      { name: 'Capsicum', image: capsicum },
      { name: 'Carrots', image: orangeCarrot },
      { name: 'Cauliflower', image: cauliflower },
      { name: 'French Beans', image: frenchBeans },
      { name: 'Okra (Bhindi)', image: okra },
      { name: 'Brinjal', image: brinjal },
      { name: 'Peas', image: peas },
      { name: 'Radish', image: radish },
      { name: 'Spring Onions', image: springOnions },
      { name: 'Tarot Roots (Arbi)', image: arvi },
      { name: 'Bitter Gourd (Karela)', image: babyKarela },
      { name: 'Bottle Gourd (Lauki)', image: bottleGourd },
      { name: 'Pumpkin', image: pumpkin },
      { name: 'Ridge Gourd (Torai)', image: ridgeGourd },
      { name: 'Pointed Gourd (Parwal)', image: parwal },
      { name: 'Baby Corn', image: babyCorn },
      { name: 'Bell Peppers', image: redBellPepper },
      { name: 'Broccoli', image: broccoli },
      { name: 'Cabbage Red', image: redCabbage },
      { name: 'Cauliflower Colored', image: coloredCauliflower },
      { name: 'Cherry Tomato', image: cherryTomato },
      { name: 'Mushrooms', image: mushroom },
      { name: 'Okra Red', image: redOkra },
      { name: 'Raw Banana', image: rawBanana },
      { name: 'White Onions', image: whiteOnions },
      { name: 'Zucchini Green', image: zucchiniGreen },
      { name: 'Zucchini Yellow', image: zucchiniYellow }
    ],
    staples: [
      { name: 'Potatoes', image: potatoes },
      { name: 'Onions', image: onion },
      { name: 'Tomatoes', image: tomato },
      { name: 'Garlic', image: garlic },
      { name: 'Ginger', image: ginger },
      { name: 'Coriander', image: coriander },
      { name: 'Mint', image: mint },
      { name: 'Lemons', image: lemons },
      { name: 'Green Chillies', image: greenChillies }
    ],
    salads: [
      { name: 'Cucumber', image: cucumber },
      { name: 'Snake Gourd (Kakdi)', image: kakadi },
      { name: 'Melons', image: muskMelon },
      { name: 'Carrot', image: orangeCarrot },
      { name: 'Radish', image: redRadish },
      { name: 'Beetroot', image: beetroot },
      { name: 'Turnip', image: turnips },
      { name: 'Lettuce', image: lettuce },
      { name: 'Kale', image: kale },
      { name: 'Celery', image: celery },
      { name: 'Rocket', image: rocketLeaves },
      { name: 'Ajwain Caraway', image: ajwainLeaves },
      { name: 'Basil', image: basil },
      { name: 'Sweet Corn', image: sweetCorn },
      { name: 'Lemon Grass', image: lemonGrass },
      { name: 'Sweet Potato', image: sweetPotato },
      { name: 'Turmeric', image: rawTurmeric },
      { name: 'Dried Red Chillies', image: redChillies },
      { name: 'Curry Leaves', image: curryLeaves }
    ],
    greens: [
      { name: 'Fenugreek (Methi)', image: fenugreek },
      { name: 'Spinach', image: spinach },
      { name: 'Mustard Greens', image: mustardGreens },
      { name: 'Bathua', image: bathua },
      { name: 'Chaulai', image: chaulai },
      { name: 'Poi', image: poiSaag },
      { name: 'Ajwain Caraway', image: ajwainLeaves },
      { name: 'Baby Spinach', image: babySpinach },
      { name: 'Basil', image: basil },
      { name: 'Coriander', image: coriander },
      { name: 'Sweet Corn', image: sweetCorn },
      { name: 'Cucumber', image: chineseCucumber },
      { name: 'Garlic', image: garlic },
      { name: 'Green Chillies', image: greenChillies },
      { name: 'Lemon Grass', image: lemonGrass },
      { name: 'Snake Gourd (Kakdi)', image: kakdi },
      { name: 'Sweet Potato', image: sweetPotato },
      { name: 'Turmeric', image: rawTurmeric },
      { name: 'Microgreens', image: microgreens },
      { name: 'Seasonal Salad Greens', image: redLettuce }
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

  // Calculate items per row based on screen size
  const getItemsPerRow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl screens - 3 per row
      if (window.innerWidth >= 1024) return 3; // lg screens - 3 per row
      if (window.innerWidth >= 768) return 2;  // md screens - 2 per row
      return 1; // sm screens - 1 per row
    }
    return 3; // default
  };

  // Calculate visible items based on rows
  const getVisibleItems = () => {
    const itemsPerRow = getItemsPerRow();
    return visibleRows * itemsPerRow;
  };

  // Handle show more functionality
  const handleShowMore = () => {
    setVisibleRows(prev => prev + 1);
  };

  // Helper function to get animation delay for newly revealed items
  const getAnimationDelay = (index) => {
    const itemsPerRow = getItemsPerRow();
    const previouslyVisible = (visibleRows - 1) * itemsPerRow;
    if (index >= previouslyVisible) {
      // This is a newly revealed item, add staggered delay
      return (index - previouslyVisible) * 0.15 + 0.2;
    }
    return 0; // Already visible items don't need delay
  };

  // Reset visible rows when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleRows(3); // Reset to 3 rows
  };

  // Calculate if we can show more items
  const canShowMore = () => {
    const totalItems = veggieData[activeCategory]?.length || 0;
    const visibleItems = getVisibleItems();
    return visibleItems < totalItems;
  };

  return (
    <section ref={ref} id="products" data-section="products" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
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
              onClick={() => handleCategoryChange(category.id)}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 px-4 sm:px-0"
        >
          {veggieData[activeCategory]?.slice(0, getVisibleItems()).map((veggie, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: getAnimationDelay(index),
                duration: 0.4,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredVeggie(index)}
              onMouseLeave={() => {
                setHoveredVeggie(null);
              }}
              onClick={() => handleProductClick(veggie)}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group cursor-pointer transform-gpu relative"
              title={veggie.name}
            >
              <div className="relative bg-white rounded-xl p-4 shadow-lg border border-gray-100 overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl">
                
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `rgba(0, 150, 63, 0.05)`}} />
                
                {/* Veggie Image */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-52 sm:h-64 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
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
                    
                    {/* Veggie Name on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-sm sm:text-base text-center drop-shadow-lg">
                        {veggie.name}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {canShowMore() && (
          <div className="text-center mb-8">
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span>Show More</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* Bottom Info */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white mx-4 sm:mx-0 relative" style={{background: '#00963F'}}>
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
              
              {/* Contact icons below button on mobile, hidden on larger screens */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <motion.button
                  onClick={() => window.open('tel:+919643722200', '_self')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
                  title="Call"
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  onClick={() => window.open('mailto:eatfresh@naturallygood.in', '_self')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  onClick={handleAppDownload}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
                  title="Mobile App"
                >
                  <Smartphone className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Vertical ordering icons positioned on the right border - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 flex-col gap-4">
            <motion.button
              onClick={() => window.open('tel:+919643722200', '_self')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
              title="Call"
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={handleWhatsAppOrder}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={() => window.open('mailto:eatfresh@naturallygood.in', '_self')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
              title="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              onClick={handleAppDownload}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg"
              title="Mobile App"
            >
              <Smartphone className="w-6 h-6 text-white" />
            </motion.button>
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
