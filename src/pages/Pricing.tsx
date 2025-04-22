
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const pricingPlans = [
  {
    name: "Starter",
    price: 499,
    description: "Perfect for small businesses just getting started with AI voice automation",
    features: [
      "Up to 500 minutes/month",
      "Basic scheduling",
      "Email support",
      "Business hours only"
    ],
    mostPopular: false,
    ctaText: "Get Started"
  },
  {
    name: "Professional",
    price: 799,
    description: "Ideal for growing businesses needing more advanced features",
    features: [
      "Up to 5000 minutes/month",
      "Advanced scheduling",
      "Priority support",
      "24/7 availability",
      "Custom responses"
    ],
    mostPopular: true,
    ctaText: "Get Started"
  },
  {
    name: "Enterprise",
    price: null,
    description: "For large organizations requiring custom solutions",
    features: [
      "Unlimited minutes",
      "Full feature set",
      "Dedicated support",
      "Custom integration",
      "Advanced analytics"
    ],
    mostPopular: false,
    ctaText: "Get Started"
  }
];

const simplePricingPlans = [
  {
    name: "Starter",
    price: 499,
    features: [
      "Up to 500 minutes/month",
      "Basic scheduling",
      "Email support",
      "Business hours only"
    ],
  },
  {
    name: "Professional",
    price: 799,
    features: [
      "Up to 5000 minutes/month",
      "Advanced scheduling",
      "Priority support",
      "24/7 availability",
      "Custom responses"
    ],
  },
  {
    name: "Enterprise",
    price: null,
    features: [
      "Unlimited minutes",
      "Full feature set",
      "Dedicated support",
      "Custom integration",
      "Advanced analytics"
    ],
  }
];

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing | Sudden Impact Agency";
  }, []);

  return (
    <Layout>
      {/* Original Pricing Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Original Pricing Cards */}
      <section className="py-12 md:py-16 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className={`glass-card rounded-xl overflow-hidden relative ${
                  plan.mostPopular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      {plan.price ? (
                        <>
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-gray-400 ml-2">/month</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold">Custom Pricing</span>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    to="/demo"
                    className={`block w-full py-3 px-4 text-center rounded-lg font-medium mb-8 ${
                      plan.mostPopular
                        ? "gradient-bg text-white shadow-lg hover:shadow-xl transition-all"
                        : "glass-card text-white hover:bg-white/10 transition-all"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="py-12 md:py-16 relative border-t border-white/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {simplePricingPlans.map((plan, index) => (
              <motion.div
                key={`simple-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="glass-card rounded-xl overflow-hidden relative p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  {plan.price ? (
                    <div className="text-3xl font-bold">${plan.price}/month</div>
                  ) : (
                    <div className="text-3xl font-bold">Custom Pricing</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/demo"
                  className="block w-full py-3 px-4 text-center rounded-lg glass-card text-white hover:bg-white/10 transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
