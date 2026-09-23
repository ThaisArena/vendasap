import React, { useState } from 'react';
import {
  Building2,
  BedDouble,
  Car,
  Maximize2,
  ShieldCheck,
  MapPin,
  Calendar,
  ChevronDown,
  Check,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  FileText,
  Calculator,
  Waves,
  Dumbbell,
  Coffee,
  Sparkles,
  TreePine,
  Shield,
  Clock,
  Compass,
  Download,
  Info
} from 'lucide-react';

import heroFacadeImg from './assets/images/hero_luxury_apartment_facade_1790202197872.jpg';
import livingGourmetImg from './assets/images/interior_living_gourmet_1790202209807.jpg';
import rooftopPoolImg from './assets/images/rooftop_infinity_pool_1790202220186.jpg';
import masterSuiteImg from './assets/images/master_suite_bedroom_1790202229991.jpg';

const FORM_LINK = "https://forms.gle/YZurisHKW5kjex5m8";

// Typologies data
interface Typology {
  id: string;
  name: string;
  area: string;
  suites: string;
  parking: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  estimatedPrice: string;
}

const typologies: Typology[] = [
  {
    id: 'studio-plus',
    name: 'Compacto Premium',
    area: '58 m²',
    suites: '1 Suíte',
    parking: '1 Vaga',
    tagline: 'Design funcional com varanda panorâmica e iluminação natural abundante',
    description: 'Concebido para executivos modernos e investidores exigentes. Living integrado com pé-direito elevado, cozinha gourmet linear e suíte com amplo espaço para closet.',
    features: [
      'Piso porcelanato 120x120cm retificado',
      'Fechadura biométrica eletrônica inteligente',
      'Infraestrutura para automação de iluminação e ar-condicionado',
      'Varanda com fechamento de vidro acústico'
    ],
    image: masterSuiteImg,
    estimatedPrice: 'A partir de R$ 790.000'
  },
  {
    id: 'family-comfort',
    name: 'Residência Elegance',
    area: '112 m²',
    suites: '2 ou 3 Suítes',
    parking: '2 Vagas demarcadas',
    tagline: 'O equilíbrio perfeito entre privacidade familiar e convivência sofisticada',
    description: 'Living ampliado integrado à varanda gourmet com churrasqueira a carvão e duto mecânico. Suíte master com cuba dupla e janelas amplas com persiana embutida automatizada.',
    features: [
      'Varanda gourmet nivelada com o living',
      'Atenuação acústica nas lajes e caixilhos',
      'Banheiros das suítes com ventilação e iluminação naturais',
      'Tomada individual para carregamento veicular elétrico'
    ],
    image: livingGourmetImg,
    estimatedPrice: 'A partir de R$ 1.480.000'
  },
  {
    id: 'prestige-horizon',
    name: 'Grand Horizon',
    area: '168 m²',
    suites: '3 Suítes Plenas',
    parking: '3 Vagas + Depósito privativo',
    tagline: 'Espaço generoso com vista panorâmica de 180 graus da cidade',
    description: 'Hall privativo com elevador inteligente de alta velocidade. Cozinha independente com despensa, dependência completa de serviço e living com 3 ambientes fluidos.',
    features: [
      'Elevador privativo com biometria no pavimento',
      'Churrasqueira gourmet a carvão com bancada em granito nobre',
      'Tubulação acústica nas instalações hidráulicas',
      'Gerador de energia que atende 100% das áreas privativas'
    ],
    image: heroFacadeImg,
    estimatedPrice: 'A partir de R$ 2.290.000'
  },
  {
    id: 'sky-penthouse',
    name: 'Penthouse Duplex',
    area: '246 m²',
    suites: '4 Suítes Magníficas',
    parking: '4 Vagas + Box privativo',
    tagline: 'A máxima expressão de exclusividade no topo da cidade',
    description: 'Terraço superior privativo com deck molhado, spa aquecido e espaço gourmet ao ar livre. Vista definitiva incomparável e acabamentos assinados.',
    features: [
      'Deck privativo com piscina aquecida e hidro integrada',
      'Pé-direito duplo de 5,80m no living principal',
      'Master suite com closet walk-in de 18m² e hidromassagem',
      'Automação residencial completa inclusa no memorial'
    ],
    image: rooftopPoolImg,
    estimatedPrice: 'Consulte valores exclusivos'
  }
];

