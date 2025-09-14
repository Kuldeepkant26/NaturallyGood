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
        question: "I have allergies/dietary restrictions, Is Naturally Good suitable for me?",
        answer: "Naturally good provides seasonal veggies which are naturally grown so should not have any reactions typically caused by chemicals used during cultivation.\n\nYou can always personalise your bag and create your own mix of vegetables on our app.\n\nIn case you can not consume one or two veggies, we encourage you to share them with your family members or with your friends or help the community. Everyone should enjoy and benefit from nature's bounty."
      },
      {
        id: 2,
        question: "I don't like or eat a particular vegetable, Is Naturally Good suitable for me?",
        answer: "Absolutely! Naturally Good caters to individual preferences with three key benefits:\n\nVariety at your fingertips: We offer a wide range of fresh, seasonal produce, allowing you to choose vegetables you enjoy and still reap the benefits of a diverse diet.\nSeasonal is key: Seasonal vegetables are naturally suited to the current environment, minimizing allergies, and maximizing freshness.\nCustomize your bag: Simply leave out vegetables that aren't your favorites when building your bag. Enjoy fresh, seasonal produce perfectly suited to your personal preferences!"
      },
      {
        id: 3,
        question: "My children don't like or eat a particular vegetable ,Is Naturally Good suitable for me?",
        answer: "Naturally Good is perfect for families with children who have specific preferences:\n\nWe offer diverse fresh, seasonal produce, so you can find veggies your kids will enjoy. This ensures they still get a variety of essential nutrients for healthy growth.\nWith a well-balanced bag, your children may not need additional vitamin supplements. Fresh vegetables offer essential nutrients naturally.\nExclude the veggies your kids dislike when you customize your bag. This way, you can enjoy fresh, seasonal produce that caters to your family's preferences without stress!"
      },
      {
        id: 4,
        question: "The quantity in the bag is too much for me , Is Naturally Good suitable for me?",
        answer: "For one person, you typically need around 300-400 grams of vegetables per day, which adds up to about 2-3 kilograms for a week.\n\nThe bag you receive is designed for a week and contains 8-10 kilograms of vegetables, which is perfect for a family of 3-5 people. You can calculate the right amount for your family based on this.\n\nIf you have a larger family, you can subscribe to more than one bag to ensure everyone gets the right nutrition."
      },
      {
        id: 5,
        question: "The price of the bag is too high, Is Naturally Good suitable for me?",
        answer: "Organic vegetables are NOT expensive. They are sold at a high market price because of low availability and high demand. Below is a comparison of our typical bag consisting of 7-8 Kgs of veggies\n\nTypical cost of 8-10 Kgs of vegetables\nNATURALLY GOOD ORGANIC SUBSCRIPTION: As low as Rs 833 - Average 100-105 per KG\nOther Organic Subscriptions: Rs 1500-2500 - Average 299-349 per KG\nOrganic vegetables a-la-carte: Rs 1500-1600 - Average 213-299 per KG\nNon-organic vegetables a-la-carte: Rs 800-1000 - Average 99-133per KG"
      },
      {
        id: 6,
        question: "Will they remain fresh for a week ?",
        answer: "Yes, the vegetables in Naturally Good bags will remain fresh for a week, and here's why:\n\nMarket vegetables often come from cold storage or have travelled long distances that are almost 5-7 days old , which affect their freshness. However, the vegetables provided by Naturally Good reach within 12 hours of harvesting ensuring complete nutrition and freshness . They still have their roots and soil attached, which allows them to retain nutrients and freshness.\n\nHere are a couple of tips to keep them fresh for even longer:\nStore them properly: Keep the vegetables in a cool, dark place or in the refrigerator to extend their freshness.\nKeep them hydrated: Just like flowers in a vase, you can place the vegetables in water to help them stay fresh. This method can keep them crisp and vibrant until you're ready to use them.\nRecipe Support: We also provide recipe support & cooking instructions based on the shelf-life of vegetables you received in your seasonal veggie bag."
      },
      {
        id: 7,
        question: "Can I customize variety and quantity?",
        answer: "While Mother Nature dictates the exact vegetable selection based on seasonality, we offer exciting customization options! Each bag provides a generous quantity suitable for 3-4 people. For larger families, subscribe to multiple bags, ensuring everyone enjoys the bounty of fresh produce, tailored to your preferences."
      },
      {
        id: 8,
        question: "Can we visit your farms?",
        answer: "Yes, for sure! Our farm is open for visits from November 1st to February 28th. To plan your visit please book your slots with us at least 7 days in advance over call on +91 9643722220\n\nDuring your visit, you'll enjoy delicious snacks and refreshing soft beverages made from the fresh seasonal produce of our farm. Additionally, you'll have the opportunity to select 1 to 2 kilograms of vegetables directly from the farm to take home with you. We look forward to welcoming you to our farm!"
      }
    ],
    delivery: [
      {
        id: 11,
        question: "Do you offer free Delivery?",
        answer: "Certainly! We provide complimentary delivery for all subscriptions within our service areas and dedicated routes in Delhi & NCR. However, delivery fees are applicable for orders outside these areas or off routes or specific delivery time slots."
      },
      {
        id: 12,
        question: "Which areas do you deliver to?",
        answer: "Currently, we deliver our nutritious veggies bags to many areas in Gurgaon, Delhi, Faridabad, Ghaziabad, Noida & Greater Noida. We're always expanding our reach, but if your area isn't covered yet, don't worry! Just message us, and we'll happily bring you bags to you for a small delivery fee."
      },
      {
        id: 13,
        question: "What are your delivery days and time ?",
        answer: "We deliver our bags from Monday to Saturday. Orders are typically fulfilled within 24-48 hours of receipt, except on national holidays and major festivals. You can select your preferred delivery day. Deliveries usually arrive at your doorstep in the evenings."
      },
      {
        id: 14,
        question: "How will I know my veggie bag has been delivered?",
        answer: "You will receive a real-time email/message confirming delivery of your Veggie Bag along with a tracking id and photograph of where your driver has left your bag and any additional delivery notes."
      },
      {
        id: 15,
        question: "Can I change/choose the day my bag is delivered?",
        answer: "Each pincode/area has a set delivery day, this is in order to keep your orders fresh, deliveries quick & routes efficient. However, delivery fees are applicable for orders outside these areas or off routes or specific requests of delivery time slots"
      },
      {
        id: 16,
        question: "Can I skip a delivery if I am travelling?",
        answer: "If you are travelling or indulging in festivities, you can skip your next bag or pause your deliveries through our app. If you are away for a longer period you can write to us on EatFresh@NaturallyGood.in mentioning your Customer and Order ID with the subject 'Delivery Hold'."
      }
    ],
    order: [
      {
        id: 16,
        question: "How to order?",
        answer: "Naturally Good is a subscription based membership model. We offer organic seasonal farm fresh veggies, exotics, staples and herbs and deliver them to your doorstep. You can choose to sign up for our wellness subscription plans. Choose a subscription type which suits your family size and goals.\n\nYou can order our wellness subscription plans through our app, or you can call or whatsapp us at +91 9643722200 / +91 9111190102\n\nTo subscribe click here"
      },
      {
        id: 17,
        question: "How do I add an extra bag?",
        answer: "You can add as many bags as you want within your account. Choose a subscription type which suits your family size and goals and the number of bags needed or you can simply add more than 1 subscription."
      },
      {
        id: 18,
        question: "How to order extra vegetables if the bag limit is exceeded?",
        answer: "You can add extra products or add-ons through our app, while preparing your bag at a discounted price."
      },
      {
        id: 19,
        question: "Can I pause/ cancel my subscription?",
        answer: "We have got you. To pause or cancel at any time, go to your account section on our app or contact our customer support team."
      },
      {
        id: 20,
        question: "Can I transfer my subscription to a friend/ family member?",
        answer: "Yes, You can transfer your subscription by paying a small transfer fee of Rs.500."
      },
      {
        id: 21,
        question: "Can I place bulk orders?",
        answer: "Yes, for longer subscriptions or large quantity offers, please call us at +91 9643722200 / +91 9111190102"
      }
    ],
    returns: [
      {
        id: 22,
        question: "I received some poor produce. What to do ?",
        answer: "We are very sorry to hear about some unhappy vegetables or produce that showed up in your bag! You can go to our app, go to orders> delivered> support and raise a support ticket. You can also send an email to our customer happiness team at EatFresh@NaturallyGood.in within 24 Hours of Delivery.\n\nWe will make sure the matter is looked into and you receive a replacement. If you are able to provide some photos of any unsatisfactory produce in your email we would really appreciate it, as photos can help us better identify the issue you have experienced and make sure it is addressed."
      },
      {
        id: 23,
        question: "I received wrong/less items. What to do ?",
        answer: "You can go to our app, go to orders> delivered> support and raise a support ticket and we will arrange a replacement for you. You can also send an email to our customer happiness team at EatFresh@NaturallyGood.in within 24 Hours of Delivery."
      },
      {
        id: 24,
        question: "How soon will I get a refund if I cancel?",
        answer: "It will reflect in your original payment method in 7 Working Days. You may write to us at EatFresh@NaturallyGood.in or call at +919643722200 for any assistance."
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
