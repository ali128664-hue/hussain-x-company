import React from 'react';
import {
  Code2, Globe, Smartphone, ShoppingBag,
  Layers, Sparkles, Search, Megaphone,
  Brain, Cloud, ShieldCheck, Headphones,
  HelpCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  // New 12-service icons
  Code2,
  Globe,
  Smartphone,
  ShoppingBag,
  Layers,
  Sparkles,
  Search,
  Megaphone,
  Brain,
  Cloud,
  ShieldCheck,
  Headphones,
  // Legacy icons (kept for backward compatibility)
  Share2: Megaphone,
  Palette: Layers,
  MonitorSmartphone: Globe,
  TrendingUp: Megaphone,
  Brush: Sparkles,
  Workflow: Brain,
  Bot: Brain,
  Shield: ShieldCheck,
  CheckCircle: ShieldCheck,
  Zap: Code2,
  Database: Cloud,
  CloudLightning: Cloud,
  Wrench: Headphones,
  Layout: Globe,
  BarChart: Megaphone,
  PenTool: Sparkles,
  Video: Sparkles,
};

interface ServiceIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, size = 24, className }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent size={size} className={className} />;
};

export default ServiceIcon;
