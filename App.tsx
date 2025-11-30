import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { EmissionsCalculator } from './components/EmissionsCalculator';
import { Reports } from './components/Reports';
import { Profile } from './components/Profile';
import { Support } from './components/Support';
import { Onboarding } from './components/Onboarding';

type Screen = 'login' | 'onboarding' | 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
    if (showOnboarding) {
      setCurrentScreen('onboarding');
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (currentScreen === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={setCurrentScreen} onLogout={handleLogout} />
      )}
      {currentScreen === 'calculator' && (
        <EmissionsCalculator onNavigate={setCurrentScreen} onLogout={handleLogout} />
      )}
      {currentScreen === 'reports' && (
        <Reports onNavigate={setCurrentScreen} onLogout={handleLogout} />
      )}
      {currentScreen === 'profile' && (
        <Profile onNavigate={setCurrentScreen} onLogout={handleLogout} />
      )}
      {currentScreen === 'support' && (
        <Support onNavigate={setCurrentScreen} onLogout={handleLogout} />
      )}
    </div>
  );
}
