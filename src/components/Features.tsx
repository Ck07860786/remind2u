import { motion } from 'motion/react';
import { MessageCircle, Brain, RefreshCw, Upload, Grid3x3, Users } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Delivery',
    description: 'Receive all your reminders directly in your WhatsApp chat. No separate app needed.',
    gradient: 'from-[#00AFA3]/10 to-[#00AFA3]/5'
  },
  {
    icon: Brain,
    title: 'AI-Based Smart Scheduler',
    description: 'Our intelligent system optimizes reminder timing based on your patterns and preferences.',
    gradient: 'from-[#0A2342]/10 to-[#0A2342]/5'
  },
  {
    icon: RefreshCw,
    title: 'Recurring Reminders',
    description: 'Set daily, weekly, monthly, or yearly reminders. Perfect for bills and medications.',
    gradient: 'from-[#00AFA3]/10 to-[#00AFA3]/5'
  },
  {
    icon: Upload,
    title: 'Upload Docs for Auto Detection',
    description: 'Upload bills or prescriptions and we automatically extract dates and set reminders.',
    gradient: 'from-[#0A2342]/10 to-[#0A2342]/5'
  },
  {
    icon: Grid3x3,
    title: 'Multi-Category Support',
    description: 'EMI, Medicine, Study, Fitness, Birthday, Work Tasks - organize everything perfectly.',
    gradient: 'from-[#00AFA3]/10 to-[#00AFA3]/5'
  },
  {
    icon: Users,
    title: 'Family & Business Accounts',
    description: 'Share reminders with family members or manage team tasks effortlessly.',
    gradient: 'from-[#0A2342]/10 to-[#0A2342]/5'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Everything You Need
          </span>
          <h2 className="text-[#0A2342] mt-4 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technology to make your life easier and more organized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#00AFA3] to-[#008A81] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <feature.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-[#0A2342] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00AFA3]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
