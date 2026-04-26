import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    text: 'A Prosolution cuida de toda a contabilidade da minha empresa. Finalmente posso focar no crescimento do negócio sem me preocupar com burocracia fiscal.',
    author: 'Carlos Eduardo',
    role: 'Proprietário, Mercado Silva',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    text: 'Contratamos o serviço de RH e em duas semanas encontramos o funcionário ideal. O processo foi rápido, profissional e muito mais barato que uma agência tradicional.',
    author: 'Patrícia Moraes',
    role: 'Gestora, Café & Cia',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    text: 'A landing page que a Prosolution desenvolveu aumentou em 3x os meus leads. Hospedagem em VPS dedicado faz toda a diferença na velocidade de carregamento.',
    author: 'Ricardo Almeida',
    role: 'Consultor Imobiliário',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    text: 'Implementamos o CRM de automação e reduzimos em 60% o tempo gasto com atendimento ao cliente. A Prosolution entendeu exatamente o que precisávamos.',
    author: 'Fernanda Lima',
    role: 'Diretora, Estética Bella',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    text: 'Desde a contabilidade até a presença digital, a Prosolution é nossa parceira estratégica. É como ter um time completo por uma fração do custo.',
    author: 'André Castro',
    role: 'Fundador, Auto Peças Castro',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    text: 'O sistema de gestão financeira desenvolvido sob medida organizou nossas finanças de um jeito que planilhas nunca conseguiram. Investimento que se pagou em 2 meses.',
    author: 'Mariana Souza',
    role: 'CEO, Moda Urbana',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

const SLIDE_INTERVAL = 5000

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section id="depoimentos" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-pro-cyan font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Validação do <span className="text-gradient">Sistema</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A prova de nossa eficácia reside nos resultados. Veja o que nossos parceiros dizem sobre a performance
            e o impacto da Prosolution em suas operações.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="glass-strong rounded-2xl border border-pro-blue/50 shadow-[0_0_20px_rgba(0,71,171,0.3)] overflow-hidden">
            <div className="relative h-[320px] sm:h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12 text-center"
                >
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-pro-cyan"
                  />
                  <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed mb-4 max-w-2xl">
                    "{testimonials[current].text}"
                  </p>
                  <h4 className="text-pro-cyan font-orbitron text-sm font-semibold">
                    — {testimonials[current].author}, {testimonials[current].role}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-pro-cyan scale-125 shadow-[0_0_8px_rgba(0,255,255,0.8)]'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

