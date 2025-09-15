export const CoverSlide = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Gradient Background - Graphite Tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black"></div>

      {/* Performance Pattern - Glow Effects - Mobile Optimized */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border-2 border-dm-orange rounded-full shadow-[var(--shadow-glow)]"></div>
        <div className="absolute top-16 right-8 sm:top-32 sm:right-20 w-12 h-12 sm:w-20 sm:h-20 border border-dm-blue rounded-lg rotate-45 shadow-[var(--shadow-blue-glow)]"></div>
        <div className="absolute bottom-16 left-1/4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-dm-orange rounded-full"></div>
        <div className="absolute bottom-24 right-4 sm:bottom-32 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border border-dm-blue rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl w-full">
          {/* Logo/Brand - Performance Focus - Mobile Responsive */}
          <div className="mb-6 sm:mb-8">
            <h2 className="font-poppins text-lg sm:text-2xl font-bold text-dm-orange mb-2 tracking-wider">DIGITAL MARKET</h2>
            <div className="w-16 sm:w-20 h-1 bg-dm-orange mx-auto shadow-[var(--shadow-glow)]"></div>
          </div>

          {/* Main Title - Performance Aggressive - Mobile Responsive */}
          <h1 className="font-poppins text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-dm-white leading-tight mb-6 sm:mb-8">
            Como a Digital Market vai
            <span className="block text-dm-orange drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]">acelerar o crescimento</span>
            <span className="block">da sua empresa</span>
          </h1>

          {/* Subtitle - Performance Focus - Mobile Responsive */}
          <p className="font-inter text-sm sm:text-lg lg:text-xl text-dm-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Metodologia agressiva para transformar sua presença digital em <span className="text-dm-orange font-semibold">ROI real</span>: 
            mais leads qualificados, mais conversões e <span className="text-dm-orange font-semibold">mais receita</span>.
          </p>

          {/* Performance CTA - Mobile Responsive */}
          <div className="flex flex-col gap-4 justify-center items-center px-4 sm:px-0">
            <div className="bg-dm-navy/80 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-dm-orange/20 shadow-[var(--shadow-premium)] w-full sm:w-auto">
              <span className="font-poppins text-dm-white font-medium text-sm sm:text-base text-center block">
                Vamos transformar sua empresa em <span className="text-dm-orange">referência digital</span>
              </span>
            </div>
          </div>

          {/* Bottom Info - Performance Metrics - Mobile Responsive */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-left">
            <p className="font-inter text-dm-white/70 text-xs sm:text-sm">
              Estratégia exclusiva para empresas
            </p>
            <p className="font-inter text-dm-orange text-xs sm:text-sm font-semibold">
              <span className="text-dm-blue">ROI 400%</span> em 90 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};