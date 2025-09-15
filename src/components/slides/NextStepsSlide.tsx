import { Key, Camera, Calendar, CheckSquare, ArrowRight, Clock } from 'lucide-react';

export const NextStepsSlide = () => {
  const requirements = [
    {
      icon: Key,
      title: 'Check de Acessos',
      description: 'Verificação e organização de todas as credenciais necessárias',
      details: [
        'Instagram Business/Creator',
        'Facebook Business Manager', 
        'Google Analytics e Google Ads',
        'WhatsApp Business',
        'Acesso ao site (se houver)'
      ],
      timeframe: 'Dia 1-2'
    },
    {
      icon: Camera,
      title: 'Sessão de Foto/Vídeo',
      description: 'Agendamento para criação de conteúdo visual profissional',
      details: [
        'Fotos da empresa e equipe',
        'Retratos profissionais da equipe',
        'Vídeos de apresentação',
        'Material para depoimentos',
        'Imagens dos procedimentos'
      ],
      timeframe: 'Semana 1'
    },
    {
      icon: Calendar,
      title: 'Go-live do Tráfego',
      description: 'Ativação das primeiras campanhas de Meta Ads',
      details: [
        'Configuração final das campanhas',
        'Teste A/B dos criativos',
        'Ajuste de orçamentos',
        'Monitoramento inicial',
        'Otimizações em tempo real'
      ],
      timeframe: 'Semana 2'
    }
  ];

  const approvalProcess = [
    { stage: 'Estratégia', description: 'Aprovação do plano de marketing e cronograma' },
    { stage: 'Criativos', description: 'Validação de designs, textos e vídeos' },
    { stage: 'Campanhas', description: 'Autorização para início do tráfego pago' },
    { stage: 'Conteúdo', description: 'Aprovação do calendário editorial mensal' }
  ];

  return (
    <div className="w-full h-full bg-background p-8 overflow-y-auto">
      <div className="text-center mb-8">
        <h1 className="heading-lg mb-4">Próximos Passos</h1>
        <p className="text-body max-w-3xl mx-auto">
          O que precisamos de você para iniciar a transformação digital da sua empresa
        </p>
      </div>

      {/* Requirements */}
      <div className="space-y-6 mb-8">
        {requirements.map((req, index) => {
          const IconComponent = req.icon;
          
          return (
            <div key={index} className="card-premium p-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="font-playfair text-xl font-bold text-primary">
                      {req.title}
                    </h3>
                    
                    <div className="bg-accent/20 px-3 py-1 rounded-full">
                      <span className="font-poppins text-accent text-sm font-semibold">
                        {req.timeframe}
                      </span>
                    </div>
                  </div>
                  
                  <p className="font-poppins text-muted-foreground mb-4">
                    {req.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {req.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-green-500" />
                        <span className="font-poppins text-sm text-primary">
                          {detail}
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

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Approval Process */}
        <div>
          <h2 className="heading-md mb-6">Processo de Aprovação</h2>
          
          <div className="space-y-4">
            {approvalProcess.map((process, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-secondary rounded-[16px]">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins text-sm font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-primary mb-1">
                    {process.stage}
                  </h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Overview */}
        <div>
          <h2 className="heading-md mb-6">Cronograma de Início</h2>
          
          <div className="card-premium p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-primary">Semana 1</h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Setup técnico e organização inicial
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-primary">Semana 2</h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Produção de conteúdo e primeiras campanhas
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-primary">Semana 3+</h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Otimização contínua e crescimento
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-[16px] border border-accent/20">
            <h4 className="font-poppins font-semibold text-primary mb-2">
              Tempo de Resposta
            </h4>
            <p className="font-poppins text-sm text-muted-foreground">
              Quanto mais rápido organizarmos os acessos e materiais, 
              mais cedo começaremos a ver os primeiros resultados!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};