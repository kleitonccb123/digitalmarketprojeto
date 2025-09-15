import { Calendar, MessageCircle, Star, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ClosingSlide = () => {
  const finalBenefits = [
    {
      icon: TrendingUp,
      title: '400% ROI',
      description: 'Retorno garantido sobre o investimento'
    },
    {
      icon: Users,
      title: '300+ Leads',
      description: 'Qualificados em 90 dias'
    },
    {
      icon: Target,
      title: 'Autoridade Local',
      description: 'Referência na sua região'
    },
    {
      icon: Star,
      title: 'Crescimento Sustentável',
      description: 'Base sólida para o futuro'
    }
  ];

  const nextActions = [
    {
      icon: MessageCircle,
      title: 'Fale Conosco',
      description: 'Entre em contato para tirar dúvidas',
      action: 'WhatsApp: (11) 99999-9999'
    },
    {
      icon: Calendar,
      title: 'Agende o Kick-off',
      description: 'Vamos começar sua transformação',
      action: 'Calendário disponível'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-primary via-primary to-accent flex flex-col justify-center items-center text-center px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 border border-accent rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Main CTA */}
        <div className="mb-12">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vamos agendar
            <span className="block text-accent">o kick-off?</span>
          </h1>
          
          <p className="font-poppins text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Sua empresa está a um passo de se tornar a referência digital da região. 
            Vamos começar essa transformação hoje mesmo!
          </p>
        </div>

        {/* Final Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {finalBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-playfair text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                
                <p className="font-poppins text-sm text-white/80">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {nextActions.map((action, index) => {
            const IconComponent = action.icon;
            
            return (
              <Button
                key={index}
                className={`flex items-center gap-3 px-8 py-4 rounded-[20px] font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-glow)] hover:scale-105'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-bold">{action.title}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-6 border border-white/20 max-w-2xl mx-auto">
          <h3 className="font-playfair text-xl font-bold text-white mb-4">
            Digital Market - Especialistas em Empresas
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-white/90">contato@digitalmarket.com.br</span>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-white/90">Agende sua reunião</span>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8">
          <p className="font-poppins text-white/70 text-sm">
            Transforme sua empresa em 90 dias. Resultados mensuráveis. Crescimento sustentável.
          </p>
        </div>
      </div>
    </div>
  );
};