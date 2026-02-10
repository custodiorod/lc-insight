import { useParams, Link } from "react-router-dom"
import { courses } from "@/data/courses"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, CheckCircle2, GraduationCap, Award, Clock, Calendar, DollarSign } from "lucide-react"
import TestimonialSlider from "@/components/ui/testimonial-slider"
import { CourseHeroImage } from "@/components/ui/course-hero-image"

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curso não encontrado</h1>
          <Link to="/">
            <Button>Voltar para página inicial</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/ic-logo.jpg" alt="Escola Campo Limpo Logo" className="h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/#cursos" className="hover:text-[#0066CC] transition-colors">Cursos</Link>
            <Link to="/#sobre" className="hover:text-[#0066CC] transition-colors">Sobre</Link>
            <Link to="/#depoimentos" className="hover:text-[#0066CC] transition-colors">Depoimentos</Link>
            <Link to="/#faq" className="hover:text-[#0066CC] transition-colors">FAQ</Link>
          </nav>
          <a
            href="https://api.whatsapp.com/send/?phone=5511915098380&text=Olá! Tenho interesse em saber mais sobre os cursos&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-lg transition-all duration-300 px-6 py-2 rounded-lg font-semibold"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#004499] via-[#0066CC] to-[#0088FF]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para cursos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="max-w-4xl">
              <div className="inline-block bg-[#FFD700] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Curso Profissionalizante
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                CURSO DE {course.title.toUpperCase()}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {course.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Clock className="h-5 w-5 mb-2" />
                  <div className="text-sm">Duração total</div>
                  <div className="font-bold">{course.duration}</div>
                  {course.consultTurmas && (
                    <div className="text-xs text-yellow-300 mt-1">Consultar disponibilidade de turmas</div>
                  )}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Calendar className="h-5 w-5 mb-2" />
                  <div className="text-sm">Frequência</div>
                  <div className="font-bold">{course.frequency}</div>
                  {course.consultTurmas && (
                    <div className="text-xs text-yellow-300 mt-1">Consultar disponibilidade de turmas</div>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Course Image */}
            <div className="flex justify-center lg:justify-end">
              <CourseHeroImage
                imageSrc={course.image}
                imageAlt={course.id}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Info & Form Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.benefits.map((benefit, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">O que você vai aprender</h2>
                <p className="text-gray-600 mb-8">
                  Com um conteúdo completo e voltado totalmente para a prática, você aprenderá todas as etapas
                  essenciais para se tornar um profissional qualificado e pronto para o mercado de trabalho.
                </p>
                <Accordion defaultValue={[]} className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border-2 rounded-lg px-4 hover:border-[#0066CC] transition-colors">
                      <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                        {module.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pt-2">
                          {module.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm">
                              <span className="text-[#0066CC] mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Salary Information */}
              {course.salary.length > 0 && (
                <div className="bg-gradient-to-br from-[#0066CC] to-[#0088FF] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <DollarSign className="h-8 w-8" />
                    <h2 className="text-2xl md:text-3xl font-bold">Quanto ganha um profissional?</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.salary.map((info, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-2">{info.service}</h3>
                        <div className="text-3xl font-bold text-[#FFD700] mb-2">{info.value}</div>
                        <p className="text-sm text-blue-100">{info.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Inscreva-se agora</CardTitle>
                    <CardDescription>Preencha seus dados e entraremos em contato</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Seu nome completo"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Seu e-mail"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Seu WhatsApp"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 text-lg py-6">
                        Quero me inscrever!
                      </Button>
                    </form>
                    <div className="mt-6 text-center">
                      <a
                        href={`https://api.whatsapp.com/send/?phone=5511915098380&text=Olá! Tenho interesse no curso de ${encodeURIComponent(course.title)}&type=phone_number&app_absent=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold hover:scale-105 transition-transform"
                      >
                        <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                          </svg>
                        </div>
                        WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="h-5 w-5 text-[#0066CC]" />
                    <span>Certificado reconhecido nacionalmente</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="h-5 w-5 text-[#0066CC]" />
                    <span>Aulas 100% práticas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider
        testimonials={[
          { name: "Carlos Silva", course: course.title, text: "Ótimo curso! Aprendi muito na prática e hoje estou trabalhando na área.", id: 1 },
          { name: "Ana Santos", course: course.title, text: "O curso mudou minha vida. Hoje tenho meu próprio negócio.", id: 2 },
          { name: "João Oliveira", course: course.title, text: "Excelente formação. Os professores são muito experientes.", id: 3 },
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion defaultValue={[]} className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  Posso começar sem experiência?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Todos os nossos cursos são desenhados para quem está começando do zero.
                  Você aprenderá desde os fundamentos até as práticas avançadas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  O curso inclui material didático?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Todo o material didático necessário está incluso no valor do curso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  Quais são as formas de pagamento?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oferecemos diversas formas de pagamento facilitado, incluindo parcelamento
                  no cartão de crédito e descontos à vista.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#004499] via-[#0066CC] to-[#0088FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quer saber mais?</h2>
            <p className="text-xl mb-8 text-blue-100">Entre em contato conosco e tire todas as suas dúvidas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 text-lg px-8">
                Falar com consultor
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg px-8">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <img src="/logo-rodape.png" alt="Escola Campo Limpo Logo" className="h-16 w-auto" />
              </div>
              <p className="text-gray-400 max-w-md mx-auto">
                Ensino profissionalizante na construção civil para adultos com ênfase na experiência e vivência prática.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 space-y-2">
            <p>@Escola Campo Limpo Treinamento em Desenvolvimento Profissional Ltda. Todos os direitos reservados.</p>
            <p>CNPJ 16.736.635/0001-91.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=5511915098380&text=Conheci+no+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+curso%3Fhttps%3A%2F%2Fescolaiccampolimpo.com.br%2Fgesso-acartonado-pintor-de-obras%2F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco pelo WhatsApp
        </span>
      </a>
    </div>
  )
}
