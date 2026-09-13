import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { CheckCircle2, Trophy, Users2, Rocket } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-[#FFFFFF] border-b border-[#E5DED9] text-center">
        <div className="absolute inset-0 bg-[#FF6A00]/5 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6] mb-8">
               <span className="text-xs font-semibold text-[#FF6A00] tracking-wide uppercase">Who We Are</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-6">
                The Architects of <GradientText>Digital Success</GradientText>
             </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
             <p className="text-xl text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
               <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> is a premium Software House and Digital Growth Agency based in Model Town Q Block, Lahore. We transform bold ideas into powerful, scalable digital experiences that drive real business results.
             </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-[#E5DED9] bg-[#FAF8F6]">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: <Trophy />, value: "150+", label: "Projects Delivered" },
               { icon: <Users2 />, value: "99%", label: "Happy Clients" },
               { icon: <Rocket />, value: "10+", label: "Years Experience" },
               { icon: <CheckCircle2 />, value: "24/7", label: "Support" },
             ].map((stat, i) => (
               <AnimatedSection key={i} delay={0.1 * i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[#E5DED9] shadow-sm">
                 <div className="text-[#FF6A00] mb-4">
                   {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
                 </div>
                 <div className="text-3xl font-bold text-[#0A0A0A] mb-2">{stat.value}</div>
                 <div className="text-sm text-[#5C504A] font-medium">{stat.label}</div>
               </AnimatedSection>
             ))}
           </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <AnimatedSection direction="left">
               <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">Empowering Businesses in the Digital Age</h2>
               <p className="text-[#5C504A] mb-6 leading-relaxed">
                 From robust custom software and high-performance mobile applications to data-driven social media marketing and creative branding — our mission is to provide a complete, all-in-one digital ecosystem for modern businesses to thrive and grow.
               </p>
               <p className="text-[#5C504A] leading-relaxed">
                 Based in the heart of Lahore, our expert team of developers, designers, and marketers collaborate closely with clients across Pakistan and worldwide — ensuring every digital solution we deliver is powerful, scalable, and results-oriented.
               </p>
             </AnimatedSection>
             <AnimatedSection direction="right" className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2B1A12] to-[#0A0A0A] border border-[#3A2920] p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="text-center relative z-10 px-4">
                    <img src="/logo-dark.png" alt="HUSSAIN X SOLUTION" className="h-16 w-auto object-contain mx-auto mb-4" />
                    <p className="text-[#FF6A00] font-semibold tracking-widest uppercase text-xs">Model Town Q Block, Lahore</p>
                  </div>
                </div>
             </AnimatedSection>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
