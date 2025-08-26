import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What's included in the seasonal veggie basket?",
      answer: "Our seasonal veggie basket includes 3-4 kg of mixed seasonal vegetables and exotics, 0.5-1 kg of seasonal salads and assortments, and 3-4 kg of essential staples. The exact selection varies based on seasonal availability and harvest quality."
    },
    {
      id: 2,
      question: "How often do you deliver and to which areas?",
      answer: "We deliver weekly to your doorstep. Our delivery areas currently cover major cities and surrounding suburbs. Contact us to check if we deliver to your specific location. We maintain consistent delivery schedules for your convenience."
    },
    {
      id: 3,
      question: "Are your vegetables really organic and pesticide-free?",
      answer: "Yes! All our vegetables are grown using organic farming methods without synthetic pesticides, herbicides, or chemical fertilizers. We work directly with certified organic farmers and maintain strict quality standards from farm to doorstep."
    },
    {
      id: 4,
      question: "Can I customize my basket or specify preferences?",
      answer: "While we recommend going with our farmers' choice for the freshest seasonal produce, we understand dietary preferences. You can contact us via WhatsApp to discuss any specific requirements or allergies."
    },
    {
      id: 5,
      question: "What subscription plans do you offer?",
      answer: "We offer Monthly (4 weekly deliveries), Quarterly (12 weekly deliveries), and Half-Yearly (24 weekly deliveries) plans. Each plan offers different discount percentages, with longer commitments providing better savings."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
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
                      <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                        {faq.answer}
                      </p>
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