// Amenities data
const amenities = [
  {
    title: 'Rooftop Sky Pool',
    description: 'Piscina de borda infinita aquecida no 28º andar com vista 360° desimpedida da cidade.',
    icon: Waves,
    tag: '28º Pavimento'
  },
  {
    title: 'Wellness & Private Spa',
    description: 'Sauna seca finlandesa, sala de massagem terapêutica e hidrospa para renovação diária.',
    icon: Sparkles,
    tag: 'Relaxamento'
  },
  {
    title: 'Fitness High-Performance',
    description: 'Equipamentos de padrão olímpico, espaço dedicado a pilates e consultoria funcional.',
    icon: Dumbbell,
    tag: 'Saúde & Foco'
  },
  {
    title: 'Espaço Gourmet & Wine Lounge',
    description: 'Adega climatizada para colecionadores e salão para até 40 convidados com cozinha de chef.',
    icon: Coffee,
    tag: 'Celebrações'
  },
  {
    title: 'Executive Coworking & Meeting',
    description: 'Salas de reunião acústicas privativas com internet ultrarrápida redundante e café bar.',
    icon: Building2,
    tag: 'Produtividade'
  },
  {
    title: 'Segurança com Inteligência IA',
    description: 'Portaria blindada, reconhecimento facial, eclusa dupla para pedestres e monitoramento 24h.',
    icon: Shield,
    tag: 'Tranquilidade'
  }
];

// Neighborhood data
const nearbyPoints = [
  { name: 'Parque Ibirapuera / Área Verde', distance: '3 min de caminhada', category: 'Lazer & Natureza' },
  { name: 'Polo Gastronômico & Cafés Especiais', distance: '350 metros', category: 'Gastronomia' },
  { name: 'Colégios Internacionais & Bilíngues', distance: '5 min de carro', category: 'Educação' },
  { name: 'Shopping Iguatemi / JK Iguatemi', distance: '6 min de carro', category: 'Compras & Luxo' },
  { name: 'Hospital Sírio-Libanês / Albert Einstein', distance: '8 min de carro', category: 'Saúde' },
  { name: 'Acesso rápido às principais avenidas', distance: '2 min', category: 'Mobilidade' },
];

