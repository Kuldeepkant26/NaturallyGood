import React, { useState, useEffect } from 'react'
import '../css/OurAppPage.css'
import { FaHome, FaShoppingCart, FaUser, FaBell, FaHeart, FaArrowLeft, FaLeaf, FaApple, FaGooglePlay } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'
import { IoStatsChart } from 'react-icons/io5'

function OurAppPage() {
  const [activeScreen, setActiveScreen] = useState('order')
  const [deviceType, setDeviceType] = useState('android') // default to android

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // iOS detection (iPhone, iPad, iPod, Mac)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
    
    if (isIOS || isMac) {
      setDeviceType('ios');
    } else {
      setDeviceType('android');
    }
  }, []);

  return (
    <div className="our-app-page">
      <section className="app-hero-section">
        <div className="app-hero-container">
          {/* Left Content */}
          <div className="app-hero-content">
            <h1 className="app-hero-title">
              Bringing Farm-Fresh
              <br />
              Produce to Your Doorstep
            </h1>
            <p className="app-hero-description">
              Experience the convenience of ordering fresh, organic vegetables directly from local farmers. 
              Our platform connects you with nature's best, ensuring quality, freshness, and sustainability 
              in every order. Track your deliveries, browse seasonal produce, and support local agriculture—all from your phone.
            </p>
            <div className="app-store-buttons">
              {deviceType === 'ios' ? (
                <a 
                  href="https://apps.apple.com/in/app/naturally-good/id6749650953" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button app-store" 
                  aria-label="Download on the App Store"
                >
                  <FaApple className="store-icon" />
                  <div className="store-text">
                    <span className="store-label">Download on the</span>
                    <span className="store-name">App Store</span>
                  </div>
                </a>
              ) : (
                <a 
                  href="https://play.google.com/store/apps/details?id=com.naturallygood.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button google-play" 
                  aria-label="Get it on Google Play"
                >
                  <FaGooglePlay className="store-icon" />
                  <div className="store-text">
                    <span className="store-label">GET IT ON</span>
                    <span className="store-name">Google Play</span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Side - Phone with Floating Cards */}
          <div className="app-hero-visual">
            {/* Floating Statistics Card - Top */}
            <div className="floating-card statistics-card">
              <div className="card-header-icon">
                <IoStatsChart />
              </div>
              <h4>Weekly Orders</h4>
              <div className="stat-legend">
                <span className="legend-item">
                  <span className="dot purple"></span>
                  <span>This Week</span>
                </span>
                <span className="legend-item">
                  <span className="dot green"></span>
                  <span>Last Week</span>
                </span>
              </div>
              <div className="chart-area">
                <svg viewBox="0 0 200 80" className="line-chart">
                  <path
                    d="M 10 70 Q 30 65, 50 50 T 90 35 T 130 25 T 170 20"
                    fill="none"
                    stroke="#4FC3F7"
                    strokeWidth="3"
                  />
                  <circle cx="170" cy="20" r="5" fill="#4caf50" />
                </svg>
              </div>
            </div>

            {/* Main Phone Display */}
            <div className="phone-with-hand">
              <div className="phone-mockup-realistic">
                <div className="phone-screen-content">
                  {/* Order Details Screen */}
                  {activeScreen === 'order' && (
                    <div className="screen-container">
                      <div className="screen-header">
                        <FaArrowLeft className="back-btn" />
                        <span className="screen-title">Order Details</span>
                        <div className="header-spacer"></div>
                      </div>
                      
                      <div className="scrollable-content">
                        <div className="order-card">
                          <div className="order-image">
                            <FaLeaf className="veg-icon" />
                          </div>
                          <div className="order-info">
                            <h3>Fresh Organic Bundle</h3>
                            <p>Farm to Table Delivery</p>
                            <div className="order-price">₹450</div>
                          </div>
                        </div>

                        <div className="delivery-status">
                          <div className="status-header">
                            <FaBell className="status-icon" />
                            <span>Delivery Status</span>
                          </div>
                          <div className="status-progress">
                            <div className="progress-line"></div>
                            <div className="status-step completed">
                              <div className="step-dot"></div>
                              <span>Order Placed</span>
                            </div>
                            <div className="status-step completed">
                              <div className="step-dot"></div>
                              <span>Picked from Farm</span>
                            </div>
                            <div className="status-step active">
                              <div className="step-dot"></div>
                              <span>Out for Delivery</span>
                            </div>
                          </div>
                        </div>

                        <div className="order-items">
                          <h4>Items in your order</h4>
                          <div className="item-list">
                            <div className="item">
                              <span>Organic Spinach</span>
                              <span>500g</span>
                            </div>
                            <div className="item">
                              <span>Fresh Tomatoes</span>
                              <span>1kg</span>
                            </div>
                            <div className="item">
                              <span>Carrots</span>
                              <span>500g</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Home/Browse Screen */}
                  {activeScreen === 'home' && (
                    <div className="screen-container">
                      <div className="screen-header">
                        <span className="screen-title">Fresh Produce</span>
                        <FaShoppingCart className="header-icon" />
                      </div>
                      
                      <div className="scrollable-content">
                        <div className="category-grid">
                          <div className="category-card">
                            <div className="category-icon green">🥬</div>
                            <span>Leafy Greens</span>
                          </div>
                          <div className="category-card">
                            <div className="category-icon red">🍅</div>
                            <span>Vegetables</span>
                          </div>
                          <div className="category-card">
                            <div className="category-icon orange">🥕</div>
                            <span>Root Veggies</span>
                          </div>
                          <div className="category-card">
                            <div className="category-icon yellow">🌿</div>
                            <span>Herbs</span>
                          </div>
                        </div>

                        <div className="featured-section">
                          <h4>Today's Fresh Picks</h4>
                          <div className="product-card">
                            <div className="product-badge">Fresh</div>
                            <div className="product-img"></div>
                            <h5>Organic Spinach Bundle</h5>
                            <p>From Local Farms</p>
                            <div className="product-footer">
                              <span className="price">₹80/bunch</span>
                              <button className="add-btn">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Profile Screen */}
                  {activeScreen === 'profile' && (
                    <div className="screen-container">
                      <div className="screen-header">
                        <span className="screen-title">My Profile</span>
                      </div>
                      
                      <div className="scrollable-content">
                        <div className="profile-header">
                          <div className="profile-avatar">
                            <FaUser />
                          </div>
                          <h3>Kuldeep Kant</h3>
                          <p>Member since 2024</p>
                        </div>

                        <div className="profile-stats">
                          <div className="stat-box">
                            <div className="stat-value">24</div>
                            <div className="stat-label">Orders</div>
                          </div>
                          <div className="stat-box">
                            <div className="stat-value">12</div>
                            <div className="stat-label">Favorites</div>
                          </div>
                          <div className="stat-box">
                            <div className="stat-value">₹5.2k</div>
                            <div className="stat-label">Saved</div>
                          </div>
                        </div>

                        <div className="profile-menu">
                          <div className="menu-item">
                            <FaShoppingCart className="menu-icon" />
                            <span>My Orders</span>
                          </div>
                          <div className="menu-item">
                            <FaHeart className="menu-icon" />
                            <span>Favorites</span>
                          </div>
                          <div className="menu-item">
                            <FaBell className="menu-icon" />
                            <span>Notifications</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Navigation */}
                  <div className="bottom-nav">
                    <div 
                      className={`nav-icon ${activeScreen === 'home' ? 'active' : ''}`}
                      onClick={() => setActiveScreen('home')}
                    >
                      <FaHome />
                    </div>
                    <div className="nav-icon">
                      <FaShoppingCart />
                    </div>
                    <div 
                      className={`nav-icon-center ${activeScreen === 'order' ? 'active' : ''}`}
                      onClick={() => setActiveScreen('order')}
                    >
                      <FaLeaf />
                    </div>
                    <div className="nav-icon">
                      <FaBell />
                    </div>
                    <div 
                      className={`nav-icon ${activeScreen === 'profile' ? 'active' : ''}`}
                      onClick={() => setActiveScreen('profile')}
                    >
                      <FaUser />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Store Buttons - Shown only on mobile after phone */}
            <div className="app-store-buttons-mobile">
              {deviceType === 'ios' ? (
                <a 
                  href="https://apps.apple.com/in/app/naturally-good/id6749650953" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button app-store" 
                  aria-label="Download on the App Store"
                >
                  <FaApple className="store-icon" />
                  <div className="store-text">
                    <span className="store-label">Download on the</span>
                    <span className="store-name">App Store</span>
                  </div>
                </a>
              ) : (
                <a 
                  href="https://play.google.com/store/apps/details?id=com.naturallygood.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button google-play" 
                  aria-label="Get it on Google Play"
                >
                  <FaGooglePlay className="store-icon" />
                  <div className="store-text">
                    <span className="store-label">GET IT ON</span>
                    <span className="store-name">Google Play</span>
                  </div>
                </a>
              )}
            </div>

            {/* Floating Progress Card - Bottom */}
            <div className="floating-card progress-card">
              <div className="card-header-icon">
                <HiTrendingUp />
              </div>
              <div className="progress-content">
                <div className="progress-text">
                  <div className="progress-title">Monthly Savings</div>
                  <div className="progress-amount">₹2,400 <span>of ₹5,000</span></div>
                  <div className="progress-date">Last order: Today</div>
                </div>
                <div className="circular-progress">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="8"/>
                    <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="8" strokeDasharray="201" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                  </svg>
                  <div className="progress-number">48%</div>
                </div>
              </div>
              <div className="progress-actions">
                <button className="btn-support">View Details</button>
                <button className="btn-share">Share</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Your Health Section */}
      <section className="control-health-section">
        <div className="control-health-container">
          <h2 className="control-health-title">
            You're in complete control of your <br />
            health. What will you do with it?
          </h2>
          
          <div className="control-health-visual">
            {/* Feature Card 1 - Brainstorm Ideas */}
            <div className="feature-card brainstorm-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Plan Your</h3>
                <h4>Healthy Meals</h4>
              </div>
            </div>

            {/* Feature Card 2 - Track and Manage Goal */}
            <div className="feature-card track-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Track and</h3>
                <h4>Manage Orders</h4>
              </div>
            </div>

            {/* Feature Card 3 - Search Others Dream */}
            <div className="feature-card search-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Search Fresh</h3>
                <h4>Vegetables</h4>
              </div>
            </div>

            {/* Feature Card 4 - Communicate */}
            <div className="feature-card communicate-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Connect with</h3>
                <h4>Local Farmers</h4>
              </div>
            </div>

            {/* Central Phone Display */}
            <div className="central-phone">
              <div className="phone-mockup-control">
                <div className="phone-screen-control">
                  <div className="screen-header-control">
                    <div className="back-arrow">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                      </svg>
                    </div>
                    <span className="screen-title-control">Meal Planning</span>
                  </div>
                  
                  <div className="goal-image">
                    <div className="vegetable-basket">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="goal-info">
                    <h3>I want to eat Fresh & Healthy</h3>
                    <div className="farmer-info">
                      <div className="farmer-avatar"></div>
                      <span>From Local Farmers</span>
                    </div>
                  </div>
                  
                  <div className="progress-section-control">
                    <div className="progress-header">
                      <span>Weekly Goal Progress</span>
                      <div className="progress-amount">₹2,500</div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="progress-stats">
                      <span>5 of 7 days completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid-section">
        <div className="features-grid-container">
          <div className="section-header">
            <h2 className="section-title">Everything you need for healthy living</h2>
            <p className="section-description">
              Our comprehensive platform brings together farmers, fresh produce, and health-conscious consumers 
              in one seamless experience designed for modern life.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>Hand-picked organic vegetables directly from certified local farms ensuring the highest quality standards.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>Track your orders from farm to doorstep with live updates and estimated delivery times.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Guaranteed Freshness</h3>
              <p>100% satisfaction guarantee with our freshness promise - if not satisfied, we'll make it right.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Support Local Farmers</h3>
              <p>Every purchase directly supports local farming communities and promotes sustainable agriculture.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h3>Flexible Delivery</h3>
              <p>Schedule deliveries that fit your lifestyle with same-day, next-day, or weekly subscription options.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-item-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3>Personalized Experience</h3>
              <p>AI-powered recommendations based on your preferences, dietary needs, and seasonal availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
              <div className="stat-description">Families choosing fresh, organic produce daily</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Partner Farms</div>
              <div className="stat-description">Certified organic farms across the region</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Orders Delivered</div>
              <div className="stat-description">Fresh vegetables delivered to doorsteps</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Satisfaction Rate</div>
              <div className="stat-description">Customer satisfaction with our service quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Start your healthy journey today</h2>
            <p className="cta-description">
              Join thousands of families who have transformed their eating habits with fresh, 
              organic produce delivered straight from local farms to their doorstep.
            </p>
            
            <div className="cta-buttons">
              {deviceType === 'ios' ? (
                <a 
                  href="https://apps.apple.com/in/app/naturally-good/id6749650953" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-app-store"
                >
                  <FaApple className="cta-icon" />
                  <div className="cta-text">
                    <span className="cta-label">Download on the</span>
                    <span className="cta-name">App Store</span>
                  </div>
                </a>
              ) : (
                <a 
                  href="https://play.google.com/store/apps/details?id=com.naturallygood.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-google-play"
                >
                  <FaGooglePlay className="cta-icon" />
                  <div className="cta-text">
                    <span className="cta-label">GET IT ON</span>
                    <span className="cta-name">Google Play</span>
                  </div>
                </a>
              )}
            </div>
            
            <div className="cta-features">
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Free to download</span>
              </div>
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>No subscription required</span>
              </div>
              <div className="cta-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Available nationwide</span>
              </div>
            </div>
          </div>
          
          <div className="cta-visual">
            <div className="floating-phone">
              <div className="phone-mockup-cta">
                <div className="phone-screen-cta">
                  <div className="success-animation">
                    <div className="success-circle">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3>Order Confirmed!</h3>
                    <p>Your fresh vegetables will be delivered tomorrow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurAppPage
