import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "relative flex flex-col rounded-lg border-2 border-[#FFD700]/30",
        "bg-white",
        "p-6 text-start",
        "hover:shadow-xl hover:border-[#FFD700]",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Icone de citação decorativo */}
      <div className="absolute top-4 right-4 text-[#FFD700]/20">
        <Quote size={32} />
      </div>

      {/* Nome e curso */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#003366] leading-tight">
          {author.name}
        </h3>
        <p className="text-sm font-medium text-[#0066CC]">
          {author.handle}
        </p>
      </div>

      {/* Texto do depoimento */}
      <p className="text-base text-[#003366] leading-relaxed">
        "{text}"
      </p>

      {/* Badge decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] via-[#FFD700] to-[#0066CC] rounded-b-lg" />
    </Card>
  )
}
