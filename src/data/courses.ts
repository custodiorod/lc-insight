export interface Course {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  duration: string
  frequency: string
  price: string
  image: string
  benefits: string[]
  salary: Array<{
    service: string
    value: string
    description: string
  }>
  curriculum: Array<{
    title: string
    items: string[]
  }>
  consultTurmas?: boolean
}

export const courses: Course[] = [
  {
    id: "reparos",
    title: "Reparos e Reformas",
    shortDescription: "Aprenda, com segurança e responsabilidade, a executar reparos e instalações básicas em elétrica, pintura, hidráulica, alvenaria, revestimentos e outras áreas.",
    fullDescription: "O curso de Reparos e Reformas é ideal para quem quer aprender, com segurança e responsabilidade, a executar reparos e instalações básicas em elétrica, pintura, hidráulica, alvenaria, revestimentos e outras áreas, além de saber quando indicar um profissional para serviços mais complexos.",
    duration: "76h",
    frequency: "1x na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-reparos.png",
    consultTurmas: true,
    benefits: [
      "Parcelamento facilitado: Cursos com condições de pagamento que cabem no seu planejamento.",
      "Cursos certificados: Conquiste um certificado reconhecido em todo o Brasil.",
      "Ambientes Práticos: Aulas práticas 'Mão Na Massa' para você aprender mais.",
      "Professores experientes: Você vai ter aulas com quem trabalha na construção civil.",
    ],
    salary: [
      {
        service: "Diária",
        value: "R$ 250 - R$ 500",
        description: "O valor da diária do profissional de reparos rápidos, também conhecido como Marido de Aluguel.",
      },
      {
        service: "Por hora",
        value: "R$ 50 - R$ 100",
        description: "O valor cobrado por hora de serviço, conforme o serviço e desafios.",
      },
    ],
    curriculum: [
      {
        title: "Reparos gerais",
        items: [
          "Reparos e execuções simples em alvenaria",
          "Construção de base para armário",
          "Construção de jardineira",
          "Instalação de pias e bancadas",
          "Instalação de quadros e painéis",
          "Fixação de espelhos",
          "Colocação de vasos suspensos",
          "Dobradiças – função, tipos, instalação e manutenção",
          "Instalação e reparos em maçanetas e fechaduras",
          "Manutenção de calhas",
          "Manutenção em telhados",
          "Revestimentos para reposição",
          "Troca de rejuntes",
          "Coloração de rejuntes",
          "Troca de pisos e azulejos",
        ],
      },
      {
        title: "Reparos elétricos",
        items: [
          "Reparo em tacos de madeira",
          "Sistema elétrico residencial",
          "Troca de disjuntores em quadro de distribuição",
          "Troca de resistência do chuveiro",
          "Instalação de luminária comum",
          "Instalação de ventiladores de teto",
          "Troca de interruptores simples",
          "Troca de padrão de tomadas",
          "Extensão de tomadas",
          "Extensão de telefones",
          "Reparos em campainhas",
        ],
      },
      {
        title: "Reparos Hidráulicos",
        items: [
          "Instalação de torneiras simples e de bancada",
          "Troca de reparo de torneira",
          "Instalação de misturadores monocomando para lavatório",
          "Instalação de pedais acionadores de torneira",
          "Limpeza do sifão americano",
          "Troca do sifão simples",
          "Instalação de máquina de lavar instalação de ducha higiênica",
          "Troca de reparo em caixa acoplada de vasos sanitários",
          "Troca de válvulas de descarga em PVC e no sistema antigo",
          "Desentupimento de vasos sanitários",
          "Detecção e vazamentos na rede hidráulica residencial vedação de louça sanitária",
          "Limpeza da caixa d´água",
        ],
      },
      {
        title: "Reparos em Pintura",
        items: [
          "Fundos preparadores e seladores",
          "Pintura simples de paredes, tetos e calçada",
          "Efeitos decorativos",
          "Pintura anticorrosiva",
          "Pintura de azulejos",
          "Aplicação e remoção de papel de parede",
        ],
      },
    ],
  },
  {
    id: "eletricista",
    title: "Eletricista Instalador + NR10",
    shortDescription: "Praticando desde a entrada elétrica até instalações de tomadas, interruptores, fotocélulas e portões eletrônicos, usando todas as ferramentas, equipamentos e EPIs necessários.",
    fullDescription: "Você vai se profissionalizar em um laboratório que simula o ambiente real de trabalho, praticando desde a entrada elétrica até instalações de tomadas, interruptores, fotocélulas e portões eletrônicos, usando todas as ferramentas, equipamentos e EPIs necessários.",
    duration: "128h",
    frequency: "1x (extensivo) ou 2x (intensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-eletricista.png",
    consultTurmas: true,
    benefits: [
      "Certificado NR10 incluso",
      "Laboratório completo com equipamentos reais",
      "Instrutores com anos de experiência",
      "Material didático completo",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 2.500 - R$ 3.600",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 3.000 - R$ 7.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "NR10 - Módulos Fundamentais (Online)",
        items: [
          "Meio Ambiente",
          "Primeiros Socorros",
          "NR18 - Norma de Segurança no Trabalho",
          "Organização Financeira",
        ],
      },
      {
        title: "Projetos Elétricos",
        items: [
          "A importância dos conceitos básicos da eletricidade",
          "A energia elétrica e outros tipos de energia",
          "Condutividade elétrica e grandezas elétricas",
          "Frequência elétrica, circuitos série, paralelo e misto",
          "Linhas de Transmissão, Isoladores, transformadores de tensão, Subestação de energia",
          "Tipos de fornecimento de tensão",
          "A importância dos projetos elétricos",
          "Diagramas elétricos",
          "Simbologia",
        ],
      },
      {
        title: "Inspeção e Manutenção Elétrica",
        items: [
          "A inspeção elétrica e suas aplicações",
          "Práticas de manutenção elétrica",
          "Solucionando falhas elétricas",
        ],
      },
      {
        title: "Instalações Elétricas",
        items: [
          "Instalação de infraestrutura",
          "Eletrodutos, Eletrocalhas, Caixas de passagem e Conduletes",
          "Cabeamento elétrico e conexões",
          "Condutores, Conexões e Derivações, Isolação e instalação",
          "A instalação do padrão de entrada",
          "Caixas de Medição",
          "Sistema de Aterramento",
        ],
      },
      {
        title: "Instalação de tomadas e interruptores",
        items: [
          "Tipos e classificações",
        ],
      },
      {
        title: "Instalação de iluminação em geral",
        items: [
          "Tipos e Classificações",
          "Dimmer",
          "Sensores",
          "Fotocélula",
        ],
      },
      {
        title: "Chuveiro elétrico e ventiladores",
        items: [
          "Tipos e métodos de instalação",
        ],
      },
      {
        title: "Sistemas de controle de acesso",
        items: [
          "Interfone, campainhas e porteiro eletrônico",
          "Instalação de Quadro de Distribuição",
          "Componentes e montagem",
          "Sistema SPDA - Sistema de proteção contra descargas elétricas",
        ],
      },
      {
        title: "Bônus: Contatoras, Motores, Bombas",
        items: [],
      },
    ],
  },
  {
    id: "mestre-obras",
    title: "Mestre de Obras",
    shortDescription: "Aprendendo etapas da construção, sistemas construtivos, infraestrutura, acabamento, equipes, liderança e legislação.",
    fullDescription: "Você vai se profissionalizar em um ambiente que simula a realidade do trabalho, aprendendo etapas da construção, sistemas construtivos, infraestrutura, acabamento, equipes, liderança e legislação.",
    duration: "224h ou 128h",
    frequency: "1x (express) ou 2x (intensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-mestre.png",
    consultTurmas: true,
    benefits: [
      "Formação completa para gerenciar obras",
      "Aulas práticas em canteiro de obras simulado",
      "Certificação reconhecida nacionalmente",
      "Conteúdo atualizado com novas tecnologias",
    ],
    salary: [
      {
        service: "Ganhos",
        value: "R$ 6.000 - R$ 12.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "O Mundo da Construção Civil",
        items: [
          "História e evolução do canteiro de obras",
          "Tipos de obras",
          "Etapas da construção civil",
          "Os trabalhadores da construção civil",
          "Termos técnicos",
          "Tendências do mercado",
        ],
      },
      {
        title: "Entrega de Obra",
        items: [
          "Entrega técnica e oficial",
          "Inspeção e vistoria",
          "Cumprimentos e termos legais",
          "Formulários",
        ],
      },
      {
        title: "Patologias da Construção",
        items: [
          "Introdução",
          "Patologias em estrutura de concreto armado",
          "Bicheiras",
          "Infiltrações",
          "Armadura exposta",
          "Incidências no Brasil",
          "Patologias em Alvenarias",
          "Patologias de Revestimentos em fachadas de edifícios",
          "Pintura",
          "Revestimento de pedras",
          "Revestimento em porcelanato",
          "Revestimento em Madeira",
          "Cerâmicas",
        ],
      },
      {
        title: "Programação e Controle de Obras",
        items: [
          "Noções de orçamento e cronograma",
          "Noções de planejamento",
          "Logística e instalação do canteiro de obras",
          "Materiais e ferramentas",
        ],
      },
      {
        title: "Controle de Qualidade e Segurança",
        items: [
          "Código de obras e legislações",
          "Gestão ambiental e sustentabilidade",
          "Gestão de risco e segurança no trabalho",
          "Técnicas de qualidade no canteiro de obras",
        ],
      },
      {
        title: "Liderança de Equipes",
        items: [
          "Você é líder?",
          "Estilos de liderança",
          "Líder educador",
          "Como desenvolver a liderança?",
          "Motivação da equipe",
          "Trabalho em equipe",
          "Rotatividade de pessoal",
          "Absenteísmo",
          "Produtividade",
          "Dando ordens de forma eficiente",
          "Comunicação eficaz",
          "Administração de conflitos",
          "Administração do tempo",
          "Estresse no dia a dia",
        ],
      },
      {
        title: "Matemática para a Construção Civil",
        items: [
          "Tabuada",
          "Construindo a tabuada",
          "Área de figuras planas e medidas de superfícies",
          "Medias de volume",
          "Metro cúbico",
          "Medias de capacidade",
          "Transformação de unidade de medida",
          "Razão proporção e grandeza",
          "Regra de três simples e composta",
          "Porcentagem",
          "Aplicações práticas",
        ],
      },
      {
        title: "Medições de Serviços",
        items: [
          "Medições de serviço- Pintura",
          "Medições de serviço- Pintura em estrutura",
          "Controle e medição de serviço",
          "Planilhas de medição",
          "Cronograma",
          "Sincronizando as ideias",
          "Medindo seus conhecimentos",
        ],
      },
      {
        title: "Leitura e Interpretação de Projetos",
        items: [
          "Materiais utilizados para interpretação de projetos",
          "Escalas",
          "Padronização de projeto",
          "Projetos de uma obra",
          "Leitura de projeto arquitetônico",
          "Leitura de projeto estrutural",
          "Armação de vigas, blocos e pilares",
          "Projeto hidráulico",
          "Projeto de água fria e água quente",
          "Projeto elétrico",
          "Planta baixa elétrica",
          "Aplicações práticas",
        ],
      },
      {
        title: "Execução de Obra",
        items: [
          "Sistemas construtivos",
          "Serviços preliminares",
          "Topografia",
          "Terraplanagem",
          "Infraestrutura",
          "Superestrutura",
        ],
      },
      {
        title: "Módulos Fundamentais (Online)",
        items: [
          "Meio Ambiente",
          "NR-18",
          "Primeiros socorros",
          "Organização financeira",
        ],
      },
    ],
  },
  {
    id: "ar-condicionado",
    title: "Ar-Condicionado + NR35",
    shortDescription: "Profissionalize-se num laboratório que simula a realidade do trabalho, contando com todas as ferramentas e equipamentos necessários.",
    fullDescription: "Aqui não temos sala de aula! Você vai se profissionalizar num laboratório que simula a realidade do trabalho, contando com todas as ferramentas e equipamentos necessários.",
    duration: "52h",
    frequency: "1x (extensivo) ou 2x (intensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-ar.png",
    consultTurmas: true,
    benefits: [
      "Certificado NR35 incluso",
      "Laboratório completo com equipamentos reais",
      "Instrutores especializados",
      "Mercado em alta demanda",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 1.800 - R$ 2.600",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 3.000 - R$ 10.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "Introdução à Refrigeração e Climatização",
        items: [
          "O Aparelho de Ar-Condicionado",
          "Conceitos básicos de refrigeração",
          "Estados da Matéria",
          "Grandezas de Medidas",
          "Fundamentos Técnicos do Ar-Condicionado",
        ],
      },
      {
        title: "Componentes e Funcionamento",
        items: [
          "Gás Refrigerante",
          "Tipos e Classificações dos Aparelhos",
          "Modelos de Ar-Condicionado",
          "Unidades do Sistema de Climatização",
          "Unidade Condensadora",
          "Unidade Evaporadora",
          "Funcionamento integrado do sistema",
        ],
      },
      {
        title: "Materiais, Ferramentas e Infraestrutura",
        items: [
          "Material, Equipamentos e Regulagem",
          "Ferramentas utilizadas",
          "Tubulação e Isolação",
          "Infraestrutura",
        ],
      },
      {
        title: "Instalação de Ar-Condicionado",
        items: [
          "Pré-instalação",
          "Procedimentos para a Instalação",
          "Passos de Medição",
          "Utilização, Funcionamento e Manuseio",
          "Interligações Elétricas",
          "Interligações e Esquemas Elétricos",
        ],
      },
      {
        title: "Dimensionamento de Ar-Condicionado",
        items: [
          "Dimensionamento de Ar-Condicionado",
          "Análise de ambientes e carga térmica",
        ],
      },
      {
        title: "Manutenção e Diagnóstico",
        items: [
          "Manutenção do Ar-Condicionado Split",
          "Limpeza e Inspeção",
          "Análise de Ocorrências",
          "Instalações Elétricas para Climatização",
          "Aula de Instalações Elétricas para a Climatização de Ambientes",
        ],
      },
    ],
  },
  {
    id: "energia-solar",
    title: "Energia Solar + NR35",
    shortDescription: "Entre para esse mercado em expansão! O curso prepara você para atuar como Instalador, Manutencista, Vistoriador, Integrador ou até empreender no setor.",
    fullDescription: "A Energia Solar já é realidade no Brasil — mais de 1 milhão de consumidores usam geração fotovoltaica. Entre para esse mercado em expansão! O curso prepara você para atuar como Instalador, Manutencista, Vistoriador, Integrador ou até empreender no setor.",
    duration: "48h com NR35 ou 40h sem NR35",
    frequency: "Intensivo 2x / Extensivo 1x",
    price: "Sob consulta",
    image: "/course-solar.png",
    consultTurmas: true,
    benefits: [
      "Certificação Intelbras",
      "Mercado em expansão (+1 milhão de consumidores)",
      "Acesso a orçamentos online",
      "Linhas de crédito exclusivas",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 2.500 - R$ 4.500",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 3.000 - R$ 10.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "Fundamentos de Eletricidade",
        items: [
          "Conceitos básicos de elétrica",
          "Grandezas elétricas aplicadas",
          "Introdução à infraestrutura elétrica",
        ],
      },
      {
        title: "Fundamentos da Energia Solar Fotovoltaica",
        items: [
          "Conceitos do Sistema Solar Fotovoltaico",
          "Como funcionam os módulos fotovoltaicos",
          "Sistemas Off Grid e On Grid",
        ],
      },
      {
        title: "Componentes do Sistema Fotovoltaico",
        items: [
          "Módulos fotovoltaicos",
          "Inversores",
          "Quadro de proteção (String Box)",
          "Tipos de perfis de fixação",
        ],
      },
      {
        title: "Associação de Módulos Fotovoltaicos",
        items: [
          "Ligação dos módulos em série",
          "Ligação dos módulos em paralelo",
          "Configuração de strings",
        ],
      },
      {
        title: "Ferramentas, Equipamentos e Técnicas de Montagem",
        items: [
          "Ferramentas e instrumentos",
          "Técnicas para içar os módulos e equipamentos",
          "Boas práticas de manuseio",
        ],
      },
      {
        title: "Estruturas e Tipos de Instalação",
        items: [
          "Instalação em telhado colonial",
          "Instalação em telhado de fibrocimento",
          "Instalação em telhado metálico",
          "Instalação em laje",
          "Instalação em solo",
        ],
      },
      {
        title: "Infraestrutura Elétrica e Aterramento",
        items: [
          "Infraestrutura elétrica",
          "Aterramento",
          "Organização e proteção dos circuitos",
        ],
      },
      {
        title: "Segurança do Trabalho e Normas",
        items: [
          "NR-35 – Norma Regulamentadora para Trabalho em Altura",
          "Sinalização e segurança",
          "Procedimentos de segurança na instalação",
        ],
      },
      {
        title: "Comissionamento e Entrega do Sistema",
        items: [
          "Comissionamento",
          "Checklist de instalação",
          "Procedimentos na instalação do sistema fotovoltaico",
        ],
      },
      {
        title: "Monitoramento e Manutenção",
        items: [
          "Monitoramento remoto",
          "Manutenção preventiva e corretiva",
          "Checklist e procedimentos de manutenção",
        ],
      },
      {
        title: "Orçamento e Gestão de Projetos Fotovoltaicos",
        items: [
          "Orçamento de sistemas fotovoltaicos",
          "Análise de custos e viabilidade",
          "Boas práticas comerciais",
        ],
      },
    ],
  },
  {
    id: "gesso",
    title: "Gesso Acartonado (Drywall)",
    shortDescription: "Capacite-se num laboratório que simula a realidade do trabalho, passando pela instalação de guias, montantes, tipos de chapas, forro e muito mais.",
    fullDescription: "Você vai se capacitar num laboratório que simula a realidade do trabalho, passando pela instalação de guias, montantes, tipos de chapas, forro e muito mais. Tudo, claro, contando com as ferramentas, equipamentos e EPIs necessários para um trabalho seguro e profissional.",
    duration: "72h (40 presencial, 32 online)",
    frequency: "1x (extensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-gesso.png",
    consultTurmas: true,
    benefits: [
      "Curso híbrido (presencial + online)",
      "Laboratório completo",
      "Mercado em crescimento",
      "Técnica versátil e moderna",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 3.000 - R$ 5.000",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 3.000 - R$ 7.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "Ferramentas para Gesso (Drywall)",
        items: [
          "Tipos de chapa de gesso acartonado",
          "Nível, Prumo e Guias",
          "Montantes e Colocação de Chapas",
          "Acessórios para as Chapas",
          "Tratamento de Juntas",
          "Instalando Caixa de Embutir",
          "Acabamento de Canto de Parede",
          "Forro",
          "Colocação de Buchas",
          "Aplicação de Revestimento Cerâmico",
          "Reparos em gesso",
        ],
      },
      {
        title: "Módulos Fundamentais (Online)",
        items: [
          "Módulos Fundamentais",
          "Primeiros Socorros",
          "Meio Ambiente",
          "Segurança do Trabalho - NR18",
          "Organização Financeira",
        ],
      },
    ],
  },
  {
    id: "pedreiro",
    title: "Pedreiro Azulejista",
    shortDescription: "Aprenda a realizar o assentamento dos diversos revestimentos cerâmicos, decorativos e muito mais.",
    fullDescription: "No curso de Pedreiro Azulejista você irá aprender a realizar o assentamento dos diversos revestimentos cerâmicos, decorativos e muito mais. Seja um profissional com certificado reconhecido em todo o Brasil.",
    duration: "54h",
    frequency: "2x (intensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-pedreiro.png",
    consultTurmas: true,
    benefits: [
      "Certificado reconhecido nacionalmente",
      "Aulas 100% práticas",
      "Instrutores experientes",
      "Alta demanda no mercado",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 2.500 - R$ 3.600",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 3.000 - R$ 7.000",
        description: "Ganhos médios (depende dos serviços prestados pelo profissional)",
      },
    ],
    curriculum: [
      {
        title: "Módulos Fundamentais",
        items: [
          "Primeiros Socorros",
          "Meio Ambiente",
          "Segurança do trabalho NR 18",
          "Organização Financeira",
        ],
      },
      {
        title: "Módulos Pedreiro Azulejista",
        items: [
          "Matemática",
          "Classificação das placas de cerâmicas e argamassas",
          "Cálculo de área e volume",
          "Técnicas de assentamento",
          "Paginação de piso",
          "Aplicação de faixa decorativas",
          "Revestimentos, argamassados",
          "Esquadrejamento",
          "Corte manual e mecânico",
          "Assentamento de piso sobre piso",
          "Cortes e recortes",
        ],
      },
    ],
  },
  {
    id: "planejamento",
    title: "Planejamento e Orçamento de Obras",
    shortDescription: "Capacite-se a entender, calcular e gerenciar todas as etapas financeiras e logísticas de uma obra.",
    fullDescription: "O curso de Planejamento e Orçamento de Obras foi desenvolvido para capacitar profissionais da construção civil a entender, calcular e gerenciar todas as etapas financeiras e logísticas de uma obra, desde o estudo preliminar até a entrega final.",
    duration: "32h",
    frequency: "1x (extensivo), sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-planejamento.png",
    consultTurmas: true,
    benefits: [
      "Controle total de custos da obra",
      "Evitar desperdícios",
      "Ferramentas de gestão",
      "Certificado reconhecido",
    ],
    salary: [
      {
        service: "Salário",
        value: "R$ 2.100 - R$ 4.200",
        description: "Variação de salário",
      },
    ],
    curriculum: [
      {
        title: "Introdução ao Planejamento de Obras",
        items: [
          "Planejamento de Obra",
          "Planejamento, Gerenciamento e Execução de Obras",
          "Generalidades",
          "Níveis de Decisão",
        ],
      },
      {
        title: "Funções Administrativas Aplicadas às Obras",
        items: [
          "Funções Administrativas",
          "Aspectos da gestão de obras",
          "Integração entre planejamento, controle e execução",
        ],
      },
      {
        title: "Controle de Obras",
        items: [
          "Controle de Obra",
          "Definições do Controle de Obra",
          "Importância do controle na execução",
          "Indicadores de desempenho",
        ],
      },
      {
        title: "Orçamento e Orçamentação de Obras",
        items: [
          "Orçamento",
          "Orçamentação de Obras",
          "Estrutura do orçamento de obras",
          "Conceitos básicos de custos",
        ],
      },
      {
        title: "Planejamento Estratégico e Planejamento Quinquenal",
        items: [
          "Formalização do Planejamento Quinquenal (qualitativo)",
          "Planejamento de médio e longo prazo",
          "Aplicação do planejamento estratégico em obras",
        ],
      },
      {
        title: "Análise do Ambiente (Fatores Externos)",
        items: [
          "Aspecto Político",
          "Aspecto Econômico",
          "Aspecto Social",
          "Aspecto Demográfico",
          "Aspecto Tecnológico",
          "Aspecto Cultural",
          "Aspecto Ecológico",
          "Aspecto Legal",
          "(Análise do macroambiente aplicado ao setor da construção)",
        ],
      },
      {
        title: "Controle Orçamentário",
        items: [
          "Controle orçamentário",
          "Acompanhamento físico-financeiro",
          "Identificação de desvios",
        ],
      },
      {
        title: "Análise de Variações de Custos",
        items: [
          "Análise das Variações do Custo das Mercadorias Vendidas (CMV)",
          "Fórmula Completa de Análise das Variações",
          "Variação de Volume",
          "Variação de Taxa",
          "Variação Mista",
        ],
      },
      {
        title: "Análise das Despesas Operacionais",
        items: [
          "Análise das Variações das Despesas Operacionais",
          "Impactos no resultado da obra",
        ],
      },
      {
        title: "Sistemas de Custos e Métodos de Acumulação",
        items: [
          "Conceitos e terminologia de custos",
          "Classificação de custos",
          "Sistemas de acumulação de custos",
          "Sistema ABC (Custeio Baseado em Atividades)",
        ],
      },
    ],
  },
  {
    id: "steel-frame",
    title: "Steel Frame",
    shortDescription: "Aprenda na prática a principal tecnologia de construção a seco. Você irá montar estruturas metálicas, instalar chapas, fazer acabamentos.",
    fullDescription: "No curso Montador de Steel Frame, você aprende na prática a principal tecnologia de construção a seco. Você irá montar estruturas metálicas, instalar chapas, fazer acabamentos e entender todo o sistema.",
    duration: "32h",
    frequency: "1x (extensivo) na semana, sendo 4h/aula",
    price: "Sob consulta",
    image: "/course-steel.png",
    consultTurmas: true,
    benefits: [
      "Tecnologia moderna e sustentável",
      "Mercado em crescimento",
      "Obra rápida e limpa",
      "Certificado reconhecido",
    ],
    salary: [
      {
        service: "CLT",
        value: "R$ 2.500 - R$ 3.600",
        description: "Salário médio (+ benefícios)",
      },
      {
        service: "MEI",
        value: "R$ 4.000 - R$ 15.000+",
        description: "Por ser algo relativamente novo no mercado, o retorno financeiro com esta atividade pode variar de R$ 4.000,00 (iniciante) até mais de R$ 15.000,00 (experiente) no mês",
      },
    ],
    curriculum: [
      {
        title: "Introdução ao Light Steel Frame",
        items: [
          "Contexto histórico do Light Steel Frame no Brasil e no mundo",
          "Introdução ao sistema construtivo Steel Frame",
          "Benefícios",
          "Desafios",
          "Conceitos básicos",
          "Principais aplicações",
          "Oportunidades",
          "Dados do mercado",
        ],
      },
      {
        title: "Perfis e Sistemas Estruturais",
        items: [
          "Perfil engenheirado × Perfil stick",
          "Tipos de perfis",
          "Tipos de painéis",
          "Tipos de parafuso e sistemas de fixação para painéis e perfis",
        ],
      },
      {
        title: "Fundações e Ancoragens no LSF",
        items: [
          "Tipos mais comuns de fundação utilizados no Light Steel Frame",
          "Tipos de ancoragem",
          "Interface fundação × estrutura metálica",
        ],
      },
      {
        title: "Montagem Estrutural dos Painéis",
        items: [
          "Fixação de perfis",
          "Montagem de painéis",
          "Distribuição de carga e transmissão de forças",
          "Vento e contravento",
        ],
      },
      {
        title: "Sistemas de Vedação e Proteção",
        items: [
          "Impermeabilização no Light Steel Frame",
          "Fechamentos externos e fechamentos internos",
          "Tipos de sistemas de vedação",
        ],
      },
      {
        title: "Lajes no Light Steel Frame",
        items: [
          "Laje seca",
          "Laje úmida",
          "Aplicações e diferenças construtivas",
        ],
      },
      {
        title: "Ferramentas, EPIs e Segurança",
        items: [
          "Ferramentas utilizadas no LSF",
          "Equipamentos de Proteção Individual (EPIs)",
          "Boas práticas de segurança em obra",
        ],
      },
      {
        title: "Práticas Construtivas em Casa Modelo",
        items: [
          "Prática de montagem de telhado em PVC na casa modelo",
          "Prática de abertura de portas e janelas",
          "Prática de fechamento com placas Glasroc e cimentícia",
          "Prática de tratamento de juntas",
          "Prática de aplicação de argamassa Base Coat em fachada",
          "Prática de montagem de escada",
          "Prática de montagem de laje seca anexa à casa modelo",
        ],
      },
    ],
  },
  {
    id: "piso-laminado",
    title: "Instalador de Piso Laminado e Vinílico",
    shortDescription: "Neste curso, o aluno estará totalmente preparado para realizar a instalação de pisos vinílicos e laminados em casas, apartamentos, comércios e grandes empresas.",
    fullDescription: "Neste curso, o aluno estará totalmente preparado para realizar a instalação de pisos vinílicos e laminados em casas, apartamentos, comércios e grandes empresas, seguindo etapas profissionais que garantem qualidade, durabilidade e excelência no serviço. Além da prática de instalação, você aprenderá por meio de simulações reais de obras, conteúdos sobre manutenção, conservação, identificação de patologias e ainda estratégias de venda.",
    duration: "16h",
    frequency: "1 semana de curso - Segunda a Quinta, das 18h30m às 22h00m",
    price: "Sob consulta",
    image: "/course-piso.png",
    consultTurmas: true,
    benefits: [
      "Técnica completa de instalação",
      "Mercado em alta demanda",
      "Estratégias de venda inclusas",
      "Certificado reconhecido",
    ],
    salary: [
      {
        service: "Por m² instalado",
        value: "R$ 40 - R$ 80+",
        description: "Valor médio por metro quadrado instalado",
      },
    ],
    curriculum: [
      {
        title: "Tipos de Revestimentos",
        items: [
          "Piso vinílico",
          "Piso laminado",
        ],
      },
      {
        title: "Principais Ferramentas e Materiais e a Segurança na Execução do Serviço",
        items: [
          "Ferramentas",
          "Materiais",
          "Materiais comuns",
          "Materiais específicos",
          "Segurança",
        ],
      },
      {
        title: "Etapas do Serviço I: Piso Vinílico",
        items: [
          "Verificar as condições da superfície",
          "Preparar a superfície",
          "Planejar a Instalação",
          "Instalar os pisos",
          "Realizar o acabamento",
        ],
      },
      {
        title: "Etapas do Serviço II: Piso Laminado",
        items: [
          "Verificar as condições da superfície",
          "Preparar a superfície",
          "Planejar a Instalação",
          "Instalar os pisos",
          "Realizar o acabamento",
        ],
      },
      {
        title: "Manutenção e Conservação dos Vinílicos e Laminados",
        items: [
          "Conservação e manutenção do piso vinílico e laminado",
        ],
      },
      {
        title: "Venda do Serviço",
        items: [
          "Argumentos de vendas",
          "Vantagens do piso vinílico",
          "Vantagens do piso laminado",
          "FAQ",
          "Orçamento",
          "E muito mais",
        ],
      },
    ],
  },
]
