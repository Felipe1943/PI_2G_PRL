import { Navigation } from './Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, FileText, TrendingDown, Calendar, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Screen = 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

interface ReportsProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export function Reports({ onNavigate, onLogout }: ReportsProps) {
  const historicalData = [
    { month: 'Dez 23', co2: 5200, meta: 5500 },
    { month: 'Jan 24', co2: 4800, meta: 5300 },
    { month: 'Fev 24', co2: 4500, meta: 5100 },
    { month: 'Mar 24', co2: 4200, meta: 4900 },
    { month: 'Abr 24', co2: 3900, meta: 4700 },
    { month: 'Mai 24', co2: 3600, meta: 4500 },
    { month: 'Jun 24', co2: 3200, meta: 4300 },
  ];

  const reports = [
    {
      title: 'Relatório Mensal - Junho 2024',
      date: '30 de Junho, 2024',
      status: 'Completo',
      reduction: '-16.9%',
      size: '2.4 MB',
    },
    {
      title: 'Relatório Mensal - Maio 2024',
      date: '31 de Maio, 2024',
      status: 'Completo',
      reduction: '-7.7%',
      size: '2.3 MB',
    },
    {
      title: 'Relatório Trimestral - Q2 2024',
      date: '30 de Junho, 2024',
      status: 'Completo',
      reduction: '-13.3%',
      size: '4.8 MB',
    },
    {
      title: 'Relatório Anual - 2023',
      date: '31 de Dezembro, 2023',
      status: 'Arquivado',
      reduction: '-8.2%',
      size: '12.5 MB',
    },
  ];

  const insights = [
    {
      title: 'Eficiência Energética',
      description: 'Implemente painéis solares para reduzir consumo de energia elétrica da rede em até 40%.',
      impact: 'Alto',
      savings: '576 kg CO₂/mês',
    },
    {
      title: 'Logística Verde',
      description: 'Otimize rotas de entrega com software de roteirização para reduzir distância percorrida em 15%.',
      impact: 'Médio',
      savings: '144 kg CO₂/mês',
    },
    {
      title: 'Reciclagem de Resíduos',
      description: 'Implemente programa de separação e reciclagem de resíduos para reduzir emissões em 25%.',
      impact: 'Baixo',
      savings: '40 kg CO₂/mês',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation currentScreen="reports" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-slate-900">Relatórios e Insights</h1>
            <p className="text-slate-600">Análises detalhadas e recomendações personalizadas</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="size-4 mr-2" />
              Filtrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <FileText className="size-4 mr-2" />
              Novo Relatório
            </Button>
          </div>
        </div>

        {/* Historical Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Emissões</CardTitle>
            <CardDescription>Evolução das emissões nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={historicalData}>
                <defs>
                  <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="co2" stroke="#16a34a" fillOpacity={1} fill="url(#colorCo2)" name="Emissões (kg)" />
                <Area type="monotone" dataKey="meta" stroke="#94a3b8" fillOpacity={0} strokeDasharray="5 5" name="Meta (kg)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Reports List */}
        <Card>
          <CardHeader>
            <CardTitle>Relatórios Disponíveis</CardTitle>
            <CardDescription>Baixe relatórios detalhados em PDF ou Excel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FileText className="size-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-slate-900">{report.title}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-sm text-slate-600 flex items-center gap-1">
                          <Calendar className="size-3" />
                          {report.date}
                        </p>
                        <Badge variant={report.status === 'Completo' ? 'default' : 'secondary'}>
                          {report.status}
                        </Badge>
                        <span className="text-sm text-green-600 flex items-center gap-1">
                          <TrendingDown className="size-3" />
                          {report.reduction}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">{report.size}</span>
                    <Button size="sm" variant="outline">
                      <Download className="size-4 mr-2" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="size-4 mr-2" />
                      Excel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights and Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Insights e Recomendações</CardTitle>
            <CardDescription>Ações personalizadas para reduzir suas emissões</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-slate-900">{insight.title}</div>
                    <Badge variant={
                      insight.impact === 'Alto' ? 'default' : 
                      insight.impact === 'Médio' ? 'secondary' : 
                      'outline'
                    }>
                      Impacto {insight.impact}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">
                      💰 Economia potencial: {insight.savings}
                    </span>
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scenario Simulation */}
        <Card>
          <CardHeader>
            <CardTitle>Simulação de Cenários</CardTitle>
            <CardDescription>Projete o impacto de diferentes estratégias de redução</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm">Período</Label>
                  <Select defaultValue="6months">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">3 meses</SelectItem>
                      <SelectItem value="6months">6 meses</SelectItem>
                      <SelectItem value="1year">1 ano</SelectItem>
                      <SelectItem value="2years">2 anos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Meta de Redução</Label>
                  <Select defaultValue="20">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10% de redução</SelectItem>
                      <SelectItem value="20">20% de redução</SelectItem>
                      <SelectItem value="30">30% de redução</SelectItem>
                      <SelectItem value="40">40% de redução</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Estratégia</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as áreas</SelectItem>
                      <SelectItem value="energy">Foco em Energia</SelectItem>
                      <SelectItem value="transport">Foco em Transporte</SelectItem>
                      <SelectItem value="production">Foco em Produção</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Gerar Simulação
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}
