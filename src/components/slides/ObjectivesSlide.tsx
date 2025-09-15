import { Target, Users, TrendingUp, Calendar } from 'lucide-react';

export const ObjectivesSlide = () => {
  const objectives = [
    {
      icon: Users,
      title: 'Leads Qualificados no WhatsApp',
      description: 'Aumentar em 300% o número de leads interessados nos seus serviços',
      metric: '+300%',
      timeline: '30 dias'
    },
    {
      icon: Calendar,
      title: 'Aumento no Comparecimento',
      description: 'Reduzir faltas e aumentar a taxa de agendamentos efetivos',
      metric: '85%',
      timeline: '60 dias'
    },
    {
      icon: Target,
      title: 'Autoridade Local',
      description: 'Posicionar sua empresa como referência na região',
      metric: 'Top 3',
      timeline: '90 dias'
    },
    {
      icon: TrendingUp,
      title: 'ROI do Investimento',
      description: 'Retorno mínimo de 4x sobre o investimento em marketing',
      metric: '400%',
      timeline: '90 dias'
    }
  ];

  return (
    <div className="w-full h-full bg-background flex flex-col p-12">
      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Objetivos em 90 Dias</h1>
        <p className="text-body max-w-3xl mx-auto">
          Metas claras e mensuráveis para transformar sua empresa em um negócio próspero e reconhecido
        </p>
      </div>

      <div className="flex-1 grid md:grid-cols-2 gap-8">
        {objectives.map((objective, index) => {
          const IconComponent = objective.icon;
          
          return (
            <div key={index} className="card-premium p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                {objective.title}
              </h3>
              
              <p className="font-poppins text-muted-foreground mb-6">
                {objective.description}
              </p>
              
              <div className="flex justify-between items-center bg-secondary p-4 rounded-[16px]">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold text-accent">
                    {objective.metric}
                  </div>
                  <div className="font-poppins text-xs text-muted-foreground">Meta</div>
                </div>
                
                <div className="text-center">
                  <div className="font-poppins font-semibold text-primary">
                    {objective.timeline}
                  </div>
                  <div className="font-poppins text-xs text-muted-foreground">Prazo</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};