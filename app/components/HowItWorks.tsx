import React from 'react';
import { MessageSquare, Wand2, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Describe Your Vision",
      description: "Tell our AI what kind of video you want. Describe the topic, style, mood, and target audience in simple words."
    },
    {
      step: "02",
      icon: <Wand2 className="h-6 w-6" />,
      title: "AI Creates Magic",
      description: "Our advanced AI generates a complete video with visuals, animations, music, and captions tailored to your vision."
    },
    {
      step: "03",
      icon: <Download className="h-6 w-6" />,
      title: "Download & Share",
      description: "Review your video, make quick edits if needed, and export in the perfect format for any social platform."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading font-poppins mb-6">
            <span className="text-white">How It</span>
            <br />
            <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Creating viral videos has never been easier. Follow these simple steps to bring your ideas to life.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card rounded-xl p-8 hover-lift card-dark">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl font-bold font-poppins text-gray-700">
                      {step.step}
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-hero text-black glow-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold font-poppins text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="glass-card rounded-full p-2 glow-primary">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href={"/dashboard"}>
          <button className="btn-primary px-8 py-4 text-lg font-semibold hover-glow">
            Start Creating Now
          </button>
          </Link>
          <p className="text-gray-400 mt-4">No credit card required • Free plan available</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;