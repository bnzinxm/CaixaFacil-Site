import { useState } from 'react';
import { CloudArrowDownIcon, DevicePhoneMobileIcon, ShieldCheckIcon, CheckIcon, StarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function BetaTestPage() {
  const [email, setEmail] = useState('');

  const downloads = [
    {
      platform: "Windows",
      icon: CloudArrowDownIcon,
      link: "/downloads/caixa-facil-windows-beta.exe",
      description: "Versão beta para Windows (64-bit)"
    },
    {
      platform: "macOS",
      icon: CloudArrowDownIcon,
      link: "/downloads/caixa-facil-macos-beta.dmg",
      description: "Versão beta para macOS (Intel e Apple Silicon)"
    },
    {
      platform: "Android",
      icon: DevicePhoneMobileIcon,
      link: "/downloads/caixa-facil-android-beta.apk",
      description: "Versão beta para dispositivos Android"
    }
  ];

  const ratings = [
    { stars: 5, comment: "Incrível! A automação de vendas mudou completamente a forma como gerencio meu negócio.", author: "Carlos, Dono de Mercado" },
    { stars: 5, comment: "Fácil de usar e muito intuitivo. Recomendo para qualquer restaurante!", author: "Ana, Gerente de Restaurante" },
    { stars: 5, comment: "A gestão de estoque em tempo real é um diferencial incrível.", author: "Roberto, Proprietário de Loja" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
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
              <button className="ml-4 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-2.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-cyan-100">
                Seja um Beta Tester
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Downloads Section */}
      <section className="pt-40 pb-28" id="downloads">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Baixe o <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Beta</span> Agora
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experimente o Caixa Fácil antes de todo mundo e revolucione sua gestão comercial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 hover:border-cyan-400 transition-all transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-2xl w-fit mb-6">
                  <download.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{download.platform}</h3>
                <p className="text-slate-600 mb-6">{download.description}</p>
                <a 
                  href={download.link}
                  className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-[1.02] transition-transform inline-block"
                  download
                >
                  Baixar para {download.platform}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Por que Baixar o Beta?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              O Caixa Fácil foi desenvolvido para simplificar a gestão do seu negócio. Aqui estão algumas razões para experimentar:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                <RocketLaunchIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Acesso Antecipado</h3>
              <p className="text-slate-600">Seja um dos primeiros a usar o Caixa Fácil e influencie o futuro do produto.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                <ShieldCheckIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Segurança Garantida</h3>
              <p className="text-slate-600">Criptografia bancária e backups automáticos para proteger seus dados.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                <CheckIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Funcionalidades Completas</h3>
              <p className="text-slate-600">Todas as ferramentas que você precisa para gerenciar seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              O que os Beta Testers Estão Dizendo
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Veja como o Caixa Fácil está transformando negócios como o seu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ratings.map((rating, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(rating.stars)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{rating.comment}"</p>
                <p className="text-slate-800 font-semibold">- {rating.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <h4 className="text-sm font-semibold mb-4">LINKS RÁPIDOS</h4>
              <ul className="space-y-3">
                <li><a href="#downloads" className="text-slate-400 hover:text-white">Downloads</a></li>
                <li><a href="#faqs" className="text-slate-400 hover:text-white">Perguntas</a></li>
                <li><a href="#cta" className="text-slate-400 hover:text-white">Inscreva-se</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">CONTATO</h4>
              <p className="text-slate-400">contato@caixafacil.com</p>
              <p className="text-slate-400">+55 11 98765-4321</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">REDES SOCIAIS</h4>
              <div className="flex space-x-4">
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
    </div>
  );
}