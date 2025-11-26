import { Navigation } from './Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Building, MapPin, Users, Target, Bell, Save } from 'lucide-react';
import { Separator } from './ui/separator';

type Screen = 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}
