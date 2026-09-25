import React, { useRef } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Globe, Shield, TrendingUp } from 'lucide-react';

const floatingBadges = [
  { icon: Star, text: '5-Star Rated Agency', color: '#FF6A00' },
  { icon: Shield, text: 'ISO-Compliant Security', color: '#FF6A00' },
  { icon: Globe, text: 'Global Clients', color: '#FF6A00' },
  { icon: Zap, text: 'Fast Delivery', color: '#FF6A00' },
];

const trustedTags = [
  'React', 'Node.js', 'Next.js', 'Flutter', 'Shopify', 'WordPress',
  'AWS', 'Python', 'SEO', 'Google Ads', 'Figma', 'Laravel',
];

export const HeroSection = () => {
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
      className="relative min-h-screen flex items-center justify-center pt-36 md:pt-44 pb-0 bg-[#FAFAF9] overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal orange accent */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#FF6A00]/6 via-[#FF6A00]/2 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF6A00]/10 blur-[100px] rounded-full pointer-events-none" />

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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E5DED9] bg-white text-xs font-semibold text-[#0A0A0A] shadow-sm"
                    >
                      <Icon size={11} className="text-[#FF6A00]" />
                      {b.text}
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.08]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-[#0A0A0A]"
              >
                PAKISTAN'S PREMIER
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-[#0A0A0A]"
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
              <p className="text-lg sm:text-xl text-[#5C504A] max-w-lg leading-relaxed">
                We engineer custom enterprise software, intuitive web & mobile apps, and high-ROI marketing campaigns that scale your business — from Lahore to the world.
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
                  Explore Services
                </ShinyButton>
              </Link>
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={0.75} className="w-full pt-8 border-t border-[#E5DED9]">
              <div className="flex flex-wrap gap-8">
                {[
                  { num: '150+', label: 'Projects Delivered' },
                  { num: '99.8%', label: 'Client Satisfaction' },
                  { num: '5+', label: 'Years Experience' },
                  { num: '24/7', label: 'Support Available' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-[#0A0A0A] tabular-nums">{s.num}</span>
                    <span className="text-xs text-[#5C504A] mt-0.5 font-medium">{s.label}</span>
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
                  { label: 'Total Revenue', value: '$124,500', change: '+14.5% this month', icon: TrendingUp },
                  { label: 'Active Clients', value: '84', change: '+12 this quarter', icon: Star },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl border border-[#E5DED9] p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-[#5C504A] font-medium">{card.label}</p>
                        <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center">
                          <Icon size={14} className="text-[#FF6A00]" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-[#0A0A0A] mb-1">{card.value}</p>
                      <p className="text-xs text-[#FF6A00] font-semibold">{card.change}</p>
                    </div>
                  );
                })}
              </div>

              {/* Chart card */}
              <div className="bg-white rounded-2xl border border-[#E5DED9] p-5 shadow-sm mb-3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-[#0A0A0A]">Growth Overview</p>
                  <span className="text-xs text-[#5C504A] bg-[#FAF8F6] px-2.5 py-1 rounded-full border border-[#E5DED9]">Last 8 months</span>
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
                          ? 'linear-gradient(to top, #FF6A00, #FF9A40)'
                          : 'linear-gradient(to top, #E5DED9, #FAF8F6)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Checklist card */}
              <div className="bg-white rounded-2xl border border-[#E5DED9] p-5 shadow-sm">
                <p className="text-sm font-bold text-[#0A0A0A] mb-3">Why Clients Choose Us</p>
                <div className="flex flex-col gap-2">
                  {[
                    'On-time delivery guaranteed',
                    'Transparent pricing, no surprises',
                    'Dedicated project manager',
                    'Post-launch 30-day support',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-[#5C504A]">
                      <CheckCircle size={14} className="text-[#FF6A00] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-6 bg-[#FF6A00]/5 blur-3xl -z-10 rounded-[80px]" />
            </AnimatedSection>
          </motion.div>
        </div>

        {/* Tech marquee strip */}
        <AnimatedSection delay={0.9} className="mt-16 pb-16">
          <div className="border-t border-[#E5DED9] pt-8">
            <p className="text-xs text-[#5C504A] uppercase tracking-widest font-mono font-semibold text-center mb-6">
              Technologies We Master
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {trustedTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.04 }}
                  className="px-4 py-1.5 rounded-full border border-[#E5DED9] bg-white text-xs font-semibold text-[#0A0A0A] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors cursor-default shadow-sm"
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
