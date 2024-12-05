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
    <div className="bg-contrast-100 p-6 text-foreground lg:p-8">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 lg:gap-6 ">
        <AlertTriangle strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Bell strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Calendar strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Camera strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <CheckCircle strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Cloud strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Edit strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <FileText strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Globe strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Heart strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <HelpCircle strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Home strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <ImageIcon strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Lock strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Mail strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <MapPin strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <MessageCircle strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Play strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Search strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Settings strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <ShoppingCart strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Star strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <Trash strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
        <User strokeWidth={strokeWidth} size={size} absoluteStrokeWidth />
      </div>
    </div>
  );
}

export { IconsPreview };
