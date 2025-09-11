import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star, Zap, Heart, Globe, Sparkles, Users, Leaf, Sprout } from 'lucide-react';
import '../css/Farmers.css';

const Farmers = () => {
    const containerRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getSectionTransform = (index) => {
        const sectionHeight = window.innerHeight;
        // 6 sections total => multiplier is sections-1 = 5
        const totalScrollableHeight = 5 * sectionHeight;
        const scrollProgress = Math.min(scrollY / totalScrollableHeight, 1);
        const sectionProgress = scrollProgress * 5;
        const translateY = Math.max(0, (index - sectionProgress) * 100);
        return `translateY(${translateY}vh)`;
    };

    return (
        <div ref={containerRef} className="relative farmers-page">
            {/* Set total scrollable height */}
            <div style={{ height: `${6 * 100}vh` }} />

            {/* Section 1 - Hero */}
            <div
                className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100"
                style={{
                    transform: getSectionTransform(0),
                    zIndex: 1,
                }}
            >
                <div className="flex items-center justify-center h-full px-8">
                    <div className="text-center max-w-4xl">
                        <div className="animate-float-1 mb-6">
                            <Users className="w-20 h-20 text-green-600 mx-auto" />
                        </div>
                        <h1 className="text-6xl font-bold text-gray-800 mb-6">
                            Empowering <span className="text-green-600">Farmers</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Supporting local farmers with sustainable practices and fair trade partnerships
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="animate-float-2">
                                <Leaf className="w-8 h-8 text-green-500" />
                            </div>
                            <div className="animate-float-3">
                                <Sprout className="w-8 h-8 text-green-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 - Our Mission */}
            <div
                className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center overflow-hidden"
                style={{
                    transform: getSectionTransform(1),
                    zIndex: 2,
                }}
            >
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">
                            Our <span className="text-green-600">Mission</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We believe in creating a sustainable ecosystem where farmers thrive, 
                            consumers get the freshest produce, and the environment is protected 
                            for future generations.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <Heart className="w-5 h-5 text-red-500 mr-3" />
                                Fair compensation for farmers
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Leaf className="w-5 h-5 text-green-500 mr-3" />
                                Sustainable farming practices
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Globe className="w-5 h-5 text-blue-500 mr-3" />
                                Environmental conservation
                            </li>
                        </ul>
                    </div>
                    <div className="animate-float-1">
                        <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-8 text-white">
                            <Sparkles className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Direct Partnership</h3>
                            <p className="text-green-100">
                                We work directly with over 500+ farmers across the region, 
                                ensuring they get fair prices and you get the freshest produce.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 - Farmer Support */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-emerald-50 to-green-100"
                style={{
                    transform: getSectionTransform(2),
                    zIndex: 3,
                }}
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">
                            How We <span className="text-green-600">Support</span> Farmers
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive support system for sustainable farming
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center animate-float-1">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Tools</h3>
                                <p className="text-gray-600">
                                    Access to modern farming equipment and technology
                                </p>
                            </div>
                        </div>
                        <div className="text-center animate-float-2">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Training</h3>
                                <p className="text-gray-600">
                                    Regular workshops on sustainable farming practices
                                </p>
                            </div>
                        </div>
                        <div className="text-center animate-float-3">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Fair Trade</h3>
                                <p className="text-gray-600">
                                    Guaranteed fair prices and direct market access
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 - Success Stories */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden bg-white"
                style={{
                    transform: getSectionTransform(3),
                    zIndex: 4,
                }}
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">
                            <span className="text-green-600">Success</span> Stories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Real impact on farmers' lives and communities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-800">Rajesh Kumar</h3>
                                    <p className="text-gray-600">Organic Farmer, Punjab</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "Working with NaturallyGood has transformed my farming business. 
                                I've increased my income by 40% while using sustainable practices."
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-green-200 rounded-xl p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <Leaf className="w-6 h-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-800">Priya Sharma</h3>
                                    <p className="text-gray-600">Vegetable Farmer, Haryana</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "The training programs helped me adopt organic methods. 
                                My produce is now premium quality and commands better prices."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5 - Join Us */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700"
                style={{
                    transform: getSectionTransform(4),
                    zIndex: 5,
                }}
            >
                <div className="max-w-4xl mx-auto text-center px-8">
                    <div className="animate-float-1 mb-6">
                        <Globe className="w-20 h-20 text-white mx-auto" />
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Join Our <span className="text-green-200">Farming</span> Community
                    </h2>
                    <p className="text-xl text-green-100 mb-8 leading-relaxed">
                        Be part of a sustainable future. Connect with us to learn more about 
                        our farmer partnership programs and how you can benefit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                            Become a Partner
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Section 6 - Contact */}
            <div
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900"
                style={{
                    transform: getSectionTransform(5),
                    zIndex: 6,
                }}
            >
                <div className="max-w-4xl mx-auto text-center px-8">
                    <div className="animate-float-2 mb-6">
                        <Heart className="w-20 h-20 text-red-500 mx-auto" />
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Get In <span className="text-green-400">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to start your journey with sustainable farming? Contact us today!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-green-400 mb-2">📞</div>
                            <h3 className="text-white font-bold">Call Us</h3>
                            <p className="text-gray-300">+91 9643722200</p>
                        </div>
                        <div className="text-center">
                            <div className="text-green-400 mb-2">📧</div>
                            <h3 className="text-white font-bold">Email Us</h3>
                            <p className="text-gray-300">farmers@naturallygood.com</p>
                        </div>
                        <div className="text-center">
                            <div className="text-green-400 mb-2">📍</div>
                            <h3 className="text-white font-bold">Visit Us</h3>
                            <p className="text-gray-300">Punjab, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(360deg); }
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Farmers;