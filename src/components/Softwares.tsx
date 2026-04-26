import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, BarChart3, Lock, Download, Sparkles } from 'lucide-react'

const softwares = [
  {
    icon: MessageSquare,
    name: 'Innovation IA CRM',
    description:
      'Plataforma desktop premium de comunicação e automação inteligente. Integre múltiplos provedores de IA (OpenAI, Gemini) com suas próprias chaves API. Processamento 100% local e privado.',
    features: ['Chat Inteligente', 'Automação de Mensagens', 'CRM Integrado', 'Processamento Local'],
    status: 'Disponível',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    gradient: 'from-cyan-400 to-blue-600',
    badge: 'Produto do Grupo',
  },
  {
    icon: BarChart3,
    name: 'Analytics IA',
    description:
      'Dashboard inteligente para análise de dados e métricas do seu negócio. Transforme dados em decisões com o poder da inteligência artificial.',
    features: ['Relatórios Automáticos', 'Previsões de Vendas', 'Análise de Comportamento', 'Integração com CRM'],
    status: 'Em Desenvolvimento',
    statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    gradient: 'from-purple-400 to-purple-600',
    badge: null,
  },
  {
    icon: Lock,
    name: 'SecureFlow',
    description:
      'Módulo de segurança premium que transforma a natureza local do software em uma fortaleza digital. Criptografia de dados com senha mestra, backup automático e auditoria completa.',
    features: ['Criptografia Local com Senha Mestra', 'Backup Automático', 'Conformidade LGPD', 'Auditoria Completa'],
    status: 'Em Breve',
    statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    gradient: 'from-pink-400 to-pink-600',
    badge: null,
  },
]

export default function Softwares() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="softwares" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Nossos Softwares</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Produtos <span className="text-gradient">Innovation IA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            O <strong className="text-white">Innovation IA</strong> faz parte do grupo Prosolution, desenvolvendo
            ferramentas poderosas e acessíveis para impulsionar o crescimento do seu negócio com IA e automação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwares.map((software, index) => (
            <motion.div
              key={software.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-pro-cyan/30 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${software.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <software.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`px-3 py-1 text-xs rounded-full border ${software.statusColor}`}>
                  {software.status}
                </span>
              </div>

              {software.badge && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pro-cyan/10 border border-pro-cyan/30 text-pro-cyan text-xs font-semibold mb-4 w-fit">
                  <Sparkles className="w-3 h-3" />
                  {software.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3">{software.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{software.description}</p>

              <ul className="space-y-2 mb-6">
                {software.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${software.gradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {software.status === 'Disponível' ? (
                <a
                  href="https://wa.me/5515998216626?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Innovation%20IA%20CRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Saiba Mais
                </a>
              ) : (
                <button
                  disabled
                  className="w-full px-6 py-3 bg-white/5 text-gray-500 font-semibold rounded-xl cursor-not-allowed text-sm border border-white/5"
                >
                  Em Breve
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

