import React from 'react'

function SplashScreen({ onSkip }) {
    return (
        <div className="splash-container">
            {/* Skip Button */}
            {onSkip && (
                <button 
                    className="skip-button" 
                    onClick={onSkip}
                    aria-label="Skip splash screen"
                >
                    Skip
                </button>
            )}
            
            <div className="splash-content">
                {/* Animated Logo/Brand */}
                <div className="splash-logo">
                    <div className="logo-circle">
                        <span className="logo-text">NG</span>
                    </div>
                    <h1 className="brand-name">NaturallyGood</h1>
                </div>

                {/* Loading Animation */}
                <div className="loading-container">
                    <div className="loading-dots">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                    </div>
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>
                    <p className="loading-text">Loading your natural experience...</p>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                    <div className="floating-leaf leaf-1">🌿</div>
                    <div className="floating-leaf leaf-2">🍃</div>
                    <div className="floating-leaf leaf-3">🌱</div>
                    <div className="floating-leaf leaf-4">🌿</div>
                </div>
            </div>

            <style jsx>{`
                .skip-button {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    background: rgba(255, 255, 255, 0.2);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    z-index: 10001;
                }

                .skip-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .splash-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: linear-gradient(135deg, #059669 0%, #10b981 25%, #34d399 50%, #6ee7b7 75%, #a7f3d0 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    overflow: hidden;
                    position: relative;
                }

                .splash-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(52, 211, 153, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 40% 90%, rgba(110, 231, 183, 0.2) 0%, transparent 50%);
                    animation: gradientShift 8s ease-in-out infinite;
                }

                @keyframes gradientShift {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.1) rotate(2deg);
                    }
                }

                .splash-content {
                    text-align: center;
                    position: relative;
                    animation: fadeInUp 1s ease-out;
                }

                .splash-logo {
                    margin-bottom: 3rem;
                }

                .logo-circle {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(255, 255, 255, 0.1) inset;
                    animation: logoFloat 3s ease-in-out infinite;
                    position: relative;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                }

                .logo-circle::before {
                    content: '';
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    border: 3px solid rgba(255, 255, 255, 0.4);
                    border-radius: 50%;
                    animation: ripple 2s ease-out infinite;
                }

                .logo-circle::after {
                    content: '';
                    position: absolute;
                    width: 140px;
                    height: 140px;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    animation: ripple 2s ease-out infinite 0.5s;
                }

                .logo-text {
                    color: #059669;
                    font-size: 2.5rem;
                    font-weight: 800;
                    letter-spacing: -0.05em;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .brand-name {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                    letter-spacing: -0.02em;
                    animation: slideInUp 1s ease-out 0.3s both;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .loading-container {
                    animation: slideInUp 1s ease-out 0.6s both;
                }

                .loading-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
                    animation: dotBounce 1.5s ease-in-out infinite;
                    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
                }

                .dot-2 {
                    animation-delay: 0.2s;
                }

                .dot-3 {
                    animation-delay: 0.4s;
                }

                .loading-bar {
                    width: 200px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                    margin: 0 auto 1rem;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) inset;
                }

                .loading-progress {
                    height: 100%;
                    background: linear-gradient(90deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%);
                    border-radius: 2px;
                    animation: loadingProgress 2s ease-in-out infinite;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                }

                .loading-text {
                    color: #ffffff;
                    font-size: 1rem;
                    font-weight: 500;
                    margin: 0;
                    animation: textPulse 2s ease-in-out infinite;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .floating-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .floating-leaf {
                    position: absolute;
                    font-size: 2rem;
                    animation: float 6s ease-in-out infinite;
                    opacity: 0.8;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
                }

                .leaf-1 {
                    top: 20%;
                    left: 15%;
                    animation-delay: 0s;
                }

                .leaf-2 {
                    top: 70%;
                    right: 20%;
                    animation-delay: 1.5s;
                }

                .leaf-3 {
                    top: 30%;
                    right: 10%;
                    animation-delay: 3s;
                }

                .leaf-4 {
                    bottom: 20%;
                    left: 10%;
                    animation-delay: 4.5s;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes logoFloat {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(5deg);
                    }
                }

                @keyframes ripple {
                    0% {
                        transform: scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                }

                @keyframes dotBounce {
                    0%, 80%, 100% {
                        transform: scale(0.8) translateY(0);
                        opacity: 0.5;
                    }
                    40% {
                        transform: scale(1.2) translateY(-10px);
                        opacity: 1;
                    }
                }

                @keyframes loadingProgress {
                    0% {
                        transform: translateX(-100%);
                    }
                    50% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes textPulse {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.7;
                    }
                    25% {
                        transform: translateY(-20px) rotate(5deg);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translateY(-10px) rotate(-5deg);
                        opacity: 0.8;
                    }
                    75% {
                        transform: translateY(-15px) rotate(3deg);
                        opacity: 0.5;
                    }
                }

                @media (max-width: 768px) {
                    .logo-circle {
                        width: 80px;
                        height: 80px;
                    }

                    .logo-text {
                        font-size: 2rem;
                    }

                    .brand-name {
                        font-size: 2rem;
                    }

                    .loading-bar {
                        width: 150px;
                    }

                    .floating-leaf {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default SplashScreen
