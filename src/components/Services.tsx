import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calculator, Users, Code2, Globe, HeadphonesIcon, LayoutTemplate, CheckCircle } from 'lucide-react'

const mainServices = [
  {
    icon: Calculator,
    title: 'Contabilidade Completa',
    description: 'Serviços contábeis de ponta para pequenas e médias empresas. Desde a escrituração fiscal até consultoria financeira, cuidamos de toda sua gestão.',
    gradient: 'from-emerald-400 to-emerald-600',
    features: [
      'Escrituração Fiscal & EFD',
      'Folha de Pagamento',
      'Gestão de Impostos',
      'Planejamento Tributário',
      'Análise Financeira',
      'Conformidade Fiscal'
    ],
    highlight: true,
    metric: '500+ empresas confiam',
  },
  {
    icon: Users,
    title: 'RH & Gestão de Pessoas',
    description: 'Solução completa em recursos humanos: desde recrutamento até consultoria. Encontramos os melhores talentos e gerenciamos sua equipe com eficiência.',
    gradient: 'from-purple-400 to-purple-600',
    features: [
      'Recrutamento & Seleção',
      'Gestão de Talentos',
      'Folha de Pagamento',
      'Consultoria RH',
      'Treinamento & Desenvolvimento',
      'Alocação de Profissionais'
    ],
    highlight: true,
    metric: '200+ profissionais alocados',
  },
  {
    icon: Code2,
    title: 'Soluções em Tecnologia',
    description: 'Desenvolvimento de software customizado, CRM, automação e presença digital. Tecnologia de ponta para impulsionar seu negócio para o próximo nível.',
    gradient: 'from-cyan-400 to-blue-500',
    features: [
      'Desenvolvimento de Software',
      'Landing Pages em VPS',
      'CRM & Automação',
      'Integração de Sistemas',
      'Consultoria Digital',
      'Suporte Técnico 24/7'
    ],
    highlight: true,
    metric: '45+ projetos entregues',
  },
]

const additionalServices = [
  {
    icon: Globe,
    title: 'Landing Pages em VPS',
    description: 'Páginas de alta conversão hospedadas em VPS dedicado. Performance e segurança garantidas.',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'CRM & Automação',
    description: 'Automação inteligente para gerenciar leads e otimizar seus processos de vendas.',
    gradient: 'from-pink-400 to-pink-600',
  },
  {
    icon: LayoutTemplate,
    title: 'Consultoria Digital',
    description: 'Estratégias de transformação digital para levar seu negócio ao próximo patamar.',
    gradient: 'from-blue-400 to-indigo-500',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Soluções Completas</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Três pilares estratégicos que formam o ecossistema completo da Prosolution.
            <strong className="text-white"> Contabilidade, RH e Tecnologia</strong> — tudo que você precisa para crescer.
          </p>
        </motion.div>

        {/* MAIN SERVICES - 3 CARROS-CHEFES */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glow background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl blur-2xl transition-opacity duration-500`} />
              
              {/* Card principal */}
              <div className="relative glass rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-pro-cyan/30 transition-all duration-300 group-hover:-translate-y-3 h-full flex flex-col overflow-hidden">
                
                {/* Badge metric */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-pro-cyan/20 to-blue-500/20 px-3 py-1 rounded-full border border-pro-cyan/30 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-pro-cyan">{service.metric}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 flex-grow">{service.description}</p>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300`}
                >
                  Saiba Mais
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ADDITIONAL SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Serviços Complementares</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-pro-cyan/30"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-strong rounded-3xl p-12 text-center border border-pro-cyan/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Converse com nossos consultores e descubra como a Prosolution pode impulsionar seu crescimento.
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-pro-cyan to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
          >
            Solicite uma Consultoria Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
