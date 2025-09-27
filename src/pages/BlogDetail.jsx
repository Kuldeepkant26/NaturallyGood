import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
import SEOHead from '../components/SEO/SEOHead'

const blogData = {
  'seasonal-eating': {
    title: 'Seasonal Eating Made Easy',
    subtitle: 'Why your body craves seasonal produce and how to embrace nature\'s rhythm',
    category: 'Nutrition',
    readTime: '12 min read',
    publishDate: 'March 15, 2024',
    author: {
      name: 'Dr. Priya Nutrition',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face',
      bio: 'Nutritionist & Organic Food Expert'
    },
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop&crop=center',
    content: [
      {
        type: 'paragraph',
        text: 'Have you ever noticed how your body naturally craves warm, hearty foods in winter and fresh, cooling fruits in summer? This isn\'t coincidence—it\'s your body\'s innate wisdom guiding you toward seasonal eating, one of nature\'s most beautiful rhythms.'
      },
      {
        type: 'paragraph',
        text: 'In our modern world of year-round availability, we\'ve lost touch with this ancient practice. Yet, seasonal eating remains one of the most powerful ways to optimize nutrition, support local agriculture, and live in harmony with our environment.'
      },
      {
        type: 'heading',
        text: 'The Science Behind Seasonal Cravings'
      },
      {
        type: 'paragraph',
        text: 'Our bodies are incredibly intelligent systems that have evolved over thousands of years to sync with natural cycles. When we eat seasonally, we\'re not just following a trend—we\'re honoring an ancient biological pattern that supports optimal health.'
      },
      {
        type: 'paragraph',
        text: 'Research shows that seasonal foods provide exactly the nutrients our bodies need at different times of the year. Summer fruits are high in water content and cooling properties, perfect for hot weather hydration. Winter vegetables are rich in stored energy and warming compounds, ideal for cold-weather fuel.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop&crop=center',
        caption: 'Fresh seasonal vegetables provide exactly what your body needs at the right time'
      },
      {
        type: 'heading',
        text: 'Spring: Cleansing and Renewal'
      },
      {
        type: 'paragraph',
        text: 'Spring brings a natural detox season with leafy greens like spinach, arugula, and fresh herbs. These foods are naturally bitter, stimulating liver function and helping your body cleanse from winter\'s heavier foods.'
      },
      {
        type: 'list',
        items: [
          'Leafy greens support liver detoxification',
          'Fresh herbs boost metabolism and circulation',
          'Radishes and onions have natural antimicrobial properties',
          'Artichokes support digestive health',
          'Asparagus provides folate for cellular renewal'
        ]
      },
      {
        type: 'heading',
        text: 'Summer: Cooling and Hydrating'
      },
      {
        type: 'paragraph',
        text: 'Summer\'s abundance of water-rich fruits and vegetables helps keep you cool and hydrated. Tomatoes, cucumbers, watermelon, and berries are nature\'s air conditioning system.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&crop=center',
        caption: 'Summer vegetables and fruits provide natural cooling and hydration'
      },
      {
        type: 'heading',
        text: 'Fall: Grounding and Strengthening'
      },
      {
        type: 'paragraph',
        text: 'Autumn brings hearty root vegetables, squashes, and warming spices. These foods help build strength and prepare your body for winter while supporting immune function.'
      },
      {
        type: 'list',
        items: [
          'Sweet potatoes provide beta-carotene for immunity',
          'Pumpkins offer vitamin A and fiber',
          'Apples contain quercetin, a natural antihistamine',
          'Warming spices like ginger and cinnamon aid digestion',
          'Nuts and seeds provide healthy fats for winter energy'
        ]
      },
      {
        type: 'heading',
        text: 'Winter: Warming and Nourishing'
      },
      {
        type: 'paragraph',
        text: 'Winter vegetables like cabbage, kale, and Brussels sprouts are dense with nutrients and naturally warming. Citrus fruits provide vitamin C when fresh produce is scarce.'
      },
      {
        type: 'quote',
        text: 'Nature provides exactly what we need, exactly when we need it. Seasonal eating is about trusting this ancient wisdom and allowing our bodies to flow with natural rhythms.',
        author: 'Traditional Ayurvedic Principle'
      },
      {
        type: 'heading',
        text: 'Benefits of Eating Seasonally'
      },
      {
        type: 'list',
        items: [
          'Maximum nutritional density when foods are harvested at peak ripeness',
          'Better taste and flavor profiles due to natural growing conditions',
          'Lower environmental impact and reduced carbon footprint',
          'Cost-effective as seasonal produce is more abundant and affordable',
          'Supports local farmers and strengthens community food systems',
          'Reduces exposure to preservatives and artificial ripening agents',
          'Naturally varies your diet, ensuring diverse nutrient intake',
          'Connects you with natural cycles and seasonal awareness'
        ]
      },
      {
        type: 'heading',
        text: 'How to Start Eating Seasonally'
      },
      {
        type: 'paragraph',
        text: 'Beginning your seasonal eating journey doesn\'t have to be overwhelming. Start with small changes and gradually build awareness of what\'s naturally available in your region.'
      },
      {
        type: 'list',
        items: [
          'Visit local farmers markets to see what\'s in season',
          'Join a CSA (Community Supported Agriculture) program',
          'Learn about your local growing seasons and harvest times',
          'Try new recipes that highlight seasonal ingredients',
          'Preserve seasonal abundance through freezing, canning, or dehydrating',
          'Start a small garden or grow herbs on your windowsill',
          'Ask at restaurants about seasonal menu items'
        ]
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop&crop=center',
        caption: 'Local farmers markets are the perfect place to discover seasonal treasures'
      },
      {
        type: 'heading',
        text: 'Seasonal Eating and Mental Health'
      },
      {
        type: 'paragraph',
        text: 'Beyond physical nutrition, seasonal eating supports mental and emotional wellbeing. The anticipation of seasonal favorites creates joy, while the variety prevents food boredom and encourages culinary creativity.'
      },
      {
        type: 'paragraph',
        text: 'Seasonal eating also connects us to something larger than ourselves—the natural world, farming communities, and ancient traditions. This connection can provide grounding and meaning in our increasingly digital lives.'
      },
      {
        type: 'heading',
        text: 'Making Seasonal Eating Practical'
      },
      {
        type: 'paragraph',
        text: 'While perfect seasonal eating may not always be practical in modern life, incorporating seasonal awareness into your food choices creates significant benefits. Even choosing 50% seasonal foods makes a meaningful difference.'
      },
      {
        type: 'paragraph',
        text: 'When you choose seasonal produce, you\'re not just nourishing your body—you\'re participating in a sustainable cycle that benefits everyone: your health, local farmers, and the environment. You\'re voting with your fork for a food system that works in harmony with nature rather than against it.'
      },
      {
        type: 'paragraph',
        text: 'Start this week by choosing one seasonal vegetable or fruit you\'ve never tried before. Let your curiosity guide you to discover the incredible variety nature provides throughout the year.'
      }
    ],
    tags: ['Seasonal Eating', 'Nutrition', 'Health', 'Sustainability', 'Organic', 'Local Food', 'Wellness'],
    relatedBlogs: ['healthy-recipes', 'organic-living', 'wellness-wisdom']
  },
  'healthy-recipes': {
    title: 'Quick & Healthy Recipes',
    subtitle: 'Simple dishes to make the most of your veggie bag and transform your kitchen into a wellness haven',
    category: 'Recipes',
    readTime: '15 min read',
    publishDate: 'March 12, 2024',
    author: {
      name: 'Chef Arjun Kumar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      bio: 'Organic Chef & Recipe Developer'
    },
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop&crop=center',
    content: [
      {
        type: 'paragraph',
        text: 'Transform your weekly veggie delivery into culinary masterpieces with these simple, nutritious recipes that celebrate the natural flavors of organic produce. Great cooking doesn\'t require complicated techniques—when you start with fresh, organic vegetables, half the work is already done.'
      },
      {
        type: 'heading',
        text: 'The Philosophy of Simple Cooking'
      },
      {
        type: 'paragraph',
        text: 'The best recipes let ingredients shine in their natural glory. Organic vegetables are bursting with flavor because they\'re grown in healthy soil without chemicals. Your job as a cook is simply to enhance these natural flavors, not mask them.'
      },
      {
        type: 'quote',
        text: 'Cooking is not about complicated techniques or exotic ingredients. It\'s about bringing out the soul of each ingredient with respect and simplicity.',
        author: 'Chef Arjun Kumar'
      },
      {
        type: 'heading',
        text: '5-Minute Morning Boost: Green Energy Bowl'
      },
      {
        type: 'paragraph',
        text: 'Start your day with this nutrient-packed bowl that takes just 5 minutes to prepare. Perfect for busy mornings when you need sustained energy.'
      },
      {
        type: 'list',
        items: [
          '2 cups fresh spinach leaves',
          '1 ripe banana',
          '1/2 avocado',
          '1 cup coconut water',
          '1 tbsp almond butter',
          '1 tsp chia seeds',
          'Handful of fresh mint leaves'
        ]
      },
      {
        type: 'paragraph',
        text: 'Blend all ingredients until smooth. Pour into a bowl and top with sliced fruit, nuts, or granola. This powerhouse breakfast provides sustained energy, healthy fats, and a full serving of greens before 9 AM.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=500&fit=crop&crop=center',
        caption: 'A vibrant green smoothie bowl packed with morning nutrition'
      },
      {
        type: 'heading',
        text: '15-Minute Wonder: Rainbow Stir-Fry'
      },
      {
        type: 'paragraph',
        text: 'This colorful stir-fry proves that healthy can be incredibly delicious. Use whatever vegetables you have on hand—the key is high heat and minimal cooking time to preserve nutrients and crunch.'
      },
      {
        type: 'list',
        items: [
          '2 tbsp coconut oil',
          '1 bell pepper, sliced',
          '1 cup broccoli florets',
          '1 carrot, julienned',
          '1 zucchini, sliced',
          '2 cloves garlic, minced',
          '1 inch fresh ginger, grated',
          '2 tbsp tamari or soy sauce',
          '1 tbsp sesame oil',
          'Sesame seeds for garnish'
        ]
      },
      {
        type: 'paragraph',
        text: 'Heat coconut oil in a wok over high heat. Add vegetables in order of cooking time needed (carrots first, zucchini last). Stir constantly for 5-7 minutes. Add garlic and ginger in the last minute. Finish with tamari and sesame oil. Serve over brown rice or quinoa.'
      },
      {
        type: 'heading',
        text: '20-Minute Magic: Roasted Vegetable Medley'
      },
      {
        type: 'paragraph',
        text: 'Roasting vegetables brings out their natural sweetness and creates beautiful caramelization. This technique works with any combination of vegetables.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop&crop=center',
        caption: 'Perfectly roasted vegetables with golden caramelization'
      },
      {
        type: 'paragraph',
        text: 'Preheat oven to 425°F. Chop vegetables into similar-sized pieces. Toss with olive oil, salt, pepper, and your favorite herbs. Spread on a baking sheet in a single layer. Roast for 20-25 minutes until edges are golden. The key is not overcrowding the pan—vegetables should sizzle, not steam.'
      },
      {
        type: 'heading',
        text: '10-Minute Fresh: Mediterranean Salad'
      },
      {
        type: 'paragraph',
        text: 'This refreshing salad celebrates the Mediterranean tradition of letting simple, high-quality ingredients speak for themselves.'
      },
      {
        type: 'list',
        items: [
          '4 cups mixed greens',
          '1 cucumber, diced',
          '2 tomatoes, chopped',
          '1/2 red onion, thinly sliced',
          '1/2 cup kalamata olives',
          '1/4 cup crumbled feta cheese',
          '3 tbsp extra virgin olive oil',
          '1 tbsp lemon juice',
          '1 tsp dried oregano',
          'Salt and pepper to taste'
        ]
      },
      {
        type: 'paragraph',
        text: 'Combine vegetables in a large bowl. Whisk together olive oil, lemon juice, oregano, salt, and pepper. Toss salad with dressing just before serving. Top with feta cheese and serve immediately.'
      },
      {
        type: 'heading',
        text: '30-Minute Comfort: Healing Vegetable Soup'
      },
      {
        type: 'paragraph',
        text: 'Nothing nurtures like homemade soup. This recipe is infinitely adaptable—use whatever vegetables need to be used up in your fridge.'
      },
      {
        type: 'list',
        items: [
          '2 tbsp olive oil',
          '1 onion, diced',
          '3 cloves garlic, minced',
          '2 carrots, chopped',
          '2 celery stalks, chopped',
          '6 cups vegetable broth',
          '2 cups chopped seasonal vegetables',
          '1 can diced tomatoes',
          '1 bay leaf',
          'Fresh herbs (thyme, parsley, basil)',
          'Salt and pepper to taste'
        ]
      },
      {
        type: 'paragraph',
        text: 'Heat oil in a large pot. Sauté onion until translucent, add garlic for 1 minute. Add harder vegetables (carrots, celery) and cook for 5 minutes. Add broth, tomatoes, and bay leaf. Simmer for 15 minutes. Add softer vegetables in the last 5 minutes. Season with herbs, salt, and pepper.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=500&fit=crop&crop=center',
        caption: 'A warming bowl of homemade vegetable soup'
      },
      {
        type: 'heading',
        text: 'Smart Kitchen Tips for Success'
      },
      {
        type: 'list',
        items: [
          'Prep vegetables when you bring them home—wash, chop, and store properly',
          'Keep a well-stocked pantry with quality oils, vinegars, and spices',
          'Invest in a good knife and keep it sharp—it makes all the difference',
          'Taste as you go and adjust seasoning gradually',
          'Don\'t be afraid to substitute—cooking is about creativity and using what you have',
          'Start simple and build confidence before trying complex recipes',
          'Save vegetable scraps to make homemade broth'
        ]
      },
      {
        type: 'heading',
        text: 'Meal Planning Made Easy'
      },
      {
        type: 'paragraph',
        text: 'The secret to consistent healthy eating is planning ahead. Spend 30 minutes on Sunday planning your week\'s meals based on what vegetables you have. Prep what you can in advance—wash lettuce, chop onions, cook grains.'
      },
      {
        type: 'paragraph',
        text: 'Remember, the goal isn\'t perfection—it\'s progress. Each healthy meal you prepare is an investment in your wellbeing and a celebration of the farmers who grew your food with care.'
      },
      {
        type: 'heading',
        text: 'Beyond Recipes: Creating Food Joy'
      },
      {
        type: 'paragraph',
        text: 'Cooking should bring joy, not stress. Play music while you cook, involve family members, and embrace the meditative aspects of chopping, stirring, and tasting. The kitchen is where nourishment begins—make it a place of creativity and love.'
      }
    ],
    tags: ['Recipes', 'Cooking', 'Quick Meals', 'Healthy', 'Organic', 'Meal Planning', 'Kitchen Tips'],
    relatedBlogs: ['seasonal-eating', 'organic-living', 'wellness-wisdom']
  },
  'organic-living': {
    title: 'Living Organic',
    subtitle: 'Small lifestyle changes for a sustainable future and healthier planet',
    category: 'Lifestyle',
    readTime: '18 min read',
    publishDate: 'March 10, 2024',
    author: {
      name: 'Maya Green',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      bio: 'Sustainability Expert & Lifestyle Coach'
    },
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop&crop=center',
    content: [
      {
        type: 'paragraph',
        text: 'Living organically isn\'t just about the food you eat—it\'s about creating a harmonious relationship with the world around you through conscious choices that benefit both your health and the planet. It\'s a lifestyle that honors the interconnectedness of all living things.'
      },
      {
        type: 'paragraph',
        text: 'In a world where we\'re increasingly disconnected from nature, organic living offers a path back to authentic, sustainable ways of being. It\'s not about perfection; it\'s about making thoughtful choices that align with your values and create positive ripple effects.'
      },
      {
        type: 'heading',
        text: 'What Does Organic Living Really Mean?'
      },
      {
        type: 'paragraph',
        text: 'Organic living extends far beyond avoiding pesticides in food. It\'s a holistic approach that considers the impact of our choices on personal health, community wellbeing, and environmental sustainability. It\'s about choosing products and practices that work with nature rather than against it.'
      },
      {
        type: 'quote',
        text: 'We do not inherit the earth from our ancestors; we borrow it from our children. Every choice we make today shapes the world they will inherit tomorrow.',
        author: 'Native American Proverb'
      },
      {
        type: 'heading',
        text: 'The Kitchen: Heart of Organic Living'
      },
      {
        type: 'paragraph',
        text: 'Your kitchen is where organic living begins. Beyond choosing organic produce, consider how you store, prepare, and consume food. Every meal is an opportunity to nourish yourself while supporting sustainable agriculture.'
      },
      {
        type: 'list',
        items: [
          'Choose organic, locally-grown produce when possible',
          'Reduce food waste by planning meals and using leftovers creatively',
          'Compost food scraps to create rich soil for plants',
          'Use glass containers instead of plastic for storage',
          'Filter tap water rather than buying bottled water',
          'Choose sustainable proteins like legumes, nuts, and seeds',
          'Support small, local farms through CSAs and farmers markets'
        ]
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556908153-5d0f1e58fb99?w=800&h=500&fit=crop&crop=center',
        caption: 'A beautiful organic kitchen filled with fresh, seasonal produce'
      },
      {
        type: 'heading',
        text: 'Creating a Non-Toxic Home Environment'
      },
      {
        type: 'paragraph',
        text: 'Our homes should be sanctuaries that support health and wellbeing. Traditional cleaning products, personal care items, and household goods often contain harmful chemicals that affect both human health and environmental systems.'
      },
      {
        type: 'paragraph',
        text: 'Transitioning to organic, natural alternatives doesn\'t happen overnight. Start with products you use most frequently—dish soap, laundry detergent, and personal care items. Read labels carefully and choose products with simple, recognizable ingredients.'
      },
      {
        type: 'heading',
        text: 'Natural Cleaning Solutions'
      },
      {
        type: 'paragraph',
        text: 'You can create effective cleaning solutions using simple ingredients from your kitchen. These DIY cleaners are safer for your family, pets, and the environment.'
      },
      {
        type: 'list',
        items: [
          'All-purpose cleaner: Mix equal parts white vinegar and water with a few drops of essential oil',
          'Glass cleaner: Combine 2 cups water, 1/2 cup vinegar, and 1/4 cup rubbing alcohol',
          'Scrubbing paste: Mix baking soda with a small amount of water',
          'Floor cleaner: Add 1/2 cup vinegar to a bucket of warm water',
          'Air freshener: Simmer herbs, citrus peels, or cinnamon on the stove',
          'Drain cleaner: Pour baking soda down drain, followed by vinegar'
        ]
      },
      {
        type: 'heading',
        text: 'Organic Personal Care'
      },
      {
        type: 'paragraph',
        text: 'Your skin is your largest organ, absorbing much of what you put on it. Conventional personal care products often contain synthetic fragrances, parabens, and other chemicals that can disrupt hormones and irritate sensitive skin.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556228578-0fb4b7d6bf69?w=800&h=500&fit=crop&crop=center',
        caption: 'Natural skincare ingredients like honey, oats, and essential oils'
      },
      {
        type: 'list',
        items: [
          'Choose products with organic, plant-based ingredients',
          'Avoid synthetic fragrances—look for essential oil alternatives',
          'Read ingredient lists and avoid harmful chemicals',
          'Try DIY skincare using kitchen ingredients like honey, oats, and coconut oil',
          'Support companies that prioritize sustainability and ethical practices',
          'Consider the packaging—choose recyclable or refillable options'
        ]
      },
      {
        type: 'heading',
        text: 'Sustainable Fashion and Textiles'
      },
      {
        type: 'paragraph',
        text: 'The fashion industry is one of the most polluting industries globally. Organic living includes being mindful about clothing choices, favoring quality over quantity, and supporting ethical brands.'
      },
      {
        type: 'list',
        items: [
          'Choose organic cotton, hemp, linen, and other natural fibers',
          'Buy fewer, higher-quality pieces that will last longer',
          'Shop secondhand and vintage for unique, affordable options',
          'Learn basic sewing skills to repair and alter clothing',
          'Donate or swap clothes instead of throwing them away',
          'Research brands\' labor practices and environmental policies',
          'Consider the true cost of ultra-cheap fast fashion'
        ]
      },
      {
        type: 'heading',
        text: 'Growing Your Own Organic Food'
      },
      {
        type: 'paragraph',
        text: 'Growing your own food, even in small spaces, connects you directly to your food source and ensures the purest organic produce possible. You don\'t need a large garden—herbs on a windowsill or vegetables in containers can provide fresh ingredients.'
      },
      {
        type: 'paragraph',
        text: 'Gardening is meditative, provides gentle exercise, and offers the satisfaction of eating food you\'ve grown with your own hands. Children especially benefit from understanding where food comes from and participating in the growing process.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&crop=center',
        caption: 'Fresh herbs and vegetables growing in a home garden'
      },
      {
        type: 'heading',
        text: 'Building Community Connections'
      },
      {
        type: 'paragraph',
        text: 'Organic living thrives in community. Connect with like-minded neighbors through community gardens, local food co-ops, and environmental groups. Share resources, knowledge, and support for sustainable living practices.'
      },
      {
        type: 'list',
        items: [
          'Join or start a community garden',
          'Participate in local environmental initiatives',
          'Share surplus garden produce with neighbors',
          'Organize clothing swaps and skill-sharing events',
          'Support local businesses that align with your values',
          'Advocate for organic options in schools and workplaces',
          'Teach others about organic living practices'
        ]
      },
      {
        type: 'heading',
        text: 'Mindful Consumption'
      },
      {
        type: 'paragraph',
        text: 'Organic living challenges the "more is better" mentality of consumer culture. It\'s about being intentional with purchases, choosing quality over quantity, and considering the true cost of products—including their impact on workers, communities, and ecosystems.'
      },
      {
        type: 'paragraph',
        text: 'Before making purchases, ask yourself: Do I really need this? How was it made? What happens to it when I\'m done with it? These questions help develop a more conscious relationship with material goods.'
      },
      {
        type: 'heading',
        text: 'The Ripple Effects of Organic Choices'
      },
      {
        type: 'paragraph',
        text: 'Every organic choice creates positive ripple effects. When you buy organic food, you support farming practices that protect soil health, water quality, and biodiversity. You vote for a food system that prioritizes long-term sustainability over short-term profits.'
      },
      {
        type: 'paragraph',
        text: 'Your choices influence family members, friends, and community members. Children who grow up with organic living practices carry these values into adulthood, creating lasting positive change.'
      },
      {
        type: 'heading',
        text: 'Starting Your Organic Living Journey'
      },
      {
        type: 'paragraph',
        text: 'Begin where you are, with what you have. You don\'t need to transform everything at once. Choose one area—perhaps organic food or natural cleaning products—and gradually expand from there.'
      },
      {
        type: 'list',
        items: [
          'Start with one change per month to avoid overwhelm',
          'Focus on products you use most frequently',
          'Research alternatives before your current products run out',
          'Connect with others on similar journeys for support and ideas',
          'Celebrate small victories and don\'t aim for perfection',
          'Share your experiences to inspire others',
          'Remember that every small change matters'
        ]
      },
      {
        type: 'paragraph',
        text: 'Organic living is ultimately about alignment—aligning your daily choices with your deepest values. It\'s about creating a life that honors your health, your community, and the planet that sustains us all. The journey is ongoing, and every step matters.'
      }
    ],
    tags: ['Organic Living', 'Sustainability', 'Lifestyle', 'Environment', 'Health', 'Natural Products', 'Eco-Friendly'],
    relatedBlogs: ['seasonal-eating', 'healthy-recipes', 'wellness-wisdom']
  },
  'wellness-wisdom': {
    title: 'Wellness Wisdom',
    subtitle: 'How organic food supports every age group and life stage with targeted nutrition',
    category: 'Wellness',
    readTime: '16 min read',
    publishDate: 'March 8, 2024',
    author: {
      name: 'Dr. Wellness Sharma',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=60&h=60&fit=crop&crop=face',
      bio: 'Holistic Health Practitioner & Nutritional Therapist'
    },
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop&crop=center',
    content: [
      {
        type: 'paragraph',
        text: 'From growing children to aging gracefully, organic nutrition provides targeted benefits for every stage of life. Understanding how different age groups can optimize their health through organic food choices empowers families to make informed decisions that support lifelong wellness.'
      },
      {
        type: 'paragraph',
        text: 'The beauty of organic nutrition lies in its ability to provide exactly what our bodies need without the burden of harmful chemicals, synthetic additives, or nutrient-depleting processing methods. Each life stage has unique nutritional requirements, and organic foods deliver these needs in their most bioavailable forms.'
      },
      {
        type: 'heading',
        text: 'Infants and Toddlers (0-3 years): Building Strong Foundations'
      },
      {
        type: 'paragraph',
        text: 'The earliest years of life are crucial for brain development, immune system formation, and establishing healthy eating patterns. Organic foods for babies and toddlers provide pure nutrition without pesticide residues, which is especially important as their developing systems are more vulnerable to toxins.'
      },
      {
        type: 'list',
        items: [
          'Organic baby foods reduce exposure to pesticides during critical development',
          'Higher levels of beneficial nutrients support rapid brain growth',
          'Pure flavors help develop healthy taste preferences',
          'Reduced risk of allergies and sensitivities',
          'Support for developing immune system and gut microbiome',
          'Better sleep patterns linked to chemical-free nutrition'
        ]
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&crop=center',
        caption: 'Young children enjoying fresh, organic fruits and vegetables'
      },
      {
        type: 'heading',
        text: 'Children and Adolescents (4-18 years): Fueling Growth and Development'
      },
      {
        type: 'paragraph',
        text: 'Growing children need nutrient-dense foods to support physical growth, cognitive development, and the energy demands of active lifestyles. Organic foods provide these nutrients without the interference of chemicals that can disrupt hormonal development.'
      },
      {
        type: 'paragraph',
        text: 'During adolescence, hormonal changes make young people particularly sensitive to endocrine disruptors found in conventional foods. Organic choices support healthy hormonal development and can reduce issues like acne, mood swings, and irregular growth patterns.'
      },
      {
        type: 'list',
        items: [
          'Higher protein quality supports muscle and bone development',
          'Antioxidants protect against cellular damage from active lifestyles',
          'Stable blood sugar levels improve focus and learning',
          'Reduced exposure to growth hormones and antibiotics',
          'Better digestive health and nutrient absorption',
          'Lower risk of childhood obesity and diabetes',
          'Improved behavior and attention span',
          'Stronger immune system resistance to common illnesses'
        ]
      },
      {
        type: 'heading',
        text: 'Young Adults (18-35 years): Optimizing Performance and Fertility'
      },
      {
        type: 'paragraph',
        text: 'Young adults often face high stress levels, irregular schedules, and demanding careers. Organic nutrition provides the stable energy, mental clarity, and resilience needed to thrive during these formative years. For those planning families, organic foods support reproductive health and fertility.'
      },
      {
        type: 'quote',
        text: 'The quality of your nutrition in young adulthood sets the foundation for health throughout your entire life. Invest in organic foods now to invest in your future self.',
        author: 'Dr. Wellness Sharma'
      },
      {
        type: 'list',
        items: [
          'Sustained energy levels for demanding careers and active lifestyles',
          'Enhanced fertility and reproductive health for both men and women',
          'Better stress management through stable blood sugar and nutrient density',
          'Improved skin health and appearance',
          'Stronger immune system to handle work and social environments',
          'Better sleep quality and recovery from exercise',
          'Reduced inflammation supporting overall wellness'
        ]
      },
      {
        type: 'heading',
        text: 'Middle Age (35-55 years): Preventing Disease and Maintaining Vitality'
      },
      {
        type: 'paragraph',
        text: 'Middle age is when the cumulative effects of lifestyle choices become apparent. This is also when the risk of chronic diseases begins to increase. Organic nutrition during these years can significantly impact long-term health outcomes and quality of life.'
      },
      {
        type: 'paragraph',
        text: 'Hormonal changes, particularly for women going through perimenopause and menopause, can be supported through organic nutrition. The absence of hormone-disrupting chemicals allows the body\'s natural hormonal systems to function more effectively.'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center',
        caption: 'Middle-aged adults preparing healthy, organic meals together'
      },
      {
        type: 'list',
        items: [
          'Antioxidants help prevent age-related cellular damage',
          'Anti-inflammatory compounds reduce disease risk',
          'Support for healthy weight management and metabolism',
          'Better cardiovascular health and blood pressure control',
          'Hormonal balance during life transitions',
          'Improved bone density and muscle mass maintenance',
          'Enhanced cognitive function and memory',
          'Better digestive health and nutrient absorption'
        ]
      },
      {
        type: 'heading',
        text: 'Older Adults (55+ years): Aging Gracefully and Maintaining Independence'
      },
      {
        type: 'paragraph',
        text: 'As we age, our nutritional needs become more specific, and our bodies become less efficient at absorbing and utilizing nutrients. Organic foods provide the highest quality nutrition in the most absorbable forms, supporting healthy aging and maintaining independence.'
      },
      {
        type: 'paragraph',
        text: 'Many age-related health issues—including cognitive decline, bone loss, and immune system weakening—can be significantly impacted by nutrition choices. Organic foods provide protective compounds that support graceful aging.'
      },
      {
        type: 'list',
        items: [
          'Higher nutrient density supports declining absorption',
          'Antioxidants protect against cognitive decline and dementia',
          'Anti-inflammatory compounds reduce arthritis and joint pain',
          'Fiber supports digestive health and regularity',
          'Calcium and magnesium support bone health',
          'Immune-boosting nutrients help fight infections',
          'Better hydration from water-rich organic produce',
          'Easier digestion due to lack of synthetic additives'
        ]
      },
      {
        type: 'heading',
        text: 'Special Considerations: Pregnancy and Nursing'
      },
      {
        type: 'paragraph',
        text: 'Pregnancy and nursing represent unique nutritional windows where a mother\'s choices directly impact her developing baby. Organic nutrition during these critical periods provides optimal building blocks for healthy fetal development while protecting against harmful exposures.'
      },
      {
        type: 'list',
        items: [
          'Folate-rich organic greens support neural tube development',
          'Chemical-free nutrition protects developing brain and organs',
          'Higher omega-3 levels support brain and eye development',
          'Reduced risk of pregnancy complications',
          'Better milk quality for nursing mothers',
          'Stable energy levels during demanding physical changes',
          'Reduced morning sickness through better nutrition'
        ]
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop&crop=center',
        caption: 'Pregnant woman enjoying fresh organic vegetables and fruits'
      },
      {
        type: 'heading',
        text: 'Chronic Conditions and Organic Nutrition'
      },
      {
        type: 'paragraph',
        text: 'People managing chronic conditions often benefit significantly from organic nutrition. The absence of chemicals reduces the body\'s toxic load, allowing more energy for healing. Higher nutrient levels provide the raw materials needed for cellular repair and immune function.'
      },
      {
        type: 'list',
        items: [
          'Diabetes: Stable blood sugar from nutrient-dense, chemical-free foods',
          'Heart disease: Anti-inflammatory compounds and healthy fats',
          'Autoimmune conditions: Reduced inflammatory triggers and immune support',
          'Digestive disorders: Easier digestion without synthetic additives',
          'Cancer: Antioxidants and phytonutrients that support immune function',
          'Mental health: Stable nutrients support neurotransmitter production'
        ]
      },
      {
        type: 'heading',
        text: 'Making Organic Nutrition Practical for Families'
      },
      {
        type: 'paragraph',
        text: 'Feeding a family with organic foods doesn\'t have to break the budget or overwhelm your schedule. Strategic shopping, meal planning, and focusing on the most important organic choices can make it manageable and sustainable.'
      },
      {
        type: 'list',
        items: [
          'Prioritize organic for the "Dirty Dozen" produce with highest pesticide residues',
          'Buy in season and preserve surplus through freezing or dehydrating',
          'Join buying clubs or co-ops for bulk purchasing power',
          'Grow your own herbs and easy vegetables',
          'Focus on organic for foods your family eats most frequently',
          'Choose organic for children\'s foods as their priority',
          'Remember that some organic is better than none'
        ]
      },
      {
        type: 'heading',
        text: 'The Long-Term Investment in Health'
      },
      {
        type: 'paragraph',
        text: 'Choosing organic nutrition is an investment in long-term health that pays dividends throughout life. While the immediate costs may be higher, the long-term benefits—reduced healthcare costs, better quality of life, and increased longevity—far outweigh the initial investment.'
      },
      {
        type: 'paragraph',
        text: 'Every meal is an opportunity to nourish your body with the highest quality nutrition available. When you choose organic foods, you\'re not just feeding yourself—you\'re supporting a food system that prioritizes health over profits and sustainability over shortcuts.'
      },
      {
        type: 'paragraph',
        text: 'The wisdom of wellness lies in understanding that prevention is always better than treatment. By providing your body with pure, nutrient-dense organic foods throughout every stage of life, you\'re giving yourself and your loved ones the best possible foundation for lifelong health and vitality.'
      }
    ],
    tags: ['Wellness', 'Health', 'Age Groups', 'Nutrition', 'Organic', 'Life Stages', 'Preventive Health', 'Family Nutrition'],
    relatedBlogs: ['seasonal-eating', 'healthy-recipes', 'organic-living']
  }
}

