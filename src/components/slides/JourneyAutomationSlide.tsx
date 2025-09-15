import { Link, Bot, CheckSquare, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export const JourneyAutomationSlide = () => {
  const journeySteps = [
    {
      icon: Link,
      title: 'Linkhub Estratégico',
      description: 'Visitante clica no link da bio',
      details: 'Link otimizado que direciona para múltiplas opções de conversão'
    },
    {
      icon: Bot,
      title: 'Typebot Inteligente',
      description: 'Chatbot qualifica o interesse',
      details: 'Automação que identifica necessidades e urgência do paciente'
    },
    {
      icon: CheckSquare,
      title: 'Qualificação Automática',
      description: 'Sistema filtra leads qualificados',
      details: 'Apenas interessados reais chegam até sua equipe'
    },
    {
      icon: Calendar,
      title: 'Agendamento Direto',
      description: 'Lead agenda consulta na hora',
      details: 'Integração com agenda da empresa para agendamento imediato'
    }
  ];

  const automationFeatures = [
    {
      title: 'Scripts de Atendimento',
      description: 'Roteiros padronizados para cada situação',
      items: ['Primeiro contato', 'Qualificação de interesse', 'Objeções comuns', 'Fechamento do agendamento']
    },
    {
      title: 'Qualificação Inteligente',
      description: 'Perguntas estratégicas para filtrar leads',
      items: ['Identificação da necessidade', 'Orçamento disponível', 'Urgência do procedimento', 'Localização geográfica']
    },
    {
      title: 'Follow-up Automatizado',
      description: 'Sequência de mensagens programadas',
      items: ['Confirmação de agendamento', 'Lembretes automáticos', 'Pós-consulta', 'Reativação de leads']
    }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Jornada & Automação</h1>
        <p className="text-body max-w-3xl mx-auto">
          Sistema automatizado que conduz o paciente da descoberta ao agendamento, 
          otimizando conversões e reduzindo trabalho manual
        </p>
      </div>

      {/* Customer Journey */}
      <div className="mb-8">
        <h2 className="heading-md mb-6 text-center">Jornada do Paciente</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {journeySteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className="text-center lg:text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="max-w-48">
                    <h3 className="font-playfair text-lg font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-sm font-medium text-accent mb-2">
                      {step.description}
                    </p>
                    <p className="font-poppins text-xs text-muted-foreground">
                      {step.details}
                    </p>
                  </div>
                </div>
                
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:flex items-center mx-6">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Automation Features */}
      <div className="grid lg:grid-cols-3 gap-6">
        {automationFeatures.map((feature, index) => (
          <div key={index} className="card-premium p-6">
            <h3 className="font-playfair text-lg font-bold text-primary mb-3">
              {feature.title}
            </h3>
            
            <p className="font-poppins text-sm text-muted-foreground mb-4">
              {feature.description}
            </p>
            
            <div className="space-y-2">
              {feature.items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                  <span className="font-poppins text-xs text-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8 bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-[20px] border border-accent/20">
        <div className="text-center">
          <h3 className="font-playfair text-xl font-bold text-primary mb-4">
            Resultados da Automação
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/50 p-4 rounded-[12px]">
              <div className="font-playfair text-2xl font-bold text-accent mb-1">85%</div>
              <div className="font-poppins text-sm text-primary">Redução no tempo de resposta</div>
            </div>
            <div className="bg-white/50 p-4 rounded-[12px]">
              <div className="font-playfair text-2xl font-bold text-accent mb-1">60%</div>
              <div className="font-poppins text-sm text-primary">Aumento na taxa de conversão</div>
            </div>
            <div className="bg-white/50 p-4 rounded-[12px]">
              <div className="font-playfair text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="font-poppins text-sm text-primary">Atendimento automatizado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};