import React from 'react'
import { Sprout, Heart, Users, Home, Leaf } from 'lucide-react'
import './YourFarmersSection.css'

function YourFarmersSection() {
  const farmersImages = [
    "https://i.pinimg.com/1200x/25/4f/f1/254ff1db7128864fe8f4da0993bd23c2.jpg",
    "https://i.pinimg.com/736x/28/5a/ff/285affa8c77437c9532d1e72ce11ca43.jpg",
    "https://i.pinimg.com/736x/aa/c4/a7/aac4a761c910bc0c8d0876e305e91600.jpg",
    "https://i.pinimg.com/736x/ed/24/d0/ed24d09bbb21d3768709b8f61d4e8c11.jpg",
    "https://i.pinimg.com/736x/b3/ee/78/b3ee783c5e9ae15328a5cbc7011d9d2e.jpg"
  ];

  return (
    <section className="farmers-section">
      <div className="farmers-container">
        {/* Left Side - Content */}
        <div className="farmers-content">
          <div className="content-header">
            
            <h2 className="farmers-title">Your Farmers</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="farmers-description">
            <p className="main-text">
              At Naturally Good, our story begins with the hands that nurture every seed. 
              Our family of about <span className="highlight">300 farmers</span> are not just cultivators; 
              they are the heart of our community.
            </p>
            <p className="secondary-text">
              Coming from diverse rural backgrounds, they bring generations of wisdom, 
              hard work, and care to every crop they grow.
            </p>
            <div className="impact-statement">
              <div className="impact-icon"><Heart className="w-6 h-6" /></div>
              <p className="impact-text">
                By supporting them, you're not just eating healthier you're 
                <span className="highlight"> uplifting entire farming families.</span>
              </p>
            </div>
          </div>

          <div className="farmers-stats">
            <div className="stat">
              <div className="stat-icon"><Users className="w-6 h-6" /></div>
              <div className="stat-content">
                <span className="stat-number">300+</span>
                <span className="stat-label">Farmers</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon"><Home className="w-6 h-6" /></div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Villages</span>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon"><Leaf className="w-6 h-6" /></div>
              <div className="stat-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="farmers-images">
          <div className="image-grid">
            <div className="image-item large">
              <img src={farmersImages[0]} alt="Lead farmer in organic fields" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Farm Leader</h4>
                  <p>20+ Years Experience</p>
                </div>
              </div>
            </div>
            <div className="image-item small">
              <img src={farmersImages[1]} alt="Fresh vegetable harvest" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Fresh Harvest</h4>
                  <p>Daily Picked</p>
                </div>
              </div>
            </div>
            <div className="image-item small">
              <img src={farmersImages[2]} alt="Traditional farming methods" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Traditional Methods</h4>
                  <p>Heritage Farming</p>
                </div>
              </div>
            </div>
            <div className="image-item medium">
              <img src={farmersImages[3]} alt="Organic crop cultivation" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Organic Crops</h4>
                  <p>Chemical Free</p>
                </div>
              </div>
            </div>
            <div className="image-item medium featured">
              <img src={farmersImages[4]} alt="Quality produce selection" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Premium Quality</h4>
                  <p>Hand Selected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourFarmersSection
