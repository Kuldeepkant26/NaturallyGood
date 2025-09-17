import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { HeroParallaxDemo } from '@/components/ui/HeroParallaxDemo'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { TimelineDemo } from '@/components/ui/TimelineDemo'
import { useNavigateToProducts } from '../utils/navigationUtils'
import '../css/About.css'

// Image URLs - Organic Vegetables and Farming
const OrganicVegetables1 = 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3'; // Fresh vegetables
const OrganicFarm = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2289&auto=format&fit=crop&ixlib=rb-4.0.3'; // Organic farm field
const FreshVegetables = 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'; // Assorted vegetables
const FarmToTable = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'; // Fresh vegetables preparation
const OrganicHarvest = 'https://www.blr.onlyhydroponics.in/cdn/shop/articles/Easy_Steps_to_Grow_Organic_Vegetables_in_Bangalore.jpg?v=1671692518'; // Harvest vegetables
const GreenVegetables = 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2325&auto=format&fit=crop&ixlib=rb-4.0.3'; // Green leafy vegetables
const VegetableMarket = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'; // Vegetable market
const FarmingHands = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3'; // Hands holding vegetables

// Dashboard Assets - you may need to import these from your assets folder
// import DashboardSS2 from '../assets/DashboardSS2.png';
// import DashboardSS4 from '../assets/DashboardSS4.png';

function About() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <div className="about-page">
            <HeroParallaxDemo></HeroParallaxDemo>


            {/* Excellence & Innovation Section */}
            <ExcellenceInnovationSection />

            {/* Marine Excellence Section */}
            <MarineExcellenceSection />

            {/* Distinction in Detail Section */}
            <DistinctionSection />

            {/* Fleet Gallery Section */}
            <FleetGallerySection />

            {/* Dashboard Showcase Section */}
            <DashboardShowcaseSection 
                setIsLoginModalOpen={setIsLoginModalOpen}
            />
        </div>
    )
}

