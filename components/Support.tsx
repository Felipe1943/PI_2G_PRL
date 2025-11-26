import { Navigation } from './Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { BookOpen, MessageCircle, Mail, Phone, Lightbulb, Leaf, Droplet, Wind, Recycle } from 'lucide-react';

type Screen = 'dashboard' | 'calculator' | 'reports' | 'profile' | 'support';

interface SupportProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export function Support({ onNavigate, onLogout }: SupportProps) {
  const faqs = [
    {
      question: 'Como é calculada a pegada de carbono?',
      answer: 'A pegada de carbono é calculada com base em fatores de emissão específicos para cada atividade, como consumo de energia, transporte, produção e gestão de resíduos. Utilizamos metodologias internacionalmente reconhecidas como GHG Protocol e ISO 14064.',
    },
    {
      question: 'Posso importar dados de planilhas?',
      answer: 'Sim! Você pode importar planilhas Excel ou CSV diretamente na calculadora de emissões. Também oferecemos integração com Google Sheets e sistemas ERP para automatizar a coleta de dados.',
    },
    {
      question: 'Como defino metas realistas de redução?',
      answer: 'Recomendamos começar analisando seu histórico de emissões e identificando as principais fontes. A partir daí, defina metas progressivas (ex: 10-20% no primeiro ano) e priorize ações de alto impacto sugeridas no sistema.',
    },
    {
      question: 'Os relatórios são adequados para auditorias?',
      answer: 'Sim, nossos relatórios seguem padrões internacionais e podem ser utilizados em auditorias ambientais, certificações de sustentabilidade e relatórios de ESG. Todos os dados são rastreáveis e verificáveis.',
    },
    {
      question: 'Como funcionam as recomendações personalizadas?',
      answer: 'Nosso sistema analisa seus dados de emissões, compara com benchmarks do setor e identifica oportunidades de redução. As recomendações levam em conta o custo-benefício, facilidade de implementação e potencial de redução.',
    },
  ];

  const resources = [
    {
      icon: Leaf,
      title: 'Compensação de Carbono',
      description: 'Aprenda sobre projetos de compensação e como neutralizar suas emissões residuais através de reflorestamento e energia limpa.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Droplet,
      title: 'Gestão de Água',
      description: 'Técnicas para reduzir consumo de água e minimizar emissões associadas ao tratamento e distribuição de água.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Wind,
      title: 'Energia Renovável',
      description: 'Guia completo sobre transição para fontes renováveis: solar, eólica, biomassa e suas vantagens econômicas.',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
    {
      icon: Recycle,
      title: 'Economia Circular',
      description: 'Implemente práticas de economia circular para reduzir resíduos e emissões em toda a cadeia produtiva.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];
  
