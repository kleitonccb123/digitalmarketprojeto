import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';

export const RoadmapSlide = () => {
  const phases = [
    {
      period: '0-30 dias',
      title: 'Fundação & Setup',
      color: 'from-blue-500 to-blue-600',
      status: 'primary',
      tasks: [
        'Análise completa da presença atual',
        'Configuração de pixels e GA4',
        'Criação da landing page',
        'Organização do perfil Instagram',
        'Setup do Linkhub com Typebot',
        'Primeiras campanhas de teste',
        'Treinamento da equipe de atendimento'
      ]
    },
    {
      period: '30-60 dias',
      title: 'Otimização & Conteúdo',
      color: 'from-accent to-cyan-600',
      status: 'accent',
      tasks: [
        'Análise de performance das campanhas',
        'Otimização de públicos-alvo',
        'Criação de conteúdo estratégico',
        'Implementação de automações',
        'Ajustes no funil de conversão',
        'Expansão das campanhas',
        'Relatórios e insights detalhados'
      ]
    },
    {
      period: '60-90 dias',
      title: 'Escala & Crescimento',
      color: 'from-green-500 to-green-600',
      status: 'success',
      tasks: [
        'Escalonamento das campanhas',
        'Implementação de remarketing',
        'Otimização avançada de conversões',
        'Análise de ROI e ajustes',
        'Planejamento de estratégias avançadas',
        'Preparação para crescimento sustentável',
        'Relatório final de resultados'
      ]
    }
  ];

  const deliverables = [
    { week: 'Semana 1', items: ['Análise inicial', 'Setup técnico', 'Configuração de pixels'] },
    { week: 'Semana 2', items: ['Landing page', 'Organização do Instagram', 'Linkhub'] },
    { week: 'Semana 3', items: ['Primeiras campanhas', 'Scripts de atendimento', 'Treinamento'] },
    { week: 'Semana 4', items: ['Otimização inicial', 'Relatório mês 1', 'Planejamento mês 2'] },
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Roadmap de Implementação</h1>
        <p className="text-body max-w-3xl mx-auto">
          Cronograma detalhado de 90 dias para transformar sua empresa em uma referência digital
        </p>
      </div>

      {/* Main Timeline */}
      <div className="space-y-8 mb-8">
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < phases.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-32 bg-border"></div>
            )}
            
            <div className="flex items-start gap-6">
              {/* Timeline Dot */}
              <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
                <Calendar className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="card-premium p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-playfair text-xl font-bold text-primary">
                      {phase.title}
                    </h3>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${phase.color} text-white`}>
                      {phase.period}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="font-poppins text-sm text-muted-foreground">
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* First Month Breakdown */}
        <div>
          <h2 className="heading-md mb-6">Detalhamento do Primeiro Mês</h2>
          
          <div className="space-y-4">
            {deliverables.map((week, index) => (
              <div key={index} className="card-premium p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="font-poppins text-sm font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-primary">
                    {week.week}
                  </h4>
                </div>
                
                <div className="space-y-1">
                  {week.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="font-poppins text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div>
          <h2 className="heading-md mb-6">Marcos de Sucesso</h2>
          
          <div className="space-y-4">
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <h3 className="font-playfair text-lg font-bold text-primary">
                  30 dias
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="font-poppins text-sm text-muted-foreground">• Presença digital organizada</li>
                <li className="font-poppins text-sm text-muted-foreground">• Primeiros leads qualificados</li>
                <li className="font-poppins text-sm text-muted-foreground">• Campanhas ativas e otimizadas</li>
              </ul>
            </div>
            
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="font-playfair text-lg font-bold text-primary">
                  60 dias
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="font-poppins text-sm text-muted-foreground">• 100+ leads qualificados</li>
                <li className="font-poppins text-sm text-muted-foreground">• ROI positivo consistente</li>
                <li className="font-poppins text-sm text-muted-foreground">• Autoridade local estabelecida</li>
              </ul>
            </div>
            
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-green-500" />
                <h3 className="font-playfair text-lg font-bold text-primary">
                  90 dias
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="font-poppins text-sm text-muted-foreground">• 300% aumento em agendamentos</li>
                <li className="font-poppins text-sm text-muted-foreground">• 400% ROI do investimento</li>
                <li className="font-poppins text-sm text-muted-foreground">• Referência no mercado local</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};