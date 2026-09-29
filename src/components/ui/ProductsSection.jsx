import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Package, ShoppingBag, Heart, ArrowRight, CheckCircle, X, Carrot, Wheat, Salad, Sun, Users, ChevronRight } from 'lucide-react';

// Import vegetable images configuration
import { vegetableImages } from '../../assets/vegetables/imageConfig.js';

// Import specific vegetable images for individual items
import brinjal from '../../assets/Vegies3/Brinjal.jpg';
import cabbage from '../../assets/Vegies3/Cabbage 1.jpg';
import capsicum from '../../assets/Vegies1/capsicum.jpg';
import orangeCarrot from '../../assets/Vegies3/Orange Carrot.jpg';
import cauliflower from '../../assets/Vegies3/Cauliflower.jpg';
import frenchBeans from '../../assets/Vegies3/Frencgh Beans 1.jpg';
import okra from '../../assets/Vegies2/Okra.jpg';
import peas from '../../assets/Vegies3/Peas 2.jpg';
import radish from '../../assets/Vegies3/Radish.jpg';
import springOnions from '../../assets/Vegies3/Spring Onions.jpg';
import arvi from '../../assets/Vegies2/Arvi.jpg';
import babyKarela from '../../assets/Vegies2/Baby Karela.jpg';
import bottleGourd from '../../assets/Vegies3/Bottle Gourd 2.jpg';
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
import muskMelon from '../../assets/Vegies1/MUSK-MELONS.jpg';
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
import lemonGrass from '../../assets/Vegies2/lemon-grass.jpg';
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

import bagVegetablesImage from '../../assets/bag-contents/vegetables.webp';
import bagStaplesImage from '../../assets/bag-contents/staples.webp';
import bagGreensImage from '../../assets/bag-contents/greens.webp';
import bagSeasonImage from '../../assets/bag-contents/season.webp';

// "Choose what fits your home" cards jump to that bag size's plans in SubscriptionSection
const bagSizes = [
  { label: '7 KG BAG', bestFor: 'Best for 1–3 people', target: 'plans-7kg' },
  { label: '10 KG BAG', bestFor: 'Best for 3–5 people', target: 'plans-10kg' },
];

const bagContents = [
  {
    icon: Carrot,
    title: 'Seasonal Vegetables & Exotics',
    text: 'Everyday favourites plus seasonal varieties.',
    image: bagVegetablesImage,
    rowClass: 'bg-[#F6FAF2]',
    iconClass: 'bg-[#E1F0D6] text-[#2F7D34]',
  },
  {
    icon: Wheat,
    title: 'Staples & Condiments',
    text: 'Useful kitchen essentials to complement your fresh produce.',
    image: bagStaplesImage,
    rowClass: 'bg-[#FFF8F0]',
    iconClass: 'bg-[#FBE5D0] text-[#8A5A2B]',
  },
  {
    icon: Salad,
    title: 'Salads, Greens & Herbs',
    text: 'Fresh additions for everyday meals and healthier choices.',
    image: bagGreensImage,
    rowClass: 'bg-[#F4FAF0]',
    iconClass: 'bg-[#E1F0D6] text-[#2F7D34]',
  },
  {
    icon: Sun,
    title: 'Curated for the Season',
    text: "Your bag changes with what's growing best at the farm.",
    image: bagSeasonImage,
    rowClass: 'bg-[#FFFBEE]',
    iconClass: 'bg-[#FDF0C6] text-[#B7791F]',
  },
];

