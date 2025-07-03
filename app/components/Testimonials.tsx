import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "@sarahcreates",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "ShortlyAI has completely transformed my content creation process. I can now create viral TikToks in minutes instead of hours!",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The AI-generated scripts are incredibly engaging. Our social media engagement has increased by 300% since using ShortlyAI.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      company: "Bloom Boutique",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "As someone with zero video editing experience, ShortlyAI made it possible for me to create professional marketing videos.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "YouTuber",
      company: "TechReviews",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The quality of videos ShortlyAI produces is mind-blowing. My YouTube Shorts are getting more views than ever before.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      company: "BrandBoost Agency",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Managing multiple client accounts is so much easier now. ShortlyAI helps me create unique content for each brand effortlessly.",
      rating: 5
    },
    {
      name: "Alex Rivera",
      role: "Entrepreneur",
      company: "StartupLife",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The ROI on ShortlyAI is incredible. I've saved thousands on video production while increasing my content output by 10x.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading font-poppins mb-6">
            <span className="text-white">Loved by</span>
            <br />
            <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of content creators who are already creating viral videos with ShortlyAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover-lift card-dark"
            >
              {/* Quote Icon */}
              <div className="inline-flex p-2 rounded-lg bg-gradient-hero text-white mb-4 glow-primary">
                <Quote className="h-4 w-4" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <p className="text-primary text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-primary mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Rating</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-secondary mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Users</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-accent mb-2">1M+</div>
            <div className="text-gray-400 text-sm">Videos</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-green-400 mb-2">99%</div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;