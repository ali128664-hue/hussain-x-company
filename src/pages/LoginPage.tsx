import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { Mail, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    
    // Simulate login
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: '', password: '' });
      // Here you can redirect the user or manage auth state
      // alert('Login successful!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-36 md:pt-40 pb-0">
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#FFFFFF]">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6A00]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-lg relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Welcome <GradientText>Back</GradientText>
            </h1>
            <p className="text-lg text-[#5C504A]">
              Log in to your account to continue.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-[#FAF8F6] border border-[#E5DED9] p-8 md:p-10 rounded-2xl shadow-sm">
              {submitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-4 bg-white rounded-xl border border-[#E5DED9] p-6">
                  <div className="w-16 h-16 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0A0A0A]">Logging In...</h4>
                  <p className="text-sm text-[#5C504A]">
                    Please wait while we verify your credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                      Email Address <span className="text-[#FF6A00]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-[#8A817C]" />
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#E5DED9] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                        Password <span className="text-[#FF6A00]">*</span>
                      </label>
                      <Link to="#" className="text-xs font-medium text-[#FF6A00] hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-[#8A817C]" />
                      </div>
                      <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#E5DED9] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" 
                        placeholder="••••••••" 
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0A0A0A] hover:bg-[#FF6A00] text-white font-semibold shadow-md hover:shadow-lg transition-all transform active:scale-[0.99]"
                  >
                    <span>Sign In</span>
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-sm text-[#5C504A]">
                      Don't have an account?{' '}
                      <Link to="#" className="text-[#FF6A00] font-semibold hover:underline">
                        Sign up here
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
