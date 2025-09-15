import { Instagram, Target, MessageCircle, BarChart, PlayCircle } from 'lucide-react';

export const ExecutionPillarsSlide = () => {
  const pillars = [
    {
      icon: Instagram,
      title: 'Social Media',
      subtitle: 'Presença estratégica e engajamento',
      features: [
        'Organização completa do perfil',
        'Grid visual harmonioso',
        'Stories e destaques otimizados',
        'Conteúdo educativo e persuasivo'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Performance (Meta Ads)',
      subtitle: 'Tráfego qualificado e conversão',
      features: [
        'Campanhas de captação',
        'Remarketing estratégico',
        'Segmentação por interesse',
        'Otimização de CPC e CPL'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Conversão (CTWA/Typebot)',
      subtitle: 'Automação e qualificação de leads',
      features: [
        'Link-in-bio inteligente',
        'Chatbot no WhatsApp',
        'Qualificação automática',
        'Agendamento facilitado'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart,
      title: 'Dados (Pixel/GA4/UTM)',
      subtitle: 'Mensuração e otimização',
      features: [
        'Configuração de pixels',
        'Google Analytics 4',
        'Rastreamento UTM',
        'Relatórios personalizados'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: PlayCircle,
      title: 'Ativação (Scripts)',
      subtitle: 'Atendimento padronizado',
      features: [
        'Scripts de qualificação',
        'Processo de agendamento',
        'Follow-up automatizado',
        'Treinamento da equipe'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Pilares de Execução</h1>
        <p className="text-body max-w-3xl mx-auto">
          5 pilares fundamentais que garantem o sucesso da sua transformação digital
        </p>
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          
          return (
            <div key={index} className="card-premium p-6 text-center hover:shadow-[var(--shadow-premium)] transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-lg font-bold text-primary mb-2">
                {pillar.title}
              </h3>
              
              <p className="font-poppins text-sm text-accent mb-4 font-medium">
                {pillar.subtitle}
              </p>
              
              <div className="space-y-2">
                {pillar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-left">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                    <span className="font-poppins text-xs text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-[20px] border border-primary/10 max-w-4xl mx-auto">
          <h3 className="font-playfair text-xl font-bold text-primary mb-2">
            Execução Integrada e Sincronizada
          </h3>
          <p className="font-poppins text-muted-foreground">
            Todos os pilares trabalham em harmonia para maximizar seus resultados e garantir um crescimento sustentável
          </p>
        </div>
      </div>
    </div>
  );
};