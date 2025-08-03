import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your NaturallyGood assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Add bot response after a short delay with typing indicator
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Thank you for your interest! This feature is currently under development. We're working hard to bring you an amazing chat experience with personalized product recommendations and organic lifestyle tips. Please check back soon! 🌿",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Interface */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <div className="avatar-circle">
                <span>🌿</span>
              </div>
              <div className="header-info">
                <h3>NaturallyGood Assistant</h3>
                <p>Online</p>
              </div>
            </div>
            <button onClick={toggleChat} className="close-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages" ref={messagesContainerRef}>
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}>
                {message.isBot && (
                  <div className="message-avatar">
                    <span>🌿</span>
                  </div>
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="message bot-message">
                <div className="message-avatar">
                  <span>🌿</span>
                </div>
                <div className="typing-indicator">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our organic products..."
                className="chat-input"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="send-btn"
                disabled={!inputValue.trim() || isTyping}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`chatbot-fab ${isOpen ? 'active' : ''}`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
          </svg>
        )}
      </button>

      <style jsx>{`
        .chatbot-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(1);
        }

        .chatbot-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
        }

        .chatbot-fab.active {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
        }

        .chatbot-fab.active:hover {
          box-shadow: 0 12px 35px rgba(239, 68, 68, 0.4);
        }

        .chatbot-container {
          position: fixed;
          bottom: 5rem;
          right: 2rem;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          z-index: 999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
        }

        .chatbot-header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chatbot-avatar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .header-info h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .header-info p {
          margin: 0;
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .chatbot-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          scroll-behavior: smooth;
        }

        .message {
          display: flex;
          gap: 0.5rem;
        }

        .bot-message {
          justify-content: flex-start;
          align-items: flex-end;
        }

        .user-message {
          justify-content: flex-end;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
        }

        .message-content {
          max-width: 75%;
          padding: 0.875rem 1rem;
          border-radius: 18px;
          position: relative;
          word-wrap: break-word;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .bot-message .message-content {
          background: white;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 6px;
          margin-left: 0.5rem;
        }

        .user-message .message-content {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-bottom-right-radius: 6px;
        }

        .message-content p {
          margin: 0 0 0.375rem 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .message-time {
          font-size: 0.75rem;
          opacity: 0.6;
          font-weight: 500;
        }

        /* Typing Indicator */
        .typing-indicator {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          border-bottom-left-radius: 6px;
          padding: 1rem;
          margin-left: 0.5rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .typing-dots {
          display: flex;
          gap: 0.25rem;
          align-items: center;
        }

        .typing-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #94a3b8;
          animation: typingBounce 1.4s ease-in-out infinite;
        }

        .typing-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typingBounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .chatbot-input-form {
          padding: 1rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-container {
          display: flex;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .chat-input {
          flex: 1;
          padding: 0.875rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          outline: none;
          font-size: 0.875rem;
          resize: none;
          transition: all 0.2s ease;
          background: white;
        }

        .chat-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .chat-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .send-btn {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .chatbot-container {
            width: calc(100vw - 2rem);
            height: calc(100vh - 8rem);
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            border-radius: 16px;
          }

          .chatbot-fab {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 56px;
            height: 56px;
          }
        }

        @media (max-width: 480px) {
          .chatbot-container {
            width: calc(100vw - 1rem);
            height: calc(100vh - 6rem);
            bottom: 0.5rem;
            right: 0.5rem;
            left: 0.5rem;
            border-radius: 12px;
          }

          .chatbot-fab {
            bottom: 1rem;
            right: 1rem;
            width: 52px;
            height: 52px;
          }
        }

        /* Scrollbar Styling */
        .chatbot-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chatbot-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .chatbot-messages::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 2px;
        }

        .chatbot-messages::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
