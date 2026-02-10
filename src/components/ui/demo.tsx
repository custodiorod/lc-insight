"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Users, TrendingUp, Clock, Award } from "lucide-react";

const constructionCards = [
  {
    icon: <Users className="size-4 text-yellow-300" />,
    title: "+240 mil vagas",
    description: "Abertas no último ano em diferentes áreas",
    date: "Atualmente",
    iconClassName: "text-yellow-600",
    titleClassName: "text-yellow-600",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-yellow-300" />,
    title: "Salários competitivos",
    description: "De R$ 2.500 a R$ 12.000+",
    date: "Este ano",
    iconClassName: "text-yellow-600",
    titleClassName: "text-yellow-600",
    className:
      "[grid-area:stack] translate-x-16 translate-y-12 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Award className="size-4 text-yellow-300" />,
    title: "Alta demanda por certificados",
    description: "Que comprovam conhecimento técnico",
    date: "Hoje",
    iconClassName: "text-yellow-600",
    titleClassName: "text-yellow-600",
    className:
      "[grid-area:stack] translate-x-32 translate-y-24 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Clock className="size-4 text-yellow-300" />,
    title: "Economia de até 40%",
    description: "Para quem aplica o que aprende",
    date: "Agora",
    iconClassName: "text-yellow-600",
    titleClassName: "text-yellow-600",
    className:
      "[grid-area:stack] translate-x-48 translate-y-36 hover:translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-12">
      <div className="w-full max-w-3xl px-8">
        <DisplayCards cards={constructionCards} />
      </div>
    </div>
  );
}

export { DisplayCardsDemo };