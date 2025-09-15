import { FileText, Calendar, Video, Image, Lightbulb, Palette } from 'lucide-react';

export const ContentDeliverySlide = () => {
  const deliverables = [
    {
      icon: Palette,
      title: 'Templates Personalizados',
      description: 'Designs únicos para sua marca',
      items: ['9 templates base (Start)', '24 templates (Growth/Max)', 'Identidade visual consistente', 'Adaptação à sua especialidade']
    },
    {
      icon: Calendar,
      title: 'Pauta Estratégica',
      description: 'Conteúdo planejado e relevante',
      items: ['Calendário editorial mensal', 'Datas comemorativas', 'Temas educativos', 'Campanhas promocionais']
    },
    {
      icon: Video,
      title: 'Roteiros de Criativos',
      description: 'Scripts para vídeos e posts',
      items: ['10 roteiros (One)', '24 roteiros (Growth)', '30 roteiros (Max)', 'Hooks e CTAs otimizados']
    },
    {
      icon: FileText,
      title: 'Conteúdo Pronto',
      description: 'Material educativo especializado',
      items: ['Posts informativos', 'Stories interativos', 'Carrosséis educativos', 'Depoimentos estruturados']
    }
  ];

  const contentTypes = [
    { type: 'Posts Educativos', percentage: '40%', color: 'bg-blue-500' },
    { type: 'Conteúdo Promocional', percentage: '25%', color: 'bg-accent' },
    { type: 'Depoimentos/Cases', percentage: '20%', color: 'bg-green-500' },
    { type: 'Bastidores/Humanização', percentage: '15%', color: 'bg-purple-500' }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Entrega de Conteúdo</h1>
        <p className="text-body max-w-3xl mx-auto">
          Conteúdo estratégico e profissional para posicionar sua empresa como autoridade no mercado
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Deliverables */}
        <div className="space-y-6">
          <h2 className="heading-md mb-6">O que você recebe</h2>
          
          {deliverables.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div key={index} className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    
                    <div className="space-y-1">
                      {item.items.map((subItem, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          <span className="font-poppins text-xs text-primary">
                            {subItem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Mix */}
        <div>
          <h2 className="heading-md mb-6">Mix de Conteúdo Estratégico</h2>
          
          <div className="card-premium p-6 mb-6">
            <div className="space-y-4">
              {contentTypes.map((content, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-poppins text-sm font-medium text-primary">
                      {content.type}
                    </span>
                    <span className="font-poppins text-sm font-bold text-accent">
                      {content.percentage}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${content.color}`}
                      style={{ width: content.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-[20px] border border-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h3 className="font-playfair text-lg font-bold text-primary">
                Estratégia de Conteúdo
              </h3>
            </div>
            <p className="font-poppins text-sm text-muted-foreground mb-4">
              Nosso mix de conteúdo é baseado na regra 80/20: 80% valor educativo e 20% promocional, 
              garantindo engajamento e autoridade.
            </p>
            
            <div className="bg-white/50 p-4 rounded-[12px]">
              <h4 className="font-poppins font-semibold text-primary text-sm mb-2">
                Benefícios desta abordagem:
              </h4>
              <ul className="space-y-1">
                <li className="font-poppins text-xs text-muted-foreground">• Maior engajamento orgânico</li>
                <li className="font-poppins text-xs text-muted-foreground">• Construção de autoridade</li>
                <li className="font-poppins text-xs text-muted-foreground">• Educação do mercado</li>
                <li className="font-poppins text-xs text-muted-foreground">• Aumento da confiança</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};