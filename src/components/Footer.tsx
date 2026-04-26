import { MessageCircle, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-orbitron text-xl font-bold text-pro-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
                Prosolution
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              De uma empresa de contabilidade a um ecossistema completo de RH, contabilidade e soluções digitais.
              A Prosolution democratiza o acesso a ferramentas de qualidade para pequenos empreendedores.
            </p>
            <p className="text-gray-500 text-sm">São Paulo - SP</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'História', href: '#historia' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Softwares', href: '#softwares' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Acionistas', href: '#acionistas' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pro-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Softwares</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Innovation IA CRM</span></li>
              <li><span className="text-gray-400 text-sm">Analytics IA</span></li>
              <li><span className="text-gray-400 text-sm">SecureFlow</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5515998216626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prosolutionsbr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @prosolutionsbr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/prosolutiontecnologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Prosolution - São Paulo - SP | CNPJ: 54.694.364/0001-48 | Versão 4.0.0
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5515998216626"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/prosolutionsbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 hover:bg-pink-500/30 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/prosolutiontecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

