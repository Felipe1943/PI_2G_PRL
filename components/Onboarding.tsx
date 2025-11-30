import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { BarChart3, Calculator, FileText, Settings } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: BarChart3,
      title: 'Dashboard em Tempo Real',
      description: 'Visualize suas emissões de carbono com gráficos interativos e indicadores de desempenho em tempo real.',
    },
    {
      icon: Calculator,
      title: 'Cálculo de Emissões',
      description: 'Insira dados operacionais e calcule automaticamente suas emissões de CO₂, CH₄, N₂O e outros gases.',
    },
    {
      icon: FileText,
      title: 'Relatórios e Insights',
      description: 'Gere relatórios personalizados e receba recomendações práticas para reduzir sua pegada de carbono.',
    },
    {
      icon: Settings,
      title: 'Defina Suas Metas',
      description: 'Configure metas de redução e acompanhe seu progresso com alertas e notificações personalizadas.',
    },
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardContent className="p-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-green-100 p-6 rounded-full">
                <Icon className="size-12 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-green-900">{currentStep.title}</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              {currentStep.description}
            </p>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 pt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === step ? 'bg-green-600 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3 justify-center pt-4">
              {step > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Anterior
                </Button>
              )}
              {step < steps.length - 1 ? (
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setStep(step + 1)}
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={onComplete}
                >
                  Começar
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
