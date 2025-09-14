import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Truck, Smartphone, RotateCcw } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'delivery', name: 'Delivery', icon: <Truck className="w-5 h-5" /> },
    { id: 'order', name: 'How to Order', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'returns', name: 'Returns', icon: <RotateCcw className="w-5 h-5" /> }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: "How does it work?",
        answer: "Naturally Good is a subscription based model. We offer organic seasonal farm fresh veggies, staples and deliver them to your doorstep. You can choose to sign up for a monthly, quarterly & six month subscription package. For longer subscription or large quantity offers, please call us at +919643722220.\n\nThere's no minimum contract so you can pause or cancel at any time, just make sure you do this before your cut off if you don't want to receive your next box. We'll automatically take payment, so you can just sit back and enjoy your delicious deliveries."
      },
      {
        id: 2,
        question: "How do I get in touch with Naturally Good?",
        answer: "You can reach us using contact us.\n\nAlternatively we can be reached over the phone between the hours of 10am-5pm, you can call us on +91 9643722220. We'd love to hear from you!"
      },
      {
        id: 3,
        question: "I have allergies/dietary restrictions, Is Naturally Good suitable for me?",
        answer: "Naturally good provides seasonal veggies which are naturally grown so should not have any reactions typically caused by chemicals used during cultivation. In case you can not consume one or two veggies, we encourage you to share them with your family members or with your friends or help or the community. Everyone should enjoy and benefit from nature's bounty."
      },
      {
        id: 4,
        question: "I don't like or eat a particular vegetable, Is Naturally Good suitable for me?",
        answer: "Absolutely! Naturally Good caters to individual preferences with three key benefits:\n\n• Variety at your fingertips: We offer a wide range of fresh, seasonal produce, allowing you to choose vegetables you enjoy and still reap the benefits of a diverse diet.\n• Seasonal is key: Seasonal vegetables are naturally suited to the current environment, minimizing allergies, and maximizing freshness.\n• Tailor your box: Simply leave out vegetables that aren't your favorites when building your box. Enjoy fresh, seasonal produce perfectly suited to your personal preferences!"
      },
      {
        id: 5,
        question: "My children don't like or eat a particular vegetable, Is Naturally Good suitable for me?",
        answer: "Naturally Good is perfect for families with children who have specific preferences:\n\n• We offer diverse fresh, seasonal produce, so you can find veggies your kids will enjoy. This ensures they still get a variety of essential nutrients for healthy growth.\n• With a well-balanced box, your children may not need additional vitamin supplements. Fresh vegetables offer essential nutrients naturally.\n• Exclude the veggies your kids dislike when you customize your box. This way, you can enjoy fresh, seasonal produce that caters to your family's preferences without stress!"
      },
      {
        id: 6,
        question: "The quantity in the bag is too much for me, Is Naturally Good suitable for me?",
        answer: "For one person, you typically need around 300-400 grams of vegetables per day, which adds up to about 2.1-2.8 kilograms for a week. This equates to roughly 120-140 grams of vegetables per meal.\n\nThe bag you receive is designed for a week and contains 7-7.5 kilograms of vegetables, which is perfect for a family of 3-4 people. You can calculate the right amount for your family based on this.\n\nIf you have a larger family, you can subscribe to more than one bag to ensure everyone gets the right nutrition. This way, you can make sure your family gets the vegetables they need."
      },
      {
        id: 7,
        question: "The price of the bag is too high, Is Naturally Good suitable for me?",
        answer: "Organic vegetables are NOT expensive. They are sold at a high market price because of low availability and high demand. Below is a comparison of our typical bag consisting of 7-8 Kgs of veggies:\n\nNATURALLY GOOD ORGANIC: As low as Rs 833 (Average 100-105 per KG)\nOther Organic Subscriptions: Rs 1500-2500 (Average 299-349 per KG)\nOrganic vegetables a-la-carte: Rs 1500-1600 (Average 213-299 per KG)\nNon-organic vegetables a-la-carte: Rs 800-1000 (Average 99-133 per KG)"
      },
      {
        id: 8,
        question: "Will they remain fresh for a week?",
        answer: "Yes, the vegetables in Naturally Good bags will remain fresh for a week, and here's why:\n\nMarket vegetables often come from cold storage or have travelled long distances that are almost 5-7 days old, which affect their freshness. However, the vegetables provided by Naturally Good reach within 12 hours of harvesting ensuring complete nutrition and freshness. They still have their roots and soil attached, which allows them to retain nutrients and freshness.\n\nHere are a couple of tips to keep them fresh for even longer:\n• Store them properly: Keep the vegetables in a cool, dark place or in the refrigerator to extend their freshness.\n• Keep them hydrated: Just like flowers in a vase, you can place the vegetables in water to help them stay fresh. This method can keep them crisp and vibrant until you're ready to use them."
      },
      {
        id: 9,
        question: "Can I customise variety and quantity?",
        answer: "While Mother Nature dictates the exact vegetable selection based on seasonality, we offer exciting customization options! Each bag provides a generous quantity suitable for 3-4 people. For larger families, subscribe to multiple bags, ensuring everyone enjoys the bounty of fresh produce, tailored to your preferences."
      },
      {
        id: 10,
        question: "Can we visit your Farm?",
        answer: "Yes, for sure! Our farm is open for visits from October 1st to February 28th. To plan your visit, please inform us at least 7 days in advance over call on +91 9643722220.\n\nFarm visits are available on weekdays i.e. Monday-Friday, from 12:00 PM to 4:00 PM. Please note that a minimum of 6 people are required for a farm visit, and the cost is INR 1800 per person.\n\nDuring your visit, you'll enjoy a delicious lunch and refreshing soft beverages made from the fresh seasonal produce of our farm. Additionally, you'll have the opportunity to select 1 to 2 kilograms of vegetables directly from the farm to take home with you. We look forward to welcoming you to our farm!"
      }
    ],
    delivery: [
      {
        id: 11,
        question: "Do you offer free Delivery?",
        answer: "Certainly! We provide complimentary delivery for all subscriptions within our service areas, encompassing Gurgaon and Delhi. However, delivery fees are applicable for orders outside these areas."
      },
      {
        id: 12,
        question: "Which areas do you deliver to?",
        answer: "We deliver our amazing veggies bag to many areas in Gurgaon and Delhi. We're always expanding our reach, but if your area isn't covered yet, don't worry! Just message us, and we'll happily bring you baskets for a small delivery fee."
      },
      {
        id: 13,
        question: "What are your delivery days and time?",
        answer: "Our delivery schedule currently includes Wednesday and Saturday. Orders are typically fulfilled within 24-48 hours of receipt, except on national holidays and major festivals. You can select your preferred delivery day. Deliveries usually arrive at your doorstep in the evening."
      },
      {
        id: 14,
        question: "How will I know my veggie basket has been delivered?",
        answer: "You will receive a real-time email/message confirming delivery of your Veggie Box along with a tracking id of where your driver has left your bag and any additional delivery notes."
      },
      {
        id: 15,
        question: "Can I change/choose the day my box is delivered?",
        answer: "Each pincode has a set delivery day, this is in order to keep our routes efficient we're unfortunately not able to change your delivery day.\n\nYou are, however, able to skip your next bag or pause your deliveries, if you are away for a longer period you can write to us on EatFresh@NaturallyGood.in mentioning 'Delivery Hold'."
      }
    ],
    order: [
      {
        id: 16,
        question: "How to order",
        answer: "1. Click on +919643722200 or send a HI on Whatsapp to +919643722200\n2. Set your address only for the first time.\n3. Click on view products to visit our store.\n4. Select your preferred subscription plan for organically grown seasonal vegetables and any additional add-ons.\n5. Click on the payment link and Voila! Relish your weekly burst of freshness and seasonal produce. A step towards a New Fitter you!\n\nNote: If you face any trouble while processing your payment you can also make a UPI payment to +919643722220 or call us at +919643722220 or scan the QR code."
      },
      {
        id: 17,
        question: "How do I add an extra box?",
        answer: "You can add as many baskets within your account. Choose your subscription type and the number of baskets needed. If you have any issues please get in touch!"
      },
      {
        id: 18,
        question: "How do I cancel my subscription?",
        answer: "We are sad to see you go! Simply switch off the automatic renewal anytime from up to 2 days before the last scheduled delivery for the current plan. If you would prefer not to receive the order, please let us know on +91 9643722220 and we will donate it to one of our charity partners."
      },
      {
        id: 19,
        question: "Can I pause my subscription?",
        answer: "We have got you. To pause or cancel at any time, just make sure you do this before your cut off if you don't want to receive your next box. Please let us know on +91 9643722220"
      }
    ],
    returns: [
      {
        id: 20,
        question: "I received some poor produce. What to do?",
        answer: "We are very sorry to hear some unhappy vegetables or produce showed up in your bag! Please send us an email to our customer happiness team at EatFresh@NaturallyGood.in within 24 Hours of Delivery and we can make sure the matter is looked into and you receive a replacement or that you are compensated back for the amount paid by you for that delivery. If you are able to provide some photos of any unsatisfactory produce in your email we would really appreciate it, as photos can help us better identify the issue you have experienced and make sure it is addressed."
      },
      {
        id: 21,
        question: "How soon will I get a refund?",
        answer: "It will reflect in your original payment method in 7 Working Days. You may write to us at eatfresh@naturallygood.in or call at +919643722220 for any assistance."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(null); // Close any open FAQ when switching categories
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-green-300/20 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-200/20 to-green-300/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mb-6"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Got questions? We've got answers! Find everything you need to know about our 
            organic veggie baskets, delivery, and subscription plans.
          </p>
        </motion.div>

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
              <span className="whitespace-nowrap">{category.name}</span>
              
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{background: '#00963F'}}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-0" key={activeCategory}>
          {faqs[activeCategory]?.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 text-left focus:outline-none group flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 pr-6 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-8 h-8 text-gray-600" />
                  ) : (
                    <Plus className="w-8 h-8 text-gray-600" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <div className="text-gray-600 leading-relaxed text-lg md:text-xl whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6">Still have questions?</h3>
            <p className="text-emerald-100 mb-8 max-w-4xl mx-auto text-lg">
              We're here to help! Reach out to us on WhatsApp for personalized assistance 
              with your organic veggie basket needs.
            </p>
            <motion.button
              onClick={() => {
                const message = `Hi! I have some questions about your seasonal veggie baskets. Could you please help me with more information?`;
                window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Chat with us on WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
