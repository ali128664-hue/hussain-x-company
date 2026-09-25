import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2, Trophy, Users2, Rocket, Target, Lightbulb, Heart, Globe } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';

const stats = [
  { icon: Trophy, value: '150+', label: 'Projects Delivered' },
  { icon: Users2, value: '100+', label: 'Happy Clients' },
  { icon: Rocket, value: '5+', label: 'Years of Experience' },
  { icon: CheckCircle2, value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'We don\'t just deliver code — we deliver measurable business outcomes tied directly to your revenue goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    desc: 'From custom software and AI integrations to modern web frameworks, we keep your business ahead of the curve.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    desc: 'Your success is our reputation. We build enduring engineering partnerships, not transactional vendor projects.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    desc: 'Engineered in Lahore, trusted by growing businesses across Pakistan, the US, UK, UAE, and worldwide.',
  },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-0">
      <SEOHead
        title="About HUSSAIN X SOLUTION | Software House & Digital Growth Agency"
        description="HUSSAIN X SOLUTION is Lahore's premier software house and digital marketing agency. Learn about our mission, team values, and proven process for delivering scalable digital solutions."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 bg-[#F9F8F6] border-b border-[#E8E4E0] text-center">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#F5620F]/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5620F]/25 bg-[#F5620F]/8 text-[#F5620F] text-xs font-mono font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5620F] inline-block" />
              Who We Are
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] mb-6 leading-[1.1]">
              The Team Behind Your{' '}<GradientText>Digital Success</GradientText>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              <strong className="text-[#111111]">HUSSAIN X SOLUTION</strong> is a full-service software house and digital growth agency based in Lahore, Pakistan. We help businesses across Pakistan, the US, UK, and UAE transform their digital presence — building software that scales and campaigns that convert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-[#E8E4E0] bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={i} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-2xl border border-[#E8E4E0] hover:border-[#F5620F]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F5620F]/8 border border-[#F5620F]/20 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-[#F5620F]" />
                    </div>
                    <div className="text-3xl font-extrabold text-[#111111] mb-1 tabular-nums">{stat.value}</div>
                    <div className="text-xs text-[#6B6560] font-medium">{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white border-b border-[#E8E4E0]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Our Mission"
                title="We Build Digital Engines That Drive Real Growth"
                accentWord="Real Growth"
                className="mb-6"
              />
              <div className="space-y-4 text-[#6B6560] leading-relaxed">
                <p>
                  At <strong className="text-[#111111]">HUSSAIN X SOLUTION</strong>, we believe great software should do more than function — it should grow your business. That is why every solution we build is engineered with your revenue goals, user experience, and long-term scalability in mind.
                </p>
                <p>
                  From our base in Model Town, Lahore, our engineers, designers, and growth specialists operate as an extension of your team — delivering bespoke web & mobile applications, AI workflows, and targeted performance marketing that generate tangible ROI.
                </p>
                <p className="font-semibold text-[#111111]">
                  We don't just complete projects — we build partnerships that last.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1A0E08] via-[#2B1A12] to-[#0A0A0A] border border-[#3A2920] p-10 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl min-h-[300px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#F5620F]/15 blur-[60px] rounded-full pointer-events-none" />
                <img src="/logo-dark.png" alt="HUSSAIN X SOLUTION" className="h-14 w-auto object-contain mx-auto mb-6 relative z-10" />
                <p className="text-[#F5620F] font-semibold tracking-widest uppercase text-xs mb-3 relative z-10">
                  Model Town Q Block, Lahore
                </p>
                <p className="text-[#A89A92] text-sm relative z-10 max-w-xs leading-relaxed">
                  Serving clients across Pakistan, US, UK & UAE since day one.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Our Values"
              title="What Sets Us Apart"
              accentWord="Sets Us Apart"
              description="The principles that guide every technical decision, architecture plan, and client engagement."
              align="center"
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <AnimatedSection key={i} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group p-7 rounded-2xl bg-white border border-[#E8E4E0] hover:border-[#F5620F]/50 hover:shadow-[0_8px_30px_-8px_rgba(245,98,15,0.15)] transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F5620F]/8 border border-[#F5620F]/20 flex items-center justify-center mb-5 group-hover:bg-[#F5620F] group-hover:border-[#F5620F] transition-all duration-300">
                      <Icon size={20} className="text-[#F5620F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-[#111111] mb-2 group-hover:text-[#F5620F] transition-colors duration-200">{val.title}</h3>
                    <p className="text-sm text-[#6B6560] leading-relaxed">{val.desc}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
