import { Button } from './ui/button';
import { LayoutDashboard, Calculator, FileText, User, HelpCircle, Leaf, LogOut } from 'lucide-react';

type Screen = 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export function Navigation({ currentScreen, onNavigate, onLogout }: NavigationProps) {
  const navItems = [
    { id: 'dashboard' as Screen, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'calculator' as Screen, label: 'Calcular', icon: Calculator },
    { id: 'reports' as Screen, label: 'Relatórios', icon: FileText },
    { id: 'profile' as Screen, label: 'Perfil', icon: User },
    { id: 'support' as Screen, label: 'Suporte', icon: HelpCircle },
  ];

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="size-5 text-white" />
            </div>
            <span className="text-green-900">CarbonMap</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentScreen === item.id ? 'default' : 'ghost'}
                  className={currentScreen === item.id ? 'bg-green-600 hover:bg-green-700' : ''}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="size-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              );
            })}
            <Button variant="ghost" onClick={onLogout} className="ml-4">
              <LogOut className="size-4" />
              <span className="hidden md:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
