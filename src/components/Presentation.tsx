import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoverSlide } from './slides/CoverSlide';
import { DiagnosisSlide } from './slides/DiagnosisSlide';
import { ObjectivesSlide } from './slides/ObjectivesSlide';
import { ValuePropositionSlide } from './slides/ValuePropositionSlide';
import { ExecutionPillarsSlide } from './slides/ExecutionPillarsSlide';
import { ContentDeliverySlide } from './slides/ContentDeliverySlide';
import { PaidTrafficSlide } from './slides/PaidTrafficSlide';
import { JourneyAutomationSlide } from './slides/JourneyAutomationSlide';
import { MetricsReportsSlide } from './slides/MetricsReportsSlide';
import { InvestmentPlansSlide } from './slides/InvestmentPlansSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { NextStepsSlide } from './slides/NextStepsSlide';
import { ClosingSlide } from './slides/ClosingSlide';

const slides = [
  { id: 0, component: CoverSlide, title: 'Capa' },
  { id: 1, component: DiagnosisSlide, title: 'Diagnóstico' },
  { id: 2, component: ObjectivesSlide, title: 'Objetivos' },
  { id: 3, component: ValuePropositionSlide, title: 'Proposta de Valor' },
  { id: 4, component: ExecutionPillarsSlide, title: 'Pilares de Execução' },
  { id: 5, component: ContentDeliverySlide, title: 'Entrega de Conteúdo' },
  { id: 6, component: PaidTrafficSlide, title: 'Tráfego Pago' },
  { id: 7, component: JourneyAutomationSlide, title: 'Jornada & Automação' },
  { id: 8, component: MetricsReportsSlide, title: 'Medição & Relatórios' },
  { id: 9, component: InvestmentPlansSlide, title: 'Planos de Investimento' },
  { id: 10, component: RoadmapSlide, title: 'Roadmap' },
  { id: 11, component: NextStepsSlide, title: 'Próximos Passos' },
  { id: 12, component: ClosingSlide, title: 'Encerramento' },
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideDirection('right');
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection('left');
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  const togglePresentation = () => {
    setIsPresenting(!isPresenting);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  if (isPresenting) {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-hidden">
        <div className="h-screen flex items-center justify-center relative">
          <div 
            key={currentSlide}
            className={`w-full h-full flex items-center justify-center animate-fade-scale-in ${
              slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
            }`}
          >
            <CurrentSlideComponent />
          </div>
        </div>
        
        {/* Navigation Controls - Enhanced Glassmorphism */}
        <div className="slide-nav flex items-center gap-2 sm:gap-4">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="sm"
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10 text-dm-white hover:bg-dm-orange/20"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          
          <span className="text-xs sm:text-sm font-inter text-dm-white/90 px-2">
            {currentSlide + 1} / {slides.length}
          </span>
          
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="ghost"
            size="sm"
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10 text-dm-white hover:bg-dm-orange/20"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          
          <Button
            onClick={togglePresentation}
            variant="ghost"
            size="sm"
            className="ml-2 sm:ml-4 text-xs sm:text-sm text-dm-white hover:bg-dm-orange/20 px-2 sm:px-3 py-1 sm:py-2"
          >
            Sair
          </Button>
        </div>

        {/* Keyboard Navigation */}
        <div
          className="fixed inset-0 pointer-events-none"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') setIsPresenting(false);
          }}
          tabIndex={0}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Mobile Responsive */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dm-white leading-tight mb-2 sm:mb-4 font-poppins">
            Apresentação Digital Market
          </h1>
          <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
            Como acelerar o crescimento da sua empresa
          </p>
          <Button onClick={togglePresentation} className="btn-primary text-sm sm:text-base">
            <Play className="w-4 h-4 mr-2" />
            Iniciar Apresentação
          </Button>
        </div>

        {/* Slide Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`card-premium p-3 sm:p-6 cursor-pointer transition-[var(--transition-glass)] hover:scale-105 hover:shadow-[var(--shadow-glass)] group ${
                currentSlide === index ? 'ring-2 ring-dm-orange shadow-[var(--shadow-glow)]' : ''
              }`}
            >
              <div className="aspect-video bg-dm-navy/50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden border border-white/10">
                <div className="transform scale-[0.15] sm:scale-[0.25] origin-center w-[400px] h-[300px]">
                  <slide.component />
                </div>
              </div>
              <h3 className="font-poppins font-semibold text-dm-white text-center text-xs sm:text-sm lg:text-base">
                {index + 1}. {slide.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};