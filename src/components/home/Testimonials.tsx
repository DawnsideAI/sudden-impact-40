
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionTitle from "../design/SectionTitle";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechFirm Solutions",
    company: "TechFirm Solutions",
    content: "The AI voice agent has transformed our customer service. We've reduced response times by 78% while maintaining high customer satisfaction scores. It's like having a 24/7 receptionist that never takes a day off.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Director of Operations",
    company: "HealthPlus Medical Center",
    content: "As a healthcare provider, compliance is critical for us. The HIPAA-compliant AI solution handles patient scheduling beautifully while maintaining all regulatory requirements. Our staff now focuses on care instead of phones.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    position: "Owner",
    company: "Coastal Properties Real Estate",
    content: "Our agents saved an average of 15 hours per week after implementing the AI voice assistant. It qualifies leads, books showings, and follows up automatically. The ROI was evident within the first month.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Businesses across industries are experiencing remarkable results with our AI voice agents"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative"
            >
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-pink to-brand-aqua rounded-t-2xl"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-brand-pink/10">
                <Quote size={40} />
              </div>
              
              {/* Testimonial content */}
              <div className="mb-8">
                <p className="text-gray-700 italic relative z-10">"{testimonial.content}"</p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-aqua/20"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-brand-pink">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
