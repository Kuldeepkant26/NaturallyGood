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
    title: "Seasonal Veggie Basket",
    link: "#",
    slug: "seasonal-veggie-basket",
    thumbnail: "https://www.naturallygood.in/images/basket.png",
    description: "Organically grown seasonal vegetables with amazing diversity of flavor and nutrients",
    price: "₹1,500 Per Basket"
  },
  {
    title: "Monthly Subscription",
    link: "#",
    slug: "monthly-subscription", 
    thumbnail: "https://www.naturallygood.in/images/basket.png",
    description: "4 Weekly Deliveries/Month - 6% off",
    price: "₹5,999 (₹1,500 Per Basket)"
  },
  {
    title: "Quarterly Subscription",
    link: "#",
    slug: "quarterly-subscription",
    thumbnail: "https://www.naturallygood.in/images/basket.png", 
    description: "4 Weekly Deliveries/Month for 3 Months - 22% off",
    price: "₹14,999 (₹1,250 Per Basket)"
  },
  {
    title: "Semi Annual Subscription", 
    link: "#",
    slug: "semi-annual-subscription",
    thumbnail: "https://www.naturallygood.in/images/basket.png",
    description: "4 Weekly Deliveries/Month for 6 Months - 30% off", 
    price: "₹26,999 (₹1,125 per basket)"
  },
  {
    title: "Annual Subscription",
    link: "#", 
    slug: "annual-subscription",
    thumbnail: "https://www.naturallygood.in/images/basket.png",
    description: "4 Weekly Deliveries/Month for 12 Months - 41% off",
    price: "₹44,999 (₹937 per basket)"
  },
  {
    title: "A2 Gir Pure Cow Ghee",
    link: "#",
    slug: "a2-gir-pure-cow-ghee", 
    thumbnail: "https://www.naturallygood.in/images/addon1.png",
    description: "Premium quality A2 Gir cow ghee",
    price: "₹2,800 Per Kg"
  },
  {
    title: "Pure Jaggery",
    link: "#",
    slug: "pure-jaggery",
    thumbnail: "https://www.naturallygood.in/images/addon2.png",
    description: "Natural and pure jaggery",
    price: "₹90 for 100 gms"
  },
  {
    title: "Natural Honey", 
    link: "#",
    slug: "natural-honey",
    thumbnail: "https://www.naturallygood.in/images/addon3.png",
    description: "Pure natural honey",
    price: "₹600 Per 500gm"
  },
  {
    title: "Veggies & Exotics Mix",
    link: "#",
    slug: "veggies-exotics-mix",
    thumbnail: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&h=600&fit=crop&crop=center",
    description: "3-4 KGs of 6-8 variety seasonal vegetables",
    price: "Part of Basket"
  },
  {
    title: "Seasonal Salads & Assortments", 
    link: "#",
    slug: "seasonal-salads-assortments",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop&crop=center",
    description: "0.5-1 KG fresh seasonal salads and assortments",
    price: "Part of Basket"
  },
  {
    title: "Organic Greens & Herbs",
    link: "#", 
    slug: "organic-greens-herbs",
    thumbnail: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&h=600&fit=crop&crop=center",
    description: "Fresh organic greens including spinach, methi, coriander",
    price: "Part of Basket"
  },
  {
    title: "Farm Fresh Staples",
    link: "#",
    slug: "farm-fresh-staples", 
    thumbnail: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=600&h=600&fit=crop&crop=center",
    description: "Potatoes, onions, tomatoes, garlic, ginger essentials",
    price: "Part of Basket"
  },
  {
    title: "Organic Root Vegetables",
    link: "#",
    slug: "organic-root-vegetables",
    thumbnail: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=600&fit=crop&crop=center", 
    description: "Carrots, radish, beetroot, turnip and more",
    price: "Part of Basket"
  },
  {
    title: "Exotic Vegetables",
    link: "#",
    slug: "exotic-vegetables",
    thumbnail: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=600&h=600&fit=crop&crop=center",
    description: "Baby corn, bell peppers, broccoli, zucchini",
    price: "Part of Basket"
  },
  {
    title: "Fresh Herbs & Spices",
    link: "#",
    slug: "fresh-herbs-spices", 
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&crop=center",
    description: "Basil, turmeric, curry leaves, lemon grass",
    price: "Part of Basket"
  }
];
