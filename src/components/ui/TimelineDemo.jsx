import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Truck, Smartphone, Home, Recycle, Heart, CheckCircle } from "lucide-react";

export function TimelineDemo() {
    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <h3 className="mb-6 text-2xl md:text-3xl font-bold" style={{color: '#00963F'}}>
                        Download Our App & Subscribe
                    </h3>
                    <p className="mb-8 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Begin your health journey with Naturally Good- download our app and unlock exclusive Wellness Subscription Plans. Curate your own seasonal veggie bag, filled with farm-fresh organic harvests, delivered straight to your doorstep. A healthier lifestyle, made effortless just for YOU.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {/* iOS App Store Button */}
                        <button 
                            onClick={() => window.open('https://apps.apple.com/in/app/naturally-good/id6749650953', '_blank')}
                            className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            <span>Download for iOS</span>
                        </button>
                        {/* Google Play Store Button */}
                        <button 
                            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.naturallygood.app', '_blank')}
                            className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <span>Download for Android</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://media.istockphoto.com/id/1306672291/photo/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-food-delivery-in-front-of.jpg?s=612x612&w=0&k=20&c=cN_OR1O4Inf-K9c5N-mGgxSJKmPisIVl6Xn4_QdXsXo="
                            alt="Woman using food delivery app"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://img.freepik.com/fotos-premium/legumes-frescos-na-tela-do-celular_693425-3550.jpg"
                            alt="Fresh vegetables on mobile screen"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://thumbs.dreamstime.com/b/smiling-indian-woman-talking-boyfriend-swiping-smartphone-sitting-sofa-home-family-couple-multiethnic-young-using-371982073.jpg"
                            alt="Couple using smartphones at home"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://thumbs.dreamstime.com/b/smartphone-mobile-phone-image-display-shopping-cart-vegetables-pink-background-fresh-tomatoes-online-order-303014978.jpg"
                            alt="Smartphone displaying vegetable shopping cart"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <h3 className="mb-6 text-2xl md:text-3xl font-bold" style={{color: '#00963F'}}>
                        Grown the Naturally Good Way
                    </h3>
                    <p className="mb-4 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        From pure, hearty seeds to organic farming with sunlight, soil, water, and traditional wisdom, our organic vegetables are nurtured with honesty, patience and care.
                    </p>
                    <p className="mb-8 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        No chemicals. No shortcuts. Only pure goodness.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.pashudhanpraharee.com/wp-content/uploads/2023/12/ORGANIC-FARMING-IN-VEGETABLES-IN-INDIA.jpg"
                            alt="Organic farming in vegetables in India"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Fresh vegetable basket"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://t4.ftcdn.net/jpg/03/76/16/79/360_F_376167961_QsDy4ZKc4n8dC5ac1oiqu72HU7Y0J86Z.jpg"
                            alt="Organic vegetable farming"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://plus.unsplash.com/premium_photo-1663011147549-26b4632813ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE9yZ2FuaWMlMjBmYXJtaW5nJTIwaW5zcGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Quality vegetables"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <h3 className="mb-6 text-2xl md:text-3xl font-bold" style={{color: '#00963F'}}>
                        Freshly Harvested, Packed & Delivered
                    </h3>
                    <p className="mb-4 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        From farm to your kitchen in just hours! Our vegetables are harvested fresh in the early morning and delivered the same day to ensure maximum nutritional value.
                    </p>
                    <p className="mb-4 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Your satisfaction is our commitment. We take pride in bringing you the freshest, most nutritious vegetables straight from our organic farms.
                    </p>
                    <p className="mb-8 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        At Naturally Good, we don't just deliver vegetables - we deliver health, nutrition, and the promise of a naturally good life.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.bombaygreens.com/cdn/shop/articles/Blog_Cover_-Seasonal_Vegetables_Growing_Chart_for_India_18be2d49-0d1e-4881-a6cd-8fa6240bcf1c.jpg?v=1753172142"
                            alt="Seasonal vegetables growing chart"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://www.shutterstock.com/editorial/image-editorial/MfTbA52aM3Tcg31dMDMyNzI=/indian-farmers-harvest-turnip-vegetable-crop-farm-440nw-10531841a.jpg"
                            alt="Indian farmers harvesting turnip"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://media.istockphoto.com/id/1091697242/photo/bio-food-garden-produce-and-harvested-vegetable-fresh-farm-vegetables-in-wooden-box.jpg?s=612x612&w=0&k=20&c=wInfs_swOglu1mW_xec0UThyvC0q7NTc3WBB1KhHeEw="
                            alt="Fresh farm vegetables in wooden box"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://www.shutterstock.com/image-photo/rajasthan-indiamarch112007-unidentified-farmer-traditional-260nw-1224644593.jpg"
                            alt="Traditional farmer in Rajasthan"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-900">
            <Timeline data={data} />
        </div>
    );
}
