import { AlertCircle, Search, Target, TrendingUp } from 'lucide-react';

export const DiagnosisSlide = () => {
  const currentIssues = [
    { icon: Search, title: 'Baixa Visibilidade Online', description: 'Sua empresa não aparece quando clientes pesquisam por seus serviços' },
    { icon: AlertCircle, title: 'Presença Desorganizada', description: 'Bio, destaques e grid do Instagram sem estratégia clara' },
    { icon: Target, title: 'Sem Direcionamento', description: 'Link na bio que não converte visitantes em agendamentos' },
    { icon: TrendingUp, title: 'Anúncios Ineficazes', description: 'Investimento em tráfego pago sem retorno adequado' },
  ];

  const opportunities = [
    { metric: '85%', label: 'dos clientes pesquisam online antes de escolher uma empresa' },
    { metric: '3x', label: 'mais conversões com presença digital organizada' },
    { metric: '60%', label: 'mais agendamentos com link-in-bio estratégico' },
    { metric: '400%', label: 'ROI médio com campanhas bem estruturadas' },
  ];

  return (
    <div className="w-full h-full bg-background flex flex-col p-4 sm:p-8 lg:p-12">
      {/* Header - Mobile Responsive */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dm-white leading-tight mb-4 font-poppins">
          Diagnóstico da Sua Presença Atual
        </h1>
        <p className="text-body max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
          Identificamos os principais pontos de melhoria e as oportunidades 
          para acelerar o crescimento da sua empresa
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
        {/* Current Issues - Mobile First */}
        <div className="order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-6 sm:mb-8 font-poppins">
            Situação Atual
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {currentIssues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-red-900/20 rounded-2xl border border-red-500/20 backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <issue.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-dm-white mb-2 text-sm sm:text-base">{issue.title}</h3>
                  <p className="font-inter text-xs sm:text-sm text-dm-white/70">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities - Mobile First */}
        <div className="order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dm-orange mb-6 sm:mb-8 font-poppins">
            Oportunidades
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {opportunities.map((opp, index) => (
              <div key={index} className="card-accent p-4 sm:p-6">
                <div className="text-center">
                  <div className="font-poppins text-3xl sm:text-4xl font-bold text-dm-orange mb-2">{opp.metric}</div>
                  <p className="font-inter text-xs sm:text-sm text-dm-white font-medium">{opp.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action - Mobile Responsive */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-dm-orange/10 to-dm-blue/10 rounded-2xl border border-dm-orange/20 backdrop-blur-sm">
            <h3 className="font-poppins font-semibold text-dm-white mb-2 text-sm sm:text-base">
              Potencial de Crescimento Identificado
            </h3>
            <p className="font-inter text-xs sm:text-sm text-dm-white/70 mb-4">
              Com a estratégia certa, sua empresa pode aumentar significativamente 
              o número de agendamentos e a receita mensal.
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-dm-orange/20 px-3 sm:px-4 py-2 rounded-full">
                <span className="font-poppins text-dm-orange font-semibold text-xs sm:text-sm">
                  Vamos implementar juntos?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};