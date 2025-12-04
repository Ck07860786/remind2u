import { motion } from 'motion/react';
import { Target, Shield, Headphones, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Target,
    number: '99.9%',
    label: 'Delivery Accuracy',
    description: 'Messages delivered on time, every time'
  },
  {
    icon: Shield,
    number: 'AES-256',
    label: 'Encrypted',
    description: 'Bank-level security for your data'
  },
  {
    icon: Headphones,
    number: '24/7',
    label: 'Support',
    description: 'Always here when you need us'
  },
  {
    icon: TrendingUp,
    number: '1M+',
    label: 'Successful Reminders',
    description: 'Trusted by users worldwide'
  }
];

export function WhyRemind2U() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Why Choose Us
          </span>
          <h2 className="text-[#0A2342] mt-4 mb-4">
            Why Remind2U?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with reliability, security, and user experience at its core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 text-center border border-gray-100 hover:border-[#00AFA3] transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00AFA3] to-[#008A81] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon size={32} className="text-white" />
                </div>

                {/* Number */}
                <div className="text-[#0A2342] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-900 mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                  {stat.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AFA3]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
