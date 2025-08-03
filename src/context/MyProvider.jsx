import React, { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()

function MyProvider({ children }) {
    // Products data based on the website
    const [products] = useState([
        {
            id: 1,
            name: "Seasonal Veggie Basket",
            category: "Vegetables",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 1500,
            originalPrice: 1600,
            discount: "6% off",
            description: "A Seasonal Veggie Basket is an assortment of organically grown seasonal vegetables that offers amazing diversity of flavor and nutrients in your diet.",
            weight: "7-8 kg",
            varieties: "15+ varieties",
            organic: true,
            features: [
                "3-4 kg mix of Seasonal Veggies & Exotics Mix",
                "0.5 kg to 1 kg mix of Seasonal Salads & Assortments",
                "3-4 kg mix of Staples"
            ],
            veggiesIncluded: {
                "Veggies & Exotics Mix": [
                    "Brinjal", "Cabbage", "Capsicum", "Carrots", "Cauliflower", "Beans",
                    "Okra (Bhindi)", "Peas", "Radish", "Spring Onions", "Tarot Roots (Arbi)",
                    "Bitter Gourd (Karela)", "Bottle Gourd (Lauki)", "Pumpkin", "Ridge Gourd (Torai)",
                    "Baby Corn", "Bell Peppers", "Broccoli", "Cherry Tomato", "Mushrooms"
                ],
                "Greens & Assortments": [
                    "Fenugreek (Methi)", "Spinach", "Mustard Greens", "Bathua", "Chaulai", "Poi",
                    "Ajwain Caraway", "Baby Spinach", "Basil", "Coriander", "Cucumber", "Garlic"
                ],
                "Staples": [
                    "Potatoes", "Onions", "Tomatoes", "Garlic", "Ginger", "Coriander",
                    "Mint", "Lemons", "Chillies"
                ],
                "Seasonal Salads": [
                    "Cucumber", "Snake Gourd (Kakdi)", "Melons", "Carrot", "Radish",
                    "Beetroot", "Turnip", "Lettuce", "Kale", "Celery", "Rocket"
                ]
            },
            subscriptions: [
                {
                    type: "Monthly",
                    duration: "4 Weekly Deliveries/Month",
                    originalPrice: 6396,
                    price: 5999,
                    pricePerBasket: 1500,
                    discount: "6% off"
                },
                {
                    type: "Quarterly",
                    duration: "4 Weekly Deliveries/Month for 3 Months",
                    originalPrice: 19188,
                    price: 14999,
                    pricePerBasket: 1250,
                    discount: "22% off"
                },
                {
                    type: "Semi Annual",
                    duration: "4 Weekly Deliveries/Month for 6 Months",
                    originalPrice: 38376,
                    price: 26999,
                    pricePerBasket: 1125,
                    discount: "30% off"
                },
                {
                    type: "Annual",
                    duration: "4 Weekly Deliveries/Month for 12 Months",
                    originalPrice: 76752,
                    price: 44999,
                    pricePerBasket: 937,
                    discount: "41% off"
                }
            ],
            addons: [
                {
                    name: "A2 Gir Pure Cow Ghee",
                    price: 2800,
                    unit: "Per Kg"
                },
                {
                    name: "Pure Jaggery",
                    price: 90,
                    unit: "for 100 gms"
                },
                {
                    name: "Honey",
                    price: 600,
                    unit: "Per 500gm"
                }
            ]
        },
        {
            id: 2,
            name: "Seasonal Fruit Basket",
            category: "Fruits",
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 1200,
            originalPrice: 1350,
            discount: "11% off",
            description: "A carefully curated selection of the finest seasonal organic fruits, picked at peak ripeness for maximum flavor and nutrition.",
            weight: "4-5 kg",
            varieties: "8-10 varieties",
            organic: true,
            features: [
                "2-3 kg mix of Seasonal Fruits",
                "1-2 kg mix of Exotic Fruits",
                "Premium quality hand-picked fruits"
            ],
            veggiesIncluded: {
                "Seasonal Fruits": [
                    "Apples", "Bananas", "Oranges", "Mangoes", "Grapes", "Pomegranates",
                    "Papayas", "Guavas", "Sweet Lime", "Seasonal Melons"
                ],
                "Exotic Fruits": [
                    "Kiwi", "Dragon Fruit", "Avocado", "Blueberries", "Strawberries",
                    "Passion Fruit", "Fig", "Dates"
                ]
            },
            subscriptions: [
                {
                    type: "Monthly",
                    duration: "4 Weekly Deliveries/Month",
                    originalPrice: 5400,
                    price: 4800,
                    pricePerBasket: 1200,
                    discount: "11% off"
                },
                {
                    type: "Quarterly",
                    duration: "4 Weekly Deliveries/Month for 3 Months",
                    originalPrice: 16200,
                    price: 13500,
                    pricePerBasket: 1125,
                    discount: "17% off"
                }
            ],
            addons: [
                {
                    name: "Dry Fruits Mix",
                    price: 1200,
                    unit: "Per 500gm"
                },
                {
                    name: "Fresh Fruit Juice",
                    price: 150,
                    unit: "Per 250ml"
                }
            ]
        },
        {
            id: 3,
            name: "Fresh Herbs Collection",
            category: "Herbs",
            image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 350,
            originalPrice: 400,
            discount: "12% off",
            description: "Aromatic and fresh organic herbs grown without chemicals, perfect for enhancing the flavor and nutrition of your meals.",
            weight: "200-300 gm",
            varieties: "6-8 varieties",
            organic: true,
            features: [
                "Fresh aromatic herbs",
                "Pesticide-free cultivation",
                "Hand-picked daily"
            ],
            veggiesIncluded: {
                "Culinary Herbs": [
                    "Basil", "Mint", "Coriander", "Parsley", "Dill", "Oregano",
                    "Thyme", "Rosemary", "Sage", "Chives"
                ],
                "Medicinal Herbs": [
                    "Tulsi", "Lemongrass", "Curry Leaves", "Fenugreek Leaves",
                    "Ajwain Leaves", "Brahmi"
                ]
            },
            subscriptions: [
                {
                    type: "Monthly",
                    duration: "4 Weekly Deliveries/Month",
                    originalPrice: 1600,
                    price: 1400,
                    pricePerBasket: 350,
                    discount: "12% off"
                }
            ],
            addons: [
                {
                    name: "Herb Seeds Kit",
                    price: 250,
                    unit: "Per Kit"
                }
            ]
        },
        {
            id: 4,
            name: "Organic Grains & Pulses",
            category: "Grains",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 2500,
            originalPrice: 2800,
            discount: "11% off",
            description: "Premium quality organic grains and pulses, sourced directly from certified organic farms across India.",
            weight: "10-12 kg",
            varieties: "12-15 varieties",
            organic: true,
            features: [
                "5-6 kg mix of Organic Grains",
                "3-4 kg mix of Organic Pulses",
                "2-3 kg mix of Organic Spices"
            ],
            veggiesIncluded: {
                "Organic Grains": [
                    "Brown Rice", "Wheat", "Quinoa", "Millets", "Oats", "Barley",
                    "Buckwheat", "Amaranth", "Ragi", "Jowar"
                ],
                "Organic Pulses": [
                    "Chana Dal", "Moong Dal", "Masoor Dal", "Toor Dal", "Urad Dal",
                    "Rajma", "Chhole", "Black Eyed Peas", "Green Moong"
                ],
                "Organic Spices": [
                    "Turmeric", "Cumin", "Coriander Seeds", "Red Chili", "Garam Masala",
                    "Black Pepper", "Cardamom", "Cinnamon", "Cloves"
                ]
            },
            subscriptions: [
                {
                    type: "Monthly",
                    duration: "Monthly Delivery",
                    originalPrice: 2800,
                    price: 2500,
                    pricePerBasket: 2500,
                    discount: "11% off"
                },
                {
                    type: "Quarterly",
                    duration: "3 Monthly Deliveries",
                    originalPrice: 8400,
                    price: 7200,
                    pricePerBasket: 2400,
                    discount: "14% off"
                }
            ],
            addons: [
                {
                    name: "Cold Pressed Oils",
                    price: 800,
                    unit: "Per 500ml"
                }
            ]
        },
        {
            id: 5,
            name: "Fresh Salad Mix",
            category: "Salads",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 450,
            originalPrice: 500,
            discount: "10% off",
            description: "Ready-to-eat fresh salad greens and vegetables, pre-washed and perfectly crisp for your healthy meals.",
            weight: "1-1.5 kg",
            varieties: "8-10 varieties",
            organic: true,
            features: [
                "Pre-washed salad greens",
                "Ready-to-eat fresh vegetables",
                "Perfect for quick healthy meals"
            ],
            veggiesIncluded: {
                "Salad Greens": [
                    "Lettuce", "Spinach", "Arugula", "Kale", "Mixed Greens",
                    "Iceberg", "Romaine", "Baby Spinach"
                ],
                "Fresh Vegetables": [
                    "Cherry Tomatoes", "Cucumber", "Bell Peppers", "Carrots",
                    "Radish", "Beetroot", "Purple Cabbage", "Onions"
                ]
            },
            subscriptions: [
                {
                    type: "Weekly",
                    duration: "4 Weekly Deliveries/Month",
                    originalPrice: 2000,
                    price: 1800,
                    pricePerBasket: 450,
                    discount: "10% off"
                }
            ],
            addons: [
                {
                    name: "Organic Salad Dressing",
                    price: 200,
                    unit: "Per 200ml"
                }
            ]
        },
        {
            id: 6,
            name: "Complete Family Bundle",
            category: "Bundles",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            price: 4500,
            originalPrice: 5500,
            discount: "18% off",
            description: "The ultimate family package combining vegetables, fruits, grains, and dairy products for a complete weekly nutrition solution.",
            weight: "15-20 kg",
            varieties: "40+ varieties",
            organic: true,
            features: [
                "Complete weekly nutrition package",
                "Vegetables, Fruits, Grains & Dairy",
                "Best value for families",
                "Free delivery and setup"
            ],
            veggiesIncluded: {
                "Vegetables": [
                    "All seasonal vegetables from veggie basket",
                    "Premium exotic vegetables", "Fresh herbs and greens"
                ],
                "Fruits": [
                    "Seasonal fresh fruits", "Exotic imported fruits",
                    "Dry fruits and nuts"
                ],
                "Grains & Pulses": [
                    "Organic grains variety", "Premium pulse collection",
                    "Spices and condiments"
                ],
                "Dairy & Others": [
                    "A2 Cow Milk", "Fresh Paneer", "Organic Eggs",
                    "Pure Ghee", "Honey", "Jaggery"
                ]
            },
            subscriptions: [
                {
                    type: "Monthly",
                    duration: "4 Weekly Deliveries/Month",
                    originalPrice: 22000,
                    price: 18000,
                    pricePerBasket: 4500,
                    discount: "18% off"
                },
                {
                    type: "Quarterly",
                    duration: "3 Monthly Subscriptions",
                    originalPrice: 66000,
                    price: 52500,
                    pricePerBasket: 4375,
                    discount: "20% off"
                }
            ],
            addons: [
                {
                    name: "Premium Add-on Package",
                    price: 1500,
                    unit: "Per Month"
                }
            ]
        }
    ]);

    // Initialize splash screen state based on session storage
    // Only show splash screen once per browser session
    const [splash, setSplash] = useState(() => {
        const hasShownSplash = sessionStorage.getItem('hasShownSplash');
        return !hasShownSplash; // Show splash only if it hasn't been shown in this session
    });

    // Update session storage when splash screen is closed
    useEffect(() => {
        if (!splash) {
            sessionStorage.setItem('hasShownSplash', 'true');
        }
    }, [splash]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Filter products based on category
    const filterProductsByCategory = (category) => {
        setActiveCategory(category);
        if (category === 'All Products') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    const contextValue = {
        products,
        filteredProducts,
        selectedProduct,
        setSelectedProduct,
        activeCategory,
        filterProductsByCategory,
        splash, setSplash
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider
