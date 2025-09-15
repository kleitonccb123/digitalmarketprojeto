import { Thermometer, Users, Repeat, BarChart3, Target } from 'lucide-react';

export const PaidTrafficSlide = () => {
  const campaignTypes = [
    {
      icon: Thermometer,
      title: 'Campanhas Cold',
      description: 'Para quem ainda não conhece sua empresa',
      temperature: 'Frio',
      color: 'from-blue-500 to-blue-600',
      strategies: [
        'Anúncios educativos sobre procedimentos',
        'Conteúdo sobre problemas comuns',
        'Vídeos explicativos e informativos',
        'Segmentação por interesses e comportamentos'
      ]
    },
    {
      icon: Users,
      title: 'Campanhas Warm',
      description: 'Para quem já interagiu com seu conteúdo',
      temperature: 'Morno',
      color: 'from-yellow-500 to-orange-500',
      strategies: [
        'Remarketing de visitantes do site',
        'Retargeting de engajamento no Instagram',
        'Ofertas especiais para interessados',
        'Depoimentos e cases de sucesso'
      ]
    },
    {
      icon: Target,
      title: 'Campanhas Hot',
      description: 'Para quem está pronto para agendar',
      temperature: 'Quente',
      color: 'from-red-500 to-red-600',
      strategies: [
        'CTAs diretos para agendamento',
        'Promoções limitadas',
        'Urgência e escassez',
        'Facilidades de pagamento'
      ]
    }
  ];

  const metrics = [
    { label: 'CPM Médio', value: 'R$ 8-15', description: 'Custo por mil impressões' },
    { label: 'CPC Médio', value: 'R$ 0,50-2,00', description: 'Custo por clique' },
    { label: 'CPL Médio', value: 'R$ 15-40', description: 'Custo por lead' },
    { label: 'Taxa de Conversão', value: '3-8%', description: 'Do clique ao agendamento' }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Estratégia de Tráfego Pago</h1>
        <p className="text-body max-w-3xl mx-auto">
          Campanhas segmentadas por temperatura do público para maximizar conversões e otimizar investimento
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {campaignTypes.map((campaign, index) => {
          const IconComponent = campaign.icon;
          
          return (
            <div key={index} className="card-premium p-6">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${campaign.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                  {campaign.title}
                </h3>
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${campaign.color} text-white`}>
                  Público {campaign.temperature}
                </div>
                
                <p className="font-poppins text-sm text-muted-foreground">
                  {campaign.description}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-poppins font-semibold text-primary text-sm mb-3">
                  Estratégias:
                </h4>
                {campaign.strategies.map((strategy, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    <span className="font-poppins text-xs text-muted-foreground">
                      {strategy}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Metrics */}
        <div>
          <h2 className="heading-md mb-6">Métricas de Performance</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="card-premium p-4 text-center">
                <div className="font-playfair text-2xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <h4 className="font-poppins font-semibold text-primary text-sm mb-1">
                  {metric.label}
                </h4>
                <p className="font-poppins text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTWA Strategy */}
        <div>
          <h2 className="heading-md mb-6">Click to WhatsApp (CTWA)</h2>
          
          <div className="card-premium p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                </svg>
              </div>
              <h3 className="font-playfair text-lg font-bold text-primary">
                Direcionamento Inteligente
              </h3>
            </div>
            
            <p className="font-poppins text-sm text-muted-foreground mb-4">
              Todos os anúncios direcionam para o WhatsApp da sua empresa, 
              onde o atendimento é otimizado para conversão.
            </p>
            
            <div className="bg-green-50 p-4 rounded-[12px] border border-green-200">
              <h4 className="font-poppins font-semibold text-green-700 text-sm mb-2">
                Vantagens do CTWA:
              </h4>
              <ul className="space-y-1">
                <li className="font-poppins text-xs text-green-600">• Contato direto e imediato</li>
                <li className="font-poppins text-xs text-green-600">• Menor atrito na conversão</li>
                <li className="font-poppins text-xs text-green-600">• Qualificação em tempo real</li>
                <li className="font-poppins text-xs text-green-600">• Agendamento facilitado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};