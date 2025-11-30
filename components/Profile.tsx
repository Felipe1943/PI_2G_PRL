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
export function Profile({ onNavigate, onLogout }: ProfileProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation currentScreen="profile" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-slate-900">Perfil da Empresa</h1>
          <p className="text-slate-600">Gerencie as informações da sua operação e configure suas metas</p>
        </div>
 {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="size-5" />
              Informações da Empresa
            </CardTitle>
            <CardDescription>Dados básicos da sua organização</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input id="company-name" defaultValue="Fazenda Verde Sustentável" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-type">Tipo de Operação</Label>
                <Select defaultValue="agriculture">
                  <SelectTrigger id="company-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agriculture">Agricultura</SelectItem>
                    <SelectItem value="livestock">Pecuária</SelectItem>
                    <SelectItem value="industry">Industrial</SelectItem>
                    <SelectItem value="services">Serviços</SelectItem>
                    <SelectItem value="mixed">Misto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" defaultValue="Rodovia BR-040, KM 120" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" defaultValue="Cristalina" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Select defaultValue="GO">
                  <SelectTrigger id="state">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GO">Goiás</SelectItem>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="PR">Paraná</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Área (hectares)</Label>
                <Input id="area" type="number" defaultValue="2500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Número de Funcionários</Label>
              <Input id="employees" type="number" defaultValue="45" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição da Operação</Label>
              <Textarea 
                id="description" 
                rows={3}
                defaultValue="Produção de grãos (soja, milho) com foco em práticas sustentáveis e agricultura de precisão."
              />
            </div>
          </CardContent>
        </Card>

        {/* Goals and Targets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="size-5" />
              Metas de Redução
            </CardTitle>
            <CardDescription>Defina suas metas de sustentabilidade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-emissions">Emissões Atuais (kg CO₂/mês)</Label>
                <Input id="current-emissions" type="number" defaultValue="3200" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-emissions">Meta Mensal (kg CO₂/mês)</Label>
                <Input id="target-emissions" type="number" defaultValue="4000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reduction-goal">Meta de Redução Anual</Label>
              <Select defaultValue="30">
                <SelectTrigger id="reduction-goal">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10% de redução</SelectItem>
                  <SelectItem value="20">20% de redução</SelectItem>
                  <SelectItem value="30">30% de redução</SelectItem>
                  <SelectItem value="40">40% de redução</SelectItem>
                  <SelectItem value="50">50% de redução</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="target-year">Ano Alvo</Label>
              <Select defaultValue="2025">
                <SelectTrigger id="target-year">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2030">2030</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-900">
                <span>🎯 Com uma redução de 30% até 2025, você economizará aproximadamente 13.440 kg CO₂ e contribuirá significativamente para o meio ambiente.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="size-5" />
              Notificações e Alertas
            </CardTitle>
            <CardDescription>Configure como você deseja receber atualizações</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de Meta</Label>
                <p className="text-sm text-slate-600">Receba notificações quando ultrapassar sua meta mensal</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Relatórios Automáticos</Label>
                <p className="text-sm text-slate-600">Receba relatórios mensais por email</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Recomendações</Label>
                <p className="text-sm text-slate-600">Receba insights e dicas de sustentabilidade</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Atualizações do Sistema</Label>
                <p className="text-sm text-slate-600">Notificações sobre novas funcionalidades</p>
              </div>
              <Switch />
            </div>

            <div className="pt-4">
              <Label htmlFor="email">Email para Notificações</Label>
              <Input id="email" type="email" defaultValue="contato@fazendaverde.com.br" className="mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* Integration */}
        <Card>
          <CardHeader>
            <CardTitle>Integrações</CardTitle>
            <CardDescription>Conecte sistemas externos para automatizar a coleta de dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="text-slate-900">Sistema ERP</div>
                <p className="text-sm text-slate-600">Conecte seu ERP para importar dados automaticamente</p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="text-slate-900">Sensores IoT</div>
                <p className="text-sm text-slate-600">Integre sensores para monitoramento em tempo real</p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="text-slate-900">Google Sheets</div>
                <p className="text-sm text-slate-600">Importe planilhas do Google Sheets</p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancelar</Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Save className="size-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
}
