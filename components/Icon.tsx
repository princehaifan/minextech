import React from 'react';
import { 
  Code, Cloud, Smartphone, Fingerprint, ClipboardList, 
  Database, Blocks, ShieldCheck, Headphones, Bot, 
  Infinity, BarChart3, HelpCircle 
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  switch (name) {
    case 'Code': return <Code className={className} size={size} />;
    case 'Cloud': return <Cloud className={className} size={size} />;
    case 'Smartphone': return <Smartphone className={className} size={size} />;
    case 'Fingerprint': return <Fingerprint className={className} size={size} />;
    case 'ClipboardList': return <ClipboardList className={className} size={size} />;
    case 'Database': return <Database className={className} size={size} />;
    case 'Blocks': return <Blocks className={className} size={size} />;
    case 'ShieldCheck': return <ShieldCheck className={className} size={size} />;
    case 'Headphones': return <Headphones className={className} size={size} />;
    case 'Bot': return <Bot className={className} size={size} />;
    case 'Infinity': return <Infinity className={className} size={size} />;
    case 'BarChart3': return <BarChart3 className={className} size={size} />;
    default: return <HelpCircle className={className} size={size} />;
  }
};

export default Icon;