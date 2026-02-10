import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "+100 Mil Formados",
      description:
        "Mais de 100 mil alunos formados desde 2011, transformando vidas através da educação profissionalizante.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Cursos Práticos",
      description:
        "Metodologia 'mão na massa' com laboratórios equipados e simulações reais do ambiente de trabalho.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Certificado Nacional",
      description:
        "Certificado reconhecido em todo o Brasil com QR Code para validação online.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Instrutores Experientes",
      description:
        "Professores que atuam no mercado, trazendo experiência real e conhecimento prático.",
      icon: <IconCloud />,
    },
    {
      title: "Turmas Reduzidas",
      description:
        "Aulas em pequenos grupos para garantir atenção individualizada e melhor aprendizado.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Empregabilidade",
      description:
        "Alta demanda no mercado com taxas de empregabilidade superiores a 85% para nossos alunos.",
      icon: <IconHelp />,
    },
    {
      title: "Flexibilidade",
      description:
        "Opções de cursos intensivos e extensivos para adaptar à sua rotina e disponibilidade.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Apoio ao Aluno",
      description:
        "Acompanhamento pedagógico e suporte administrativo durante toda sua jornada.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto px-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200 bg-[#FFD700]/10",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#FFD700]/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#FFD700]/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#0066CC]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#FFD700] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-700 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};