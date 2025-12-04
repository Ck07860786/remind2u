import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1560073743-0a45c01b68c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2NDgxNjA3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Remind2U has been a game-changer for managing my business tasks. I never miss important deadlines anymore!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1524538198441-241ff79d153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjQ3NDgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'The AI scheduling is incredibly smart. It learns my patterns and sends reminders at the perfect time.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjQ3NzUzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Perfect for managing medication schedules for my patients. The WhatsApp integration makes it so convenient.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00AFA3] tracking-wider uppercase" style={{ fontSize: '0.875rem' }}>
            Success Stories
          </span>
          <h2 className="text-[#0A2342] mt-4 mb-4">
            Loved by Users Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about their experience with Remind2U.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#00AFA3] transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#00AFA3] opacity-20">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#00AFA3] text-[#00AFA3]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[#0A2342]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500" style={{ fontSize: '0.875rem' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
