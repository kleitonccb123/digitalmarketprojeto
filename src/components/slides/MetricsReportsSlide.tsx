import { BarChart3, TrendingUp, Eye, Users, Calendar, DollarSign, Target, Clock } from 'lucide-react';

export const MetricsReportsSlide = () => {
  const kpis = [
    { icon: Eye, label: 'Impressões', value: '50K+', trend: '+25%', color: 'text-blue-600' },
    { icon: Users, label: 'Leads Qualificados', value: '150+', trend: '+300%', color: 'text-green-600' },
    { icon: Calendar, label: 'Agendamentos', value: '80+', trend: '+250%', color: 'text-accent' },
    { icon: DollarSign, label: 'ROI', value: '400%', trend: '+180%', color: 'text-purple-600' },
    { icon: Target, label: 'Taxa de Conversão', value: '8.5%', trend: '+120%', color: 'text-orange-600' },
    { icon: Clock, label: 'Tempo de Resposta', value: '2min', trend: '-85%', color: 'text-red-600' }
  ];

  const reportFeatures = [
    {
      title: 'Dashboard Personalizado',
      description: 'Visualização em tempo real dos principais indicadores',
      features: [
        'KPIs em tempo real',
        'Gráficos interativos',
        'Comparação mensal',
        'Alertas automáticos'
      ]
    },
    {
      title: 'Relatórios Automatizados',
      description: 'Análises detalhadas enviadas periodicamente',
      features: [
        'Relatório semanal',
        'Análise mensal completa',
        'Insights e recomendações',
        'Plano de otimização'
      ]
    },
    {
      title: 'Métricas Avançadas',
      description: 'Acompanhamento de indicadores específicos para empresas',
      features: [
        'Custo por agendamento',
        'Lifetime Value do paciente',
        'Taxa de retenção',
        'Sazonalidade de demanda'
      ]
    }
  ];

  const optimizationSchedule = [
    { frequency: 'Diário', tasks: ['Monitoramento de campanhas', 'Resposta a comentários', 'Análise de mensagens'] },
    { frequency: 'Semanal', tasks: ['Otimização de anúncios', 'Análise de concorrência', 'Ajuste de público-alvo'] },
    { frequency: 'Mensal', tasks: ['Relatório completo', 'Reunião estratégica', 'Planejamento do próximo mês'] }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Medição & Relatórios</h1>
        <p className="text-body max-w-3xl mx-auto">
          Acompanhamento detalhado de todas as métricas importantes para garantir 
          resultados consistentes e crescimento sustentável
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {kpis.map((kpi, index) => {
          const IconComponent = kpi.icon;
          
          return (
            <div key={index} className="card-premium p-4 text-center">
              <div className="flex justify-center mb-3">
                <IconComponent className={`w-6 h-6 ${kpi.color}`} />
              </div>
              
              <div className="font-playfair text-2xl font-bold text-primary mb-1">
                {kpi.value}
              </div>
              
              <div className="font-poppins text-xs text-muted-foreground mb-2">
                {kpi.label}
              </div>
              
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                kpi.trend.startsWith('+') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {kpi.trend}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Report Features */}
        <div>
          <h2 className="heading-md mb-6">Sistema de Relatórios</h2>
          
          <div className="space-y-4">
            {reportFeatures.map((feature, index) => (
              <div key={index} className="card-premium p-6">
                <h3 className="font-playfair text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                
                <p className="font-poppins text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      <span className="font-poppins text-xs text-primary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Schedule */}
        <div>
          <h2 className="heading-md mb-6">Cadência de Otimização</h2>
          
          <div className="space-y-4">
            {optimizationSchedule.map((schedule, index) => (
              <div key={index} className="card-premium p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-playfair text-lg font-bold text-primary">
                    {schedule.frequency}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {schedule.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      <span className="font-poppins text-sm text-muted-foreground">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-[20px] border border-primary/10">
        <div className="text-center mb-6">
          <h3 className="font-playfair text-xl font-bold text-primary mb-2">
            Dashboard em Tempo Real
          </h3>
          <p className="font-poppins text-muted-foreground">
            Acompanhe todos os resultados em um painel intuitivo e completo
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/50 p-4 rounded-[12px] text-center">
            <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="font-poppins text-sm text-primary font-semibold">Performance</div>
            <div className="font-poppins text-xs text-muted-foreground">de Campanhas</div>
          </div>
          
          <div className="bg-white/50 p-4 rounded-[12px] text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="font-poppins text-sm text-primary font-semibold">Tendências</div>
            <div className="font-poppins text-xs text-muted-foreground">e Padrões</div>
          </div>
          
          <div className="bg-white/50 p-4 rounded-[12px] text-center">
            <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="font-poppins text-sm text-primary font-semibold">Metas</div>
            <div className="font-poppins text-xs text-muted-foreground">vs Resultados</div>
          </div>
          
          <div className="bg-white/50 p-4 rounded-[12px] text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="font-poppins text-sm text-primary font-semibold">Público</div>
            <div className="font-poppins text-xs text-muted-foreground">e Engajamento</div>
          </div>
        </div>
      </div>
    </div>
  );
};