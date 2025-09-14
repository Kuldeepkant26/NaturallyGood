import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Heart, Leaf, Star, Baby, Salad, User, UserCircle, Building, MessageCircle, Users } from 'lucide-react'

function You() {
  const navigate = useNavigate()

  const blogPosts = [
    {
      slug: 'seasonal-eating',
      title: 'Seasonal Eating Made Easy',
      description: 'Why your body craves seasonal produce.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center',
      category: 'Nutrition'
    },
    {
      slug: 'healthy-recipes',
      title: 'Quick & Healthy Recipes',
      description: 'Simple dishes to make the most of your veggie bag.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
      category: 'Recipes'
    },
    {
      slug: 'organic-living',
      title: 'Living Organic',
      description: 'Small lifestyle changes for a sustainable future.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center',
      category: 'Lifestyle'
    },
    {
      slug: 'wellness-wisdom',
      title: 'Wellness Wisdom',
      description: 'How organic food supports every age group.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
      category: 'Wellness'
    }
  ]

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#78B826]/10 border border-[#78B826]/20 rounded-full px-4 py-2"
            >
              <span className="text-[#00963E] text-sm font-medium">— TRANSFORM YOUR HEALTH</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gray-900">Your</span><br />
              <span className="text-[#78B826]">Wellness with</span><br />
              <span className="text-[#00963E] italic">Organic Living</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Our premium organic vegetables and sustainable farming practices 
              provide a safe and reliable way to nourish your body, 
              allowing you to experience improved vitality.
            </motion.p>

            {/* CTA Button and Reviews */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00963E] hover:bg-[#007a33] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start healthy journey
              </motion.button>

              {/* Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#78B826] to-[#00963E] border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                    S
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                    M
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-900 font-semibold ml-1">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600">from 1000+ <span className="underline">customers</span></p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Elements - Beautiful Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center max-w-lg mx-auto"
          >
            <div className="grid grid-cols-12 grid-rows-12 gap-4 w-full h-96">
              
              {/* Top Left - Large Rounded Rectangle (Happy Couple with Organic Food) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-7 row-span-6 relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img 
                  src="https://thumbs.dreamstime.com/b/happy-indian-couple-bag-full-food-checking-bill-young-men-women-paper-bags-fresh-organic-fruits-vegetable-standing-311453649.jpg"
                  alt="Happy couple with organic food bags"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Happy Customers</div>
                  <div className="text-xs opacity-90">Fresh Organic Delivery</div>
                </div>
              </motion.div>

              {/* Top Right - Oval Success Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-5 row-span-6 relative overflow-hidden bg-gradient-to-br from-green-100 to-green-50 shadow-2xl"
                style={{ 
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  clipPath: 'ellipse(100% 80% at 50% 50%)'
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-8 h-8 bg-[#00963E] rounded-full flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-center text-gray-800">
                    <div className="text-lg font-bold mb-1">Order</div>
                    <div className="text-sm mb-2">Delivered</div>
                    <div className="text-xs text-gray-600">Date: Mar 20, 2024</div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Left - Oval with Savings Amount */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="col-span-5 row-span-6 relative overflow-hidden bg-gradient-to-br from-[#00963E] to-[#78B826] shadow-2xl"
                style={{ 
                  borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                  clipPath: 'ellipse(80% 100% at 50% 50%)'
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mb-2">
                    <span className="text-[#00963E] font-bold text-sm">NG</span>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold mb-1">₹2,500</div>
                    <div className="text-sm opacity-90 mb-2">Health Savings</div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 mx-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right - Large Rounded Rectangle (Organic Products) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="col-span-7 row-span-6 relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img 
                  src="https://m.media-amazon.com/images/I/81oQo+uFNsL.jpg"
                  alt="Organic products and vegetables"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-[#00963E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Premium Organic</div>
                  <div className="text-xs opacity-90">100% Natural Products</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 1: Your Family */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Your <span className="text-[#78B826]">Family</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Naturally Good isn't just about vegetables—it's about nourishing every family. When you choose us, you:
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#78B826] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Baby className="text-white w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">Feed your children with safe, nutritious, and organic food.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#00963E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="text-white w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">Support your parents with nutrient-rich vegetables for stronger immunity.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#78B826] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Salad className="text-white w-4 h-4" />
                  </div>
                  <p className="text-lg text-gray-700">Bring home a variety of seasonal produce that strengthens health and creates joyful meals.</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                <p className="text-lg text-gray-800 italic"><Sparkles className="inline w-5 h-5 text-yellow-500 mr-2" /> Every Naturally Good bag is a gesture of care—for your family, your farmers, and your planet.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://media.istockphoto.com/id/667506608/photo/happy-family-slicing-vegetables.jpg?s=612x612&w=0&k=20&c=1kYQGvT8L2wTaxKibzhooyMxDPOiyjjnfoqi7VPnO-c="
                alt="Happy family slicing vegetables together"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: For Every Age & Stage */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              For Every <span className="text-[#78B826]">Age & Stage</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From childhood to golden years, organic nutrition supports every phase of life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Children */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl"><Baby className="w-10 h-10 text-purple-500" /></div>
                <h3 className="text-2xl font-bold text-gray-900">Children</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Fresh, organic food is the foundation of a child's lifelong health.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits for Kids:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Stronger immunity & resistance to common infections.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Reduced risk of allergies, asthma & skin irritations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Better concentration & learning abilities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Natural growth support with vitamins, minerals & protein-rich greens.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-800 italic"><Heart className="inline w-4 h-4 text-green-500 mr-2" /> Give your child the gift of pure food—just the way nature intended.</p>
              </div>
            </motion.div>

            {/* Women */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl"><UserCircle className="w-10 h-10 text-pink-500" /></div>
                <h3 className="text-2xl font-bold text-gray-900">Women</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Women's bodies deserve nourishment that works in harmony with hormones and wellness needs.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits for Women:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Balanced hormones & reduced risk of PCOS/thyroid issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Stronger bones & iron-rich nutrition for healthy cycles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Healthier, glowing skin & stronger hair.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Enhanced prenatal & postnatal nourishment.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-800 italic"><Sparkles className="inline w-4 h-4 text-yellow-500 mr-2" /> From adolescence to motherhood and beyond, organic food supports every phase of a woman's life.</p>
              </div>
            </motion.div>

            {/* Men */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl"><User className="w-10 h-10 text-blue-500" /></div>
                <h3 className="text-2xl font-bold text-gray-900">Men</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Men need sustained energy, mental focus, and heart health to balance demanding lives.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits for Men:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Higher energy & stamina for work and workouts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Improved heart health & reduced risk of hypertension.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Stress reduction & better sleep quality.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Natural muscle development & stronger bones.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-800 italic"><Sparkles className="inline w-4 h-4 text-yellow-500 mr-2" /> Fuel your body with clean nutrition—because performance starts with what's on your plate.</p>
              </div>
            </motion.div>

            {/* Elderly */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl"><Users className="w-10 h-10 text-gray-500" /></div>
                <h3 className="text-2xl font-bold text-gray-900">Elderly</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Age gracefully with nature's wisdom—organic produce protects and heals.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits for Seniors:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Improved digestion & metabolism.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Better sleep & reduced fatigue.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Stronger bones & joint health (reduced osteoporosis risk).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Lower risk of chronic lifestyle diseases.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#78B826] rounded-full mt-2"></span>
                    <span className="text-gray-700">Boosted immunity & sharper cognitive function.</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-800 italic"><Sparkles className="inline w-4 h-4 text-yellow-500 mr-2" /> Organic food supports longevity and vitality, making everyday life healthier and lighter.</p>
              </div>
            </motion.div>
          </div>
          {/* Corporates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-[#00963E] to-[#78B826] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl"><Building className="w-10 h-10 text-white" /></div>
              <h3 className="text-2xl font-bold">Corporates & Working Professionals</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Well-fed teams are productive teams. Organic nutrition is an investment in workplace wellness.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                  <span>Higher focus, sharper memory & reduced fatigue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                  <span>Boosted immunity against everyday stress & pollution.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                  <span>Better energy management throughout the day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                  <span>Reduced healthcare costs in the long term.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/20 rounded-xl">
              <p className="text-sm italic"><Sparkles className="inline w-4 h-4 text-yellow-300 mr-2" /> Corporate wellness begins at the dining table—bring Naturally Good into your work life.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Your Neighborhood */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your <span className="text-[#78B826]">Neighborhood</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Healthier families build stronger neighborhoods—and at Naturally Good, we help you grow more than just vegetables:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://5.imimg.com/data5/SELLER/Default/2024/4/407963242/WG/CL/DQ/125769060/kitchen-garden.jpeg"
                  alt="Kitchen gardening"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Kitchen Gardening</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">Learn how to grow herbs, microgreens, and small veggies right at home.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://media.istockphoto.com/id/2189177572/photo/indian-family-picking-up-organic-vegetables-from-house-garden-outdoor-vegetarian-healthy-food.jpg?s=612x612&w=0&k=20&c=ywtWkVEkzR8FpcgJlXnJgjPyVy-F_IMVkykv87EBVGc="
                  alt="Indian family picking vegetables from garden"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Community Gardens</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">Come together with neighbors to grow fresh produce and build stronger bonds.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src="https://media.istockphoto.com/id/2084922755/photo/two-people-are-planting-a-tree-together.jpg?s=612x612&w=0&k=20&c=EbMhZ_X3p35AByUGDNBI_1TIVUs_AfjvGuylOSeQgMg="
                  alt="Two people planting a tree together"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Plant a Tree</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">Join our green initiative—every tree planted is a step towards cleaner air and a healthier tomorrow.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl"
          >
            <p className="text-xl text-gray-800 italic">
              <Leaf className="inline w-5 h-5 text-green-500 mr-2" /> Together, let's turn every home and neighborhood into a hub of health, sustainability, and joy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4: Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <MessageCircle className="inline w-10 h-10 text-[#78B826] mr-3" /> What our <span className="text-[#78B826]">community</span> says
            </h2>
            <p className="text-xl text-gray-700">
              Real families, real stories, real health transformations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                  alt="Priya Sharma"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Mother of 2</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "My children stopped falling sick so often after we switched to Naturally Good. The vegetables are so fresh and chemical-free!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="Rajesh Kumar"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Working Professional</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "My energy levels improved dramatically. I can work longer hours without feeling exhausted. Organic food really makes a difference!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                  alt="Anita Verma"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Anita Verma</h4>
                  <p className="text-sm text-gray-600">Senior Citizen</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "At 65, I feel more energetic than I did 10 years ago. The organic vegetables have improved my digestion and overall health significantly."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Blogs */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#78B826]">Blogs</span>
            </h2>
            <p className="text-xl text-gray-700">
              Stay connected through stories, tips, and guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handleBlogClick(post.slug)}
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs bg-[#78B826] px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#00963E]/0 group-hover:bg-[#00963E]/10 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00963E] transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{post.description}</p>
                <div className="mt-3 flex items-center text-[#00963E] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium">Read More</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 6: Events */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Community <span className="text-[#78B826]">Events</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe in connections beyond deliveries. Our community events bring you closer to the source of your food and the people behind it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://greentokri.com/cdn/shop/files/GreenTokri-Farm-Tours-Field-Trips-668-800px.jpg?v=1737541464&width=1445"
                  alt="Farm tours"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Farm Tours</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Spend a day with our farmers, experience sowing, harvesting, and authentic farm meals.
                </p>
                <button className="text-[#00963E] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://www.themanthanschool.co.in/blog/wp-content/uploads/2021/06/sustainability.jpg"
                  alt="Sustainability drives"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Sustainability Drives</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Join tree-planting campaigns, zero-waste initiatives, and green awareness events.
                </p>
                <button className="text-[#00963E] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://www.constructionweekonline.in/cloud/2024/05/17/2_Senior-Living-in-India.jpg"
                  alt="Wellness meetups"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Wellness Meetups</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Engage in fitness, yoga, and mindful living sessions with like-minded families.
                </p>
                <button className="text-[#00963E] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center p-8 bg-gradient-to-r from-[#00963E] to-[#78B826] rounded-3xl text-white"
          >
            <p className="text-xl italic">
              <Heart className="inline w-5 h-5 text-green-300 mr-2" /> Community is the heart of Naturally Good—because when we grow together, we thrive together
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Transform Your <span className="text-[#78B826]">Health</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 mb-8"
          >
            Join thousands of families who have made the switch to naturally good living.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00963E] to-[#78B826] text-white font-semibold py-4 px-8 rounded-full text-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Healthy Journey Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}

export default You
