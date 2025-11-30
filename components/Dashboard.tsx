import { Navigation } from './Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { TrendingDown, TrendingUp, Leaf, Zap, Truck, Factory } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Progress } from './ui/progress';

type Screen = 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export function Dashboard({ onNavigate, onLogout }: DashboardProps) {
  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', co2: 4500, meta: 5000 },
    { month: 'Fev', co2: 4200, meta: 4800 },
    { month: 'Mar', co2: 3900, meta: 4600 },
    { month: 'Abr', co2: 3700, meta: 4400 },
    { month: 'Mai', co2: 3400, meta: 4200 },
    { month: 'Jun', co2: 3200, meta: 4000 },
  ];

  const emissionsBySource = [
    { name: 'Energia', value: 45, color: '#f59e0b' },
    { name: 'Transporte', value: 30, color: '#3b82f6' },
    { name: 'Produção', value: 20, color: '#8b5cf6' },
    { name: 'Resíduos', value: 5, color: '#10b981' },
  ];

  const categoryData = [
    { category: 'Energia', atual: 1440, anterior: 1800 },
    { category: 'Transporte', atual: 960, anterior: 1100 },
    { category: 'Produção', atual: 640, anterior: 750 },
    { category: 'Resíduos', atual: 160, anterior: 200 },
  ];

  const currentTotal = 3200;
  const previousTotal = 3850;
  const reductionPercent = ((previousTotal - currentTotal) / previousTotal * 100).toFixed(1);
  const goalTotal = 4000;
  const goalProgress = (currentTotal / goalTotal) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation currentScreen="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-slate-900">Dashboard de Emissões</h1>
          <p className="text-slate-600">Monitoramento em tempo real da sua pegada de carbono</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total de Emissões</CardTitle>
              <Leaf className="size-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-slate-900">{currentTotal.toLocaleString()} kg CO₂</div>
              <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingDown className="size-4" />
                {reductionPercent}% vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Energia</CardTitle>
              <Zap className="size-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-slate-900">1,440 kg CO₂</div>
              <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingDown className="size-4" />
                20% de redução
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Transporte</CardTitle>
              <Truck className="size-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-slate-900">960 kg CO₂</div>
              <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingDown className="size-4" />
                12.7% de redução
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Produção</CardTitle>
              <Factory className="size-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-slate-900">640 kg CO₂</div>
              <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingDown className="size-4" />
                14.7% de redução
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Meta Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progresso da Meta Mensal</CardTitle>
            <CardDescription>Meta: {goalTotal.toLocaleString()} kg CO₂ • Atual: {currentTotal.toLocaleString()} kg CO₂</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={goalProgress} className="h-3" />
            <p className="text-sm text-slate-600 mt-2">
              {goalProgress < 100 
                ? `Excelente! Você está ${(100 - goalProgress).toFixed(0)}% abaixo da meta.`
                : `Atenção! Você ultrapassou a meta em ${(goalProgress - 100).toFixed(0)}%.`
              }
            </p>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Evolução Mensal de Emissões</CardTitle>
              <CardDescription>Comparativo com meta estabelecida</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="co2" stroke="#16a34a" strokeWidth={2} name="Emissões (kg)" />
                  <Line type="monotone" dataKey="meta" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="Meta (kg)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Emissões por Fonte</CardTitle>
              <CardDescription>Distribuição percentual</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emissionsBySource}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emissionsBySource.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Comparativo por Categoria</CardTitle>
              <CardDescription>Mês atual vs mês anterior (kg CO₂)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="anterior" fill="#94a3b8" name="Mês Anterior" />
                  <Bar dataKey="atual" fill="#16a34a" name="Mês Atual" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recomendações de Redução</CardTitle>
            <CardDescription>Ações sugeridas para melhorar seu desempenho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <Zap className="size-5 text-green-600 mt-0.5" />
                <div>
                  <div className="text-slate-900">Otimize o consumo energético</div>
                  <p className="text-sm text-slate-600">Potencial de redução: 15% • Economia: 216 kg CO₂/mês</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Truck className="size-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="text-slate-900">Otimize rotas de transporte</div>
                  <p className="text-sm text-slate-600">Potencial de redução: 10% • Economia: 96 kg CO₂/mês</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Factory className="size-5 text-purple-600 mt-0.5" />
                <div>
                  <div className="text-slate-900">Modernize equipamentos de produção</div>
                  <p className="text-sm text-slate-600">Potencial de redução: 12% • Economia: 77 kg CO₂/mês</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
