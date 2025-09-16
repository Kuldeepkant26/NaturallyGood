"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax.tsx";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// Handle internal navigation without page reload
const handleProductClick = (e, productSlug) => {
  e.preventDefault();
  // You can implement your routing logic here
  // For example, using Next.js router or React Router
  window.history.pushState({}, '', `/products/${productSlug}`);
  // Dispatch a custom event to update the page content
  window.dispatchEvent(new CustomEvent('navigate', { detail: { path: `/products/${productSlug}` } }));
};

export const products = [
  {
    title: "Premium A2 Gir Cow Ghee",
    link: "#",
    slug: "a2-gir-pure-cow-ghee", 
    thumbnail: "https://agrinests.com/cdn/shop/files/A2vedicGhee_2024-05-17T17_17_44.400Z.png?v=1715966268",
    description: "Artisanally crafted A2 Gir cow ghee, sourced from heritage breed cattle",
    price: "₹2,800 Per Kg"
  },
  {
    title: "Wild Forest Honey", 
    link: "#",
    slug: "natural-honey",
    thumbnail: "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324966/raw-honey-vs-regular-honey-on-table.jpg",
    description: "Raw, unprocessed honey harvested from pristine forest apiaries",
    price: "₹600 Per 500gm"
  },
  {
    title: "Heritage Root Vegetables",
    link: "#",
    slug: "organic-root-vegetables",
    thumbnail: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop&crop=center", 
    description: "Heirloom varieties of carrots, radish, beetroot cultivated with care",
    price: "Premium Selection"
  },
  {
    title: "Gourmet Herb Collection",
    link: "#",
    slug: "fresh-herbs-spices", 
    thumbnail: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=400&fit=crop&crop=center",
    description: "Hand-picked aromatic herbs and medicinal plants from our organic gardens",
    price: "Curated Assortment"
  },
  {
    title: "Exotic Vegetable Medley",
    link: "#",
    slug: "exotic-vegetables",
    thumbnail: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=400&fit=crop&crop=center",
    description: "Rare and specialty vegetables grown using biodynamic farming principles",
    price: "Seasonal Availability"
  },
  {
    title: "Organic Moringa Leaves",
    link: "#",
    slug: "fresh-moringa-leaves",
    thumbnail: "/src/assets/Vegies1/Moringa.jpg",
    description: "Nutrient-dense moringa leaves, nature's multivitamin powerhouse",
    price: "₹150 for 100 gms"
  },
  {
    title: "Premium Leafy Greens",
    link: "#",
    slug: "organic-greens-herbs",
    thumbnail: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&crop=center",
    description: "Nutrient-dense organic spinach, kale, and seasonal microgreens",
    price: "Farm Fresh Daily"
  },
  {
    title: "Heirloom Tomato Varieties",
    link: "#",
    slug: "tomato-collection",
    thumbnail: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop&crop=center", 
    description: "Heritage tomato cultivars bursting with authentic flavors and nutrition",
    price: "Seasonal Harvest"
  },
  {
    title: "Artisan Bell Peppers",
    link: "#",
    slug: "bell-peppers",
    thumbnail: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop&crop=center",
    description: "Vibrant, crisp bell peppers in rainbow varieties, naturally sweetened",
    price: "Premium Quality"
  },
  {
    title: "Traditional Turmeric & Ginger", 
    link: "#",
    slug: "ginger-turmeric",
    thumbnail: "https://c.ndtvimg.com/2020-07/8trfft3_ginger-and-turmeric-_625x300_08_July_20.jpg",
    description: "Fresh, organic turmeric and ginger roots with superior medicinal properties",
    price: "Therapeutic Grade"
  },
  {
    title: "Farm Staple Essentials",
    link: "#",
    slug: "farm-fresh-staples", 
    thumbnail: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=400&fit=crop&crop=center",
    description: "Premium organic onions and garlic, foundation of authentic cuisine",
    price: "Daily Essentials"
  },
  {
    title: "Gourmet Potato Collection",
    link: "#",
    slug: "potato-varieties",
    thumbnail: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop&crop=center",
    description: "Diverse potato varieties including fingerlings and heritage breeds",
    price: "Artisan Selection"
  },
  {
    title: "Seasonal Microgreens",
    link: "#",
    slug: "microgreens",
    thumbnail: "https://integrishealth.org/-/media/blog/21-q3/oyh_microgreens.ashx",
    description: "Nutrient-concentrated microgreens packed with vitamins and minerals",
    price: "Superfood Grade"
  },
  {
    title: "Heritage Lettuce Varieties",
    link: "#",
    slug: "lettuce-varieties",
    thumbnail: "https://www.thespruceeats.com/thmb/DXYvPvPK2_j4IINIM3QsHtkXRnM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-varieties-of-lettuce-4065606-hero-01-0a5ac269169940de8f67d61c6dafbc19.jpg",
    description: "Heirloom lettuce varieties offering unique textures and flavors",
    price: "Gourmet Selection"
  },
  {
    title: "Organic Brassica Collection",
    link: "#",
    slug: "brinjal-cabbage",
    thumbnail: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&h=400&fit=crop&crop=center",
    description: "Premium brinjal, cabbage, and cruciferous vegetables grown organically",
    price: "Seasonal Bounty"
  }
];
