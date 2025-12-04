import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, MessageCircle } from 'lucide-react';

export function LiveDemo() {
  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    if (phone.trim()) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setPhone('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2342] to-[#1a3a5c] text-white overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AFA3] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00AFA3] rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Try It Now
          </span>
          <h2 className="mt-4 mb-4">
            See It In Action
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enter your WhatsApp number and receive a test reminder instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="mb-6">
              Get a Test Reminder
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AFA3] focus:border-transparent transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSend}
                disabled={isSent}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#00AFA3] to-[#008A81] text-white rounded-xl shadow-lg shadow-[#00AFA3]/30 hover:shadow-xl hover:shadow-[#00AFA3]/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSent ? (
                  <>
                    <Check size={20} />
                    <span>Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Test Reminder</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-400 text-center">
                You'll receive a sample reminder on WhatsApp in seconds.
              </p>
            </div>
          </motion.div>

          {/* Right - WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00AFA3] to-[#008A81] rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0A2342]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    Remind2U
                  </div>
                  <div className="text-gray-500" style={{ fontSize: '0.75rem' }}>
                    Online
                  </div>
                </div>
              </div>

              {/* Message */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="bg-[#E0F7F5] rounded-2xl rounded-tl-sm p-4 max-w-[85%]"
                  >
                    <p className="text-[#0A2342]" style={{ fontSize: '0.875rem' }}>
                      🎉 Welcome to Remind2U!
                    </p>
                    <p className="text-gray-600 mt-2" style={{ fontSize: '0.875rem' }}>
                      This is how your reminders will look. Set your first reminder now!
                    </p>
                    <span className="text-gray-400 text-right block mt-2" style={{ fontSize: '0.625rem' }}>
                      Just now
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isSent && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={32} className="text-gray-400" />
                  </div>
                  <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
                    Your test message will appear here
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
