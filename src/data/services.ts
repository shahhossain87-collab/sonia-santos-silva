import type { ServiceContent } from "@/components/ServiceTemplate";

export const nacionalidade: ServiceContent = {
  slug: "nacionalidade",
  title: "Nacionalidade portuguesa",
  eyebrow: "Cidadania",
  summary:
    "Análise do caminho legal mais adequado — descendência, casamento/união ou residência — e preparação do pedido junto das entidades competentes.",
  whoFor: [
    "Filhos ou netos de portugueses que precisem de reconstituir o vínculo e a prova documental.",
    "Cônjuges ou unidos de facto que reúnam prazo e requisitos de ligação a Portugal.",
    "Residentes legais que pretendam estudar a naturalização após o tempo de residência exigido.",
  ],
  process: [
    {
      title: "Enquadramento",
      text: "Identificamos a via legal aplicável e o que falta para instruir o pedido com segurança.",
    },
    {
      title: "Documentação",
      text: "Organizamos a lista de certidões, traduções, apostilhas e provas específicas do seu caso.",
    },
    {
      title: "Instrução e acompanhamento",
      text: "Preparamos a petição e acompanhamos comunicações, notificações e diligências necessárias.",
    },
  ],
  documents: [
    "Documento de identificação válido",
    "Certidões de nascimento e, quando aplicável, de casamento",
    "Prova de residência legal ou de ligação efetiva a Portugal",
    "Registo criminal dos países de nacionalidade e residência",
    "Traduções e apostilhas, se os documentos forem estrangeiros",
  ],
  faqs: [
    {
      question: "Há um único caminho para a nacionalidade?",
      answer:
        "Não. O regime varia consoante a filiação, o casamento ou o tempo de residência. A análise inicial serve precisamente para evitar um pedido desalinhado.",
    },
    {
      question: "Quanto tempo demora o processo?",
      answer:
        "Os prazos dependem da via escolhida e da carga das entidades. Não publicamos estimativas genéricas como garantia.",
    },
    {
      question: "A advogada garante a aprovação?",
      answer:
        "Não. A decisão cabe às autoridades. O escritório assegura a análise jurídica e a instrução cuidadosa do pedido.",
    },
  ],
};

export const vistoD7: ServiceContent = {
  slug: "visto-d7",
  title: "Visto D7",
  eyebrow: "Residência",
  summary:
    "Apoio a quem pretende residir em Portugal com base em rendimentos, pensão ou outros meios de subsistência legalmente aceites.",
  whoFor: [
    "Pessoas com rendimentos passivos ou pensão que pretendam fixar residência.",
    "Profissionais que trabalhem à distância e precisem de demonstrar meios e alojamento.",
    "Famílias que queiram compreender o impacto do D7 no reagrupamento posterior.",
  ],
  process: [
    {
      title: "Viabilidade",
      text: "Revisamos rendimentos, origem dos fundos, alojamento e perfil fiscal de forma preliminar.",
    },
    {
      title: "Dossier",
      text: "Apoiamos a organização de comprovativos, seguros, NIF quando aplicável e formulários.",
    },
    {
      title: "Pedido e seguimento",
      text: "Orientamos o pedido consular ou em território nacional, conforme o seu ponto de partida.",
    },
  ],
  documents: [
    "Passaporte válido",
    "Comprovativos de rendimentos e meios de subsistência",
    "Prova de alojamento em Portugal",
    "Seguro de saúde adequado",
    "Registo criminal e formulários oficiais",
  ],
  faqs: [
    {
      question: "O D7 é só para reformados?",
      answer:
        "Não. O essencial é demonstrar meios de subsistência e intenção de residir, nos termos da lei aplicável ao seu perfil.",
    },
    {
      question: "Posso trabalhar em Portugal com D7?",
      answer:
        "O regime de atividade depende do título concreto e das regras em vigor. Esse ponto é analisado caso a caso.",
    },
    {
      question: "Há um valor mínimo fixo publicado neste sítio?",
      answer:
        "Não. Os limiares e critérios mudam e devem ser confirmados à data do pedido, com base na sua composição familiar.",
    },
  ],
};

