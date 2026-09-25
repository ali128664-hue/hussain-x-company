import React, { useRef } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Globe, Shield, TrendingUp } from 'lucide-react';

const floatingBadges = [
  { icon: Star, text: '5-Star Rated Agency' },
  { icon: Shield, text: 'Enterprise Code Quality' },
  { icon: Globe, text: 'Global Client Base' },
  { icon: Zap, text: 'Guaranteed Timelines' },
];

const trustedTags = [
  'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'React Native',
  'Shopify', 'WordPress', 'AWS', 'PostgreSQL', 'Docker', 'Figma', 'SEO', 'Google Ads',
];

export const HeroSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yDashboard = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityDashboard = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-36 md:pt-44 pb-0 bg-[#F9F8F6] overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Warm orange ambient glows */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#F5620F]/6 via-[#F5620F]/2 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F5620F]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col items-start text-left space-y-8">

            {/* Badge strip */}
            <AnimatedSection delay={0.05}>
              <div className="flex flex-wrap gap-2">
                {floatingBadges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8E4E0] bg-white text-xs font-semibold text-[#111111] shadow-xs"
                    >
                      <Icon size={12} className="text-[#F5620F]" />
                      {b.text}
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-[#111111]"
              >
                PAKISTAN'S PREMIER
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-[#111111]"
              >
                SOFTWARE HOUSE &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block"
              >
                <GradientText>DIGITAL GROWTH</GradientText>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="block"
              >
                <span className="relative inline-block">
                  STUDIO.
                  {/* underline accent */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5620F] rounded-full origin-left"
                  />
                </span>
              </motion.span>
            </h1>

            {/* Sub-copy */}
            <AnimatedSection delay={0.55}>
              <p className="text-lg sm:text-xl text-[#6B6560] max-w-lg leading-relaxed">
                We engineer bespoke enterprise software, high-converting web & mobile apps, and data-driven marketing campaigns that scale your business — from Lahore to the world.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={0.65} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <ShinyButton variant="primary" className="flex items-center gap-2">
                  Start Your Project <ArrowRight size={16} />
                </ShinyButton>
              </Link>
              <Link to="/services">
                <ShinyButton variant="outline" className="flex items-center gap-2">
                  Explore All 25 Services
                </ShinyButton>
              </Link>
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={0.75} className="w-full pt-8 border-t border-[#E8E4E0]">
              <div className="flex flex-wrap gap-8">
                {[
                  { num: '150+', label: 'Projects Delivered' },
                  { num: '99.8%', label: 'Client Satisfaction' },
                  { num: '5+', label: 'Years Experience' },
                  { num: '24/7', label: 'Support Available' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-[#111111] tabular-nums">{s.num}</span>
                    <span className="text-xs text-[#6B6560] mt-0.5 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — Animated Dashboard Card */}
          <motion.div
            style={{ y: yDashboard, opacity: opacityDashboard }}
            className="relative hidden lg:flex flex-col gap-4"
          >
            <AnimatedSection delay={0.35} direction="left">

              {/* Top metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { label: 'Client Revenue Growth', value: '+240%', change: 'Across all active accounts', icon: TrendingUp },
                  { label: 'Completed Deliverables', value: '150+', change: 'Delivered 100% on schedule', icon: Star },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl border border-[#E8E4E0] p-5 shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-[#6B6560] font-medium">{card.label}</p>
                        <div className="w-8 h-8 rounded-lg bg-[#F5620F]/10 flex items-center justify-center">
                          <Icon size={14} className="text-[#F5620F]" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-[#111111] mb-1">{card.value}</p>
                      <p className="text-xs text-[#F5620F] font-semibold">{card.change}</p>
                    </div>
                  );
                })}
              </div>

              {/* Chart card */}
              <div className="bg-white rounded-2xl border border-[#E8E4E0] p-5 shadow-xs mb-3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-[#111111]">Engineering Velocity</p>
                  <span className="text-xs text-[#6B6560] bg-[#F9F8F6] px-2.5 py-1 rounded-full border border-[#E8E4E0]">Last 8 sprints</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[35, 55, 42, 78, 60, 90, 72, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                      className="flex-1 rounded-t-md"
                      style={{
                        background: i === 7
                          ? 'linear-gradient(to top, #F5620F, #FF8A50)'
                          : 'linear-gradient(to top, #E8E4E0, #F9F8F6)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Checklist card */}
              <div className="bg-white rounded-2xl border border-[#E8E4E0] p-5 shadow-xs">
                <p className="text-sm font-bold text-[#111111] mb-3">The Hussain X Guarantee</p>
                <div className="flex flex-col gap-2">
                  {[
                    'Guaranteed on-time milestone delivery',
                    '100% full intellectual property & code ownership',
                    'Dedicated project manager & weekly demos',
                    '30-day comprehensive post-launch warranty',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#6B6560]">
                      <CheckCircle size={14} className="text-[#F5620F] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-6 bg-[#F5620F]/5 blur-3xl -z-10 rounded-[80px]" />
            </AnimatedSection>
          </motion.div>
        </div>

        {/* Tech marquee strip */}
        <AnimatedSection delay={0.9} className="mt-16 pb-16">
          <div className="border-t border-[#E8E4E0] pt-8">
            <p className="text-xs text-[#6B6560] uppercase tracking-widest font-mono font-semibold text-center mb-6">
              Technologies We Master
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {trustedTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.04 }}
                  className="px-4 py-1.5 rounded-full border border-[#E8E4E0] bg-white text-xs font-semibold text-[#111111] hover:border-[#F5620F] hover:text-[#F5620F] transition-colors cursor-default shadow-xs"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
