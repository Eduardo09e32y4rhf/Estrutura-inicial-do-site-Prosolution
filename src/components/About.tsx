import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Gestão Financeira',
  },
  {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Recrutamento & Seleção',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Análise de Dados',
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Reuniões Estratégicas',
  },
  {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Planejamento Digital',
  },
  {
    url: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Trabalho em Equipe',
  },
  {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Inovação & Tecnologia',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Apresentação de Resultados',
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000',
    caption: 'Desenvolvimento de Talentos',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = 4000
    const duration = 2000
    const steps = 100
    const increment = target / steps
    const intervalTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.round(currentStep * increment), target))
      if (currentStep >= steps) clearInterval(timer)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isInView])

  return (
    <section id="sobre" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Nossa Missão</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Sistema Operacional do <span className="text-gradient">Futuro</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            A Prosolution nasceu em 2023 como uma empresa de contabilidade dedicada a pequenos empreendedores.
            Com o tempo, percebemos que nossos clientes precisavam de muito mais: gestão de pessoas, tecnologia e presença digital.
            Hoje, somos um ecossistema completo que une <strong className="text-white">RH, contabilidade e soluções digitais</strong> —
            tudo para que o pequeno empreendedor tenha as mesmas ferramentas dos grandes players.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="overflow-hidden py-8"
        >
          <div className="flex animate-scroll-loop hover:[animation-play-state:paused]" style={{ width: '200%' }}>
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="relative w-80 h-48 flex-shrink-0 mx-3 rounded-xl overflow-hidden group border border-pro-cyan/20 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-500 hover:scale-105"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-xs font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 py-4 px-6 text-center font-orbitron text-xl sm:text-2xl bg-pro-blue/30 text-pro-cyan border-y border-pro-cyan/50 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
        >
          +{count.toLocaleString('pt-BR')} Clientes Atendidos
        </motion.div>
      </div>
    </section>
  )
}
