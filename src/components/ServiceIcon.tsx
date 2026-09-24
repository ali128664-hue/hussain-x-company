import React from 'react';
import {
  Share2, Search, Palette, MonitorSmartphone,
  Smartphone, Code2, ShoppingCart, TrendingUp,
  Brush, Workflow, Bot, Cloud,
  Shield, CheckCircle, Zap, Database,
  CloudLightning, Wrench, Layout, BarChart,
  PenTool, Video, HelpCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Share2,
  Search,
  Palette,
  MonitorSmartphone,
  Smartphone,
  Code2,
  ShoppingCart,
  TrendingUp,
  Brush,
  Workflow,
  Bot,
  Cloud,
  Shield,
  CheckCircle,
  Zap,
  Database,
  CloudLightning,
  Wrench,
  Layout,
  BarChart,
  PenTool,
  Video
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
