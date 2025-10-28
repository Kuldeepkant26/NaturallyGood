import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { MessageSquare, MapPin, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FarmersVoiceSection.css';

// Import local farmer image for first testimonial only
import farmer6 from '../../assets/FarmersImages/farmer6.jpeg'

gsap.registerPlugin(ScrollTrigger);

function FarmersVoiceSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Farmer testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Haryana",
      experience: "15 years",
      quote: "पहले अपनी फसल के सही दाम की चिंता रहती थी। अब Naturally Good से जुड़कर हमें न केवल अच्छा दाम मिलता है बल्कि यह सुकून भी है कि हमारी ऑर्गेनिक उपज सीधे परिवारों तक पहुँच रही है। लोग हमारी मेहनत की कद्र करते हैं, यही सबसे बड़ी खुशी है।",
      image: farmer6,
      rating: 5
    },
    {
      id: 2,
      name: "Mohan Singh",
      location: "Punjab",
      experience: "12 years",
      quote: "Naturally Good ने हमें रसायन-मुक्त खेती करने का आत्मविश्वास दिया। वे हमें नई तकनीक सिखाते हैं और हमारी पारंपरिक तरीकों का भी सम्मान करते हैं। आज मेरी ज़मीन स्वस्थ है, फसल बेहतर है और मुझे गर्व है कि हमारी सब्ज़ियाँ लोगों को शुद्ध और ताज़ा भोजन दे रही हैं।",
      image: "https://res.cloudinary.com/dz9eemmz4/image/upload/v1758706283/darpan-sharma-DluwGgHPprs-unsplash_rqjvto.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Sunita Devi",
      location: "Rajasthan",
      experience: "20 years",
      quote: "एक महिला किसान होने के नाते शुरू में आसान नहीं था। लेकिन Naturally Good ने प्रशिक्षण और उचित भुगतान देकर हमें मज़बूती दी। आज हमारा आर्थिक हाल बेहतर है और मुझे गर्व है कि हमारी उपज लोगों की सेहत सुधार रही है।",
      image: "https://res.cloudinary.com/dz9eemmz4/image/upload/v1758706737/gyan-shahane-3C7zhY3gcQc-unsplash_mfsgrj.jpg",
      rating: 5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonials stagger animation
      gsap.fromTo(".farmers-voice-section .testimonial-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating background shapes
      gsap.to(".farmers-voice-section .floating-shape", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        viewport={{ once: true }}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <motion.section
      ref={sectionRef}
      className="farmers-voice-section"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Floating Background Shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-shape shape-4"></div>

      <div className="farmers-voice-container">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          className="section-header"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Real Stories, Straight from the Fields
          </motion.h2>

          <motion.div
            className="title-underline"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          ></motion.div>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Hear from our farmer partners about their journey with Naturally Good
            and how organic farming has transformed their lives and communities.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={testimonialsRef}
          className="testimonials-grid"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-background"></div>

              {/* Quote Icon */}
              <motion.div
                className="quote-icon"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>

              {/* Farmer Image */}
              <motion.div
                className="farmer-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.src = "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg";
                  }}
                />
                <div className="image-overlay"></div>
              </motion.div>

              {/* Testimonial Content */}
              <div className="testimonial-content">
                <motion.p
                  className="testimonial-quote"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.quote}"
                </motion.p>

                <div className="farmer-info">
                  <div className="farmer-details">
                    <motion.h4
                      className="farmer-name"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      className="farmer-location"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <MapPin className="w-4 h-4 inline mr-1" />{testimonial.location}
                    </motion.p>
                    <motion.p
                      className="farmer-experience"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Clock className="w-4 h-4 inline mr-1" />{testimonial.experience} farming
                    </motion.p>
                  </div>

                  <motion.div
                    className="rating"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {renderStars(testimonial.rating)}
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="card-decoration"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FarmersVoiceSection;
