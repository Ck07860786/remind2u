import { motion } from 'motion/react';
import { Calendar, Zap, MessageCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Create a Reminder',
    description: 'Choose reminder type, time and frequency.',
    color: 'from-[#00AFA3] to-[#008A81]'
  },
  {
    number: '02',
    icon: Zap,
    title: 'We Schedule It Automatically',
    description: 'Our smart engine sets up recurring reminders.',
    color: 'from-[#0A2342] to-[#1a3a5c]'
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Reminder Delivered to WhatsApp',
    description: 'Receive alerts directly in your WhatsApp chat.',
    color: 'from-[#00AFA3] to-[#008A81]'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Simple Process
          </span>
          <h2 className="text-[#0A2342] mt-4 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in just three simple steps. No complex setup required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#00AFA3] to-[#008A81] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[#0A2342] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <ArrowRight size={24} className="text-[#00AFA3]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
