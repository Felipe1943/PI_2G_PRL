import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Leaf } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };
 return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="bg-green-600 p-3 rounded-xl">
              <Leaf className="size-8 text-white" />
            </div>
            <span className="text-green-900">CarbonTrack</span>
          </div>
          <h1 className="text-green-900">
            Monitore e Reduza suas Emissões de Carbono
          </h1>
          <p className="text-slate-600">
            Plataforma completa para empresas e propriedades rurais gerenciarem sua pegada de carbono,
            gerar relatórios e receber recomendações personalizadas de sustentabilidade.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-green-600">Dashboard</div>
              <p className="text-slate-600 text-sm">em tempo real</p>
            </div>
            <div className="text-center">
              <div className="text-green-600">Relatórios</div>
              <p className="text-slate-600 text-sm">automatizados</p>
            </div>
            <div className="text-center">
              <div className="text-green-600">Insights</div>
              <p className="text-slate-600 text-sm">personalizados</p>
            </div>
          </div>
        </div>
