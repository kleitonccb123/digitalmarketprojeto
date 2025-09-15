import { Star, Diamond, Zap, Crown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InvestmentPlansSlide = () => {
  const plans = [
    {
      id: 'start',
      name: 'Plano Start',
      icon: Star,
      subtitle: 'LP + Organização de Feed',
      originalPrice: 'R$ 4.997',
      currentPrice: 'R$ 2.797',
      savings: 'R$ 2.503',
      highlight: false,
      services: [
        { name: 'Landing Page (LP)', price: 'R$ 3.500', included: true },
        { name: 'Organização de Feed (bio, destaques, grid e 9 templates base)', price: 'R$ 1.800', included: true },
      ],
      totalSeparate: 'R$ 5.300',
    },
    {
      id: 'one',
      name: 'Plano One',
      icon: Diamond,
      subtitle: 'Implementação completa de base',
      originalPrice: 'R$ 7.997',
      currentPrice: 'R$ 5.697',
      savings: 'R$ 5.753',
      highlight: false,
      services: [
        { name: 'Página de apresentação (LP)', price: 'R$ 3.500', included: true },
        { name: 'Linkhub com Typebot', price: 'R$ 1.200', included: true },
        { name: 'Setup Pixel, GA4, UTMs e eventos WhatsApp', price: 'R$ 1.200', included: true },
        { name: 'Campanhas Meta Ads (captação + reconhecimento)', price: 'R$ 2.000', included: true },
        { name: 'Script e checklist de atendimento', price: 'R$ 600', included: true },
        { name: '5 cards profissionais (design)', price: 'R$ 750', included: true },
        { name: '10 roteiros de criativos', price: 'R$ 1.000', included: true },
        { name: '2 meses de acompanhamento geral', price: 'R$ 1.200', included: true },
      ],
      totalSeparate: 'R$ 11.450',
    },
    {
      id: 'growth',
      name: 'Plano Growth Pro',
      icon: Zap,
      subtitle: 'Performance + estratégia',
      originalPrice: 'R$ 10.797',
      currentPrice: 'R$ 7.997',
      savings: 'R$ 13.103',
      highlight: true,
      services: [
        { name: 'Tudo do Plano One', price: '—', included: true },
        { name: 'Upgrade de cards para 24 unidades (12/mês x 2)', price: '+R$ 2.850', included: true },
        { name: 'Upgrade de roteiros para 24 unidades', price: '+R$ 1.400', included: true },
        { name: 'Acompanhamento estratégico de tráfego e social media (2 meses)', price: 'R$ 4.000', included: true },
        { name: 'Reuniões estratégicas (2/mês x 2 = 4)', price: 'R$ 1.400', included: true },
      ],
      totalSeparate: 'R$ 21.100',
    },
    {
      id: 'max',
      name: 'Plano Max',
      icon: Crown,
      subtitle: 'O mais completo (marca + crescimento)',
      originalPrice: 'R$ 15.997',
      currentPrice: 'R$ 11.697',
      savings: 'R$ 39.403',
      highlight: false,
      services: [
        { name: 'Tudo do Growth Pro', price: '—', included: true },
        { name: 'Site completo (SEO local)', price: 'R$ 6.000', included: true },
        { name: 'Funil com quiz, e-book e automações WhatsApp', price: 'R$ 4.000', included: true },
        { name: 'Acompanhamento de fortalecimento de marca (2 meses)', price: 'R$ 3.000', included: true },
        { name: '10 conteúdos/mês por 2 meses (20 conteúdos)', price: 'R$ 3.600', included: true },
        { name: 'Dashboard de métricas', price: 'R$ 2.000', included: true },
        { name: '10 vídeos VSL (roteiro + edição leve)', price: 'R$ 5.000', included: true },
        { name: 'Aumento para 30 cards (+6 adicionais)', price: 'R$ 900', included: true },
        { name: 'Aumento para 30 roteiros (+6 adicionais)', price: 'R$ 600', included: true },
        { name: 'Reunião quinzenal (4 no período)', price: 'R$ 1.400', included: true },
        { name: 'Design de destaques + guias visuais', price: 'R$ 1.000', included: true },
        { name: 'Criação de dashboard próprio, sob medida', price: 'R$ 2.500', included: true },
      ],
      totalSeparate: 'R$ 51.100',
    },
  ];

  return (
    <div className="w-full h-full bg-background mobile-padding py-4 sm:py-8 overflow-y-auto">
      {/* Header - Mobile Responsive */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="heading-lg mb-3 sm:mb-4">Planos de Investimento</h1>
        <p className="text-body max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0">
          Escolha o plano ideal para acelerar o crescimento da sua empresa. 
          Todos incluem economia significativa versus contratação separada.
        </p>
      </div>

      {/* Plans Grid - Mobile First */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const PlanIcon = plan.icon;
          
          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 ${
                plan.highlight
                  ? 'border-dm-orange bg-gradient-to-br from-dm-orange/5 to-dm-blue/10 shadow-[var(--shadow-glow)]'
                  : 'border-white/10 bg-dm-navy/50 hover:border-dm-orange/50 backdrop-blur-sm'
              }`}
            >
              {/* Highlight Badge - Mobile Responsive */}
              {plan.highlight && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-dm-orange text-dm-black px-3 sm:px-4 py-1 rounded-full text-xs font-semibold">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header - Mobile Responsive */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                    plan.highlight ? 'bg-dm-orange text-dm-black' : 'bg-dm-blue text-dm-white'
                  }`}>
                    <PlanIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-dm-white mb-1">{plan.name}</h3>
                <p className="font-inter text-xs sm:text-sm text-dm-white/70 mb-3 sm:mb-4">{plan.subtitle}</p>
                
                {/* Price - Mobile Responsive */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-inter text-xs sm:text-sm text-dm-white/60 line-through">
                      {plan.originalPrice}
                    </span>
                    <span className="font-poppins text-xl sm:text-2xl font-bold text-dm-orange">
                      {plan.currentPrice}
                    </span>
                  </div>
                  <div className="bg-green-900/30 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-green-500/20">
                    Economia: {plan.savings}
                  </div>
                </div>
              </div>

              {/* Services List - Mobile Responsive */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 max-h-40 sm:max-h-48 overflow-y-auto">
                {plan.services.slice(0, 8).map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-dm-orange flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="font-inter text-xs sm:text-sm text-dm-white font-medium block leading-tight">
                        {service.name}
                      </span>
                      {service.price && service.price !== '—' && (
                        <span className="font-inter text-xs text-dm-blue block mt-0.5">
                          {service.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Show remaining services count if more than 8 */}
                {plan.services.length > 8 && (
                  <div className="text-center pt-2">
                    <span className="font-inter text-xs text-dm-orange">
                      +{plan.services.length - 8} itens adicionais
                    </span>
                  </div>
                )}
              </div>

              {/* Financial Summary - Mobile Responsive */}
              <div className="border-t border-white/10 pt-3 sm:pt-4">
                <div className="text-center space-y-1">
                  <p className="font-inter text-xs text-dm-white/60">
                    Total separado: <span className="font-semibold text-dm-white/80">{plan.totalSeparate}</span>
                  </p>
                  <p className="font-inter text-xs sm:text-sm text-dm-orange font-semibold">
                    Economia vs separado: {plan.savings}
                  </p>
                </div>
                
                <Button 
                  className="w-full mt-3 sm:mt-4 btn-primary text-xs sm:text-sm"
                  size="sm"
                >
                  Escolher Plano
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA - Mobile Responsive */}
      <div className="text-center mt-8 sm:mt-12">
        <div className="bg-gradient-to-r from-dm-orange/5 to-dm-blue/5 p-4 sm:p-8 rounded-2xl border border-dm-orange/20 backdrop-blur-sm max-w-4xl mx-auto">
          <h3 className="font-poppins text-lg sm:text-2xl font-bold text-dm-white mb-3 sm:mb-4">
            Garantia de Resultados
          </h3>
          <p className="font-inter text-sm sm:text-base text-dm-white/80 mb-4 sm:mb-6">
            Se não conseguirmos aumentar seus leads em 90 dias, devolvemos 100% do seu investimento.
          </p>
          <Button className="btn-primary text-sm sm:text-base px-6 sm:px-8">
            Falar com Consultor
          </Button>
        </div>
      </div>
    </div>
  );
};