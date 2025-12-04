import { motion } from 'motion/react';
import { Clock, Bell, Calendar, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-[#F5F7FA] to-[#E0F7F5]">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-[10%] text-[#00AFA3] opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
       
      </motion.div>
      <motion.div
        className="absolute top-48 right-[15%] text-[#00AFA3] opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Bell size={56} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[20%] text-[#00AFA3] opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
       
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600" style={{ fontSize: '0.875rem' }}>Used by 100,000+ users worldwide</span>
            </motion.div>

            <h1 className="text-[#0A2342] mb-6">
              Your Personal WhatsApp Reminder Assistant
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Set reminders for bills, medicines, tasks, birthdays & more — delivered directly to your WhatsApp. Never forget again!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#00AFA3] text-white rounded-xl shadow-lg shadow-[#00AFA3]/30 hover:shadow-xl hover:shadow-[#00AFA3]/40 transition-all"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#0A2342] rounded-xl border-2 border-gray-200 hover:border-[#00AFA3] transition-all"
              >
                How It Works
              </motion.button>
            </div>

            <div className="text-gray-500 text-center lg:text-left" style={{ fontSize: '0.875rem' }}>
              Trusted by students, professionals, businesses, and senior citizens.
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating WhatsApp Icon */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#00AFA3] to-[#008A81] rounded-2xl shadow-2xl flex items-center justify-center z-10"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle size={40} className="text-white" />
              </motion.div>

              {/* Phone Mockup Container */}
              <div className="relative bg-white rounded-[3rem] p-4 shadow-2xl max-w-sm">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-8 bg-white rounded-b-3xl mx-auto w-40 mb-4"></div>
                  
                  {/* WhatsApp UI Mockup */}
                  <div className="px-4 pb-8 space-y-3">
                    {/* Reminder Message 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Bell size={14} className="text-[#00AFA3]" />
                        <span className="text-gray-500" style={{ fontSize: '0.75rem' }}>Remind2U</span>
                      </div>
                      <p className="text-gray-800" style={{ fontSize: '0.875rem' }}>
                        🔔 Reminder: Pay electricity bill
                      </p>
                      <span className="text-gray-400 text-right block mt-1" style={{ fontSize: '0.625rem' }}>
                        Today, 9:00 AM
                      </span>
                    </motion.div>

                    {/* Reminder Message 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                      className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} className="text-[#00AFA3]" />
                        <span className="text-gray-500" style={{ fontSize: '0.75rem' }}>Remind2U</span>
                      </div>
                      <p className="text-gray-800" style={{ fontSize: '0.875rem' }}>
                        💊 Time to take your medicine
                      </p>
                      <span className="text-gray-400 text-right block mt-1" style={{ fontSize: '0.625rem' }}>
                        Today, 10:30 AM
                      </span>
                    </motion.div>

                    {/* Reminder Message 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                      className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock size={14} className="text-[#00AFA3]" />
                        <span className="text-gray-500" style={{ fontSize: '0.75rem' }}>Remind2U</span>
                      </div>
                      <p className="text-gray-800" style={{ fontSize: '0.875rem' }}>
                        🎂 Sarah's birthday tomorrow!
                      </p>
                      <span className="text-gray-400 text-right block mt-1" style={{ fontSize: '0.625rem' }}>
                        Today, 2:00 PM
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00AFA3]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -top-4 right-12 w-32 h-32 bg-gradient-to-br from-[#0A2342]/10 to-transparent rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
