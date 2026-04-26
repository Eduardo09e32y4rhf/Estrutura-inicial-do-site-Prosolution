import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const members = [
  {
    name: 'Anderson Oliveira',
    role: 'Co-Fundador & Gestão',
    description: 'Especialista em finanças e gestão empresarial. Anderson lidera a estratégia financeira da Prosolution, garantindo solidez e crescimento sustentável em todas as operações.',
    image: 'img/anderson.jpeg',
  },
  {
    name: 'Eduardo Silva',
    role: 'Co-Fundador & Tecnologia',
    description: 'Desenvolvedor fullstack com experiência em finanças, desenvolvimento de sistemas e segurança da informação. Eduardo é o responsável pela inovação tecnológica e infraestrutura digital da Prosolution.',
    image: 'img/eduardo.jpeg',
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="acionistas" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Liderança</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Arquitetos da <span className="text-gradient">Inovação</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Nossos acionistas e líderes executivos são visionários com histórico comprovado em disrupção tecnológica
            e crescimento exponencial.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 w-full max-w-[320px] text-center border border-white/5 hover:border-pro-cyan/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pro-cyan to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 shadow-2xl"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 font-orbitron">{member.name}</h3>
              <p className="text-pro-cyan font-semibold text-sm mb-3 tracking-widest uppercase">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed px-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

