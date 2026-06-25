// =============================================================
//  EDIT EVERYTHING HERE — links, prices, and brand text.
//  This is the only file you normally need to touch.
// =============================================================

export const config = {
  brand: {
    name: "Reel Fuel Kit",
    instagram: "@reelfuelkit",
    instagramUrl: "https://instagram.com/reelfuelkit",
  },

  // Bonus Google Drive folder — shared with buyers after purchase.
  // Replace with your real Drive link when ready (not shown on the page).
  bonusDrive: "https://drive.google.com/your-folder-link-here",

  // -----------------------------------------------------------
  //  PRODUCTS / PRICING
  //  Each product has an India link (Razorpay) + a Global link (Payhip).
  //  Edit prices and links here — this is the only place to change them.
  // -----------------------------------------------------------
  products: [
    {
      id: "creator-kit",
      name: "Reel Fuel Creator Kit",
      blurb: "Strategy, hooks, prompts & captions to plan content faster.",
      priceIndia: "₹189",
      priceGlobal: "$7",
      highlight: false,
      badge: null,
      features: [
        "500 viral-style hooks",
        "200 ChatGPT prompts",
        "100 ready captions",
        "30-day content calendar",
        "50 niche reel ideas",
        "Weak hook vs strong hook examples",
      ],
      // India = Razorpay, Global = Payhip
      indiaUrl: "https://rzp.io/rzp/VKHKZYFg",
      globalUrl: "https://payhip.com/b/gVa7k",
    },
    {
      id: "reels-bundle",
      name: "5000+ Reels Bundle",
      blurb: "A massive library of ready-to-edit video assets.",
      priceIndia: "₹149",
      priceGlobal: "$7",
      highlight: false,
      badge: null,
      features: [
        "Money motivation reels",
        "AI-generated reels",
        "Football-style reels",
        "Luxury and wealth reels",
        "Cat and animal reels",
        "Background clips for Instagram Reels and YouTube Shorts",
      ],
      indiaUrl: "https://rzp.io/rzp/yth7uyrV",
      globalUrl: "https://payhip.com/b/4wqxF",
    },
    {
      id: "combo",
      name: "Best Value Combo",
      blurb: "Everything — strategy + assets + bonus drive in one bundle.",
      priceIndia: "₹299",
      priceGlobal: "$9.99",
      highlight: true,
      badge: "Best Value",
      highlightText: "Get everything in one bundle",
      features: [
        "Reel Fuel Creator Kit",
        "5000+ Reels Bundle",
        "Bonus Drive access",
        "All hooks, prompts, captions, ideas, and video assets in one bundle",
      ],
      indiaUrl: "https://rzp.io/rzp/bzac8xR",
      globalUrl: "https://payhip.com/b/jdVLT",
    },
  ],
};