export const vistoD2: ServiceContent = {
  slug: "visto-d2",
  title: "Visto D2",
  eyebrow: "Empreender",
  summary:
    "Acompanhamento de quem pretende criar, transferir ou desenvolver uma atividade económica em Portugal, com um plano coerente e documentação alinhada.",
  whoFor: [
    "Empreendedores que vão constituir sociedade ou atividade em nome individual.",
    "Quem pretende transferir um negócio já existente para território português.",
    "Profissionais que precisam de articular o plano de negócio com o pedido de residência.",
  ],
  process: [
    {
      title: "Modelo de atividade",
      text: "Clarificamos o tipo de operação, o enquadramento societário e a credibilidade do projeto.",
    },
    {
      title: "Plano e evidências",
      text: "Apoiamos a estruturação do plano de negócio, investimento previsto e documentos de suporte.",
    },
    {
      title: "Pedido de residência",
      text: "Preparamos o dossier do visto ou autorização, em articulação com as obrigações legais da atividade.",
    },
  ],
  documents: [
    "Identificação e comprovativo de morada",
    "Plano de negócio ou memória descritiva da atividade",
    "Prova de meios e, quando exista, investimento",
    "Contrato de sociedade ou registo da atividade",
    "Documentos fiscais e criminais exigidos",
  ],
  faqs: [
    {
      question: "Preciso de investir um valor mínimo?",
      answer:
        "O D2 não se apresenta neste sítio como um produto de investimento com limiar publicitado. O projeto tem de ser sério, viável e legalmente enquadrado.",
    },
    {
      question: "A abertura da empresa substitui o visto?",
      answer:
        "Não. Constituir sociedade e obter autorização de residência são passos distintos, ainda que relacionados.",
    },
    {
      question: "O escritório elabora o plano de negócio?",
      answer:
        "Apoiamos a coerência jurídica do dossier. A componente económica do plano pode exigir colaboração com outros profissionais.",
    },
  ],
};

export const reagrupamento: ServiceContent = {
  slug: "reagrupamento",
  title: "Reagrupamento familiar",
  eyebrow: "Família",
  summary:
    "Orientação para reunir cônjuge, filhos ou outros familiares elegíveis com quem já reside legalmente em Portugal.",
  whoFor: [
    "Residentes legais que pretendem trazer cônjuge ou unido de facto.",
    "Famílias com filhos menores ou dependentes a cargo.",
    "Quem precisa de perceber requisitos de alojamento, meios e prova do vínculo familiar.",
  ],
  process: [
    {
      title: "Elegibilidade",
      text: "Confirmamos o título de residência do requerente e o grau de parentesco coberto pela lei.",
    },
    {
      title: "Prova do vínculo",
      text: "Organizamos certidões, traduções e evidências de vida familiar comum, quando exigidas.",
    },
    {
      title: "Pedido",
      text: "Instruímos o processo e acompanhamos notificações até à decisão da entidade competente.",
    },
  ],
  documents: [
    "Título de residência de quem reagrupa",
    "Certidões de casamento, união ou nascimento",
    "Prova de alojamento adequado",
    "Meios de subsistência do agregado",
    "Identificação dos familiares a reagrupar",
  ],
  faqs: [
    {
      question: "Posso pedir reagrupamento logo após chegar?",
      answer:
        "Depende do título de residência e das regras aplicáveis. Há situações com prazos de espera; outras permitem tramitação mais imediata.",
    },
    {
      question: "União de facto é aceite?",
      answer:
        "Pode ser, se estiver devidamente comprovada nos termos da lei portuguesa. A prova é frequentemente o ponto mais sensível.",
    },
    {
      question: "O reagrupamento garante nacionalidade?",
      answer:
        "Não. São regimes distintos. A nacionalidade, se for o objetivo, exige análise própria.",
    },
  ],
};
