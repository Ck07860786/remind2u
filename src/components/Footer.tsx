import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00AFA3] to-[#008A81] flex items-center justify-center">
                <span className="text-white text-xl">R</span>
              </div>
              <span className="tracking-tight" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Remind2U
              </span>
            </div>
            <p className="text-gray-400 mb-6" style={{ fontSize: '0.875rem' }}>
              Never forget again!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00AFA3] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00AFA3] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00AFA3] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#00AFA3] rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left" style={{ fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Remind2U. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AFA3] transition-colors" style={{ fontSize: '0.875rem' }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
