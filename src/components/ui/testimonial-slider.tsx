"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  course: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  { id: 1, name: "Carlos Silva", course: "Eletricista Instalador", text: "Ótimo curso! Aprendi muito na prática e hoje estou trabalhando na área." },
  { id: 2, name: "Ana Santos", course: "Reparos e Reformas", text: "O curso mudou minha vida. Hoje tenho meu próprio negócio de reparos." },
  { id: 3, name: "João Oliveira", course: "Mestre de Obras", text: "Excelente formação. Os professores são muito experientes e o material é completo." },
  { id: 4, name: "Maria Souza", course: "Ar-Condicionado", text: "Consegui meu primeiro emprego logo após terminar o curso. Super recomendo!" },
  { id: 5, name: "Pedro Costa", course: "Energia Solar", text: "O mercado está crescendo muito e o curso me preparou exatamente o que precisava." },
  { id: 6, name: "Luciana Mendes", course: "Gesso Acartonado", text: "Aulas práticas e profissionais qualificados. Valeu cada minuto investido." },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials = defaultTestimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);
      
      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex, testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex >= maxIndex) {
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex <= 0) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + direction);
        }
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, windowWidth, direction, testimonials.length]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext();
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <section className="py-20 bg-[#003366] relative" style={{ zIndex: 0 }}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFD700]/20 text-[#FFD700] font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-[#FFD700]">Veja o que dizem nossos alunos</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Histórias reais de sucesso que transformaram vidas através dos nossos cursos profissionalizantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mt-6"></div>
        </motion.div>

        <div className="relative" style={{ zIndex: 20 }}>
          <div className="flex justify-end absolute -top-12 right-0 space-x-2 z-30">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-3 rounded-full ${
                canGoPrev 
                  ? 'bg-[#FFD700] shadow-md hover:bg-[#FFA500] text-[#003366]' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-3 rounded-full ${
                canGoNext 
                  ? 'bg-[#FFD700] shadow-md hover:bg-[#FFA500] text-[#003366]' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="relative px-2 md:px-4 py-2" style={{ zIndex: 1 }}>
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20
              }}
              style={{ width: `${testimonials.length * (100 / visibleCount)}%` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-2 py-2 ${
                    visibleCount === 3 ? 'w-1/3' :
                    visibleCount === 2 ? 'w-1/2' : 'w-full'
                  }`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                  style={{ cursor: 'grab' }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl p-6 h-full bg-white border border-[#FFD700]/50 shadow-lg hover:shadow-xl hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-1"
                    style={{ zIndex: 10 }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-10">
                      <Quote size={60} className="text-[#FFD700]" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-gray-700 font-medium mb-6 leading-relaxed text-base">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              src={`https://picsum.photos/seed/${testimonial.name.replace(/\s+/g, '')}/40/40.jpg`}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-[#FFD700] shadow-sm"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div 
                              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white font-bold text-lg"
                              style={{ display: 'none' }}
                            >
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.course}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
              
          <div className="flex justify-center mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }, (_: any, index: any) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative mx-1 focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Ir para depoimento ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex 
                      ? 'bg-[#FFD700]' 
                      : 'bg-gray-400'
                  }`}
                  animate={{ 
                    scale: index === currentIndex ? [1, 1.2, 1] : 1
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatDelay: 1
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#0066CC]/30"
                    animate={{ 
                      scale: [1, 1.8],
                      opacity: [1, 0] 
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;