function BlogDetail() {
  const { slug } = useParams()
  const blog = blogData[slug] || blogData['seasonal-eating']
  const [currentSection, setCurrentSection] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Scroll to section function
  const scrollToSection = (headingIndex) => {
    const headingElements = document.querySelectorAll('.heading-section')
    if (headingElements[headingIndex]) {
      const element = headingElements[headingIndex]
      const offsetTop = element.offsetTop - 100 // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const headingSections = document.querySelectorAll('.heading-section')
      const scrollPos = window.scrollY + 200 // Offset for better detection

      let currentIndex = 0
      headingSections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 200
        if (scrollPos >= sectionTop) {
          currentIndex = index
        }
      })
      
      setCurrentSection(currentIndex)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-lg leading-relaxed text-gray-700 mb-8"
          >
            {item.text}
          </motion.p>
        )

      case 'heading':
        const headingIndex = blog.content.filter((item, i) => i < index && item.type === 'heading').length
        return (
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-3xl font-bold text-gray-900 mb-6 relative heading-section"
            id={`heading-${headingIndex}`}
          >
            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#78B826] to-[#00963E] rounded-full"></span>
            {item.text}
          </motion.h2>
        )

      case 'image':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="my-12"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {item.caption && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center text-gray-600 italic mt-4 text-sm"
              >
                {item.caption}
              </motion.p>
            )}
          </motion.div>
        )

      case 'quote':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="my-12 relative"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border-l-4 border-[#78B826] relative overflow-hidden">
              <div className="absolute top-4 left-4 text-6xl text-[#78B826] opacity-20">
                "
              </div>
              <blockquote className="text-xl italic text-gray-800 font-medium mb-4 relative z-10">
                {item.text}
              </blockquote>
              <cite className="text-[#00963E] font-semibold">
                — {item.author}
              </cite>
            </div>
          </motion.div>
        )

      case 'list':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-8"
          >
            <ul className="space-y-4">
              {item.items.map((listItem, listIndex) => (
                <motion.li
                  key={listIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: listIndex * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-[#78B826] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{listItem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={`${blog.title} - NaturallyGood Blog | ${blog.category}`}
        description={blog.subtitle}
        keywords={blog.tags ? blog.tags.join(', ') : 'organic vegetables, healthy eating, nutrition, wellness'}
        url={`https://www.naturallygood.in/blog/${slug}`}
        image={blog.heroImage}
        type="article"
      />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#78B826] to-[#00963E] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isBookmarked ? 'bg-[#78B826] text-white' : 'bg-white text-gray-600'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </motion.button>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </motion.button>
          
          <AnimatePresence>
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute right-16 top-0 bg-white rounded-2xl shadow-xl p-4 space-y-2"
              >
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">f</button>
                <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm">t</button>
                <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">w</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: headerY }}
        className="relative h-screen overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={blog.heroImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#78B826] text-white rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              {blog.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div className="text-left">
                  <div className="font-semibold">{blog.author.name}</div>
                  <div className="text-sm opacity-80">{blog.author.bio}</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-400"></div>
              <div className="text-sm">
                <div>{blog.publishDate}</div>
                <div className="opacity-80">{blog.readTime}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to read</div>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <div 
                  className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-2 toc-scrollbar"
                >
                  {blog.content.filter(item => item.type === 'heading').map((heading, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(index)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`text-left w-full p-3 text-sm rounded-lg transition-all duration-200 ${
                        currentSection === index
                          ? 'bg-[#78B826] text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-[#78B826]'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                          currentSection === index ? 'bg-white' : 'bg-gray-400'
                        }`}></span>
                        {heading.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {blog.content.map((item, index) => (
                  <div key={index} className="content-section">
                    {renderContent(item, index)}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16 pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {blog.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-100 hover:bg-[#78B826] hover:text-white rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Related Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blog.relatedBlogs.map((relatedSlug, index) => {
              const relatedBlog = blogData[relatedSlug]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                  onClick={() => window.location.href = `/blog/${relatedSlug}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedBlog.heroImage}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#78B826] text-white rounded-full text-xs font-medium">
                        {relatedBlog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#00963E] transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedBlog.subtitle}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{relatedBlog.readTime}</span>
                      <span>•</span>
                      <span>{relatedBlog.publishDate}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#00963E] to-[#78B826] text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Stay Updated with Our Latest Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Get weekly insights on organic living, nutrition tips, and sustainable practices delivered to your inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#00963E] font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default BlogDetail