export default function App() {
  const [selectedTypology, setSelectedTypology] = useState<Typology>(typologies[1]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Financial Simulator States
  const [propertyValue, setPropertyValue] = useState<number>(1480000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [loanYears, setLoanYears] = useState<number>(20);

  // Calculations
  const downPaymentValue = (propertyValue * downPaymentPercent) / 100;
  const financedAmount = propertyValue - downPaymentValue;
  const monthlyRate = 0.0078; // ~9.8% a.a. typical benchmark
  const totalMonths = loanYears * 12;
  const estimatedInstallment =
    financedAmount > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const faqs = [
    {
      q: 'Qual é o prazo previsto de entrega da obra?',
      a: 'O empreendimento tem entrega contratual prevista para o primeiro semestre de 2027, com cronograma físico-financeiro rigorosamente auditado e registrado em cartório.'
    },
    {
      q: 'O empreendimento conta com Patrimônio de Afetação?',
      a: 'Sim, 100% amparado pela Lei 10.931/04. Os recursos da obra ficam segregados no próprio empreendimento, garantindo total segurança jurídica e patrimonial para os compradores.'
    },
    {
      q: 'É possível personalizar a planta ou acabamentos durante a construção?',
      a: 'Sim. Oferecemos o programa Lumina Custom, permitindo a escolha de opções de layouts inteligentes, acréscimo de pontos de automação e seleção de acabamentos antes da fase de alvenaria.'
    },
    {
      q: 'Como funcionam as condições de pagamento e financiamento?',
      a: 'O fluxo de pagamento é altamente flexível durante o período de obras (entrada parcelada, mensais e intermediárias), com saldo final financiável por qualquer instituição financeira ou repasse direto.'
    },
    {
      q: 'Como agendar uma visita ao apartamento decorado?',
      a: 'Basta clicar no botão "Tenho Interesse" nesta página para preencher seus dados de contato. Nossa equipe de concierge imobiliário entrará em contato em minutos para confirmar seu horário privativo.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-200">
      
      {/* 1. TOP BAR CONTRACT: One row, three zones */}
      <header className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-slate-100 uppercase hover:text-amber-400 transition-colors">
            Lumina Horizon
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a>
            <a href="#plantas" className="hover:text-amber-400 transition-colors">Plantas</a>
            <a href="#comodidades" className="hover:text-amber-400 transition-colors">Comodidades</a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização</a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">Dúvidas</a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-lg shadow-amber-500/10 whitespace-nowrap"
            >
              Tenho Interesse
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Subtle background ambient aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Quiet unboxed metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
                <span>Lançamento Exclusivo</span>
                <span aria-hidden="true">·</span>
                <span>Jardins Nobre</span>
                <span aria-hidden="true">·</span>
                <span>Obras Iniciadas</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-slate-100 font-normal leading-[1.15] text-balance">
                O privilégio de viver acima de todas as expectativas.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                Apartamentos de alto padrão com plantas de <span className="text-white font-medium">58 m² a 246 m²</span>, varanda gourmet integrada com vista definitiva e lazer de resort internacional no coração da cidade.
              </p>

              {/* Action Block with Primary Button */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-xl shadow-amber-500/20 whitespace-nowrap group"
                  >
                    <span>Tenho Interesse</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#plantas"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
                  >
                    Ver Plantas & Metragens
                  </a>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-amber-400" />
                    Condições especiais de pré-lançamento
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-amber-400" />
                    Atendimento privativo
                  </span>
                </div>
              </div>

              {/* Fast Numerical Specs Row */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-serif text-slate-100 tabular-nums font-medium">58 a 246</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">m² Privativos</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-slate-100 tabular-nums font-medium">1 a 4</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Suítes Plenas</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-slate-100 tabular-nums font-medium">1 a 4</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Vagas Livres</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-slate-100 tabular-nums font-medium">2027</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Entrega Obra</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Focal Anchor */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl bg-slate-900/60 group">
                <img
                  src={heroFacadeImg}
                  alt="Fachada imponente do Lumina Horizon Residences iluminada ao entardecer"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] sm:aspect-[16/10] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Arquitetura de Assinatura</span>
                    <h2 className="text-lg font-serif text-white font-medium">Torre única de traços contemporâneos</h2>
                    <p className="text-xs text-slate-300">Paineis brises termicamente eficientes e amplas varandas suspensas</p>
                  </div>
                  <a
                    href={FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded border border-white/20 transition-colors whitespace-nowrap"
                  >
                    Agendar Visita
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUBSTANTIATION & ARCHITECTURAL HIGHLIGHTS (Bento Grid) */}
      <section id="diferenciais" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Padrão Construtivo</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal mt-2 leading-tight">
              Cada detalhe projetado para elevar sua experiência de bem-viver
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Integração absoluta entre design biofílico, engenharia acústica de precisão e materiais nobres de altíssima durabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Living & Varanda (Spans 2 cols on desktop) */}
            <div className="md:col-span-2 rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={livingGourmetImg}
                  alt="Living integrado à varanda gourmet com piso nivelado e caixilhos piso-teto"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white">
                  Conceito Aberto
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-slate-100">
                  Living e Varanda Gourmet sem Degraus
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Piso 100% nivelado entre a sala e a varanda, com caixilhos retráteis de embutir que ampliam a sensação de continuidade e inundam a residência com luz natural e ventilação cruzada.
                </p>
                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                  <span>Churrasqueira a carvão certificada</span>
                  <span aria-hidden="true">·</span>
                  <span>Bancadas em mármore importado</span>
                  <span aria-hidden="true">·</span>
                  <span>Pé-direito livre de 2,90m</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Suíte Master */}
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={masterSuiteImg}
                  alt="Suíte master com piso de madeira nobre e persianas com acionamento elétrico"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white">
                  Refúgio Privativo
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-slate-100">
                  Suítes com Acústica Superior
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tratamento anti-ruído nas lajes, esquadrias e tubulações hidráulicas. Persianas 100% blackout motorizadas com controle por voz ou smartphone.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <span>Piso aquecido nos banheiros</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>Amplo closet privativo</span>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Rooftop & Sunset */}
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={rooftopPoolImg}
                  alt="Piscina com borda infinita no rooftop com lounges e deck de madeira"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-white">
                  Rooftop Exclusivo
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-slate-100">
                  Sky Deck & Sunset Lounge
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Piscina climatizada com borda infinita voltada para o pôr do sol, rodeada por gazebos privativos e paisagismo assinado por renomado escritório botânico.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <span>Raia para natação de 25 metros</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>Bar molhado privativo</span>
                </div>
              </div>
            </div>

            {/* Bento Card 4: Engenharia & Sustentabilidade (Spans 2 cols on desktop) */}
            <div className="md:col-span-2 rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Engenharia de Vanguarda</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-slate-100">
                  Sustentabilidade certificada e máxima eficiência operacional
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  O Lumina Horizon conta com painéis solares para abastecimento de energia nas áreas comuns, sistema de captação e reuso de águas pluviais, elevadores inteligentes com frenagem regenerativa e tomadas de carregamento veicular individual em todas as garagens.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 mt-6">
                <div className="space-y-1">
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-emerald-400" />
                    Selo Verde
                  </div>
                  <p className="text-xs text-slate-400">Certificação de redução de pegada hídrica e carbônica.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-400" />
                    Vagas E-Charging
                  </div>
                  <p className="text-xs text-slate-400">Ponto elétrico com medição individual para cada unidade.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-medium text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Gerador Total
                  </div>
                  <p className="text-xs text-slate-400">Suporte 100% para os apartamentos e áreas sociais.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TYPOLOGIES & FLOOR PLANS (Interactive Showcase) */}
      <section id="plantas" className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Plantas Flexíveis</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal mt-2 leading-tight">
                Projetadas para a sua forma singular de morar
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Selecione a tipologia para explorar os ambientes, metragem, diferenciais construtivos e valores estimados.
              </p>
            </div>

            {/* Direct CTA button */}
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap self-start md:self-auto"
            >
              Tenho Interesse em Conhecer as Plantas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Typology Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-lg mb-10">
            {typologies.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTypology(item)}
                className={`px-4 sm:px-6 py-3 rounded-md text-xs sm:text-sm font-medium transition-all text-left flex items-center gap-3 ${
                  selectedTypology.id === item.id
                    ? 'bg-amber-400 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-xs opacity-75 tabular-nums">({item.area})</span>
              </button>
            ))}
          </div>

          {/* Active Typology Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
            
            {/* Visual preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-800/80 group">
                <img
                  src={selectedTypology.image}
                  alt={`Perspectiva ilustrada da tipologia ${selectedTypology.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded text-xs text-slate-200 border border-slate-800 flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ambiente Decorado de Referência</span>
                </div>
              </div>

              {/* Quick specs pill row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-center">
                  <span className="text-xs text-slate-400 block">Área Privativa</span>
                  <span className="text-base font-semibold text-slate-100 font-serif tabular-nums">{selectedTypology.area}</span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-center">
                  <span className="text-xs text-slate-400 block">Configuração</span>
                  <span className="text-base font-semibold text-slate-100 font-serif">{selectedTypology.suites}</span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-center">
                  <span className="text-xs text-slate-400 block">Garagem</span>
                  <span className="text-base font-semibold text-slate-100 font-serif">{selectedTypology.parking}</span>
                </div>
              </div>
            </div>

            {/* Details and CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  Tipologia Selecionada
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {selectedTypology.name}
                </h3>
                <p className="text-amber-200/90 text-sm mt-1 italic">
                  "{selectedTypology.tagline}"
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedTypology.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Destaques Inclusos nesta Planta:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTypology.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Investimento Estimado</div>
                  <div className="text-lg font-serif font-semibold text-amber-300 tabular-nums">
                    {selectedTypology.estimatedPrice}
                  </div>
                </div>

                {/* Tenho Interesse Button for this floor plan */}
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-lg shadow-amber-500/10 whitespace-nowrap"
                >
                  <span>Tenho Interesse Nesta Planta</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. RESORT AMENITIES & LIFESTYLE */}
      <section id="comodidades" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Resort Living Urbano</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal leading-tight">
              Mais de 2.000 m² de lazer de alto padrão entregues equipados e decorados
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Ambientes desenhados para acolher momentos memoráveis com a família, amigos ou no retiro pessoal de descanso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.tag}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif text-white font-medium mb-1.5">{item.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Área 100% climatizada</span>
                    <a
                      href={FORM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Tenho interesse</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. PRIME LOCATION SECTION */}
      <section id="localizacao" className="py-20 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Endereço Exclusivo</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal mt-2 leading-tight">
                  No quadrilátero mais desejado e valorizado da região
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rua arborizada e tranquila, cercada pela mais alta gastronomia, boutiques de renome, instituições de ensino internacionais e centros médicos de referência.
              </p>

              <div className="space-y-3 pt-2">
                {nearbyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-slate-200 font-medium">{pt.name}</span>
                    </div>
                    <span className="text-amber-300 font-semibold tabular-nums shrink-0">{pt.distance}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors w-full sm:w-auto"
                >
                  <span>Tenho Interesse - Agendar Visita no Local</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/40 p-6 sm:p-8 space-y-6 relative">
                
                {/* Visual Map Representation */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-[#0F1420] flex items-center justify-center">
                  {/* Styled stylized geometric neighborhood map */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/60 to-slate-950/90" />
                  
                  {/* Decorative map lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-72 h-72 border border-dashed border-amber-400/20 rounded-full animate-pulse" />
                    <div className="w-48 h-48 border border-amber-400/30 rounded-full" />
                  </div>

                  {/* Pin card */}
                  <div className="relative z-10 text-center space-y-2 p-6 bg-slate-900/90 backdrop-blur-md rounded-xl border border-amber-400/30 shadow-2xl max-w-xs">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-slate-950 mx-auto shadow-lg shadow-amber-500/30">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="font-serif text-lg text-white font-medium">Lumina Horizon</div>
                    <div className="text-xs text-amber-300">Alameda dos Ipês, 1.420 - Bairro Nobre</div>
                    <div className="text-[11px] text-slate-400 pt-1">Plantão de Vendas com Maquete e Decorado</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400">Acesso Viário</span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">Longe do tráfego pesado com saídas rápidas</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400">Segurança Bairro</span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">Ronda 24h e monitoramento integrado</p>
                  </div>
                  <div className="space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-xs text-slate-400">Valorização</span>
                    <p className="text-xs sm:text-sm text-amber-300 font-medium">+18% média anual histórica da região</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FINANCIAL SIMULATOR (Interactive Tool to Boost Intent) */}
      <section id="simulador" className="py-20 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Planejamento Financeiro</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal leading-tight">
              Simule as condições personalizadas do seu novo apartamento
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Ajuste o valor do imóvel, percentual de entrada e prazo para visualizar uma estimativa de fluxo de pagamento prévia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Controls */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Property Value Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label htmlFor="property-val" className="text-slate-300 font-medium">Valor do Apartamento</label>
                    <span className="font-serif font-semibold text-amber-400 tabular-nums">{formatBRL(propertyValue)}</span>
                  </div>
                  <input
                    id="property-val"
                    type="range"
                    min="790000"
                    max="3500000"
                    step="50000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 tabular-nums">
                    <span>R$ 790 mil</span>
                    <span>R$ 2 milhões</span>
                    <span>R$ 3,5 milhões</span>
                  </div>
                </div>

                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label htmlFor="down-payment" className="text-slate-300 font-medium">Entrada no Período de Obras</label>
                    <span className="font-serif font-semibold text-amber-400 tabular-nums">{downPaymentPercent}% ({formatBRL(downPaymentValue)})</span>
                  </div>
                  <input
                    id="down-payment"
                    type="range"
                    min="15"
                    max="60"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 tabular-nums">
                    <span>15% (mínimo)</span>
                    <span>30% (recomendado)</span>
                    <span>60%</span>
                  </div>
                </div>

                {/* Term Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label htmlFor="term-years" className="text-slate-300 font-medium">Prazo de Financiamento</label>
                    <span className="font-serif font-semibold text-amber-400 tabular-nums">{loanYears} anos ({totalMonths} meses)</span>
                  </div>
                  <input
                    id="term-years"
                    type="range"
                    min="10"
                    max="30"
                    step="5"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 tabular-nums">
                    <span>10 anos</span>
                    <span>20 anos</span>
                    <span>30 anos</span>
                  </div>
                </div>

              </div>

              {/* Simulation Result Card */}
              <div className="md:col-span-5 rounded-xl border border-amber-400/20 bg-amber-500/5 p-6 space-y-5 text-center sm:text-left">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">Estimativa de Parcela</span>
                  <div className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-1 tabular-nums">
                    {formatBRL(estimatedInstallment)}
                    <span className="text-xs text-slate-400 font-sans font-normal ml-1">/mês</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">Saldo a financiar: {formatBRL(financedAmount)}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Entrada Facilitada:</span>
                    <span className="font-medium text-white tabular-nums">{formatBRL(downPaymentValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parcelas nas Obras:</span>
                    <span className="font-medium text-white">Até 36x sem juros</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uso de FGTS:</span>
                    <span className="font-medium text-emerald-400">Permitido</span>
                  </div>
                </div>

                {/* The Core Button */}
                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors w-full shadow-lg shadow-amber-500/20"
                >
                  <span>Tenho Interesse Nesta Simulação</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-slate-500 text-center">
                  *Simulação indicativa sujeita à análise de crédito e tabela vigente.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. CREDIBILITY & TRACK RECORD */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif text-amber-400 tabular-nums font-semibold">+25 Anos</div>
              <p className="text-xs sm:text-sm text-slate-400">De excelência no mercado de alto padrão</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif text-amber-400 tabular-nums font-semibold">100%</div>
              <p className="text-xs sm:text-sm text-slate-400">Das obras entregues rigorosamente no prazo</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif text-amber-400 tabular-nums font-semibold">+1.800</div>
              <p className="text-xs sm:text-sm text-slate-400">Unidades de prestígio construídas</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif text-amber-400 tabular-nums font-semibold">Nota 9.8</div>
              <p className="text-xs sm:text-sm text-slate-400">Índice de satisfação pós-chaves</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Transparência Total</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-100 font-normal leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Esclareça as principais dúvidas sobre aquisição, contrato e prazos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                  >
                    <span className="font-medium text-slate-200 text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER (High Impact CTA) */}
      <section className="py-20 border-t border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#0B0F17] via-slate-900/80 to-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span>Últimas Unidades na Tabela de Lançamento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-slate-100 font-normal leading-tight max-w-3xl mx-auto text-balance">
            Garanta agora as melhores condições de aquisição no Lumina Horizon
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Receba a apresentação digital completa, espelho de disponibilidades atualizado e agende seu horário com um de nossos consultores especialistas.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-2xl shadow-amber-500/30 whitespace-nowrap group"
            >
              <span>Tenho Interesse</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-500 flex items-center justify-center gap-6">
            <span>Atendimento sem compromisso</span>
            <span aria-hidden="true">·</span>
            <span>Respeito à sua privacidade</span>
            <span aria-hidden="true">·</span>
            <span>Retorno rápido</span>
          </div>

        </div>
      </section>

      {/* 11. QUIET FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-serif text-lg font-medium text-slate-300 tracking-wider">
                Lumina Horizon Residences
              </div>
              <p className="mt-1 text-slate-400 max-w-md">
                Empreendimento residencial de alto padrão. Memorial de Incorporação registrado sob o R.04 na matrícula nº 189.420 do 4º Oficial de Registro de Imóveis.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded border border-slate-800 transition-colors"
              >
                Tenho Interesse
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div>
              © {new Date().getFullYear()} Lumina Horizon Incorporadora e Construtora. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="#diferenciais" className="hover:text-slate-300 transition-colors">Diferenciais</a>
              <a href="#plantas" className="hover:text-slate-300 transition-colors">Plantas</a>
              <a href="#comodidades" className="hover:text-slate-300 transition-colors">Comodidades</a>
              <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Formulário de Interesse</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 12. MOBILE FIXED BOTTOM CTA BAR (Adheres to 15% mobile sticky height cap) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F17]/95 backdrop-blur-lg border-t border-slate-800 px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div className="min-w-0">
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block truncate">Últimas Unidades</span>
            <span className="text-xs text-slate-300 truncate block font-serif">A partir de R$ 790 mil</span>
          </div>

          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-md"
          >
            <span>Tenho Interesse</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
