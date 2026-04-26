import { motion } from 'framer-motion'
import { ArrowDown, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="w-2 h-2 bg-pro-cyan rounded-full animate-pulse" />
            <span className="text-sm text-pro-cyan font-medium">Tecnologia de Próxima Geração</span>
          </div>

          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Conectando{' '}
            <span className="text-gradient">Tecnologia</span>
            <br />
            e Inovação
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em soluções digitais poderosas, estabelecendo novos padrões de eficiência
            e escalabilidade no mercado global de TI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#servicos" className="btn-primary text-center flex items-center justify-center gap-2">
              <Cpu className="w-5 h-5" />
              Nossos Serviços
            </a>
            <a href="#softwares" className="btn-glass text-center">
              Conheça o Innovation IA
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-pro-cyan font-orbitron">+4.000</div>
              <div className="text-sm text-gray-500 mt-1">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-pro-cyan font-orbitron">24/7</div>
              <div className="text-sm text-gray-500 mt-1">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-pro-cyan font-orbitron">100%</div>
              <div className="text-sm text-gray-500 mt-1">Foco em Resultados</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#servicos" className="flex flex-col items-center gap-2 text-gray-500 hover:text-pro-cyan transition-colors">
            <span className="text-sm">Rolar para baixo</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

