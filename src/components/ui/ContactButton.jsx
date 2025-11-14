import React, { useState, useEffect } from 'react';
import './ContactButton.css';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    requirements: '',
    consent: false
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check if user has already submitted
    const hasSubmitted = localStorage.getItem('contactFormSubmitted');
    if (hasSubmitted) {
      setIsSubmitted(true);
    }
  }, []);

  const togglePopup = () => {
    if (isSubmitted) {
      setShowSuccess(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setShowSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile.replace(/[^\d]/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // Requirements validation
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please tell us how we can help you';
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements = 'Please provide more details (at least 10 characters)';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'Please give your consent to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Store submission status
    localStorage.setItem('contactFormSubmitted', 'true');
    setIsSubmitted(true);
    setShowSuccess(true);
    setIsOpen(false);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      requirements: '',
      consent: false
    });
  };

  return (
    <>
      {/* Fixed Contact Button */}
      <button
        className="contact-button-fixed"
        onClick={togglePopup}
        aria-label="Contact us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="contact-icon"
        >
          <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Overlay */}
      {(isOpen || showSuccess) && (
        <div className="contact-overlay" onClick={closePopup}></div>
      )}

      {/* Contact Form Popup */}
      {isOpen && (
        <div className="contact-popup">
          <div className="contact-popup-header">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message!</p>
            <button className="contact-close-btn" onClick={closePopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="mobile">
                  Mobile No. <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={errors.mobile ? 'error' : ''}
                />
                {errors.mobile && (
                  <span className="error-message">{errors.mobile}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="requirements">
                How can we help you? <span className="required">*</span>
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows="4"
                className={errors.requirements ? 'error' : ''}
              ></textarea>
              {errors.requirements && (
                <span className="error-message">{errors.requirements}</span>
              )}
            </div>

            <div className="form-group consent-group">
              <label className="consent-label">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="consent-checkbox"
                />
                <span className="consent-text">
                  Stay Informed, We'd love to keep you updated with the latest news, 
                  exclusive offers, and valuable insights. Please give your consent to 
                  receive messages and emails from us.
                </span>
              </label>
              {errors.consent && (
                <span className="error-message">{errors.consent}</span>
              )}
            </div>

            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <div className="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2>Thank You for Contacting Us!</h2>
            <p>
              We've received your message and appreciate you reaching out to us.
              Our team will review your inquiry and get back to you within 24-48 hours.
            </p>
            <p className="success-note">
              We're excited to assist you with your organic journey! 🌱
            </p>
            <button className="success-close-btn" onClick={closePopup}>
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;
