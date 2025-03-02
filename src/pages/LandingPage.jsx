import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RocketLaunchIcon, SparklesIcon, ShieldCheckIcon, ArrowsRightLeftIcon, ClockIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, BeakerIcon, CloudArrowUpIcon, PlayIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart'
    });
  }, []);

  const navigate = useNavigate();

  const features = [
    {
      icon: SparklesIcon,
      title: "Automação Inteligente",
      description: "Processamento de vendas 3x mais rápido com IA",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Segurança Máxima",
      description: "Criptografia bancária e backups automáticos",
      gradient: "from-green-600 to-blue-500"
    },
    {
      icon: ArrowsRightLeftIcon,
      title: "Integrações Ilimitadas",
      description: "Conecte com qualquer sistema em 1 clique",
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  const integrations = [
    { name: 'Shopify', logo: '/integrations/shopify.svg' },
    { name: 'Mercado Pago', logo: '/integrations/mercadopago.svg' },
    { name: 'ContaAzul', logo: '/integrations/contaazul.svg' },
    { name: 'SAP', logo: '/integrations/sap.svg' },
    { name: 'Woocommerce', logo: '/integrations/woocommerce.svg' }
  ];

  

  const faqs = [
    {
      question: "O que é o Caixa Fácil?",
      answer: "O Caixa Fácil é um software inovador de automatização de vendas, desenvolvido para ajudar lojas, mercados e restaurantes a agilizar seus processos de vendas e gestão de estoque. Com a nossa plataforma, você consegue integrar o controle de caixa, monitorar o inventário e gerar relatórios detalhados sobre o desempenho do seu negócio, tudo de maneira simples e intuitiva."
    },
    {
      question: "Quais são as funcionalidades do Caixa Fácil?",
      answer: "O Caixa Fácil oferece diversas funcionalidades, como automação de vendas, gestão de estoque, geração de relatórios personalizados, integração com outros sistemas e suporte ao cliente 24/7. Com o Caixa Fácil, sua empresa terá mais controle e agilidade nas operações diárias."
    },
    {
      question: "Como posso testar o Caixa Fácil?",
      answer: "Em breve, o Caixa Fácil estará disponível para testes. Você pode se inscrever na nossa lista de espera para ser um dos primeiros a experimentar o sistema. Ofereceremos uma demonstração gratuita para que você possa ver como o software funciona na prática, sem compromisso."
    },
    {
      question: "O Caixa Fácil é compatível com o meu negócio?",
      answer: "Sim, o Caixa Fácil foi projetado para atender a diversos tipos de estabelecimentos, como lojas de varejo, mercados, supermercados e restaurantes. O sistema é flexível e se adapta às necessidades de qualquer tipo de operação de vendas."
    },
    {
      question: "Quais são os planos e preços do Caixa Fácil?",
      answer: "Estamos preparando diferentes planos de assinatura para atender a negócios de todos os tamanhos. Os preços serão acessíveis e estruturados de forma transparente. Em breve, você poderá ver todas as opções de planos e escolher o que melhor se adapta ao seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
      {/* Glassmorphic Header */}
      <header className="fixed w-full backdrop-blur-xl bg-white/80 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Caixa Fácil" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent">
                Caixa Fácil
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-cyan-600 transition-colors">Recursos</a>
              <a href="#faqs" className="text-slate-700 hover:text-cyan-600 transition-colors">FaQ</a>
              <a href="#pricing" className="text-slate-700 hover:text-cyan-600 transition-colors">Preços</a>
              <button className="ml-4 cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-cyan-100" onClick={() => navigate('/beta-test')}>
                Seja um Beta Tester
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Animated Hero Section */}
      <section className="pt-40 pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
                <span className="flex items-center">
                  <RocketLaunchIcon className="w-5 h-5 mr-2" />
                  Pré-lançamento exclusivo
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Seja pioneiro na <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">revolução do varejo</span>
              </h1>
              <p className="text-xl text-slate-600">
                Faça parte do grupo seleto que vai transformar a gestão comercial antes do lançamento oficial
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition-transform shadow-xl flex items-center">
                  <BeakerIcon className="w-6 h-6 mr-2" />
                  Quero Testar Primeiro
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-[40px] rotate-6 scale-95 opacity-20"></div>
              <img 
                src="https://img.icons8.com/3d-fluency/500/shop.png" 
                alt="Loja 3D" 
                className="relative z-10 w-full animate-float"
                style={{animation: 'float 6s ease-in-out infinite'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Features Grid */}
      <section className="py-20" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              O Futuro da Gestão Comercial
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tecnologias exclusivas que você vai experimentar antes de todo mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} hover:shadow-2xl transition-all cursor-pointer`}
                data-aos="zoom-in"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm w-fit mb-6">
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-cyan-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-28 bg-gradient-to-br from-blue-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Veja o Caixa Fácil em Ação
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Descubra como nossa plataforma pode transformar sua operação em menos de 2 minutos
            </p>
          </div>
          <div className="relative aspect-video bg-slate-800 rounded-3xl shadow-2xl overflow-hidden" data-aos="zoom-in">
            <div className="absolute inset-0 bg-[url('/video-thumbnail.jpg')] bg-cover bg-center opacity-70" />
            <button className="absolute inset-0 flex items-center justify-center w-full h-full">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <PlayIcon className="w-12 h-12 text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Um Preço, Todos os Recursos
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Oferecemos um plano único com tudo o que você precisa para revolucionar sua gestão comercial
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div 
              className="p-8 rounded-2xl bg-gradient-to-b from-white to-blue-50 border-2 border-blue-100 hover:border-cyan-400 transition-all transform hover:-translate-y-2"
              data-aos="zoom-in"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Plano Completo</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  R$400
                </div>
                <span className="text-slate-600">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Dispositivos ilimitados",
                  "Integrações ilimitadas",
                  "Suporte prioritário 24/7",
                  "Atualizações automáticas",
                  "Gestão de estoque em tempo real",
                  "Relatórios avançados",
                  "Automação de vendas",
                  "Segurança bancária"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform">
                Começar Teste Gratuito
              </button>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-slate-600">
              Para todos os tipos de negócios: mercados, lojas e restaurantes
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Sem taxas adicionais ou surpresas. Todos os recursos inclusos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-xl bg-white overflow-hidden"
                data-aos="fade-up"
              >
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  <span className="text-lg font-medium text-slate-800">{faq.question}</span>
                  <svg className={`w-6 h-6 transform transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFAQ === index && (
                  <div className="px-6 py-4 bg-slate-50 border-t">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Nossa Jornada de Desenvolvimento
            </h2>
          </div>
          <div className="relative h-2 bg-slate-200 rounded-full max-w-3xl mx-auto">
            <div 
              className="absolute h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-2/3" 
              data-aos="progress-bar"
            />
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {['Pesquisa de Mercado', 'Desenvolvimento Alpha', 'Beta Testing'].map((stage, index) => (
              <div 
                key={stage}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{stage}</h3>
                <p className="text-slate-600 mt-2">Q{index + 1} 2024</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pioneer CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-3xl p-8" data-aos="zoom-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Seja um Pioneiro Digital
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Os primeiros 100 beta testers receberão benefícios exclusivos vitalícios
            </p>
            <div className="max-w-md mx-auto bg-white rounded-xl p-2 shadow-2xl">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 border-0 rounded-l-xl focus:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform">
                  Garantir Vaga
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.png" alt="Caixa Fácil" className="h-10 w-auto" />
                <span className="text-xl font-bold">Caixa Fácil</span>
              </div>
              <p className="text-slate-400">Revolucionando o varejo físico desde 2024</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">RECURSOS</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-400 hover:text-white">Funcionalidades</a></li>
                <li><a href="#integrations" className="text-slate-400 hover:text-white">Integrações</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">EMPRESA</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">CONTATO</h4>
              <p className="text-slate-400">contato@caixafacil.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; 2024 Caixa Fácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating Animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}