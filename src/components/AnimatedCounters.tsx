import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  value: string
  label: string
  suffix?: string
  prefix?: string
}

interface AnimatedCountersProps {
  className?: string
}

function Counter({ value, label, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasPlus = value.includes("+")

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      // Extrai valor numérico
      const numericValue = parseInt(value.replace(/[^\d]/g, ""))

      let current = 0
      const increment = numericValue / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 30)

      return () => clearInterval(timer)
    }
  }, [isInView, hasAnimated, value])

  return (
    <div ref={ref} className="text-center">
      <div className="relative inline-block">
        <div className="contador-glow text-5xl md:text-7xl font-bold text-white mb-2">
          {prefix}{count}{suffix}{hasPlus ? "+" : ""}
        </div>
        {/* Efeito de brilho/glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700] via-[#0066CC] to-[#FFD700] opacity-30 blur-xl rounded-full -z-10 animate-pulse" />
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  )
}

export function AnimatedCounters({ className = "" }: AnimatedCountersProps) {
  const counters = [
    { value: "100000+", label: "Alunos Formados" },
    { value: "14", label: "Anos de Experiência" },
    { value: "10", label: "Cursos Profissionalizantes" },
    { value: "50+", label: "Instrutores Especialistas" },
  ]

  return (
    <div className={`flex flex-wrap justify-center lg:justify-start gap-10 mb-10 ${className}`}>
      {counters.map((counter, index) => (
        <Counter
          key={index}
          value={counter.value}
          label={counter.label}
        />
      ))}
    </div>
  )
}
