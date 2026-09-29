import React, { Fragment, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Gem,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  ShoppingBasket,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Sprout,
  Star,
  Truck,
  UserRound,
  Users,
  X,
} from 'lucide-react';
import produceBoxImage from '../../assets/subscription/produce-box.webp';
import smallHouseholdImage from '../../assets/subscription/audience-1-3.webp';
import familyImage from '../../assets/subscription/audience-3-5.webp';
import './SubscriptionSection.css';

// Display typefaces from the client design (loaded in index.html)
const SERIF_FONT = { fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif" };
const SCRIPT_FONT = { fontFamily: "'Caveat', 'Segoe Script', cursive", fontWeight: 700 };

// Labels are split into lines where the design breaks them
const featureStrip = [
  { icon: Sprout, lines: ['Freshly', 'harvested produce'] },
  { icon: Truck, lines: ['Doorstep', 'delivery'] },
  { icon: SlidersHorizontal, lines: ['Personalised', 'for your family'] },
  { icon: UserRound, lines: ['Dedicated', 'wellness advisor'] },
  { icon: ShieldCheck, lines: ['7-day', 'freshness guarantee'] },
  { icon: Smartphone, lines: ['Manage everything', 'on the app'] },
];

// Accent colours per tier, shared by both household sizes
const planThemes = {
  monthly: { from: '#34A043', to: '#1B8A3A', border: '#CBE6C5', soft: '#F1F9EE', glow: 'rgba(27, 138, 58, 0.45)' },
  quarterly: { from: '#17A597', to: '#0B8479', border: '#B3E0D9', soft: '#EDF8F6', glow: 'rgba(11, 132, 121, 0.45)' },
  semiAnnual: { from: '#DC961B', to: '#AD6A07', border: '#EFD9A9', soft: '#FDF7EA', glow: 'rgba(173, 106, 7, 0.45)' },
  annual: { from: '#EE3A43', to: '#CC1F2D', border: '#F5C2C5', soft: '#FEF1F1', glow: 'rgba(204, 31, 45, 0.45)' },
};

// Prices below follow the client's price sheet effective 1 Oct 2026

// 1–3 people: Medium 7kg veggie bag
const smallHouseholdPlans = [
  {
    id: 'monthly-1-3',
    title: 'WELLNESS STARTER',
    subtitle: 'Monthly',
    tagline: 'Start eating better with the farm.',
    term: 'per month',
    duration: '4 Weekly Delivery/Month • 1 Month',
    originalPrice: '₹10,000',
    discountedPrice: '₹8,999',
    monthlyRate: '₹8,999 per month',
    bagRate: '₹2,250 per bag',
    discount: '10% off',
    popular: false,
    theme: planThemes.monthly,
    organicBags: '4',
    standardizedBenefits: [
      { name: 'x 7kg Organic Vegetable Bags', value: '4', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: false },
      { name: 'Pure Raw Honey', included: false },
      { name: 'A2 Pure Cow Ghee', included: false },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    familySize: '1-3 members',
    deliveryWindow: 'Weekly (Same day each week)',
    icon: Sprout
  },
  {
    id: 'quarterly-1-3',
    title: 'WELLNESS PLUS',
    subtitle: 'Quarterly',
    tagline: 'Build a healthier family routine.',
    term: '3 months',
    duration: '4 Weekly Delivery/Month • 3 Months',
    originalPrice: '₹30,000',
    discountedPrice: '₹23,999',
    monthlyRate: '₹7,999 per month',
    bagRate: '₹2,000 per bag',
    discount: '20% off',
    popular: true,
    theme: planThemes.quarterly,
    organicBags: '12',
    standardizedBenefits: [
      { name: 'x 7kg Organic Vegetable Bags', value: '12', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', included: false },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    familySize: '1-3 members',
    deliveryWindow: 'Weekly (Preferred day selection)',
    icon: Star
  },
  {
    id: 'semi-annual-1-3',
    title: 'WELLNESS PREMIUM',
    subtitle: 'Semi Annual',
    tagline: 'Make wholesome eating a way of life.',
    term: '6 months',
    duration: '4 Weekly Delivery/Month • 6 Months',
    originalPrice: '₹60,000',
    discountedPrice: '₹41,999',
    monthlyRate: '₹6,999 per month',
    bagRate: '₹1,750 per bag',
    discount: '30% off',
    recommended: true,
    theme: planThemes.semiAnnual,
    organicBags: '24',
    standardizedBenefits: [
      { name: 'x 7kg Organic Vegetable Bags', value: '24', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', value: '500 Gms', included: true },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    familySize: '1-3 members',
    deliveryWindow: 'Weekly (Priority scheduling)',
    icon: Award
  },
  {
    id: 'annual-1-3',
    title: 'WELLNESS 360°',
    subtitle: 'Annual',
    tagline: 'Your year with the farm.',
    term: '12 months',
    duration: '4 Weekly Delivery/Month • 12 Months',
    originalPrice: '₹1,20,000',
    discountedPrice: '₹71,999',
    monthlyRate: '₹5,999 per month',
    bagRate: '₹1,500 per bag',
    discount: '40% off',
    popular: false,
    theme: planThemes.annual,
    organicBags: '48',
    standardizedBenefits: [
      { name: 'x 7kg Organic Vegetable Bags', value: '48', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', value: '1 KG', included: true },
      { name: 'Exclusive Harvest', included: true },
      { name: 'Organic Farming Training', included: true },
      { name: 'Naturally Fit (Nutrition Guidance)', included: true }
    ],
    familySize: '1-3 members',
    deliveryWindow: 'Weekly (Premium scheduling)',
    icon: Gem
  }
];

// 3–5 people: Regular 10kg veggie bag
const familyPlans = [
  {
    id: 'monthly',
    title: 'WELLNESS STARTER',
    subtitle: 'Monthly',
    tagline: 'Start eating better with the farm.',
    term: 'per month',
    duration: '4 Weekly Delivery/Month • 1 Month',
    originalPrice: '₹12,000',
    discountedPrice: '₹9,999',
    monthlyRate: '₹9,999 per month',
    bagRate: '₹2,500 per bag',
    discount: '17% off',
    popular: false,
    theme: planThemes.monthly,
    organicBags: '4',
    standardizedBenefits: [
      { name: 'x 10kg Organic Vegetable Bags', value: '4', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: false },
      { name: 'Pure Raw Honey', included: false },
      { name: 'A2 Pure Cow Ghee', included: false },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    features: [
      'Fresh seasonal vegetables',
      '3-4 kg mixed veggies',
      'Weekly delivery',
      'Organic & pesticide-free',
      'Farm to doorstep'
    ],
    detailedFeatures: [
      'Fresh seasonal vegetables delivered weekly',
      '3-4 kg mixed vegetables per basket',
      'Organic and pesticide-free produce',
      'Direct farm to doorstep delivery',
      'Flexible delivery schedule',
      'Quality guarantee on all items',
      'Customer support via WhatsApp',
      'Easy subscription management'
    ],
    benefits: [
      'Try our service with minimal commitment',
      'Perfect for small families',
      'Seasonal variety guaranteed',
      'No long-term binding'
    ],
    familySize: '3-5 members',
    deliveryWindow: 'Weekly (Same day each week)',
    icon: Sprout
  },
  {
    id: 'quarterly',
    title: 'WELLNESS PLUS',
    subtitle: 'Quarterly',
    tagline: 'Build a healthier family routine.',
    term: '3 months',
    duration: '4 Weekly Delivery/Month • 3 Months',
    originalPrice: '₹36,000',
    discountedPrice: '₹26,999',
    monthlyRate: '₹8,999 per month',
    bagRate: '₹2,250 per bag',
    discount: '25% off',
    popular: true,
    theme: planThemes.quarterly,
    organicBags: '12',
    standardizedBenefits: [
      { name: 'x 10kg Organic Vegetable Bags', value: '12', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', included: false },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    features: [
      'Best value for money',
      'Seasonal variety guaranteed',
      'Priority customer support',
      'Flexible delivery schedule',
      'Quality assurance'
    ],
    detailedFeatures: [
      'Best value for money with 25% savings',
      'Seasonal variety guaranteed throughout the quarter',
      'Priority customer support via dedicated helpline',
      'Flexible delivery schedule adjustments',
      'Quality assurance with money-back guarantee',
      'Free delivery on all orders',
      'Exclusive seasonal recipes and tips',
      'Early access to premium add-ons'
    ],
    benefits: [
      'Significant savings compared to monthly plan',
      'Consistent supply for 3 months',
      'Priority customer service',
      'Seasonal recipe suggestions included'
    ],
    familySize: '3-5 members',
    deliveryWindow: 'Weekly (Preferred day selection)',
    icon: Star
  },
  {
    id: 'semi-annual',
    title: 'WELLNESS PREMIUM',
    subtitle: 'Semi Annual',
    tagline: 'Make wholesome eating a way of life.',
    term: '6 months',
    duration: '4 Weekly Delivery/Month • 6 Months',
    originalPrice: '₹72,000',
    discountedPrice: '₹47,999',
    monthlyRate: '₹7,999 per month',
    bagRate: '₹2,000 per bag',
    discount: '33% off',
    recommended: true,
    theme: planThemes.semiAnnual,
    organicBags: '24',
    standardizedBenefits: [
      { name: 'x 10kg Organic Vegetable Bags', value: '24', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', value: '500 Gms', included: true },
      { name: 'Exclusive Harvest', included: false },
      { name: 'Organic Farming Training', included: false },
      { name: 'Naturally Fit (Nutrition Guidance)', included: false }
    ],
    features: [
      'Huge savings',
      'Consistent supply',
      'Premium customer care',
      'Seasonal recipe suggestions',
      'Health tracking support'
    ],
    detailedFeatures: [
      'Huge savings of 33% on regular prices',
      'Consistent supply for 6 months',
      'Premium customer care with dedicated manager',
      'Seasonal recipe suggestions and cooking tips',
      'Health tracking support and nutrition guidance',
      'Free home delivery with express options',
      'Exclusive access to exotic vegetables',
      'Complimentary add-ons worth ₹1000'
    ],
    benefits: [
      'Maximum value with 33% discount',
      'Long-term fresh supply security',
      'Premium customer experience',
      'Health and nutrition support included'
    ],
    familySize: '3-5 members',
    deliveryWindow: 'Weekly (Priority scheduling)',
    icon: Award
  },
  {
    id: 'annual',
    title: 'WELLNESS 360°',
    subtitle: 'Annual',
    tagline: 'Your year with the farm.',
    term: '12 months',
    duration: '4 Weekly Delivery/Month • 12 Months',
    originalPrice: '₹1,44,000',
    discountedPrice: '₹83,999',
    monthlyRate: '₹6,999 per month',
    bagRate: '₹1,750 per bag',
    discount: '42% off',
    popular: false,
    theme: planThemes.annual,
    organicBags: '48',
    standardizedBenefits: [
      { name: 'x 10kg Organic Vegetable Bags', value: '48', included: true },
      { name: 'Dedicated Wellness Advisor', included: true },
      { name: 'Recipe Support', included: true },
      { name: 'Bag Personalization', included: true },
      { name: 'Membership worth ₹1000', included: true },
      { name: 'Complimentary Farm Visit', included: true },
      { name: 'Pure Raw Honey', value: '300 Gms', included: true },
      { name: 'A2 Pure Cow Ghee', value: '1 KG', included: true },
      { name: 'Exclusive Harvest', included: true },
      { name: 'Organic Farming Training', included: true },
      { name: 'Naturally Fit (Nutrition Guidance)', included: true }
    ],
    features: [
      'Maximum discount',
      'Year-round fresh supply',
      'VIP customer status',
      'Free nutrition consultation',
      'Exclusive add-on discounts'
    ],
    detailedFeatures: [
      'Maximum discount of 42% - best value ever',
      'Year-round fresh supply guaranteed',
      'VIP customer status with priority service',
      'Free nutrition consultation sessions',
      'Exclusive add-on discounts up to 50%',
      'Premium packaging and express delivery',
      'Personal nutrition coach assignment',
      'Complimentary organic herbs and spices',
      'Free seasonal fruit baskets (4 times/year)',
      'Health tracking app premium subscription'
    ],
    benefits: [
      'Unbeatable 42% savings',
      'Complete year-long fresh produce',
      'VIP treatment and premium services',
      'Personal health and nutrition support'
    ],
    familySize: '3-5 members',
    deliveryWindow: 'Weekly (Premium scheduling)',
    icon: Gem
  }
];

// One audience panel + row of cards per household size, in the design's order
const planGroups = [
  {
    id: 'small-household',
    bagSize: '7kg bag',
    heading: '1–3 PEOPLE',
    blurb: 'Perfect for couples or small families.',
    image: smallHouseholdImage,
    imageAlt: 'A couple unpacking a NaturallyGood box of fresh farm vegetables',
    plans: smallHouseholdPlans
  },
  {
    id: 'family',
    bagSize: '10kg bag',
    heading: '3–5 PEOPLE',
    blurb: 'Ideal for growing families.',
    image: familyImage,
    imageAlt: 'A couple with a NaturallyGood box and a bag full of fresh vegetables',
    plans: familyPlans
  }
];

// Exposes a plan's accent colours as CSS variables for the card and modal
const themeVars = ({ from, to, border, soft, glow }) => ({
  '--accent': from,
  '--accent-strong': to,
  '--accent-border': border,
  '--accent-soft': soft,
  '--accent-glow': glow,
});

// Breaks a label where the design does, except on narrow phones where it stays on one line
const Lines = ({ lines }) =>
  lines.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && ' '}
      <span className={index > 0 ? 'min-[30rem]:block' : undefined}>{line}</span>
    </Fragment>
  ));

const PeopleIcon = (props) => (
  <svg viewBox="0 0 56 30" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="10" cy="9.5" r="4.5" />
    <circle cx="28" cy="8.5" r="5" />
    <circle cx="46" cy="9.5" r="4.5" />
    <path d="M3 27v-2a7 7 0 0 1 14 0v2" />
    <path d="M20 27v-2.5a8 8 0 0 1 16 0V27" />
    <path d="M39 27v-2a7 7 0 0 1 14 0v2" />
  </svg>
);

const LeafSprig = ({ className }) => (
  <svg viewBox="0 0 160 160" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18 150C52 112 92 70 150 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 104c-8-22-2-44 18-58 6 24 0 44-18 58Z" />
    <path d="M58 106c-22 2-40-8-48-28 22-4 40 6 48 28Z" opacity=".7" />
    <path d="M98 64c-6-22 2-42 22-54 4 24-4 42-22 54Z" />
    <path d="M96 66c-22-2-38-14-44-34 22 0 38 12 44 34Z" opacity=".7" />
    <path d="M132 32c0-16 8-26 20-30 0 16-8 26-20 30Z" opacity=".85" />
  </svg>
);

// Sized in em, so it follows the text size of the list it sits in
const BenefitItem = ({ benefit, term }) => (
  <li className="flex items-start gap-[0.65em]">
    <span
      aria-hidden="true"
      className={`mt-[0.04em] grid h-[1.3em] w-[1.3em] shrink-0 place-items-center rounded-full ${
        benefit.included ? 'bg-[#2E9E46] text-white' : 'bg-gray-100 text-gray-400'
      }`}
    >
      {benefit.included ? (
        <Check className="h-[0.85em] w-[0.85em]" strokeWidth={3.5} />
      ) : (
        <X className="h-[0.85em] w-[0.85em]" strokeWidth={3} />
      )}
    </span>
    <span className={benefit.included ? 'text-gray-700' : 'text-gray-400'}>
      {!benefit.included && <span className="sr-only">Not included: </span>}
      {benefit.name.startsWith('x ') && benefit.value ? (
        // The bag count is stored as the value, so it leads the label ("4 x 10kg ...") as a highlighted chip
        <>
          <span className="rounded-[0.35em] bg-[color:var(--accent-soft)] px-[0.4em] py-[0.05em] font-extrabold text-[color:var(--accent-strong)] ring-1 ring-[color:var(--accent-border)]">
            {benefit.value}
          </span>{' '}
          <span className="font-semibold text-[#15291D]">{benefit.name}</span>
          {term && (
            <>
              {' '}
              <span className="whitespace-nowrap text-gray-500">({term})</span>
            </>
          )}
        </>
      ) : (
        <>
          {benefit.name}
          {benefit.value && <span className="ml-1 font-semibold text-[#15291D]">{benefit.value}</span>}
        </>
      )}
    </span>
  </li>
);

const SectionHead = ({ className = '' }) => (
  <div className={`@container ${className}`}>
    <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE6C3] bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1F7A3A]">
      <Leaf className="h-3.5 w-3.5" />
      Subscription Plans
    </span>

    {/* Scales with its column so the first line always fits, as in the design */}
    <h2 className="mt-5 text-[length:clamp(1.75rem,11.6cqi,3.6rem)] leading-[1.04] text-[#15291D]" style={SERIF_FONT}>
      Wholesome eating
      <br />
      for your family,
      <br />
      <span className="relative inline-block">
        made easier.
        <svg
          aria-hidden="true"
          viewBox="0 0 320 24"
          preserveAspectRatio="none"
          className="absolute -bottom-[0.22em] left-0 h-[0.24em] w-[112%]"
        >
          <defs>
            <linearGradient id="subscription-swoosh" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#79B927" />
              <stop offset="1" stopColor="#00963F" />
            </linearGradient>
          </defs>
          <path
            d="M4 17C70 7 170 3 316 11"
            fill="none"
            stroke="url(#subscription-swoosh)"
            strokeWidth="5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
    </h2>

    {/* Each item's dot sits in a clipped left gutter, so a wrapped line never starts or ends on a separator */}
    <div className="mt-7 overflow-hidden wide:mt-6">
      <ul className="-ml-6 flex flex-wrap gap-y-1 text-[length:clamp(13px,4.9cqi,16px)] font-medium text-[#1F7A3A]">
        {['Fresh from our farm', 'Weekly delivery', 'Personalised for your family', 'Complete app control'].map((item) => (
          <li
            key={item}
            className="relative whitespace-nowrap pl-6 before:absolute before:left-[9px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[#79B927]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FeatureStrip = ({ className = '' }) => (
  <ul
    className={`grid grid-cols-1 gap-4 min-[30rem]:grid-cols-2 sm:grid-cols-3 wide:flex wide:items-center wide:justify-between wide:gap-3 wide:px-2 ${className}`}
  >
    {featureStrip.map((item) => {
      const Icon = item.icon;
      return (
        <li key={item.lines.join(' ')} className="flex min-w-0 items-center gap-3 wide:gap-2">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#1F8A3B] shadow-[0_8px_18px_-10px_rgba(22,70,35,0.45)] ring-1 ring-[#D6EACB] wide:h-9 wide:w-9">
            <Icon className="h-5 w-5 wide:h-[18px] wide:w-[18px]" />
          </span>
          <span className="text-[13px] leading-snug text-gray-700 wide:text-[11.5px]">
            <Lines lines={item.lines} />
          </span>
        </li>
      );
    })}
  </ul>
);

const GoodFoodBadge = ({ className = '' }) => (
  <div
    aria-hidden="true"
    className={`z-10 hidden rotate-[-8deg] rounded-[2rem_0.4rem_2rem_0.4rem] bg-[#E9F5E1] px-5 py-2.5 text-center text-[1.3rem] leading-[1.1] text-[#2E6B2A] shadow-[0_10px_24px_-14px_rgba(22,70,35,0.5)] ring-1 ring-[#D2E8C4] sm:block wide:px-4 wide:text-[1.15rem] ${className}`}
    style={SCRIPT_FONT}
  >
    Good food,
    <br />
    brighter tomorrow
  </div>
);

// A banner above the cards on smaller screens, a tall panel beside them in the poster layout
const AudiencePanel = ({ group, className = '' }) => (
  <div
    className={`@container overflow-hidden rounded-[24px] border border-[#E1EEDA] bg-white shadow-[0_24px_60px_-40px_rgba(22,70,35,0.45)] ${className}`}
  >
    <div className="grid h-full md:grid-cols-2 wide:flex wide:flex-col">
      <div className="relative z-10 flex flex-col items-start justify-center p-6 sm:p-8 lg:px-12 wide:justify-start wide:px-5 wide:pb-0 wide:pt-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF6E4] px-3 py-1 text-[13px] font-semibold text-[#1F7A3A] ring-1 ring-[#D3E9C8] wide:text-[length:clamp(0.72rem,4.2cqi,0.85rem)]">
          <ShoppingBag className="h-[1.1em] w-[1.1em]" />
          {group.bagSize}
        </span>
        <h3 className="mt-4 text-[#15291D] wide:mt-3">
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-500 wide:text-[length:clamp(0.65rem,3.8cqi,0.78rem)]">
            Best for
          </span>
          <span className="mt-1.5 block text-[2.6rem] font-black leading-none tracking-tight sm:text-5xl lg:text-[3.5rem] wide:text-[length:clamp(1.9rem,13.5cqi,2.9rem)]">
            {group.heading}
          </span>
        </h3>
        <PeopleIcon className="mt-4 h-8 w-14 text-[#1F8A3B] wide:mt-3" />
        <p className="mt-3 max-w-xs text-[15px] leading-snug text-gray-600 wide:mt-2 wide:text-[length:clamp(0.8rem,4.9cqi,0.95rem)]">
          {group.blurb}
        </p>
      </div>
      <div className="relative order-first h-52 sm:h-64 md:order-none md:h-auto md:min-h-[260px] wide:min-h-[160px] wide:flex-1">
        <img
          src={group.image}
          alt={group.imageAlt}
          width="1000"
          height="796"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_8%] wide:object-[50%_10%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-white/0 md:bg-gradient-to-r md:via-white/5 wide:bg-gradient-to-b wide:via-white/0 wide:via-25%"
        />
      </div>
    </div>
  </div>
);

const PlanCard = ({ plan, onOpen, onOrder }) => {
  const Icon = plan.icon;
  const badge = plan.popular ? 'Most popular' : plan.recommended ? 'Recommended' : null;

  return (
    <article
      onClick={() => onOpen(plan)}
      style={themeVars(plan.theme)}
      className={`@container group relative h-full cursor-pointer rounded-2xl border-[1.5px] bg-white shadow-[0_18px_40px_-30px_rgba(21,41,29,0.45)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_var(--accent-glow)] ${
        badge ? 'border-[color:var(--accent)]' : 'border-[color:var(--accent-border)]'
      }`}
    >
      {badge && (
        <span className="absolute -top-2.5 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-[color:var(--accent-strong)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          <Sparkles className="h-2.5 w-2.5" />
          {badge}
        </span>
      )}

      {/* Everything inside is sized in em off a base that follows the card's width,
          so compressed cards keep the design's proportions */}
      <div className="flex h-full flex-col text-[length:clamp(11px,5.1cqi,14px)]">
        {/* Header */}
        <div className="flex items-center gap-[0.75em] px-[1.15em] pb-[0.85em] pt-[1.35em]">
          <span className="grid h-[2.9em] w-[2.9em] shrink-0 place-items-center rounded-[0.8em] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-white shadow-[0_10px_20px_-10px_var(--accent-glow)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Icon className="h-[1.45em] w-[1.45em]" />
          </span>
          {/* Fixed height keeps images and benefit rows aligned when taglines wrap differently */}
          <div className="flex min-h-[3.9em] min-w-0 flex-col justify-center">
            <h4 className="text-[1.08em] font-extrabold uppercase leading-tight tracking-tight text-[#15291D]">{plan.title}</h4>
            <p className="mt-[0.15em] text-[0.86em] leading-[1.35] text-gray-500">{plan.tagline}</p>
          </div>
        </div>

        {/* Produce box */}
        <div className="relative h-[9.5em] overflow-hidden">
          <img
            src={produceBoxImage}
            alt=""
            width="800"
            height="421"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2em] bg-gradient-to-t from-white to-white/0" />
        </div>

        {/* Benefits */}
        <ul className="flex-1 space-y-[0.5em] px-[1.15em] pt-[0.95em] leading-snug">
          {plan.standardizedBenefits.map((benefit) => (
            <BenefitItem key={benefit.name} benefit={benefit} />
          ))}
        </ul>

        {/* Pricing */}
        <div className="px-[1.15em] pt-[1.1em]">
          <div className="flex flex-wrap items-center gap-x-[0.35em] gap-y-[0.25em]">
            <span className="text-[1.78em] font-extrabold leading-none tracking-tight text-[#15291D]">{plan.discountedPrice}</span>
            <span className="text-[0.82em] text-gray-400 line-through">{plan.originalPrice}</span>
            <span className="ml-auto rounded-full bg-[color:var(--accent-strong)] px-[0.6em] py-[0.35em] text-[0.78em] font-bold leading-none text-white">
              {plan.discount}
            </span>
          </div>
          <p className="mt-[0.4em] text-[0.9em] text-gray-600">{plan.bagRate}</p>
        </div>

        {/* Actions */}
        <div className="px-[1.15em] pb-[1.1em] pt-[0.95em]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOrder(plan);
            }}
            className="group/cta relative flex w-full touch-manipulation items-center justify-center gap-[0.45em] overflow-hidden rounded-[0.8em] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] px-[1em] py-[0.8em] text-[1.02em] font-semibold text-white shadow-[0_14px_28px_-14px_var(--accent-glow)] transition-all duration-300 hover:shadow-[0_18px_34px_-14px_var(--accent-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)] focus-visible:ring-offset-2 active:scale-[0.98]"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {/* Button shimmer effect */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-1000 ease-out group-hover:translate-x-full"
            />
            <span className="relative">Subscribe Now</span>
            <ArrowRight className="relative h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover/cta:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(plan);
            }}
            className="mt-[0.35em] w-full rounded-lg py-[0.35em] text-[0.86em] font-medium text-gray-500 transition-colors hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)]"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
};

const PlanGrid = ({ plans, onOpen, onOrder, className = '' }) => (
  <div className={`grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-3 ${className}`}>
    {plans.map((plan) => (
      <PlanCard key={plan.id} plan={plan} onOpen={onOpen} onOrder={onOrder} />
    ))}
  </div>
);

const PlanDetailsModal = ({ plan, onClose, onSubscribe }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscription-plan-title"
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={themeVars(plan.theme)}
        className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close plan details"
          className="absolute right-3 top-4 cursor-pointer touch-manipulation rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 sm:right-5 sm:top-6"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="grid grid-cols-1 gap-6 p-5 pt-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
          {/* Plan Overview */}
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-4 pr-10">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-white shadow-[0_10px_22px_-10px_var(--accent-glow)] sm:h-16 sm:w-16">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h2 id="subscription-plan-title" className="text-2xl font-extrabold uppercase tracking-tight text-[#15291D] sm:text-3xl">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-500 sm:text-base">
                  {plan.subtitle} · {plan.tagline}
                </p>
              </div>
            </div>

            {(plan.popular || plan.recommended) && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-strong)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" />
                {plan.popular ? 'Most popular choice' : 'Recommended choice'}
              </span>
            )}

            {/* Pricing */}
            <div className="rounded-2xl border border-[color:var(--accent-border)] bg-[color:var(--accent-soft)] p-4 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-3xl font-extrabold tracking-tight text-[#15291D]">{plan.discountedPrice}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  {plan.monthlyRate && (
                    <p className="mt-1 text-base font-semibold text-[color:var(--accent-strong)] sm:text-lg">{plan.monthlyRate}</p>
                  )}
                  {plan.bagRate && <p className="text-sm font-medium text-gray-600 sm:text-base">{plan.bagRate}</p>}
                </div>
                <span className="shrink-0 rounded-full bg-[color:var(--accent-strong)] px-3 py-1.5 text-sm font-bold text-white sm:text-base">
                  {plan.discount}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">{plan.duration}</p>
            </div>

            {/* Plan Details */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="flex items-center rounded-xl bg-gray-50 p-3 sm:p-4">
                <Users className="mr-3 h-5 w-5 shrink-0 text-[color:var(--accent-strong)] sm:h-6 sm:w-6" />
                <div>
                  <p className="text-xs text-gray-600 sm:text-sm">Ideal for</p>
                  <p className="text-sm font-semibold text-[#15291D] sm:text-base">{plan.familySize}</p>
                </div>
              </div>
              <div className="flex items-center rounded-xl bg-gray-50 p-3 sm:p-4">
                <Clock className="mr-3 h-5 w-5 shrink-0 text-[color:var(--accent-strong)] sm:h-6 sm:w-6" />
                <div>
                  <p className="text-xs text-gray-600 sm:text-sm">Delivery</p>
                  <p className="text-sm font-semibold text-[#15291D] sm:text-base">{plan.deliveryWindow}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Benefits */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">Subscription Benefits</h3>
              <ul className="space-y-2.5 text-sm leading-snug sm:space-y-3 sm:text-base">
                {plan.standardizedBenefits.map((benefit) => (
                  <BenefitItem key={benefit.name} benefit={benefit} term={plan.term} />
                ))}
              </ul>
            </div>

            {/* Subscribe Button */}
            <button
              type="button"
              onClick={onSubscribe}
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] px-4 py-3 text-sm font-bold text-white shadow-[0_14px_28px_-14px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-14px_var(--accent-glow)] active:scale-[0.98] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <ShoppingBasket className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>Subscribe Now via WhatsApp</span>
            </button>

            {/* Money Back Guarantee */}
            <div className="rounded-xl bg-[#F1F8EC] p-3 text-center sm:p-4">
              <p className="text-sm font-semibold text-[#00963F]">💚 100% Satisfaction Guaranteed</p>
              <p className="mt-1 text-xs text-[#3F7D1F]">Not happy? Get free replacement</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [smallHousehold, family] = planGroups;

  useEffect(() => {
    if (!selectedPlan) return;
    // Lock background scrolling and close on Escape while the modal is open
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPlan(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlan]);

  const handleWhatsAppOrder = (plan) => {
    const message = `Hi! I'm interested in the ${plan.title} (${plan.familySize}) - ${plan.duration}. Price: ${plan.discountedPrice}`;
    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  const handleSubscribeNow = () => {
    const message = `Hi! I'd like to subscribe to the ${selectedPlan.title}:

📋 Plan Details:
• Duration: ${selectedPlan.duration}
• Price: ${selectedPlan.discountedPrice} (${selectedPlan.discount})
• Monthly Rate: ${selectedPlan.monthlyRate || 'Details on request'}
• Ideal for: ${selectedPlan.familySize}

Please help me complete the subscription process. Thank you!`;

    window.open(`https://wa.me/919643722200?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section id="subscription" className="relative scroll-mt-20 overflow-hidden bg-[#F6FAF2] py-16 sm:py-24 wide:py-16">
      {/* Background glow and leaves */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#79B927]/15 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#00963F]/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[#F3E3B0]/40 blur-3xl" />
        <LeafSprig className="absolute -left-6 top-4 hidden w-40 text-[#6BAF3A] opacity-25 blur-[1px] lg:block" />
        <LeafSprig className="absolute -right-4 bottom-8 hidden w-44 rotate-180 text-[#6BAF3A] opacity-20 blur-[1px] lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 wide:max-w-[1720px] wide:px-6">
        {/* Grid areas live in SubscriptionSection.css */}
        <div className="subs-layout">
          <SectionHead className="subs-head" />
          <FeatureStrip className="subs-strip" />
          <GoodFoodBadge className="subs-badge" />

          {/* Jump targets for the bag-size cards in ProductsSection */}
          <span id="plans-7kg" aria-hidden="true" className="subs-anchor1 scroll-mt-24" />
          <span id="plans-10kg" aria-hidden="true" className="subs-anchor2 scroll-mt-24" />

          <AudiencePanel group={smallHousehold} className="subs-panel1 mt-6 wide:mt-0" />
          <PlanGrid plans={smallHousehold.plans} onOpen={handlePlanClick} onOrder={handleWhatsAppOrder} className="subs-cards1" />

          <AudiencePanel group={family} className="subs-panel2 mt-10 wide:mt-0" />
          <PlanGrid plans={family.plans} onOpen={handlePlanClick} onOrder={handleWhatsAppOrder} className="subs-cards2" />
        </div>
      </div>

      {/* Subscription Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <PlanDetailsModal plan={selectedPlan} onClose={closeModal} onSubscribe={handleSubscribeNow} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SubscriptionSection;
