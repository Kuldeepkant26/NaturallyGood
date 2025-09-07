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
                        Fresh Harvest from Farm
                    </h3>
                    <p className="mb-8 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Our farmers carefully harvest organically grown, seasonal vegetables at peak freshness.
                        Each vegetable is hand-picked to ensure the highest quality and nutritional value for your family.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
                            alt="quality inspection"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
                            alt="packaging process"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="fresh produce sorting"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60" />
                        <img
                            src="https://media.istockphoto.com/id/1318242748/photo/organic-hydroponic-vegetable-garden-at-greenhouse-and-light-of-sunset.jpg?s=612x612&w=0&k=20&c=ySJynBzIn547iV1V4MuErqM6FphLESq6dH0U-wJIUe8="
                            alt="organic certification"
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
                        Quality Selection & Packaging
                    </h3>
                    <p className="mb-4 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Our team carefully selects and curates your seasonal veggie basket with 3-4 kg of seasonal vegetables,
                        fresh greens, and essential staples like potatoes, onions, and tomatoes.
                    </p>
                    <p className="mb-8 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Each basket contains 6-8 varieties of vegetables, ensuring amazing diversity of flavors and nutrients in your diet.
                        We package everything with care to maintain freshness during delivery.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Vegetable sorting"
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
                            src="https://media.istockphoto.com/id/1346744481/photo/anonymous-chef-harvesting-fresh-vegetables-on-a-farm.jpg?s=612x612&w=0&k=20&c=U9h4fAi68nwVndAJW8TF-f2lFFCO2Y-XrZWA2gah1Xw="
                            alt="Eco-friendly packaging"
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
                        Doorstep Delivery
                    </h3>
                    <p className="mb-6 text-base md:text-lg font-medium leading-relaxed" style={{color: '#79B927'}}>
                        Fresh, organically grown vegetables delivered straight to your doorstep with our reliable delivery service.
                        Available across Delhi, Noida, and Gurgaon with flexible subscription options.
                    </p>
                    <div className="mb-8 space-y-3">
                        <div className="flex items-center gap-3 text-base md:text-lg font-medium" style={{color: '#79B927'}}>
                            <Truck className="w-5 h-5" style={{color: '#00963F'}} />
                            Same-day delivery available
                        </div>
                        <div className="flex items-center gap-3 text-base md:text-lg font-medium" style={{color: '#79B927'}}>
                            <Smartphone className="w-5 h-5" style={{color: '#00963F'}} />
                            WhatsApp order tracking
                        </div>
                        <div className="flex items-center gap-3 text-base md:text-lg font-medium" style={{color: '#79B927'}}>
                            <Home className="w-5 h-5" style={{color: '#00963F'}} />
                            Contactless delivery option
                        </div>
                        <div className="flex items-center gap-3 text-base md:text-lg font-medium" style={{color: '#79B927'}}>
                            <Recycle className="w-5 h-5" style={{color: '#00963F'}} />
                            Eco-friendly packaging
                        </div>
                        <div className="flex items-center gap-3 text-base md:text-lg font-medium" style={{color: '#79B927'}}>
                            <Heart className="w-5 h-5" style={{color: '#00963F'}} />
                            Customer satisfaction guaranteed
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.thegoodtrade.com/wp-content/uploads/2025/01/organic-produce-delivery-box-flamingo-estate-1.jpeg"
                            alt="Delivery service"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://www.everydayeasyeats.com/wp-content/uploads/2022/02/The-Best-Organic-Produce-Delivery-Services-Online.jpg"
                            alt="Happy customer"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://static.independent.co.uk/2021/06/15/11/Medium%20very%20veggie%20veg%20box%20by%20Abel%20%20Cole.jpg"
                            alt="Fresh delivery"
                            width={500}
                            height={300}
                            className="h-20 w-full rounded-lg object-cover shadow-lg shadow-green-200/50 md:h-44 lg:h-60" />
                        <img
                            src="https://fruitathome.lu/wp-content/themes/fruitathome/img/FAH_Header_en.jpg"
                            alt="Vegetable subscription"
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
