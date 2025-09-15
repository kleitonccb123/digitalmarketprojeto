import { Search, PenTool, Target, BarChart3, Repeat } from 'lucide-react';

export const ValuePropositionSlide = () => {
  const methodSteps = [
    {
      icon: Search,
      title: 'Diagnóstico',
      description: 'Análise completa da sua presença digital atual',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PenTool,
      title: 'Conteúdo',
      description: 'Criação de material estratégico e atrativo',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Tráfego',
      description: 'Campanhas direcionadas para seu público ideal',
      color: 'from-accent to-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Conversão',
      description: 'Otimização para transformar visitantes em pacientes',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Repeat,
      title: 'Análise',
      description: 'Monitoramento e otimização contínua dos resultados',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="w-full h-full bg-background flex flex-col mobile-padding py-4 sm:py-8 lg:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="heading-lg mb-4 sm:mb-6">Método Digital Market</h1>
        <p className="text-body max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
          Nossa metodologia comprovada transforma empresas em negócios digitalmente prósperos 
          através de um processo estruturado e orientado a resultados
        </p>
        
        <div className="inline-flex items-center bg-dm-orange/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-dm-orange/20 mx-4 sm:mx-0">
          <span className="font-poppins text-dm-orange font-semibold text-xs sm:text-sm lg:text-base text-center">
            5 Etapas → Resultados Garantidos em 90 dias
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="w-full">
          {/* Desktop Flow */}
          <div className="hidden xl:flex items-center justify-center gap-6">
            {methodSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-dm-orange to-dm-blue rounded-full flex items-center justify-center mb-4 mx-auto shadow-[var(--shadow-glow)]">
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="font-poppins text-base lg:text-lg font-bold text-dm-white mb-2">
                      {step.title}
                    </h3>
                    <p className="font-inter text-xs lg:text-sm text-dm-white/70 max-w-32">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < methodSteps.length - 1 && (
                    <div className="w-8 lg:w-12 h-0.5 bg-dm-orange/30 mx-2 lg:mx-4"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Tablet & Mobile Grid */}
          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {methodSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="card-glass p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-dm-orange to-dm-blue rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-[var(--shadow-glow)]">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="font-poppins text-sm sm:text-lg lg:text-xl font-bold text-dm-white mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-dm-white/70">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA - Mobile Responsive */}
      <div className="text-center mt-6 sm:mt-8">
        <div className="bg-gradient-to-r from-dm-orange/5 to-dm-blue/5 p-4 sm:p-6 rounded-2xl border border-dm-orange/10 backdrop-blur-sm">
          <h3 className="font-poppins text-base sm:text-xl font-bold text-dm-white mb-2">
            Metodologia Testada e Aprovada
          </h3>
          <p className="font-inter text-xs sm:text-sm lg:text-base text-dm-white/70">
            Mais de 200 empresas transformadas com resultados mensuráveis e sustentáveis
          </p>
        </div>
      </div>
    </div>
  );
};