// Two-leaf mark for the "You stay in control" row
const LeavesIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
    <path d="M22 43C11 39 6 27 10 10c11 4 17 14 12 33Z" fill="#2E8B3A" />
    <path d="M26 43c11-3 16-12 13-26-10 3-15 12-13 26Z" fill="#7CC243" />
    <path d="M22 43c-2-10-5-19-11-28M26 43c1-8 5-15 11-21" fill="none" stroke="#E6F4DA" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('veggies');
  const [hoveredVeggie, setHoveredVeggie] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleRows, setVisibleRows] = useState(3); // Show 3 rows initially
  const ref = useRef(null);

  // Bag cards and the CTA jump to the plans below (anchor placement lives in SubscriptionSection.css)
  const scrollToPlans = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      { name: 'Mint', image: mint },
      { name: 'Curry Leaves', image: curryLeaves },
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

        {/* Bag sizes */}
        <div>
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-[#16301F] sm:text-3xl">
            Choose what fits your home
          </h3>
          <div className="mx-auto mt-5 grid max-w-3xl grid-cols-1 gap-3 min-[30rem]:grid-cols-2 sm:gap-4">
            {bagSizes.map((size) => (
              <button
                key={size.label}
                type="button"
                onClick={() => scrollToPlans(size.target)}
                className="group flex items-center gap-3 rounded-2xl border border-[#DCEAD3] bg-white p-4 text-left shadow-[0_10px_30px_-22px_rgba(22,70,35,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A9D18E] hover:bg-[#F4FAEF] hover:shadow-[0_16px_36px_-22px_rgba(22,70,35,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00963F] sm:gap-4 sm:p-5"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Users className="h-9 w-9 shrink-0 text-[#1F7A3A] sm:h-10 sm:w-10" strokeWidth={1.5} />
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-extrabold tracking-tight text-[#16301F] sm:text-xl">{size.label}</span>
                  <span className="block text-sm text-gray-600 sm:text-[15px]">{size.bestFor}</span>
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#1F7A3A] shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* What's inside the bag */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F6F38] via-[#1B6532] to-[#14532A] p-4 text-white shadow-[0_30px_60px_-35px_rgba(20,83,42,0.8)] sm:mt-8 sm:p-8 lg:p-10">
          <Leaf
            aria-hidden="true"
            className="absolute right-4 top-4 h-9 w-9 -rotate-12 text-[#B5E061] sm:right-8 sm:top-8 sm:h-16 sm:w-16"
            strokeWidth={1.25}
          />
          <h3 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight sm:max-w-[85%] sm:text-4xl lg:text-[2.75rem]">
            What's Inside Your
            <span className="block text-[#B5E061]">Naturally Good Bag?</span>
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/85 sm:text-lg">
            A wholesome mix of seasonal produce for your family — grown and curated by us, from our farm to your home.
          </p>

          <ul className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-2">
            {bagContents.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={`relative flex min-h-[104px] items-center gap-3 overflow-hidden rounded-2xl py-3.5 pl-3.5 pr-[30%] sm:min-h-[136px] sm:gap-5 sm:py-4 sm:pl-5 sm:pr-[42%] ${item.rowClass}`}
                >
                  <span className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full sm:h-16 sm:w-16 ${item.iconClass}`}>
                    <Icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.6} />
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-[15px] font-bold leading-snug text-[#16301F] sm:text-lg">{item.title}</h4>
                    <p className="mt-1 text-[13px] leading-snug text-gray-600 sm:text-[15px]">{item.text}</p>
                  </div>
                  {/* Photo fades in from the left so the text stays readable */}
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-y-0 right-0 h-full w-[34%] object-cover [mask-image:linear-gradient(to_right,transparent,black_45%)] sm:w-[46%]"
                  />
                </li>
              );
            })}
          </ul>

          <div className="mt-3 flex items-center gap-4 rounded-2xl bg-[#E6F4DA] p-4 text-[#284A2F] sm:mt-4 sm:gap-5 sm:p-5">
            <LeavesIcon className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
            <span aria-hidden="true" className="h-10 w-px shrink-0 bg-[#9CC97A] sm:h-12" />
            <p className="text-[13px] leading-snug sm:text-base">
              <strong className="block text-[15px] text-[#16301F] sm:text-lg">You stay in control.</strong>
              Personalise your preferences in the app, while our farmers help curate the freshest seasonal mix for you.
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
            <button
              type="button"
              onClick={() => scrollToPlans('subscription')}
              className="group inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1B6532] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B6532] sm:text-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Choose Your Bag
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-center text-sm text-white/85">Start with 1 bag. Save more with 4, 12, 24 or 48 bags.</p>
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