// Distinction in Detail Component
const DistinctionSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const navigateToProducts = useNavigateToProducts()

  return (
    <section className="distinction-section" ref={sectionRef}>
      <div className="container">
        <div className="distinction-layout">
          {/* Content Side */}
          <motion.div
            className="distinction-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="distinction-title">Why Choose Us?</h2>

            <motion.p
              className="distinction-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With our highest agriculture standards and zero adulterated produce, we pledge to be organic and traceable with the use of homegrown natural fertilisers and no artificial preservatives. Reducing environmental burden by utilizing nature's best suited season to grow colorful organic produce and reducing lengthy supply chains. Following the slow food model, we give our seasonal produce the desired time to grow to reap the maximum benefits.
            </motion.p>

            <motion.div
              className="distinction-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <div className="feature-number">Zero</div>
                <div className="feature-text">Chemicals</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Seasonal</div>
                <div className="feature-text">& Fresh</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">Farm</div>
                <div className="feature-text">To Table</div>
              </div>
            </motion.div>

            <motion.div
              className="distinction-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#" onClick={navigateToProducts} className="discover-link">
                See All Products →
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="distinction-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img
                src={OrganicHarvest}
                alt="Organic vegetable farming excellence"
                className="distinction-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Organic Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Marine Excellence Component
const MarineExcellenceSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="marine-excellence-section" ref={sectionRef}>
      <div className="container">
        <div className="marine-excellence-layout">
          {/* Image Side - Left */}
          <motion.div
            className="marine-excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="marine-image-wrapper">
              <img
                src={FarmToTable}
                alt="Organic farm to table delivery"
                className="marine-excellence-img"
              />
              <div className="marine-image-overlay">
                <div className="marine-overlay-content">
                  <span className="marine-overlay-text">Farm Fresh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="marine-excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="marine-excellence-title">Our Mission & Vision</h2>

            <motion.p
              className="marine-excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our vision embodies an interplay between local farmers and consumers to create a transparent channel of giving back as much as we can to the regions of source through cooperatives and fair pricing. Following a Self Sustained Ecosystem, all our produce uses zero chemicals and makes no wastage. Our mission is to be the world leaders in lifting the spirit and nourishing the heart, building a health conscious collective free from diseases.
            </motion.p>

            <motion.div
              className="marine-excellence-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="marine-feature-item">
                <div className="marine-feature-number">Farm</div>
                <div className="marine-feature-text">Aggregation</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Zero</div>
                <div className="marine-feature-text">Wastage</div>
              </div>
              <div className="marine-feature-item">
                <div className="marine-feature-number">Fair</div>
                <div className="marine-feature-text">Pricing</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Fleet Gallery Component
const FleetGallerySection = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  // Check if we're on mobile
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const vegetables = [
    {
      src: OrganicVegetables1,
      title: "Peak Nutrition",
      subtitle: "Seasonal organic vegetables harvested at their nutritional peak for maximum health benefits",
      badge: "Nutrient Dense"
    },
    {
      src: FreshVegetables,
      title: "Natural Rhythm",
      subtitle: "Following nature's seasonal cycles for better taste, nutrition, and environmental harmony",
      badge: "Season Perfect"
    },
    {
      src: GreenVegetables,
      title: "Pure & Clean",
      subtitle: "Organic farming methods ensure no synthetic pesticides or chemicals touch your food",
      badge: "Chemical Free"
    },
    {
      src: FarmingHands,
      title: "Soil Health",
      subtitle: "Organic practices build rich, living soil that produces more nutritious vegetables",
      badge: "Living Soil"
    },
    {
      src: VegetableMarket,
      title: "Climate Smart",
      subtitle: "Seasonal eating reduces carbon footprint and supports local agricultural biodiversity",
      badge: "Eco Conscious"
    }
  ];

  return (
    <section className="fleet-gallery-section" ref={galleryRef}>
      <div className="container">
        <h2 className="section-title">Why Organic And Seasonal</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Experience the benefits of nature's timing with our organic, seasonal produce.</p>
      </div>
      <motion.div
        className="horizontal-scroll-container"
        style={isMobile ? {} : { x }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30
        }}
      >
        {vegetables.map((vegetable, i) => (
          <div key={i} className="gallery-item">
            <img src={vegetable.src} alt={vegetable.title} />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3 className="gallery-overlay-title">{vegetable.title}</h3>
                <p className="gallery-overlay-subtitle">{vegetable.subtitle}</p>
                <span className="gallery-overlay-badge">{vegetable.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Excellence & Innovation Component
const ExcellenceInnovationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="excellence-innovation-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Organic Excellence</h2>
          <p className="section-description">
            Distinguished by our unwavering commitment to organic farming excellence and sustainable agriculture
          </p>
        </motion.div>
        <div className="excellence-layout">
          {/* Image Side - Left */}
          <motion.div
            className="excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="excellence-image-wrapper">
              <img
                src={OrganicFarm}
                alt="Sustainable organic farming practices"
                className="excellence-img"
              />
              <div className="excellence-badge">
                <span className="badge-text">Organic</span>
                <span className="badge-subtext">Farming</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="excellence-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Naturally Good Organic Farming
            </motion.h3>

            <motion.p
              className="excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Naturally Good was started on a premise of food and its indulgence with health. We decided to bring the farm to the table by offering seasonal, freshest organic vegetables delivered to your doorstep. Our produce is in different sizes, shapes and colors, basking in their own imperfections - just like nature intended. It will ground you, fortify you and light you up.
            </motion.p>

            <motion.div
              className="excellence-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Seasonal Vegetables</h4>
                  <p>Fresh, seasonal organic vegetables grown naturally</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Farm to Table</h4>
                  <p>Direct delivery from our farms to your doorstep</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-content">
                  <h4>Organic Manure</h4>
                  <p>Homegrown natural fertilizers with zero chemicals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Dashboard Showcase Component
const DashboardShowcaseSection = ({ setIsLoginModalOpen }) => {
  const dashboardVideoRef = useRef(null);

  const handleLearnMoreClick = () => {
    window.location.href = '/about';
  };

  // Ensure organic farm video plays
  useEffect(() => {
    if (dashboardVideoRef.current) {
      dashboardVideoRef.current.muted = true;
      dashboardVideoRef.current.playsInline = true;
      dashboardVideoRef.current.autoplay = true;

      const playPromise = dashboardVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Organic farm video autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <section className="dashboard-showcase-section">
      {/* Organic Farm Video Background */}
      <div className="dashboard-video-container">
        <video
          ref={dashboardVideoRef}
          className="dashboard-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://videos.pexels.com/video-files/2495382/2495382-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Video Overlay */}
      <div className="dashboard-video-overlay"></div>
      
      <div className="container">
        <div className="dashboard-layout">
          {/* Left Content */}
          <div className="dashboard-content-left">
            <div className="dashboard-text-content">
              <h2 className="dashboard-main-title">Order Fresh Organic Vegetables</h2>
              <p className="dashboard-main-description">
                Experience the future of healthy eating with our organic vegetable delivery platform. 
                Order fresh, seasonal produce grown with natural methods and delivered to your doorstep.
              </p>
              
              <div className="dashboard-features-list">
                <div className="feature-point">
                  <span className="feature-bullet">•</span>
                  <span>Zero chemicals and pesticides</span>
                </div>
                <div className="feature-point">
                  <span className="feature-bullet">•</span>
                  <span>Seasonal and fresh produce</span>
                </div>
                <div className="feature-point">
                  <span className="feature-bullet">•</span>
                  <span>Direct farm to table delivery</span>
                </div>
                <div className="feature-point">
                  <span className="feature-bullet">•</span>
                  <span>Supporting local farmers</span>
                </div>
              </div>

              <div className="dashboard-stats-left">
                <div className="stat-item-left">
                  <div className="stat-number-left">100%</div>
                  <div className="stat-label-left">Organic</div>
                </div>
                <div className="stat-item-left">
                  <div className="stat-number-left">Farm</div>
                  <div className="stat-label-left">Fresh</div>
                </div>
                <div className="stat-item-left">
                  <div className="stat-number-left">Zero</div>
                  <div className="stat-label-left">Waste</div>
                </div>
              </div>

              <div className="dashboard-cta-left">
                <button 
                  className="cta-btn primary" 
                  onClick={() => window.open('https://wa.me/919643722200?text=hi', '_blank')}
                >
                  Order Now
                </button>
                <button 
                  className="cta-btn secondary"
                  onClick={handleLearnMoreClick}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="dashboard-images-right">
            <div className="floating-images-container">
              <div className="floating-image primary-image">
                <img src={OrganicVegetables1} alt="Organic Vegetables Delivery" />
                <div className="image-glow"></div>
              </div>
              
              <div className="floating-image secondary-image">
                <img src={FreshVegetables} alt="Fresh Farm Produce" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
