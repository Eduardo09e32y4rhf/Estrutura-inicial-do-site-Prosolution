import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calculator, Users, Briefcase, Cpu, Rocket, Target, Sparkles } from 'lucide-react'

const events = [
  {
    year: '2023',
    phase: 'FASE 01',
    title: 'O Inicio',
    description: 'Prosolution nasceu como empresa de contabilidade para ajudar pequenos empreendedores.',
    icon: Calculator,
    gradient: 'from-emerald-400 to-emerald-600',
    stat1: '15+',
    label1: 'Clientes',
    stat2: 'Contabil',
    label2: 'Foco'
  },
  {
    year: '2024',
    phase: 'FASE 02',
    title: 'Expansao Estrategica',
    description: 'Anderson e Eduardo uniram forcas. Reestruturacao e diversificacao de servicos.',
    icon: Users,
    gradient: 'from-blue-400 to-blue-600',
    stat1: '3x',
    label1: 'Crescimento',
    stat2: '10+',
    label2: 'Parcerias'
  },
  {
    year: '2025',
    phase: 'FASE 03',
    title: 'Capital Humano',
    description: 'Lancamos RH e selecao. Conectando pequenas empresas aos melhores talentos.',
    icon: Briefcase,
    gradient: 'from-purple-400 to-purple-600',
    stat1: '200+',
    label1: 'Alocados',
    stat2: '80+',
    label2: 'Clientes RH'
  },
  {
    year: '2026',
    phase: 'FASE 04',
    title: 'Revolucao Digital',
    description: 'CRM, automacao, landing pages em VPS e sistemas sob medida.',
    icon: Cpu,
    gradient: 'from-pink-400 to-pink-600',
    stat1: '50+',
    label1: 'Projetos',
    stat2: '120+',
    label2: 'Landing Pages'
  },
  {
    year: 'Hoje',
    phase: 'PRESENTE',
    title: 'Ecossistema Prosolution',
    description: 'Ecossistema integrado de RH, contabilidade e tecnologia.',
    icon: Rocket,
    gradient: 'from-cyan-400 to-cyan-600',
    stat1: '400+',
    label1: 'Ativos',
    stat2: 'R$85K+',
    label2: 'Receita',
    featured: true
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="historia" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-pro-cyan" />
            <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Nossa Jornada</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Da <span className="text-gradient">Contabilidade</span> ao <span className="text-gradient">Ecossistema Digital</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Uma trajetoria de transformacao. Cada fase representa um salto na evolucao da Prosolution,
            sempre com o mesmo proposito: <strong className="text-white">empoderar pequenos empreendedores</strong>.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 lg:-translate-x-1/2 bg-gradient-to-b from-emerald-400 via-blue-500 via-purple-500 via-pink-500 to-cyan-400 rounded-full" />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0
            const Icon = event.icon
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
              >
                {/* Card */}
                <div className={`flex-1 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} pl-20 lg:pl-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 overflow-hidden group ${
                      event.featured
                        ? 'glass-strong border-pro-cyan/40 shadow-[0_0_40px_rgba(0,255,255,0.15)]'
                        : 'glass border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 ${
                      event.featured ? 'bg-pro-cyan/20 text-pro-cyan border border-pro-cyan/30' : 'bg-white/5 text-gray-400 border border-white/10'
                    }`}>
                      {event.phase}
                    </div>

                    <div className={`inline-flex items-center gap-2 text-3xl sm:text-4xl font-orbitron font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent mb-3`}>
                      {event.year}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-pro-cyan transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Stats */}
                    <div className={`grid grid-cols-2 gap-3 pt-5 border-t ${event.featured ? 'border-pro-cyan/20' : 'border-white/5'}`}>
                      <div className={`text-center p-3 rounded-xl ${event.featured ? 'bg-pro-cyan/5' : 'bg-white/5'}`}>
                        <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                          {event.stat1}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{event.label1}</div>
                      </div>
                      <div className={`text-center p-3 rounded-xl ${event.featured ? 'bg-pro-cyan/5' : 'bg-white/5'}`}>
                        <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                          {event.stat2}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{event.label2}</div>
                      </div>
                    </div>

                    {event.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-pro-cyan/20 border border-pro-cyan/30">
                          <Sparkles className="w-3 h-3 text-pro-cyan" />
                          <span className="text-xs text-pro-cyan font-semibold">Atual</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 mt-8">
                  <motion.div whileHover={{ scale: 1.2 }} className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${event.gradient} p-[2px] shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            )
          })}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 text-center border border-pro-cyan/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-500 via-purple-500 via-pink-500 to-cyan-400" />

            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">Nossa Missao</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Democratizar o acesso a servicos de qualidade para <strong className="text-white">pequenos empreendedores</strong>,
              oferecendo solucoes em <strong className="text-white">RH, contabilidade e tecnologia</strong> que os colocam
              no mesmo patamar dos grandes players do mercado.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['RH & Selecao', 'Contabilidade', 'Landing Pages', 'CRM & Automacao'].map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-pro-cyan/20 text-sm text-gray-300">
                  <Target className="w-4 h-4 text-pro-cyan" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

