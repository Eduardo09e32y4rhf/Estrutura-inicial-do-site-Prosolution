import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react'

const socials = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5515998216626',
    icon: MessageCircle,
    color: 'text-green-400 hover:text-green-300',
    bg: 'bg-green-500/20 hover:bg-green-500/30',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/prosolutionsbr/',
    icon: Instagram,
    color: 'text-pink-400 hover:text-pink-300',
    bg: 'bg-pink-500/20 hover:bg-pink-500/30',
  },
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
    color: 'text-blue-400 hover:text-blue-300',
    bg: 'bg-blue-500/20 hover:bg-blue-500/30',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/prosolutiontecnologia/?_l=pt_BR',
    icon: Linkedin,
    color: 'text-cyan-400 hover:text-cyan-300',
    bg: 'bg-cyan-500/20 hover:bg-cyan-500/30',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contato" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Conexão Direta</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Fale com a <span className="text-gradient">Prosolution</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Para interações imediatas, nossa equipe de suporte e vendas está disponível nas seguintes plataformas.
            O futuro não espera.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto mb-12 border border-green-500/20"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-500/20 flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Atendimento via WhatsApp</h3>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
            Nosso canal oficial de comunicação. Clique no botão abaixo e fale diretamente conosco.
          </p>
          <a
            href="https://wa.me/5515998216626?text=Olá%20Prosolution!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl ${social.bg} transition-all duration-300 hover:scale-105 border border-white/5`}
            >
              <social.icon className={`w-6 h-6 ${social.color}`} />
              <span className={`font-semibold ${social.color}`}>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

