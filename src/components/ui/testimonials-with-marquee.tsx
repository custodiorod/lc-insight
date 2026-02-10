import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollLeft = () => {
    setScrollPosition(prev => Math.max(0, prev - 350))
  }

  const scrollRight = () => {
    setScrollPosition(prev => prev + 350)
  }

  return (
    <section className={cn(
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="text-3xl font-semibold leading-tight text-[#FFD700] sm:text-5xl sm:leading-tight whitespace-nowrap">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-200 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center">
          {/* Botões de navegação */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FFD700] text-[#003366] shadow-lg hover:bg-[#FFA500] hover:scale-110 transition-all duration-300 flex items-center justify-center group-hover:z-40"
            aria-label="Scroll para esquerda"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FFD700] text-[#003366] shadow-lg hover:bg-[#FFA500] hover:scale-110 transition-all duration-300 flex items-center justify-center group-hover:z-40"
            aria-label="Scroll para direita"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>

          <div
            className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:120s]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row transition-transform duration-500"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {[...Array(8)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-[#003366] to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-[#003366] to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}
