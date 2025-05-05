import {
  AlertTriangle,
  Bell,
  Calendar,
  Camera,
  CheckCircle,
  Cloud,
  Edit,
  FileText,
  Globe,
  Heart,
  HelpCircle,
  Home,
  Image as ImageIcon,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Trash,
  User,
} from 'lucide-react';

function IconsPreview({
  strokeWidth,
  size = 32,
}: {
  variant?: string;
  strokeWidth: number;
  size: number;
}) {
  return (
    <div className="bg-contrast-100 text-foreground p-6 lg:p-8">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 lg:gap-6">
        <AlertTriangle absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Bell absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Calendar absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Camera absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <CheckCircle absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Cloud absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Edit absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <FileText absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Globe absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Heart absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <HelpCircle absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Home absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <ImageIcon absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Lock absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Mail absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <MapPin absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <MessageCircle absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Play absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Search absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Settings absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <ShoppingCart absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Star absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <Trash absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
        <User absoluteStrokeWidth size={size} strokeWidth={strokeWidth} />
      </div>
    </div>
  );
}

export { IconsPreview };
