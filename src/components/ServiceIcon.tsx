import React from 'react';
import {
  Code2,
  Layers,
  Smartphone,
  Cable,
  Cpu,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  ShoppingBag,
  Wrench,
  Palette,
  Brush,
  PenTool,
  Video,
  Sparkles,
  Search,
  Share2,
  MousePointerClick,
  TrendingUp,
  FileText,
  Bot,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Database,
  Rocket,
  Headphones,
  HelpCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  // Software & Development
  Code2,
  Layers,
  Smartphone,
  Cable,
  Cpu,
  // Web & E-Commerce
  Globe,
  ShoppingCart,
  LayoutTemplate,
  ShoppingBag,
  Wrench,
  // Design & Creative
  Palette,
  Brush,
  PenTool,
  Video,
  Sparkles,
  // Marketing & Growth
  Search,
  Share2,
  MousePointerClick,
  TrendingUp,
  FileText,
  // Technology & Cloud
  Bot,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Database,
  // Supporting / Legacy aliases
  Rocket,
  Headphones,
  MonitorSmartphone: Globe,
  Layout: LayoutTemplate,
  Zap: Cable,
  Shield: ShieldCheck,
  CheckCircle: CheckCircle2,
  BarChart: MousePointerClick,
  Workflow: Cpu,
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
