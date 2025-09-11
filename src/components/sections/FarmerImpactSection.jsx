import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FarmerImpactSection.css'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

function FarmerImpactSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const impactData = [
    {
      icon: "💰",
      title: "Fair Pricing",
      description: "Farmers earn more, without middlemen.",
      color: "#FFD700",
      gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
      stats: "40% Higher Income"
    },
    {
      icon: "🌾",
      title: "Rural Development", 
      description: "Investments in better tools, seeds, and irrigation.",
      color: "#4a7c59",
      gradient: "linear-gradient(135deg, #4a7c59, #6b8e23)",
      stats: "300+ Farmers Equipped"
    },
    {
      icon: "👨‍🌾",
      title: "Generational Change",
      description: "Training the next generation of farmers in sustainable practices.",
      color: "#32CD32",
      gradient: "linear-gradient(135deg, #32CD32, #228B22)",
      stats: "150+ Youth Trained"
    },
    {
      icon: "👩‍🌾",
      title: "Women Empowerment",
      description: "Many women farmers are part of our growing community.",
      color: "#FF69B4",
      gradient: "linear-gradient(135deg, #FF69B4, #FF1493)",
      stats: "60% Women Farmers"
    }
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split text effect
      gsap.fromTo(titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animate cards with stagger effect
      gsap.fromTo(".impact-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotationX: 45
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Floating animation for icons
      gsap.to(".impact-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      })

      // Background elements animation
      gsap.to(".floating-shape", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
        stagger: {
          each: 3,
          from: "random"
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return (
    <section ref={sectionRef} className="farmer-impact-section">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="impact-container">
        {/* Header Section */}
        <motion.div 
          ref={titleRef}
          className="impact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
        >
          <div className="section-badge">
            <motion.span 
              className="badge-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              🌱
            </motion.span>
            <span>Making a Difference</span>
          </div>
          
          <h2 className="impact-title">
            <span className="title-gradient">Farmer's Impact</span>
          </h2>
          
          <div className="title-underline">
            <motion.div 
              className="underline-fill"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: "100%",
                  transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" }
                }
              }}
            />
          </div>

          <motion.p 
            className="impact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
          >
            Every Naturally Good order drives direct impact
          </motion.p>
        </motion.div>

        {/* Impact Cards */}
        <motion.div 
          ref={cardsContainerRef}
          className="impact-cards-grid"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {impactData.map((impact, index) => (
            <motion.div
              key={index}
              className="impact-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-glow" style={{ background: impact.gradient }}></div>
              
              <motion.div 
                className="impact-icon"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <span style={{ filter: `drop-shadow(0 4px 8px ${impact.color}30)` }}>
                  {impact.icon}
                </span>
              </motion.div>

              <div className="card-content">
                <h3 className="impact-card-title">{impact.title}</h3>
                <p className="impact-card-description">{impact.description}</p>
                
                <motion.div 
                  className="impact-stats"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="stats-number" style={{ color: impact.color }}>
                    {impact.stats}
                  </span>
                </motion.div>
              </div>

              <motion.div 
                className="card-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <svg width="100%" height="100%" className="border-svg">
                  <rect 
                    x="2" y="2" 
                    width="calc(100% - 4px)" 
                    height="calc(100% - 4px)" 
                    rx="16" 
                    fill="none" 
                    stroke={impact.color}
                    strokeWidth="2"
                    strokeDasharray="8 4"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statement */}
        <motion.div 
          className="impact-statement"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="statement-content"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="statement-icon">💚</div>
            <p className="statement-text">
              <span className="highlight-text">You help create</span> a stronger, more resilient 
              <span className="highlight-text"> rural economy</span> & a 
              <span className="highlight-text">sustained ecosystem</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FarmerImpactSection
