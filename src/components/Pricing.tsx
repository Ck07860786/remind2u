import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for trying out',
    features: [
      'Up to 10 reminders/month',
      'WhatsApp delivery',
      'Basic support',
      'Single user'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Pro',
    price: { monthly: 9, yearly: 90 },
    description: 'For power users',
    features: [
      'Unlimited reminders',
      'File upload & auto-detection',
      'Priority WhatsApp delivery',
      'AI scheduling',
      'Advanced analytics',
      'Priority support'
    ],
    popular: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Family',
    price: { monthly: 19, yearly: 190 },
    description: 'For families & teams',
    features: [
      'Everything in Pro',
      '5 users included',
      'Shared reminders',
      'Smart templates',
      'Family dashboard',
      'Dedicated support'
    ],
    popular: false,
    cta: 'Start Family Trial'
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Simple Pricing
          </span>
          <h2 className="text-[#0A2342] mt-4 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-md border border-gray-100">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly
                  ? 'bg-gradient-to-r from-[#00AFA3] to-[#008A81] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#00AFA3]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                isYearly
                  ? 'bg-gradient-to-r from-[#00AFA3] to-[#008A81] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#00AFA3]'
              }`}
            >
              Yearly
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#00AFA3] to-[#008A81] text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative bg-white rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-2 border-[#00AFA3] shadow-2xl shadow-[#00AFA3]/20'
                    : 'border border-gray-200 shadow-lg'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Plan Name */}
                <div className="mb-6">
                  <h3 className="text-[#0A2342] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#0A2342]" style={{ fontSize: '3rem', fontWeight: 700 }}>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && plan.price.yearly > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      ${(plan.price.yearly / 12).toFixed(2)}/month when billed yearly
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#E0F7F5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[#00AFA3]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#00AFA3] to-[#008A81] text-white shadow-lg shadow-[#00AFA3]/30 hover:shadow-xl hover:shadow-[#00AFA3]/40'
                      : 'bg-white text-[#0A2342] border-2 border-gray-200 hover:border-[#00AFA3]'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include 14-day money-back guarantee. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
