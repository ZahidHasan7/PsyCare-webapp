// frontend/src/data/pricingPlans.js
export const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      features: [
        "1 video consultation per month",
        "Access to community forums",
        "Basic AI insights"
      ],
      cta: "Start Basic Plan",
      highlight: false
    },
    {
      name: "Professional",
      price: "$79",
      features: [
        "4 video consultations per month",
        "Priority access to therapists",
        "Advanced AI insights",
        "24/7 chat support"
      ],
      cta: "Start Pro Plan",
      highlight: true  // Typically highlight the middle tier
    },
    {
      name: "Enterprise",
      price: "$199",
      features: [
        "Unlimited video consultations",
        "Dedicated account manager",
        "Custom AI solutions",
        "Analytics and reporting"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];