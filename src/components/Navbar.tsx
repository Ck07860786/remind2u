import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00AFA3] to-[#008A81] flex items-center justify-center">
              <span className="text-white text-xl">R</span>
            </div>
            <span className="text-[#0A2342] tracking-tight" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Remind2U
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-[#00AFA3] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#00AFA3] transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#00AFA3] transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#00AFA3] transition-colors">
              Testimonials
            </a>
            <button className="px-6 py-2.5 bg-[#00AFA3] text-white rounded-xl hover:bg-[#008A81] transition-all hover:shadow-lg hover:shadow-[#00AFA3]/20 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-[#00AFA3] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-[#00AFA3] transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-[#00AFA3] transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="block text-gray-600 hover:text-[#00AFA3] transition-colors">
                Testimonials
              </a>
              <button className="w-full px-6 py-2.5 bg-[#00AFA3] text-white rounded-xl hover:bg-[#008A81] transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
