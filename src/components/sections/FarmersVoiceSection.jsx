import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FarmersVoiceSection.css';

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
      quote: "Working with Naturally Good has transformed my farming. No more worrying about finding buyers - they provide guaranteed purchase and fair prices for our organic produce.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Wheat & Vegetables",
      rating: 5
    },
    {
      id: 2,
      name: "Sunita Devi",
      location: "Punjab",
      experience: "12 years",
      quote: "Before joining Naturally Good, I struggled to sell my organic vegetables. Now I have a steady income and my children can go to better schools. This partnership changed our lives.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Tomatoes & Leafy Greens",
      rating: 5
    },
    {
      id: 3,
      name: "Mohan Singh",
      location: "Rajasthan",
      experience: "20 years",
      quote: "The training programs taught us sustainable farming methods. My soil is healthier, crops are better, and I earn more. Naturally Good respects farmers and treats us as partners.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Spices & Grains",
      rating: 5
    },
    {
      id: 4,
      name: "Lakshmi Patel",
      location: "Gujarat",
      experience: "8 years",
      quote: "From a small farmland to supplying premium organic produce - this journey with Naturally Good has been incredible. They provided everything from seeds to market access.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Cotton & Vegetables",
      rating: 5
    },
    {
      id: 5,
      name: "Arjun Reddy",
      location: "Andhra Pradesh",
      experience: "10 years",
      quote: "The organic certification process was smooth with their guidance. Now my produce sells at premium prices in urban markets. My family's future is secure.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Rice & Millets",
      rating: 5
    },
    {
      id: 6,
      name: "Kavita Sharma",
      location: "Uttar Pradesh",
      experience: "6 years",
      quote: "As a woman farmer, I faced many challenges. Naturally Good gave me equal opportunities and respect. Today I'm financially independent and inspiring other women in my village.",
      image: "https://img.freepik.com/premium-vector/illustration-indian-farmer-face-vector_55610-7901.jpg",
      crop: "Organic Herbs & Medicinal Plants",
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
          variants={itemVariants}
        >
          <motion.div 
            className="section-badge"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="badge-icon"
              animate={{ 
                rotate: [0, 10, -10, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🗣️
            </motion.span>
            <span>Farmers' Voice</span>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Real Stories, Straight from the Fields
          </motion.h2>
          
          <motion.div 
            className="title-underline"
            variants={itemVariants}
          ></motion.div>
          
          <motion.p 
            className="section-subtitle"
            variants={itemVariants}
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
                      📍 {testimonial.location}
                    </motion.p>
                    <motion.p 
                      className="farmer-experience"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      🌾 {testimonial.crop}
                    </motion.p>
                    <motion.p 
                      className="farmer-experience"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      ⏱️ {testimonial.experience} farming
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

        {/* Call to Action */}
        <motion.div 
          className="cta-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="cta-title"
            whileHover={{ scale: 1.02 }}
          >
            Want to Join Our Farming Family?
          </motion.h3>
          <motion.p className="cta-description">
            Become part of our growing community of organic farmers and transform your farming journey with Naturally Good.
          </motion.p>
          <motion.button 
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(74, 124, 89, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>Get Started Today</span>
            <motion.span 
              className="button-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FarmersVoiceSection;
