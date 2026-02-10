import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, GraduationCap, Award, Users, MapPin, Zap, Wrench, HardHat } from "lucide-react"
import { courses } from "@/data/courses"
import CoursePage from "@/pages/CoursePage"
import TestimonialSlider from "@/components/ui/testimonial-slider"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { FeaturesSectionWithCardGradient } from "@/components/ui/features-section-gradient"
import { RemotionHeroPlayer, RemotionConstructionPlayer } from "@/components/RemotionPlayer"
import { AnimatedCourseCard } from "@/components/AnimatedCourseCard"
import { motion } from "framer-motion"


const testimonials = [
  {
    name: "Carlos Silva",
    course: "Eletricista Instalador",
    text: "Ótimo curso! Aprendi muito na prática e hoje estou trabalhando na área.",
  },
  {
    name: "Ana Santos",
    course: "Reparos e Reformas",
    text: "O curso mudou minha vida. Hoje tenho meu próprio negócio de reparos.",
  },
  {
    name: "João Oliveira",
    course: "Mestre de Obras",
    text: "Excelente formação. Os professores são muito experientes e o material é completo.",
  },
]

function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const careerReasons = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      value: "+240 mil",
      description: "vagas abertas no último ano em diferentes áreas da construção",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "R$ 2.500 - R$ 12.000+",
      description: "salários competitivos para profissionais qualificados",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "Alta demanda",
      description: "por certificados que comprovam conhecimento técnico e segurança",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      value: "Economia de até 40%",
      description: "para quem aplica o que aprende em obras próprias",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "Demanda constante",
      description: "serviços como elétrica, hidráulica, pintura e alvenaria em todas as regiões do país",
    },
  ]

  const reasons = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Aprendizado Mão na Massa",
      description: "Nada de teoria sem aplicação. Você aprende diretamente na prática, usando ferramentas e técnicas reais do dia a dia das obras.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificação com Credibilidade",
      description: "Ao concluir o curso, você recebe um certificado reconhecido nacionalmente, com QR Code para validação.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Instrutores que Vivem o Mercado",
      description: "Nossos professores atuam no setor, trazendo experiência real, dicas práticas e situações do cotidiano.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Empregabilidade Imediata",
      description: "A demanda por profissionais qualificados só cresce. Com nossos cursos, você se torna apto a trabalhar rapidamente.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Localização de Fácil Acesso",
      description: "A unidade Curitiba - PR está próxima a pontos de transporte público e vias principais, facilitando a rotina do aluno.",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Mais de 90 Mil Histórias de Sucesso",
      description: "Ao longo dos anos, milhares de alunos transformaram suas carreiras estudando conosco.",
    },
  ]



  const heroChecklist = [
    { icon: <CheckCircle2 className="h-5 w-5 flex-shrink-0" />, text: "Instituição reconhecida", shortText: "Instituição reconhecida" },
    { icon: <CheckCircle2 className="h-5 w-5 flex-shrink-0" />, text: "Certificação válida nacionalmente", shortText: "Certificação nacional" },
    { icon: <CheckCircle2 className="h-5 w-5 flex-shrink-0" />, text: "Cursos práticos", shortText: "Cursos práticos" },
    { icon: <CheckCircle2 className="h-5 w-5 flex-shrink-0" />, text: "Comece do zero", shortText: "Comece do zero" },
  ]



  const certificateFeatures = [
    "Reconhecido Nacionalmente",
    "QR Code de Validação",
    "Certificado Digital",
    "Credibilidade no Mercado",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center">
            <img src="/ic-logo.jpg" alt="Escola Campo Limpo Logo" className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#cursos" className="hover:text-[#0066CC] transition-colors">Cursos</a>
            <a href="#sobre" className="hover:text-[#0066CC] transition-colors">Sobre</a>
            <a href="#depoimentos" className="hover:text-[#0066CC] transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-[#0066CC] transition-colors">FAQ</a>
          </nav>
          <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section com Vídeo Animado Remotion */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004499] via-[#0066CC] to-[#0088FF] pt-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Remotion Video Banner */}
          <div className="max-w-6xl mx-auto mb-12">
            <RemotionHeroPlayer
              title="Profissionalize-se na Construção Civil"
              subtitle="Cursos completos e certificação oficial em todo o Brasil"
              className="shadow-2xl"
            />
          </div>

          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 text-lg px-8 animate-fade-in-up">
                Falar com um consultor
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg px-8 animate-fade-in-up">
                Ver cursos
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-left max-w-3xl mx-auto">
              {heroChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 animate-fade-in-up">
                  {item.icon}
                  <span className="text-xs md:text-sm font-medium leading-tight">
                    <span className="hidden md:inline">{item.text}</span>
                    <span className="md:hidden">{item.shortText}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Se especialize com quem entende do assunto</h2>
            <p className="text-lg text-gray-600">O Instituto da Construção está pronto para te preparar pro mercado!</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <AnimatedCourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                shortDescription={course.shortDescription}
                fullDescription={course.fullDescription}
                image={course.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Career Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HardHat className="h-10 w-10 text-[#0066CC]" />
              <h2 className="text-3xl md:text-4xl font-bold">Por que se profissionalizar na Construção Civil agora?</h2>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              O setor segue em constante crescimento e precisa cada vez mais de profissionais preparados,
              o que abre portas para quem busca oportunidade imediata e qualificação prática.
            </p>

            {/* Remotion Construction Animation */}
            <div className="flex justify-center mb-12">
              <RemotionConstructionPlayer className="shadow-xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerReasons.map((reason, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#FFD700]"
                >
                  <div className="flex items-center gap-3 mb-4 text-[#0066CC]">
                    {reason.icon}
                    <h3 className="text-2xl font-bold text-[#FFD700]">{reason.value}</h3>
                  </div>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-[#003366]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700]">Sobre o Instituto da Construção</h1>
            <h2 className="text-lg text-gray-200 leading-relaxed">
              Esteja você iniciando na área ou procurando uma especialização para subir o nível da sua carreira,
              o Instituto da Construção tem o curso que você precisa. São várias opções de cursos práticos como
              Eletricista, Mestre de Obras, Pedreiro e Instalador de Ar-Condicionado.
            </h2>
          </div>


          {/* Features Section */}
          <FeaturesSectionWithCardGradient />


        </div>
      </section>

      {/* Why Choose IC Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o Instituto da Construção?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Há mais de uma década formamos profissionais preparados para atuar de verdade na construção civil.
              Com metodologia prática, estrutura completa e cursos atualizados, oferecemos o caminho mais rápido
              e seguro para quem quer entrar ou crescer na área.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="relative min-h-[14rem] list-none">
                <div className="relative h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                    variant={index % 2 === 0 ? "blue" : "gold"}
                  />
                  {/* Grid Pattern Element */}
                  <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-blue-100/20 to-yellow-100/20 opacity-30">
                      <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                        <defs>
                          <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse" x="-12" y="4">
                            <path d={`M.5 20V.5H20`} fill="none" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#grid-${index})`} />
                        <svg x="-12" y="4" className="overflow-visible">
                          {[7, 8, 9, 10, 11].map((x, i) => (
                            <rect
                              strokeWidth="0"
                              key={`${x}-${i}`}
                              width="21"
                              height="21"
                              x={x * 20}
                              y={i * 20}
                              className="fill-blue-200/20"
                            />
                          ))}
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                    <div className="flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg bg-blue-50 p-3">
                        <div className="text-[#0066CC]">
                          {reason.icon}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold leading-tight text-gray-900">
                          {reason.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider testimonials={testimonials.map((t, index) => ({ ...t, id: index + 1 }))} />

      {/* Certificate Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#0066CC] to-[#0088FF] rounded-2xl p-12 text-white">
              <Award className="h-20 w-20 mx-auto mb-6 text-[#FFD700]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos Certificados</h2>
              <p className="text-xl mb-8">Conquiste um certificado reconhecido em todo o Brasil.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certificateFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <CheckCircle2 className="h-6 w-6 mx-auto mb-2 text-[#FFD700]" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
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
                  Você aprenderá desde os fundamentos até as práticas avançadas, sempre com
                  acompanhamento de instrutores experientes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  Os cursos possuem certificado?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Todos os nossos cursos oferecem certificado reconhecido nacionalmente,
                  com QR Code para validação online. O certificado é emitido após conclusão
                  do curso com aproveitamento mínimo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  Quais são as formas de pagamento?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oferecemos diversas formas de pagamento facilitado, incluindo parcelamento
                  no cartão de crédito e descontos à vista. Consulte nosso time de vendas para
                  conhecer as condições especiais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  Quais são as turmas disponíveis?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Trabalhamos com turmas em diferentes horários, incluindo opções intensivas
                  e extensivas. Entre em contato para verificar a disponibilidade de turmas
                  para o curso de seu interesse.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-2 rounded-lg px-6 bg-white hover:border-[#0066CC] transition-colors">
                <AccordionTrigger className="text-left font-semibold hover:text-[#0066CC] transition-colors">
                  O material didático está incluso?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Todo o material didático necessário está incluso no valor do curso.
                  Você receberá apostilas, acesso a materiais complementares e EPIs quando
                  necessário para as práticas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-br from-[#004499] via-[#0066CC] to-[#0088FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Garanta sua vaga agora mesmo!</h2>
            <p className="text-xl mb-8 text-blue-100">Turmas limitadas - Não perca essa oportunidade</p>
            <div className="bg-white rounded-2xl p-8 max-w-xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preencha seus dados</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu WhatsApp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all appearance-none bg-white"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                  >
                    <option value="">Selecione o curso de interesse</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/80 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 text-lg py-6">
                  Quero minha vaga!
                </Button>
              </form>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="#" className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold hover:scale-105 transition-transform">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
</svg>
                  </div>
                  WhatsApp
                </a>
              </div>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curso/:courseId" element={<CoursePage />} />
    </Routes>
  )
}

export default App
